function NavBar() {
  return (
    <div className="d-sm-block d-md-none fa-2x">
      <div className="d-flex justify-content-between top-nav-bar">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            className="nav-buttons"
            data-bs-toggle="collapse"
            data-bs-target="#kanbas-nav-bar"
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
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
