
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CREATE_DATA_REQUEST } from "../Reducer/ActionType";
import "./form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const FormComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch action to create data
    dispatch({ type: CREATE_DATA_REQUEST, payload: formData });
    // Navigate to table page
    navigate("/table");
    // Reset form fields
    setFormData({ firstname: "", email: "", age: "" });
  };

  return (
    <div className="container mt-5 w-50">
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="form-group">
          <label htmlFor="firstname" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">
            Please provide a valid first name.
          </div>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">
            Please provide a valid email address.
          </div>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="age" className="form-label">
            Age:
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide a valid age.</div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
