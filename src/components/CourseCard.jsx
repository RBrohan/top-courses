import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const CourseCard = ({ course, likedCourses, setLikedCourses }) => {
  const { image, title, description, id } = course;

  const handleLike = () => {
    if (likedCourses.includes(id)) {
      setLikedCourses((previous) =>
        previous.filter((courseId) => courseId !== id)
      );
      toast.warning("Like Removed!");
    } else {
      if (likedCourses.length === 0) {
        setLikedCourses([id]);
      } else {
        setLikedCourses((previous) => [...previous, id]);
      }
      toast.success("Liked Successfully");
    }
  };
  return (
    <div className="w-[300px] bg-bgDark bg-opacity-50 rounded-md overflow-hidden">
      <div className="relative">
        <img src={image.url} alt={image.alt} />
        <div
          className="absolute w-[40px] h-[40px] bg-white rounded-full right-2 bottom-[-14px]
        grid place-items-center"
        >
          <button onClick={handleLike}>
            {likedCourses.includes(id) ? (
              <FcLike fontSize="25px" />
            ) : (
              <FcLikePlaceholder fontSize="25px" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">{title}</p>
        <p className="text-white mt-2">
          {description.length > 100
            ? description.substring(0, 100) + `...`
            : description}
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
