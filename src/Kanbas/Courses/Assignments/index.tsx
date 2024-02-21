import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { MdOutlineEditNote } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import ToolbarButtons from "./Buttons";
import "./index.css";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <>
      <ToolbarButtons />
      <hr />
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> Assignments
            <span className="float-end">
              <div className="assignment-weight">40% of total</div>{" "}
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" />
              <FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li
                className="list-group-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaEllipsisV className="me-2" />
                  <MdOutlineEditNote
                    className="me-2"
                    style={{ color: "green" }}
                  />
                  <div style={{ display: "inline-block" }}>
                    <Link
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {assignment.title}
                    </Link>
                    <br />
                    <p id="assignment-metadata">
                      <Link to={`#`}>Multiple Modules </Link>| Due Sept 10 at
                      11:59PM | 100 pts
                    </p>
                  </div>
                </div>
                <span>
                  <FaCheckCircle className="text-success" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}
export default Assignments;
