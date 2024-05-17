
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_DATA_REQUEST, DELETE_DATA_REQUEST } from '../Reducer/ActionType';
import 'bootstrap/dist/css/bootstrap.min.css';

const TableComponent = () => {
  const dispatch = useDispatch();
  const saga = useSelector(state => state.saga);

  useEffect(() => {
    dispatch({ type: FETCH_DATA_REQUEST });
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch({ type: DELETE_DATA_REQUEST, payload: id });
  };

  return (
    <div className="container mt-5">
      <h2>Data List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {saga.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstname}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent
