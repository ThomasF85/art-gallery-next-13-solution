"use client";

import { createContext, useCallback, useMemo } from "react";
import useLocalStorageState from "use-local-storage-state";

export const CommentContext = createContext();

export function CommentProvider({ children }) {
  const [comments, setComments] = useLocalStorageState("comments", {
    defaultValue: [],
  });

  const addComment = useCallback(
    (slug, newComment) => {
      setComments((prev) => ({
        ...prev,
        [slug]: [...(prev[slug] || []), newComment],
      }));
    },
    [setComments]
  );

  const getComments = useCallback((slug) => comments[slug] || [], [comments]);

  const context = useMemo(
    () => ({ getComments, addComment }),
    [getComments, addComment]
  );

  return (
    <CommentContext.Provider value={context}>
      {children}
    </CommentContext.Provider>
  );
}
