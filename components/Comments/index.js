"use client";

import useLocalStorageState from "use-local-storage-state";
import styles from "./index.module.css";

export default function Comments({ slug }) {
  const [allComments, setAllComments] = useLocalStorageState("comments", {
    defaultValue: {},
  });

  const comments = allComments[slug] || [];

  function handleSubmit(event) {
    event.preventDefault();
    const { comment } = event.target.elements;
    setAllComments((prev) => ({
      ...prev,
      [slug]: [...(prev[slug] || []), comment.value],
    }));
    event.target.reset();
  }

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Comments</h2>
      <ul role="list" className={styles.list}>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>
              <q>{comment}</q>
            </p>
          </li>
        ))}
      </ul>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
        aria-label="add comments about art piece"
      >
        <label className={styles.label} htmlFor="comment">
          Add comment:
        </label>
        <textarea
          className={styles.textarea}
          type="text"
          id="comment"
          name="comment"
          rows="3"
          required
        />
        <button className={styles.button} type="submit">
          Send
        </button>
      </form>
    </section>
  );
}
