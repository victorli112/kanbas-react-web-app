import { useState } from "react";
import { Modal } from "react-bootstrap";
import KanbasNav from "./KanbasNav";
import CourseNav from "./CourseNav";
import React from "react";

export const Context = React.createContext({});

function NavBar() {
  const [kanbasNav, setKanbasNav] = useState(false);
  const [courseNav, setCourseNav] = useState(false);

  return (
    <Context.Provider
      value={{ kanbasNav, setKanbasNav, courseNav, setCourseNav }}
    >
      <div className="d-sm-block d-md-none fa-2x">
        <div className="d-flex justify-content-between top-nav-bar">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="nav-buttons" onClick={() => setKanbasNav(true)}>
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
            <button className="nav-buttons" onClick={() => setCourseNav(true)}>
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>
        </div>
        <Modal
          show={kanbasNav}
          fullscreen={true}
          onHide={() => setKanbasNav(false)}
        >
          <KanbasNav />
        </Modal>
        <Modal
          show={courseNav}
          fullscreen={true}
          onHide={() => setCourseNav(false)}
        >
          <CourseNav />
        </Modal>
      </div>
    </Context.Provider>
  );
}
export default NavBar;
