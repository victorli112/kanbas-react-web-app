import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KanbasNavigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function Kanbas() {
  return (
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
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Courses/:courseId/*" element={<Courses />} />
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
  );
}
export default Kanbas;
