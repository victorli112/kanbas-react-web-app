import { useContext } from "react";
import { Context } from "./NavBar";

function CourseNav({ courseName }: { courseName: any }) {
  const nav: any = useContext(Context);
  const links = [
    {
      icon: "fa-solid fa-plug",
      text: "Home",
      href: "/Kanbas/Courses/Home/screen.html",
    },
    { icon: "fa-solid fa-plug", text: "Modules", href: "#" },
    { icon: "fa-solid fa-plug", text: "Piazza", href: "#" },
    { icon: "fa-solid fa-plug", text: "Zoom Meetings", href: "#" },
    {
      icon: "fa-solid fa-plug",
      text: "Assignments",
      href: "/Kanbas/Courses/Assignments/screen.html",
    },
    { icon: "fa-solid fa-plug", text: "Quizzes", href: "#" },
    {
      icon: "fa-solid fa-plug",
      text: "Grades",
      href: "/Kanbas/Courses/Grades/screen.html",
    },
    { icon: "fa-solid fa-plug", text: "People", href: "#" },
    { icon: "fa-solid fa-plug", text: "Panopto Video", href: "#" },
    { icon: "fa-solid fa-plug", text: "Discussions", href: "#" },
    { icon: "fa-solid fa-plug", text: "Announcements", href: "#" },
    { icon: "fa-solid fa-plug", text: "Pages", href: "#" },
    { icon: "fa-solid fa-plug", text: "Files", href: "#" },
    { icon: "fa-solid fa-plug", text: "Rubrics", href: "#" },
    { icon: "fa-solid fa-plug", text: "Outcomes", href: "#" },
    { icon: "fa-solid fa-plug", text: "Collaborations", href: "#" },
    { icon: "fa-solid fa-plug", text: "Syllabus", href: "#" },
    { icon: "fa-solid fa-plug", text: "Settings", href: "#" },
  ];
  return (
    <div
      className="card card-body hidden-nav"
      style={{ padding: "0px", border: "0px" }}
    >
      <div className="d-sm-block d-md-none fa-2x">
        <div className="d-flex justify-content-between top-nav-bar">
          <div></div>
          <div>
            <h3>
              {courseName}
              <br />
              Modules
            </h3>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              className="nav-buttons"
              onClick={() => nav.setCourseNav(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
      <br />
      <div className="hidden-course-nav">
        <ul className="wd-navigation">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>
                <i className={link.icon}></i> {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default CourseNav;
