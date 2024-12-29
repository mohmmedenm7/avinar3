import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const res = await axios.get("http://localhost:5000/book");
        setCourses(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getCourses();
  }, []);

  const handleEdit = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          We're delighted to have you{" "}
          <span className="text-yellow-300">Here! :)</span>
        </h1>
        {courses.length === 0 && (
          <p className="mt-12">
            Welcome to our course catalog. Here, you can find a variety of courses to suit your needs.
          </p>
        )}
        <Link to="/">
          <button className="mt-6 bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-blue-300 duration-300">
            Back
          </button>
        </Link>
      </div>
      {selectedCourse && (
        <EditCourse course={selectedCourse} onSave={() => setSelectedCourse(null)} />
      )}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {courses.map((course) => (
          <Cards key={course.id} course={course} onEdit={handleEdit} />
        ))}
      </div>
    </div>
  );
}

export default Course;
