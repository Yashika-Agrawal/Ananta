import { GranthNote, GranthBookmark } from '../types/granth';

const NOTES_KEY = 'ananta_granth_notes_v1';
const BOOKMARKS_KEY = 'ananta_granth_bookmarks_v1';

export const GranthStorage = {
  getNotes(): GranthNote[] {
    try {
      const data = localStorage.getItem(NOTES_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveNote(note: Omit<GranthNote, 'id' | 'updatedAt'> & { id?: string }): GranthNote {
    const existing = this.getNotes();
    const id = note.id || `note-${Date.now()}`;
    const newNote: GranthNote = {
      ...note,
      id,
      updatedAt: new Date().toISOString(),
    };

    const index = existing.findIndex((n) => n.id === id);
    if (index >= 0) {
      existing[index] = newNote;
    } else {
      existing.unshift(newNote);
    }

    localStorage.setItem(NOTES_KEY, JSON.stringify(existing));
    return newNote;
  },

  deleteNote(id: string): void {
    const existing = this.getNotes().filter((n) => n.id !== id);
    localStorage.setItem(NOTES_KEY, JSON.stringify(existing));
  },

  getBookmarks(): GranthBookmark[] {
    try {
      const data = localStorage.getItem(BOOKMARKS_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  toggleBookmark(bookmark: Omit<GranthBookmark, 'savedAt'>): boolean {
    const bookmarks = this.getBookmarks();
    const existsIndex = bookmarks.findIndex((b) => b.slug === bookmark.slug && b.type === bookmark.type);

    if (existsIndex >= 0) {
      bookmarks.splice(existsIndex, 1);
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
      return false; // Removed
    } else {
      bookmarks.unshift({
        ...bookmark,
        savedAt: new Date().toISOString(),
      });
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
      return true; // Added
    }
  },

  isBookmarked(slug: string, type: 'story' | 'character' | 'tattva'): boolean {
    return this.getBookmarks().some((b) => b.slug === slug && b.type === type);
  },
};

