export type CharacterArchetype = 
  | 'Deva'
  | 'Avatar'
  | 'Bhakta'
  | 'Rishi'
  | 'King'
  | 'Chiranjeevi';

export interface CharacterRelationship {
  targetCharacterId: string;
  targetCharacterName: string;
  relationshipType: 'Guru' | 'Shishya' | 'Devotee-Of' | 'Father' | 'Mother' | 'Avatara-Of' | 'Allied';
  description: string;
}

export interface Character {
  id: string;
  slug: string;
  name: string;
  devanagariName: string;
  archetype: CharacterArchetype;
  epithets: string[];
  biography: string;
  iconography: string;
  scriptureReferences: string[];
  associatedStories: string[]; // Story slugs
  relationships: CharacterRelationship[];
}

