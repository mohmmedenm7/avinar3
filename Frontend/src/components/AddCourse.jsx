import React, { useState } from "react";
import axios from "axios";

function AddCourse({ onCourseAdded }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleAddCourse = async () => {
    try {
      const res = await axios.post("http://localhost:4001/book", {
        name,
        description,
      });
      onCourseAdded(res.data);
      setName("");
      setDescription("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="add-course-panel">
      <h2>Add a New Course</h2>
      <input
        type="text"
        placeholder="Course Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Course Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button onClick={handleAddCourse}>Add Course</button>
    </div>
  );
}

export default AddCourse;
