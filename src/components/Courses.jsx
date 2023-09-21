import { useState } from "react";
import CourseCard from "./CourseCard";

const Courses = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([]);

  const courseData = () => {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {courseData().map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
};

export default Courses;
