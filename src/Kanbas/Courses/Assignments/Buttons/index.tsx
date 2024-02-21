function ToolbarButtons() {
  return (
    <div className="top-buttons">
      <table className="admin-buttons-top">
        <tr>
          <td>
            <div className="input-group">
              <div className="form-outline" data-mdb-input-init>
                <input
                  type="search"
                  id="form1"
                  className="form-control"
                  placeholder="Search for Assignment"
                />
              </div>
            </div>
          </td>
          <td>
            <button className="admin-button">+ Group</button>
          </td>
          <td>
            <button className="red-admin-button">+ Assignment</button>
          </td>
          <td>
            <button className="admin-button">
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default ToolbarButtons;
