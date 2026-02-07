import { Link } from "react-router-dom";

export default function CreateEmployee() {
  return (
    <>
      <div className="container">
        <h2>Create Employee</h2>

        <form action="#" id="create-employee">
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first-name" />
            </div>

            <div className="form-field">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" />
            </div>
          </div>

          <label htmlFor="date-of-birth">Date of Birth</label>
          <div className="component-placeholder">
            <span className="component-name">DatePicker</span>
          </div>

          <label htmlFor="start-date">Start Date</label>
          <div className="component-placeholder">
            <span className="component-name">DatePicker</span>
          </div>

          <fieldset className="address">
            <legend>Address</legend>

            <div className="form-field">
              <label htmlFor="street">Street</label>
              <input id="street" type="text" />
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="city">City</label>
                <input id="city" type="text" />
              </div>

              <div className="form-field form-field--medium">
                <label htmlFor="state">State</label>
                <div className="component-placeholder">
                  <span className="component-name">Dropdown</span>
                </div>
              </div>

              <div className="form-field form-field--small">
                <label htmlFor="zip-code">Zip Code</label>
                <input id="zip-code" type="number" />
              </div>
            </div>
          </fieldset>

          <label htmlFor="department">Department</label>
          <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </form>

        <div>
          <button className="primary-btn">Save</button>
        </div>
      </div>

      <div id="confirmation" className="modal">
        <span className="component-name">Modal</span>
      </div>
    </>
  );
}
