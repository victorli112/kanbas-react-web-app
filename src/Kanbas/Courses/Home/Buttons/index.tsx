function HomeButtons() {
  return (
    <div className="top-buttons">
      <table className="admin-buttons-top">
        <tr>
          <td>
            <button className="admin-button">Collapse All</button>
          </td>
          <td>
            <button className="admin-button">View Progress</button>
          </td>
          <td>
            <select className="form-select">
              <option>Publish All</option>
              <option>Publish All Modules and Items</option>
              <option>Publish Modules only</option>
              <option>UnPublish All Modules</option>
            </select>
          </td>
          <td>
            <button className="add-module-button">+ Module</button>
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
export default HomeButtons;
