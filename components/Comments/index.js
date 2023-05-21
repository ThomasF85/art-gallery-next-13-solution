"use client";

import styles from "./index.module.css";
import { useStore } from "@/lib/useStore";

export default function Comments({ slug }) {
  const comments = useStore((state) => state.comments[slug] || []);
  const addComment = useStore((state) => state.addComment);

  function handleSubmit(event) {
    event.preventDefault();
    const { comment } = event.target.elements;
    addComment(slug, comment.value);
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
