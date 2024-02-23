function ArrowDropdown() {
  return (
    <div className="collapse" id="course-nav-bar">
      <div
        className="card card-body hidden-nav"
        style={{ padding: "0px", border: "0px" }}
      >
        <div className="d-sm-block d-md-none fa-2x">
          <div className="d-flex justify-content-between top-nav-bar">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="nav-buttons"
                data-bs-toggle="collapse"
                data-bs-target="#kanbas-nav-bar, #course-nav-bar"
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
            <div>
              <h3>
                CS4550.12631.232141
                <br />
                Modules
              </h3>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="nav-buttons"
                data-bs-toggle="collapse"
                data-bs-target="#course-nav-bar"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden-course-nav">
          <ul className="wd-navigation">
            <li>
              <a href="/Kanbas/Courses/Home/screen.html">
                <i className="fa-solid fa-plug"></i> Home
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-plug"></i> Modules
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-plug"></i> Piazza
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-plug"></i> Zoom Meetings
              </a>
            </li>
            <li>
              <a href="/Kanbas/Courses/Assignments/screen.html">
                <i className="fa-solid fa-plug"></i> Assignments
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-plug"></i> Quizzes
              </a>
            </li>
            <li>
              <a href="/Kanbas/Courses/Grades/screen.html">
                <i className="fa-solid fa-plug"></i> Grades
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-plug"></i> People
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-plug"></i> Panopto Video
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-plug"></i> Discussions
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-plug"></i> Announcements
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-plug"></i> Pages
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-plug"></i> Files
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-plug"></i> Rubrics
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-plug"></i> Outcomes
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-plug"></i> Collaborations
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-plug"></i> Syllabus
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-plug"></i> Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ArrowDropdown;
