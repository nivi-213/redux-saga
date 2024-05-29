
import React from "react";
import { useNavigate } from "react-router-dom";

const UpdateFormComponent = ({ currentItem, handleInputChange, handleUpdate, setEditing }) => {
  
  const navigate = useNavigate();

  const adding = () => {
    navigate("/");
  };

  return (
    <div className="edit-form">
      <h3>Edit Data</h3>
      <form>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstname"
            value={currentItem.firstname}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastname"
            value={currentItem.lastname}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={currentItem.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={currentItem.age}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-success mr-2"
          onClick={handleUpdate}
        >
          Update
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setEditing(false)}
        >
          Cancel
        </button>
      
      </form>
    </div>
  );
};

export default UpdateFormComponent;
