import { useContext } from "react";
import { Context } from "./NavBar";

function KanbasNav() {
  const nav: any = useContext(Context);
  const links = [
    {
      icon: "fa-solid fa-image-portrait",
      text: "Account",
      href: "/Kanbas/Account/Profile/screen.html",
    },
    {
      icon: "fa-solid fa-gauge",
      text: "Dashboard",
      href: "/Kanbas/Dashboard/screen.html",
    },
    {
      icon: "fa-solid fa-book",
      text: "Courses",
      href: "/Kanbas/Courses/Home/screen.html",
    },
    { icon: "fa fa-calendar", text: "Calendar", href: "#" },
    { icon: "fa-solid fa-inbox", text: "Inbox", href: "#" },
    { icon: "fa-solid fa-clock", text: "History", href: "#" },
    { icon: "fa-solid fa-tv", text: "Studio", href: "#" },
    { icon: "fa-solid fa-right-from-bracket", text: "Commons", href: "#" },
    { icon: "fa-solid fa-circle-question", text: "Help", href: "#" },
  ];

  return (
    <div className="card card-body hidden-nav">
      <div className="close-button" style={{ width: "100%" }}>
        <button
          className="nav-buttons"
          onClick={() => nav.setKanbasNav(false)}
          style={{ backgroundColor: "white", color: "black", float: "right" }}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <br />
      <ul className="hidden-kambas-navigation">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>
              <i className={link.icon}></i> {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default KanbasNav;
