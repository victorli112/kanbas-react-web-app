import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import * as client from "./client";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import "./index.css";
import { useState, useEffect } from "react";

function Courses() {
  const { courseId } = useParams();
  const [course, setCourse] = useState<any>({ _id: "" });
  const findCourseById = async (courseId?: string) => {
    if (!courseId) return;
    const response = await client.findCourseById(courseId);
    setCourse(response[0]);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);
  return (
    <div>
      <div className="course-top-bar">
        <h3>
          {/* Top header with course name and path */}
          <HiMiniBars3 />
          <span className="course-name"> {course?.name} </span>
          <i className="fa-solid fa-greater-than"></i>
          <span className="path-name"> {courseId}</span>
        </h3>
      </div>
      <hr style={{ margin: "8px" }} />
      <CourseNavigation />
      <div className="overflow-y-scroll position-absolute bottom-0 end-0 course-content-block">
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Piazza" element={<h2>Piazza</h2>} />
          <Route path="Zoom Meetings" element={<h2>Zoom Meetings</h2>} />
          <Route path="Assignments" element={<Assignments />} />
          <Route path="Quizzes" element={<h2>Quizzes</h2>} />
          <Route path="Grades" element={<h2>Grades</h2>} />
          <Route path="People" element={<h2>People</h2>} />
          <Route path="Panopto Video" element={<h2>Panopto Video</h2>} />
          <Route path="Discussions" element={<h2>Discussions</h2>} />
          <Route path="Announcements" element={<h2>Announcements</h2>} />
          <Route path="Pages" element={<h2>Pages</h2>} />
          <Route path="Files" element={<h2>Files</h2>} />
          <Route path="Rubric" element={<h2>Rubric</h2>} />
          <Route path="Outcomes" element={<h2>Outcomes</h2>} />
          <Route path="Collaborations" element={<h2>Collaborations</h2>} />
          <Route path="Syllabus" element={<h2>Syllabus</h2>} />
          <Route path="Settings" element={<h2>Settings</h2>} />
          <Route
            path="Assignments/:assignmentId"
            element={<h2>Assignment Editor</h2>}
          />
        </Routes>
      </div>
    </div>
  );
}
export default Courses;
