import React from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
// Task4: Import all the required elements from the react-router-dom
import {
  useParams,
  useNavigate,
  Link,
  NavLink,
  Outlet,
} from "react-router-dom";
import Chapter from "../chapter/Chapter";
function Learn() {
  const params = useParams();

  const course = coursesData.find((cour) => cour.id == params.courseId);

  const navigator = useNavigate();
  console.log(course);

  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        {/* Task4: Create Link to go back to the Courses page */}
        <h2 className={style.back} onClick={() => navigator("/courses")}>
          {"<<"}
        </h2>

        {/* Task4: Title of the Course */}
        <h1 className={style.heading}>{course.title}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h1>Chapters</h1>
          <hr />
          <ul>
            {/*Task4: List of Chapters must be rendered here  */}
            {course.chapters.map((chap) => {
              return (
                <>
                  <NavLink to={`${chap.chapter}`}>
                    <div className={style.ChapterId}>{chap.title}</div>
                  </NavLink>
                </>
              );
            })}
          </ul>
        </div>

        <div className={style.courses}>
          {/**Task5:  Chapter Details Must be rendered here */}
          <Outlet context={{... course }} />
        </div>
      </div>
    </div>
  );
}

export default Learn;
