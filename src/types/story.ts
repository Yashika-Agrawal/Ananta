export interface ScriptureSource {
  id: string;
  canonicalName: string;      // e.g. "Srimad Bhagavatam"
  devanagariName: string;     // e.g. "श्रीमद्भागवतम्"
  tradition: 'Purana' | 'Itihasa' | 'Upanishad' | 'Vedanta' | 'Bhaktamal';
  author: string;             // e.g. "Maharishi Krishna Dvaipayana Vyasa"
  description: string;
}

export interface ScriptureCitation {
  scriptureId: string;
  scriptureName: string;
  skandhaOrBook?: string;     // e.g. "Canto 4"
  adhyayaOrChapter?: string;  // e.g. "Chapters 8–12"
  shlokaRange?: string;       // e.g. "4.8.1 - 4.12.54"
  sanskritVerseSnippet?: string; // Canonical verse anchor
  englishTranslationSnippet?: string;
}

export interface NarrativeSection {
  id: string;
  title: string;
  subtitle?: string;
  content: string[];
  ambientVisual?: 'court' | 'forest' | 'tapasya' | 'darshan' | 'polestar';
  reflectionPrompt?: string;
}

export interface Story {
  id: string;
  slug: string;
  title: string;
  devanagariTitle: string;
  synopsis: string;
  scriptureSources: ScriptureCitation[];
  characters: string[];       // Character IDs
  themes: string[];           // e.g. ["Bhakti", "Tapasya", "Dhruva-Tara", "Guru-Kripa"]
  readingTimeMinutes: number;
  hasInteractiveExperience: boolean;
  sections: NarrativeSection[];
  personalReflections: {
    author: string;
    thought: string;
  }[];
}

