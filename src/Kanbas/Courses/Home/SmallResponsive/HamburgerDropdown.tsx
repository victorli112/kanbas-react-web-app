function HamburgerDropdown() {
  return (
    <div className="collapse fa-2x" id="kanbas-nav-bar">
      <div className="card card-body hidden-nav">
        <div className="close-button" style={{ width: "100%" }}>
          <button
            className="nav-buttons"
            data-bs-toggle="collapse"
            data-bs-target="#kanbas-nav-bar"
            style={{ backgroundColor: "white", color: "black", float: "right" }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <ul className="hidden-kambas-navigation">
          <li>
            <a href="/Kanbas/Account/Profile/screen.html">
              <i className="fa-solid fa-image-portrait"></i> Account
            </a>
          </li>
          <li>
            <a href="/Kanbas/Dashboard/screen.html">
              <i className="fa-solid fa-gauge"></i> Dashboard
            </a>
          </li>
          <li>
            <a href="/Kanbas/Courses/Home/screen.html">
              <i className="fa-solid fa-book"></i> Courses
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-calendar"></i> Calendar
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-inbox"></i> Inbox
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-clock"></i> History
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-tv"></i> Studio
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-right-from-bracket"></i> Commons
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-circle-question"></i> Help
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default HamburgerDropdown;
