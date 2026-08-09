import { create } from "zustand";

type CaseFilterState = {
  selectedTags: string[];
  toggleTag: (tag: string) => void;
  replaceSelectedTags: (tags: string[]) => void;
  clearSelectedTags: () => void;
};

export const useCaseFilterStore = create<CaseFilterState>((set) => ({
  selectedTags: [],
  toggleTag: (tag) =>
    set((state) => ({
      selectedTags: state.selectedTags.includes(tag)
        ? state.selectedTags.filter((selectedTag) => selectedTag !== tag)
        : [...state.selectedTags, tag],
    })),
  replaceSelectedTags: (tags) => set({ selectedTags: tags }),
  clearSelectedTags: () => set({ selectedTags: [] }),
}));
