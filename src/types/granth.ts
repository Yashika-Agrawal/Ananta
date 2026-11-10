export interface GranthNote {
  id: string;
  targetType: 'story' | 'character' | 'tattva' | 'general';
  targetSlug?: string;
  title: string;
  content: string;
  tags: string[];
  scriptureReferences: string[];
  status: 'to-read' | 'reading' | 'contemplating' | 'memorized';
  updatedAt: string;
}

export interface GranthBookmark {
  slug: string;
  type: 'story' | 'character' | 'tattva';
  title: string;
  savedAt: string;
}

