import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KanbasNavigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { useState } from "react";
import { courses } from "./Database";
import { Provider } from "react-redux";
import store from "./store";

function Kanbas() {
  const [coursesList, setCoursesList] = useState(courses);
  const [course, setCourse] = useState({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "course.png",
  });
  const addNewCourse = () => {
    setCoursesList([
      ...coursesList,
      { ...course, _id: new Date().getTime().toString() },
    ]);
  };
  const deleteCourse = (courseId: string) => {
    setCoursesList(coursesList.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCoursesList(
      coursesList.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

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
                  <Route path="/Account" element={<h1>Account</h1>} />
                  <Route
                    path="/Dashboard"
                    element={
                      <Dashboard
                        courses={coursesList}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                      />
                    }
                  />
                  <Route
                    path="/Courses/:courseId/*"
                    element={<Courses courses={coursesList} />}
                  />
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
