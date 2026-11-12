import type { Group } from 'three/webgpu';

export interface SkiffRouteOptions {
  from?: { x: number; y: number; z: number };
  to?: { x: number; y: number; z: number };
  bob?: number;
  yaw?: number;
}

export function createCelestialSkiff(): Group;

export function updateSkiffForScroll(
  skiff: Group,
  progress: number,
  elapsedSeconds?: number,
  options?: SkiffRouteOptions,
): Group;

export const skiffPalette: Readonly<Record<string, number>>;
