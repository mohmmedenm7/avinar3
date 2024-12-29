import React from "react";

function Cards({ course }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={`http://localhost:5000/uploads/${course.thumbnail}`} alt={course.name} onError={(e) => { e.target.src = 'default-image-url.jpg'; }} />
          </figure>
          <div className="card-body">
            <h2 className=" card-title">
              {course.name}
              <div className="bg-blue-300 badge yellow">{course.isFree ? "Free" : "Paid"}</div>
            </h2>
            <p>{course.description}</p>
            <div className="card-actions justify-between">
              <a href={course.videoUrl} target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300">
                  Watch Video
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
