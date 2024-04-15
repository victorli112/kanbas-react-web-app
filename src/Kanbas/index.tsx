import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account";
import KanbasNavigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import * as client from "./Courses/client";

function Kanbas() {
  const [course, setCourse] = useState({
    _id: "",
    id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "course.png",
  });
  const [courses, setCourses] = useState<any[]>([]);
  const findAllCourses = async () => {
    const courses = await client.findAllCourses();
    setCourses(courses);
  };
  const addNewCourse = async () => {
    try {
      const response = await client.createCourse(course);
      setCourses([...courses, response]);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteCourse = async (course: any) => {
    try {
      await client.deleteCourse(course);
      setCourses(courses.filter((c) => c._id !== course._id));
    } catch (err) {
      console.log(err);
    }
  };
  const updateCourse = async () => {
    try {
      await client.updateCourse(course);
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          }
          return c;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  useEffect(() => {
    findAllCourses();
  }, []);

  return (
    <Provider store={store}>
      <table width="100%">
        <tbody>
          <tr>
            <td valign="top" width="80px">
              <KanbasNavigation />
            </td>
            <td>
              <div className="flex-fill">
                <Routes>
                  <Route path="/" element={<Navigate to="Dashboard" />} />
                  <Route path="/Account/*" element={<Account />} />
                  <Route
                    path="/Dashboard"
                    element={
                      <Dashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                      />
                    }
                  />
                  <Route path="/Courses/:courseId/*" element={<Courses />} />
                  <Route path="/Calendar" element={<h1>Calendar</h1>} />
                  <Route path="/Inbox" element={<h1>Inbox</h1>} />
                  <Route path="/History" element={<h1>History</h1>} />
                  <Route path="/Studio" element={<h1>Studio</h1>} />
                  <Route path="/Commons" element={<h1>Commons</h1>} />
                  <Route path="/Help" element={<h1>Help</h1>} />
                </Routes>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </Provider>
  );
}
export default Kanbas;
