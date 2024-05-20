import React from "react";
import styles from "./Chapter.module.css";
import { useOutletContext, useParams } from "react-router-dom";
function Chapter() {
  const course = useOutletContext();

  const { ChapterId } = useParams();
  const chapter = course.chapters.find((chap) => chap.chapter == ChapterId);

  return (
    <div>
      <h1>{chapter.title}</h1>
      <h2>{chapter.description}</h2>
      <p className={styles.para}>{chapter.chapter}</p>
      <br />
      <br />
      <div className={styles.videos}>
        {/*TASK:5 CHAPTER VIDEO SRC SHOULD BE GIVEN IN THE SOURCE */}
        <iframe
          width="800"
          height="560"
          src={`${chapter.video}`}
          title="React Video"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Chapter;
