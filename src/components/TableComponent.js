
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  FETCH_DATA_REQUEST,
  DELETE_DATA_REQUEST,
  UPDATE_DATA_REQUEST,
} from "../Reducer/ActionType";
import "bootstrap/dist/css/bootstrap.min.css";
import UpdateFormComponent from "./UpdateTask";

const TableComponent = () => {
  const dispatch = useDispatch();
  const saga = useSelector((state) => state.saga);

  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState({
    id: null,
    firstname: "",
    email: "",
    age: "",
    lastname: "",
  });

  const adding = () => {
    navigate("/form");
  };
  useEffect(() => {
    dispatch({ type: FETCH_DATA_REQUEST });
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch({ type: DELETE_DATA_REQUEST, payload: id });
  };

  const handleEditClick = (item) => {
    setEditing(true);
    setCurrentItem(item);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem({ ...currentItem, [name]: value });
  };

  const handleUpdate = () => {
    dispatch({ type: UPDATE_DATA_REQUEST, payload: currentItem });
    setEditing(false);
    setCurrentItem({
      id: null,
      firstname: "",
      email: "",
      age: "",
      lastname: "",
    });
  };

  return (
    <>
      <div className="container ">
        <div className="">
          <button
            type="button"
            className="btn btn-secondary btn-sm ms-2 "
            onClick={adding}
          >
            Add New Page
          </button>
        </div>
      </div>
      <div className="container mt-5">
        <h2 >Data List</h2>
        {editing ? (
          <UpdateFormComponent
            currentItem={currentItem}
            handleInputChange={handleInputChange}
            handleUpdate={handleUpdate}
            setEditing={setEditing}
          />
        ) : (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {saga.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>

                  <td>
                    <div>
                      <button
                        type="button"
                        className="btn btn-success btn-sm mr-2 ms-1"
                        onClick={() => handleEditClick(item)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm ms-1"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default TableComponent;
