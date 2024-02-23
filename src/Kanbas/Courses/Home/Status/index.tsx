import "./index.css";

function Status() {
  const statusButtons = [
    { icon: "fa-file-import", text: "Import Existing Content", link: "#" },
    { icon: "fa-right-from-bracket", text: "Import From Commons", link: "#" },
    { icon: "fa-arrow-pointer", text: "Choose Home page", link: "#" },
    { icon: "fa-chart-simple", text: "View Course Stream", link: "#" },
    { icon: "fa-bullhorn", text: "New Announcement", link: "#" },
    { icon: "fa-chart-simple", text: "New Analytics", link: "#" },
    { icon: "fa-bell", text: "View course Notifications", link: "#" },
  ];
  const todoList = [
    { text: "Homework 1", link: "#" },
    { text: "Homework 2", link: "#" },
  ];
  const comingUpList = [
    { text: "Lecture 1", link: "#" },
    { text: "Lecture 2", link: "#" },
    { text: "Lecture 3", link: "#" },
  ];

  return (
    <div
      className="flex-grow-0 me-2 d-none d-lg-block course-status"
      style={{ width: "300px" }}
    >
      <h3>Course Status</h3>
      <div className="d-flex">
        <button className="course-status-button" style={{ width: "50%" }}>
          <i className="fa-regular fa-circle-xmark"></i> Unpublish
        </button>
        <button className="course-status-button green" style={{ width: "50%" }}>
          <i className="fa-regular fa-circle-check"></i> Published
        </button>
      </div>
      <br />
      {statusButtons.map((button) => (
        <a href={button.link}>
          <button className="course-status-button">
            <i className={`fa-solid ${button.icon}`}></i> {button.text}
          </button>
        </a>
      ))}
      <div className="todo-list">
        <h4>To Do</h4>
        <hr />
        <ul>
          {todoList.map((todoItem) => (
            <li>
              <a href={todoItem.link}>{todoItem.text}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="coming-up">
        <div className="row no-gutters justify-content-between">
          <div className="col">
            <h4>Coming Up</h4>
          </div>
          <div className="col">
            <a href="#">
              <i className="fa-regular fa-calendar"></i> View Calendar
            </a>
          </div>
        </div>
        <hr />
        <ul>
          {comingUpList.map((comingUpItem) => (
            <li>
              <a href={comingUpItem.link}>
                <i className="fa-regular fa-calendar"></i> {comingUpItem.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Status;
