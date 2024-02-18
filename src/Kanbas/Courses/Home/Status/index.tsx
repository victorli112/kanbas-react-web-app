import "./index.css";

function Status() {
  return (
    <div
      className="flex-grow-0 me-2 d-none d-lg-block"
      style={{ width: "300px" }}
    >
      <h4>Course Status</h4>
      <div className="d-flex">
        <button className="course-status-button" style={{ width: "50%" }}>
          <i className="fa-regular fa-circle-xmark"></i> Unpublish
        </button>
        <button className="course-status-button green" style={{ width: "50%" }}>
          <i className="fa-regular fa-circle-check"></i> Published
        </button>
      </div>
      <br />
      <a href="#">
        <button className="course-status-button">
          <i className="fa-solid fa-file-import"></i> Import Existing Content
        </button>
      </a>
      <br />
      <a href="#">
        <button className="course-status-button">
          <i className="fa-solid fa-right-from-bracket"></i> Import From Commons
        </button>
      </a>
      <br />
      <a href="#">
        <button className="course-status-button">
          <i className="fa-solid fa-arrow-pointer"></i> Choose Home page
        </button>
      </a>
      <br />
      <a href="#">
        <button className="course-status-button">
          <i className="fa-solid fa-chart-simple"></i> View Course Stream
        </button>
      </a>
      <br />
      <a href="#">
        <button className="course-status-button">
          <i className="fa-solid fa-bullhorn"></i> New Announcement
        </button>
      </a>
      <br />
      <a href="#">
        <button className="course-status-button">
          <i className="fa-solid fa-chart-simple"></i> New Analytics
        </button>
      </a>
      <br />
      <a href="#">
        <button className="course-status-button">
          <i className="fa-regular fa-bell"></i> View course Notifications
        </button>
      </a>
      <div className="todo-coming-up">
        <h4 style={{ fontWeight: "bold" }}>To Do</h4>
        <hr style={{ margin: "0px" }} />
        <ul>
          <li>
            <a href="#"> Homework 1</a>
          </li>
        </ul>
        <div className="d-flex bd-highlight">
          <div className="p-2 flex-grow-1 bd-highlight">
            <h4 style={{ fontWeight: "bold" }}>Coming Up</h4>
          </div>
          <div className="p-2 bd-highlight">
            <a href="#">
              <i className="fa-regular fa-calendar"></i> View Calendar
            </a>
          </div>
        </div>
        <hr style={{ margin: "0px" }} />
        <ul>
          <li>
            <a href="#">
              {" "}
              <i className="fa-regular fa-calendar"></i> Lecture 1
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <i className="fa-regular fa-calendar"></i> Lecture 2
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <i className="fa-regular fa-calendar"></i> Lecture 3
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Status;
