import { createPersistedStore } from "./createPersistedStore";

export const useStore = createPersistedStore(
  (set) => ({
    comments: {},
    favorites: [],
    addComment: (slug, newComment) =>
      set(({ comments }) => ({
        comments: {
          ...comments,
          [slug]: [...(comments[slug] || []), newComment],
        },
      })),
    toggleFavorite: (slug) =>
      set(({ favorites }) => ({
        favorites: favorites.includes(slug)
          ? favorites.filter((favorite) => favorite !== slug)
          : [...favorites, slug],
      })),
  }),
  {
    name: "art-gallery-storage",
    partialize: ({ comments, favorites }) => ({ comments, favorites }),
  }
);
