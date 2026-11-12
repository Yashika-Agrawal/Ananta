import * as THREE from 'three/webgpu';

const palette = {
  hull: 0x101d32, hullLight: 0x263b52, deck: 0x563e32, deckLight: 0x92745a,
  brass: 0xc69a55, sail: 0x9cb5c7, glass: 0x84d9ed, dark: 0x07111f,
};

const stations = [
  [-2.72, 0.04, 0.20, 0.37], [-2.42, 0.30, 0.19, 0.41],
  [-1.95, 0.50, 0.20, 0.44], [-1.35, 0.67, 0.21, 0.45],
  [-0.60, 0.77, 0.23, 0.44], [0.20, 0.82, 0.26, 0.42],
  [0.95, 0.76, 0.31, 0.39], [1.58, 0.62, 0.39, 0.35],
  [2.12, 0.40, 0.49, 0.31], [2.56, 0.15, 0.62, 0.27],
  [2.76, 0.025, 0.69, 0.24],
];

function material(color, extra = {}) {
  return new THREE.MeshPhysicalMaterial({ color, roughness: 0.48, metalness: 0.18, ...extra });
}

function addMesh(parent, geometry, mat, name, position) {
  const mesh = new THREE.Mesh(geometry, mat);
  mesh.name = name;
  if (position) mesh.position.set(...position);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function tube(parent, points, radius, mat, name, segments = 48) {
  const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)));
  return addMesh(parent, new THREE.TubeGeometry(curve, segments, radius, 6, false), mat, name);
}

function hullSurface() {
  const across = 28;
  const positions = [];
  const indices = [];
  for (const [z, beam, sheer, depth] of stations) {
    for (let j = 0; j <= across; j++) {
      const q = (j / across) * 2 - 1;
      const keel = Math.sqrt(Math.max(0, 1 - q * q));
      positions.push(q * beam, sheer - depth * keel, z);
    }
  }
  for (let i = 0; i < stations.length - 1; i++) {
    for (let j = 0; j < across; j++) {
      const a = i * (across + 1) + j;
      const b = a + across + 1;
      indices.push(a, b, a + 1, a + 1, b, b + 1);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function deckSurface() {
  const across = 14;
  const positions = [];
  const indices = [];
  for (const [z, beam, sheer] of stations) {
    for (let j = 0; j <= across; j++) {
      const q = (j / across) * 2 - 1;
      positions.push(q * beam * 0.98, sheer + 0.003, z);
    }
  }
  for (let i = 0; i < stations.length - 1; i++) {
    for (let j = 0; j < across; j++) {
      const a = i * (across + 1) + j;
      const b = a + across + 1;
      indices.push(a, b, a + 1, a + 1, b, b + 1);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function sidePoint(z, q) {
  const s = stations.findIndex((v) => v[0] >= z);
  const a = stations[Math.max(0, s - 1)];
  const b = stations[Math.max(1, s)];
  const t = THREE.MathUtils.clamp((z - a[0]) / (b[0] - a[0]), 0, 1);
  const beam = THREE.MathUtils.lerp(a[1], b[1], t);
  const sheer = THREE.MathUtils.lerp(a[2], b[2], t);
  const depth = THREE.MathUtils.lerp(a[3], b[3], t);
  const keel = Math.sqrt(Math.max(0, 1 - q * q));
  return [q * beam, sheer - depth * keel, z];
}

function makeSail(parent) {
  const divisions = 18;
  const positions = [];
  const colors = [];
  const indices = [];
  const rows = [];
  const dark = new THREE.Color(0x314968);
  const lit = new THREE.Color(0xb8d0dc);
  for (let i = 0; i <= divisions; i++) {
    rows[i] = [];
    for (let j = 0; j <= divisions - i; j++) {
      const u = i / divisions;
      const v = j / divisions;
      const z = -0.12 - 1.60 * u;
      const y = 0.91 + 1.86 * v;
      const billow = 0.20 * Math.sin(Math.PI * u) * Math.sin(Math.PI * (v + u * 0.32));
      positions.push(0.035 + billow, y, z);
      const shade = dark.clone().lerp(lit, Math.min(1, v * 0.65 + (1 - u) * 0.18));
      colors.push(shade.r, shade.g, shade.b);
      rows[i][j] = positions.length / 3 - 1;
    }
  }
  for (let i = 0; i < divisions; i++) {
    for (let j = 0; j < divisions - i; j++) {
      const a = rows[i][j];
      const b = rows[i + 1][j];
      const c = rows[i][j + 1];
      indices.push(a, b, c);
      if (j < divisions - i - 1) indices.push(b, rows[i + 1][j + 1], c);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  const sail = addMesh(parent, geometry, material(0xffffff, {
    vertexColors: true, side: THREE.DoubleSide, roughness: 0.77, metalness: 0.05,
  }), 'Moon-silver, softly billowed triangular sail');
  sail.castShadow = true;
  return sail;
}

/** Build a self-contained, scroll-ready moonlit wooden sailing skiff. Bow points along +Z. */
export function createCelestialSkiff() {
  const skiff = new THREE.Group();
  skiff.name = 'Celestial Skiff';
  skiff.userData.asset = 'celestial-skiff';
  const hullMat = material(palette.hull, { roughness: 0.31, metalness: 0.42, clearcoat: 0.85, clearcoatRoughness: 0.22 });
  const wood = material(palette.deck, { roughness: 0.7, metalness: 0.04 });
  const woodEdge = material(palette.deckLight, { roughness: 0.52, metalness: 0.08 });
  const brass = material(palette.brass, { roughness: 0.28, metalness: 0.78 });
  const seam = material(0x241f21, { roughness: 0.83, metalness: 0.02 });
  const glass = material(palette.glass, { color: palette.glass, emissive: 0x318da8, emissiveIntensity: 1.45, roughness: 0.18, metalness: 0.34 });

  addMesh(skiff, hullSurface(), hullMat, 'Sculpted deep-indigo clinker hull');
  addMesh(skiff, deckSurface(), wood, 'Inset teak deck');

  // Fine warm rub-strake, gunwale rails and hand-finished hull plank seams.
  for (const side of [-1, 1]) {
    tube(skiff, stations.map(([z, beam, sheer]) => [side * beam * 0.99, sheer + 0.055, z]), 0.036, woodEdge, 'Raised varnished gunwale');
    tube(skiff, stations.slice(1, -1).map(([z]) => {
      const [x, y] = sidePoint(z, side * 0.83);
      return [x, y, z];
    }), 0.018, brass, 'Fine brass sheer-line inlay');
    for (const q of [0.26, 0.51, 0.69]) {
      const points = stations.slice(1, -1).map(([z]) => sidePoint(z, side * q));
      tube(skiff, points, 0.008, material(palette.hullLight, { roughness: 0.66, metalness: 0.22 }), 'Subtle hull plank edge', 36);
    }
  }

  // Deck plank seams run across the beam, following the tapered sheer line.
  for (const z of [-2.25, -1.86, -1.47, -1.08, -0.69, -0.30, 0.09, 0.48, 0.87, 1.26, 1.65, 2.04]) {
    const station = stations.reduce((best, row) => Math.abs(row[0] - z) < Math.abs(best[0] - z) ? row : best, stations[0]);
    const pts = [];
    for (let k = 0; k <= 8; k++) {
      const q = -0.91 + k * 0.2275;
      pts.push([q * station[1], station[2] + 0.009, z]);
    }
    tube(skiff, pts, 0.006, seam, 'Hand-laid deck plank seam', 14);
  }

  // Low, warm-lit wheelhouse and dark glazed portholes aft of the mast.
  addMesh(skiff, new THREE.BoxGeometry(0.91, 0.59, 0.88), wood, 'Compact varnished wheelhouse', [0, 0.56, -1.38]);
  addMesh(skiff, new THREE.BoxGeometry(0.97, 0.055, 0.94), woodEdge, 'Wheelhouse roof cap', [0, 0.875, -1.38]);
  for (const side of [-1, 1]) {
    for (const z of [-1.67, -1.28, -0.93]) {
      addMesh(skiff, new THREE.CylinderGeometry(0.105, 0.105, 0.025, 24), brass, 'Brass-framed cabin porthole', [side * 0.465, 0.64, z]).rotation.z = Math.PI / 2;
      addMesh(skiff, new THREE.SphereGeometry(0.081, 18, 14), glass, 'Moonlit cabin glass', [side * 0.48, 0.64, z]).scale.set(0.18, 1, 1);
    }
  }
  for (const x of [-0.22, 0.22]) {
    addMesh(skiff, new THREE.BoxGeometry(0.25, 0.22, 0.022), brass, 'Forward cabin window frame', [x, 0.68, -0.928]);
    addMesh(skiff, new THREE.BoxGeometry(0.205, 0.17, 0.012), glass, 'Forward cabin window', [x, 0.68, -0.942]);
  }
  addMesh(skiff, new THREE.BoxGeometry(0.74, 0.07, 0.28), woodEdge, 'Aft companionway step', [0, 0.31, -1.96]);
  addMesh(skiff, new THREE.BoxGeometry(0.95, 0.09, 0.25), woodEdge, 'Aft teak bench', [0, 0.36, -2.30]);

  // Mast, boom, tensioned stays, and a gently curved cloth sail.
  addMesh(skiff, new THREE.CylinderGeometry(0.035, 0.058, 2.82, 14), woodEdge, 'Tapered varnished mast', [0, 1.79, -0.16]);
  addMesh(skiff, new THREE.CylinderGeometry(0.024, 0.024, 1.70, 10), brass, 'Brass-footed boom', [0.02, 0.94, -0.97]).rotation.x = Math.PI / 2;
  makeSail(skiff);
  tube(skiff, [[0, 3.19, -0.16], [0.05, 1.85, -0.13], [0.03, 0.33, 0.92]], 0.009, brass, 'Taut forward forestay', 28);
  tube(skiff, [[0, 3.17, -0.16], [0.02, 1.90, -0.25], [0.05, 0.34, -2.56]], 0.008, brass, 'Aft standing rigging', 28);
  tube(skiff, [[0.03, 0.94, -1.78], [0.02, 1.00, -0.97], [0.02, 0.94, -0.14]], 0.012, woodEdge, 'Sail foot and boom', 20);

  // Star-chart details, inlaid in the sail where they catch moonlight.
  const chart = material(0x90dff0, { emissive: 0x45bce8, emissiveIntensity: 1.1, roughness: 0.3, metalness: 0.3 });
  const stars = [[0.17, 2.56, -0.42], [0.20, 2.24, -0.84], [0.23, 1.91, -1.18], [0.17, 1.53, -1.48], [0.14, 1.17, -1.61]];
  tube(skiff, stars, 0.008, chart, 'Constellation etched into sail', 20);
  for (const [x, y, z] of stars) {
    addMesh(skiff, new THREE.SphereGeometry(0.033, 10, 8), chart, 'Tiny glowing sail-star', [x, y, z]);
  }

  // Small compass rose, lantern and a gold pennant finish the silhouette.
  addMesh(skiff, new THREE.CylinderGeometry(0.16, 0.16, 0.035, 36), brass, 'Bow compass bezel', [0, 0.77, 1.67]);
  addMesh(skiff, new THREE.CylinderGeometry(0.125, 0.125, 0.041, 36), material(0x091c2c, { metalness: 0.66, roughness: 0.2 }), 'Midnight compass face', [0, 0.80, 1.67]);
  addMesh(skiff, new THREE.ConeGeometry(0.055, 0.20, 4), chart, 'Luminous compass needle', [0, 0.84, 1.67]).rotation.y = Math.PI / 4;
  addMesh(skiff, new THREE.SphereGeometry(0.092, 16, 12), material(0xffc36e, { emissive: 0xff9c39, emissiveIntensity: 2.0 }), 'Warm stern lantern', [0, 0.72, -2.55]);
  const pennant = new THREE.BufferGeometry();
  pennant.setAttribute('position', new THREE.Float32BufferAttribute([0, 3.05, -0.16, 0, 2.77, -0.16, 0, 2.96, -0.58], 3));
  pennant.setIndex([0, 1, 2]);
  pennant.computeVertexNormals();
  addMesh(skiff, pennant, material(palette.brass, { side: THREE.DoubleSide, roughness: 0.62 }), 'Dusk-gold mast pennant');

  skiff.userData.nose = '+Z';
  skiff.userData.scrollReady = true;
  return skiff;
}

/**
 * Place the skiff along a scroll-driven path. `from` and `to` are local XYZ vectors;
 * call each frame with normalized scroll progress and elapsed seconds for a gentle swell.
 */
export function updateSkiffForScroll(skiff, progress, elapsedSeconds = 0, options = {}) {
  const p = THREE.MathUtils.clamp(progress, 0, 1);
  const from = options.from ?? { x: 0, y: 0, z: 0 };
  const to = options.to ?? { x: 0, y: 0, z: -8 };
  const bob = options.bob ?? 0.045;
  const yaw = options.yaw ?? 0.12;
  skiff.position.set(
    THREE.MathUtils.lerp(from.x, to.x, p),
    THREE.MathUtils.lerp(from.y, to.y, p) + Math.sin(elapsedSeconds * 1.25 + p * Math.PI * 2) * bob,
    THREE.MathUtils.lerp(from.z, to.z, p),
  );
  skiff.rotation.set(
    Math.sin(elapsedSeconds * 0.7 + p * 3) * 0.012,
    Math.sin(p * Math.PI * 2) * yaw,
    Math.sin(elapsedSeconds * 1.05 + p * 5) * 0.018,
  );
  return skiff;
}

export { palette as skiffPalette };
