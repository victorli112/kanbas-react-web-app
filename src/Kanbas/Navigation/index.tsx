import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function KanbasNavigation() {
  const links = [
    { label: "Account", iconClass: "fa-image-portrait" },
    { label: "Dashboard", iconClass: "fa-gauge" },
    { label: "Courses", iconClass: "fa-book" },
    { label: "Calendar", iconClass: "fa-calendar" },
    { label: "Inbox", iconClass: "fa-inbox" },
    { label: "History", iconClass: "fa-clock" },
    { label: "Studio", iconClass: "fa-tv" },
    { label: "Commons", iconClass: "fa-right-from-bracket" },
    { label: "Help", iconClass: "fa-circle-question" },
  ];
  const { pathname } = useLocation();
  return (
    <>
      <div className="d-none d-md-block">
        <ul className="wd-kanbas-navigation">
          <li>
            <a href="http://northeastern.edu">
              <img src="/Kanbas/images/neulogo.png" width="100%" />
            </a>
          </li>
          {links.map((link, index) => (
            <li
              key={index}
              className={`${pathname.includes(link.label) ? "wd-active" : ""} ${
                link.label.includes("Account") ? "account" : ""
              }`}
            >
              <Link to={`/Kanbas/${link.label}`}>
                <i className={`fa-solid ${link.iconClass}`}></i> <br />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default KanbasNavigation;
