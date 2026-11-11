/** Traditional yuga spans and story labels; needs scholarly review. */
export interface YugaEra {
  id: 'kali' | 'dvapara' | 'treta' | 'satya' | 'before-time';
  name: string;
  spanYears: number;
  storyTitle: string;
  storyLine: string;
  tint: string;
}

export const YUGAS: YugaEra[] = [
  { id: 'kali', name: 'Kali Yuga', spanYears: 432_000, storyTitle: 'The age of turning', storyLine: 'Even in an age of distance, remembrance can become a path.', tint: '#244f70' },
  { id: 'dvapara', name: 'Dvapara Yuga', spanYears: 864_000, storyTitle: 'The age of encounter', storyLine: 'Dharma stands in balance as stories of the divine draw near.', tint: '#285c79' },
  { id: 'treta', name: 'Treta Yuga', spanYears: 1_296_000, storyTitle: 'The age of vows', storyLine: 'A sacred promise carries its light across kingdoms and forests.', tint: '#386e83' },
  { id: 'satya', name: 'Satya Yuga', spanYears: 1_728_000, storyTitle: 'The age of truth', storyLine: 'In the first age, truth and harmony shine without divide.', tint: '#4b8290' },
  { id: 'before-time', name: 'Before Time', spanYears: 0, storyTitle: 'Before time', storyLine: 'The wheel falls silent at the edge of the unmanifest.', tint: '#183e59' },
];

export const TOTAL_YUGA_YEARS = YUGAS.reduce((total, era) => total + era.spanYears, 0);
