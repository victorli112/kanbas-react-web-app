import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any;
  course: any;
  setCourse: any;
  addNewCourse: any;
  deleteCourse: any;
  updateCourse: any;
}) {
  const course_count = courses.length;
  return (
    <div className="form-group p-4">
      <h1>Dashboard</h1> <hr />
      <h5>Course</h5>
      <div className="course-update-form">
        <input
          value={course.name}
          className="form-control"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <input
          value={course.number}
          className="form-control"
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
        />
        <input
          value={course.startDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        />
        <input
          value={course.endDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        />
        <button className="btn btn-success" onClick={addNewCourse}>
          Add
        </button>
        <button className="btn btn-secondary" onClick={updateCourse}>
          Update
        </button>
      </div>
      <h2>Published Courses ({course_count})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course: any) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img
                  src={require(`/images/${course.image}`)}
                  className="card-img-top"
                  style={{ height: 150 }}
                />
                <div
                  className="card-body"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course.id}/Home`}
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {course.name}
                  </Link>
                  <p
                    className="card-text"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {course.name}
                  </p>
                  <span className="course-buttons">
                    <Link
                      to={`/Kanbas/Courses/${course.id}/Home`}
                      className="btn btn-primary"
                    >
                      Go{" "}
                    </Link>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course);
                      }}
                    >
                      Delete
                    </button>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
