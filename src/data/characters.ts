import { Character } from '../types/character';

export const CHARACTERS: Character[] = [
  {
    id: 'dhruva',
    slug: 'dhruva-maharaj',
    name: 'Dhruva Maharaj',
    devanagariName: 'ध्रुव महाराज',
    archetype: 'Bhakta',
    epithets: ['Dhruva-Tara', 'The Steadfast Devotee', 'King of the North Star'],
    biography: 'Great-grandson of Lord Brahma and son of King Uttanapada. Through intense penance at the tender age of five, he achieved direct darshan of Lord Vishnu and was granted Dhruva-Loka, the unshakeable celestial realm around which the cosmic wheel turns.',
    iconography: 'Depicted as a young prince in ascetic garments, standing on one leg in penance, or seated beneath the North Star with folded palms.',
    scriptureReferences: [
      'Srimad Bhagavatam, Canto 4, Chapters 8–12',
      'Vishnu Purana, Book 1, Chapters 11–12',
    ],
    associatedStories: ['dhruva-maharaj'],
    relationships: [
      {
        targetCharacterId: 'narada-muni',
        targetCharacterName: 'Narada Muni',
        relationshipType: 'Shishya',
        description: 'Initiated into the sacred Vasudeva twelve-syllable mantra by Narada Muni in the forest of Madhuvana.',
      },
      {
        targetCharacterId: 'vishnu',
        targetCharacterName: 'Lord Vishnu',
        relationshipType: 'Devotee-Of',
        description: 'Attained supreme devotion and the eternal pole star through his one-pointed meditation upon Lord Hari.',
      },
    ],
  },
  {
    id: 'narada-muni',
    slug: 'narada-muni',
    name: 'Sri Narada Muni',
    devanagariName: 'देवर्षि नारद मुनि',
    archetype: 'Rishi',
    epithets: ['Devarshi', 'Trailokya-Sanchari', 'Master of the Mahati Veena'],
    biography: 'The prime emissary of pure devotion (Bhakti), traversing all planetary systems playing his divine veena while chanting the names of Lord Narayana. Preceptor to Vyasadeva, Valmiki, Prahlada, and Dhruva.',
    iconography: 'Holding the celestial tanpura/veena named Mahati, carrying kartals, with a radiant aura of perpetual ecstasy.',
    scriptureReferences: [
      'Srimad Bhagavatam, Canto 1, Chapters 5–6',
      'Narada Bhakti Sutras',
      'Chandogya Upanishad, Chapter 7',
    ],
    associatedStories: ['dhruva-maharaj', 'narada-muni-origin'],
    relationships: [
      {
        targetCharacterId: 'dhruva',
        targetCharacterName: 'Dhruva Maharaj',
        relationshipType: 'Guru',
        description: 'Instructed and guided the young prince on pranayama, mantra sadhana, and the personal form of Bhagavan.',
      },
      {
        targetCharacterId: 'vishnu',
        targetCharacterName: 'Lord Vishnu',
        relationshipType: 'Devotee-Of',
        description: 'Eternal confidential servant and messenger of Lord Narayana.',
      },
    ],
  },
  {
    id: 'vishnu',
    slug: 'lord-vishnu',
    name: 'Lord Vishnu / Narayana',
    devanagariName: 'भगवान् श्री विष्णुः',
    archetype: 'Deva',
    epithets: ['Paramatman', 'Jagannatha', 'Keshava', 'Vasudeva'],
    biography: 'The Supreme Preserver of cosmic creation, reposing on the thousand-headed serpent Sheshanaga amidst the celestial ocean of milk (Kshira-sagara).',
    iconography: 'Four arms holding the Conch (Shankha), Discus (Sudarshana Chakra), Mace (Kaumodaki), and Lotus (Padma). Adorned with the Kaustubha jewel and Vanamala garland.',
    scriptureReferences: [
      'Rigveda, Vishnu Suktam',
      'Srimad Bhagavatam (All Cantos)',
      'Vishnu Sahasranama (Mahabharata, Anushasana Parva)',
    ],
    associatedStories: ['dhruva-maharaj', 'narada-muni-origin', 'markandeya-pralaya'],
    relationships: [],
  },
];

