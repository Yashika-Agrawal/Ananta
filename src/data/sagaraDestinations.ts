/**
 * Ocean destinations are data, separate from the scene renderer. Add future
 * story islands here without changing SagaraYatra's camera or rendering code.
 * Anchors are normalized screen coordinates (0..1) for the supplied artwork.
 */
export interface SagaraDestination {
  id: string;
  title: string;
  description: string;
  travelAt: number;
  anchor: { x: number; y: number };
  status: 'prototype' | 'available';
}

export const sagaraDestinations: SagaraDestination[] = [
  {
    id: 'dhruva-maharaj',
    title: 'Dhruva Maharaj',
    description: 'A distant shore marks the beginning of a story of steadfast devotion.',
    travelAt: 0.68,
    // Approximate screen position of the prototype shoreline in the 3D scene.
    anchor: { x: 0.4, y: 0.38 },
    status: 'prototype',
  },
];
