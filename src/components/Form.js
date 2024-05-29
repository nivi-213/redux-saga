
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CREATE_DATA_REQUEST } from "../Reducer/ActionType";
import "./form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    age: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Check if the form is valid
    const isFormValid = e.target.checkValidity();

    if (!isFormValid) {
      e.stopPropagation();
      return; // Exit the function if the form is invalid
    }

    setIsLoading(true);
    dispatch({ type: CREATE_DATA_REQUEST, payload: formData });

    setTimeout(() => {
      setIsLoading(false);
      navigate("/table");
      setFormData({ firstname: "", lastname: "", email: "", age: "" });
      setIsSubmitted(false);
    }, 1000);
  };

  return (
    <div className="container mt-5 w-50">
      <form
        onSubmit={handleSubmit}
        className={`needs-validation ${isSubmitted ? "was-validated" : ""}`}
        noValidate
      >
        <div className="form-group row">
          <div className="col-md-6">
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
              pattern="^[a-zA-Z]+$" // Allow only letters
              title="Please enter a valid first name"
            />
            <div className="invalid-feedback">
              Please provide a valid first name.
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="lastname" className="form-label">
              Last Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
              pattern="^[a-zA-Z]+$" // Allow only letters
              title="Please enter a valid last name"
            />
            <div className="invalid-feedback">
              Please provide a valid last name.
            </div>
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
            title="Please enter a valid email address"
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
            min="0"
            title="Please enter a valid age"
          />
          <div className="invalid-feedback">Please provide a valid age.</div>
        </div>
        <div className="text-center">
          {isLoading ? (
            <Spinner animation="border" role="status" className="mt-3">
              <span className="visually-hidden"></span>
            </Spinner>
          ) : (
            <Button type="submit" className="btn btn-primary mt-3 w-25">
              Submit
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;