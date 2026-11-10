import { STORIES } from '../data/stories';
import { CHARACTERS } from '../data/characters';
import { Story } from '../types/story';
import { Character } from '../types/character';

// Clean decoupled service layer (mirrors future API endpoints)
export const StoryService = {
  async getAll(): Promise<Story[]> {
    return Promise.resolve([...STORIES]);
  },

  async getBySlug(slug: string): Promise<Story | undefined> {
    const story = STORIES.find((s) => s.slug === slug);
    return Promise.resolve(story ? { ...story } : undefined);
  },

  async search(query: string, scriptureFilter?: string, themeFilter?: string): Promise<Story[]> {
    const q = query.toLowerCase().trim();
    return STORIES.filter((story) => {
      const matchesQuery = !q || 
        story.title.toLowerCase().includes(q) ||
        story.devanagariTitle.includes(q) ||
        story.synopsis.toLowerCase().includes(q) ||
        story.themes.some((t) => t.toLowerCase().includes(q));

      const matchesScripture = !scriptureFilter || 
        story.scriptureSources.some((src) => src.scriptureId === scriptureFilter);

      const matchesTheme = !themeFilter || 
        story.themes.includes(themeFilter);

      return matchesQuery && matchesScripture && matchesTheme;
    });
  },
};

export const CharacterService = {
  async getAll(): Promise<Character[]> {
    return Promise.resolve([...CHARACTERS]);
  },

  async getBySlug(slug: string): Promise<Character | undefined> {
    const char = CHARACTERS.find((c) => c.slug === slug || c.id === slug);
    return Promise.resolve(char ? { ...char } : undefined);
  },
};

