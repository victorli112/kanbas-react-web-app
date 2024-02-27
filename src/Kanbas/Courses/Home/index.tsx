import ModuleList from "../Modules/List";
import Status from "./Status";
import NavBar from "./SmallResponsive/NavBar";
import HomeButtons from "./Buttons";
import { useLocation } from "react-router-dom";

function Home() {
  const { pathname } = useLocation();
  const courseName = pathname.split("/").slice(-2, -1)[0].replace("%20", " ");
  return (
    <div className="d-flex">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      <div className="flex-fill">
        <NavBar courseName={courseName} />{" "}
        {/* Black nav-bar when screen is small */}
        <ul className="list-group wd-modules">
          <HomeButtons />
          <hr
            style={{
              marginTop: "8px",
              marginBottom: "16px",
              borderTop: "1px solid black",
            }}
          />
          <ModuleList />
        </ul>
      </div>
      <Status />
    </div>
  );
}
export default Home;
