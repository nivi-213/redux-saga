// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { UPDATE_DATA_REQUEST } from "../Reducer/ActionType";
// import { useNavigate } from "react-router-dom";
// function UpdateTask() {
//   const [currentItem, setCurrentItem] = useState({
//     firstname: "",
//     email: "",
//     age: 0,
//   });

//   const dispatch = useDispatch(); 
// const navigate =useNavigate()
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setCurrentItem({
//       ...currentItem,
//       [name]: value,
//     });
//   };

//   const handleUpdate = () => {
//     // Assuming UPDATE_DATA_REQUEST is defined somewhere as a constant
//     dispatch({ type: UPDATE_DATA_REQUEST, payload: currentItem });
//     setEditing(false);
//     setCurrentItem({ id: null, firstname: "", email: "", age: "" });
//     navigate("/table")
//   };

//   const setEditing = (value) => {
//     // Define your setEditing logic here
//     console.log("Editing set to", value);
//   };

//   return (
//     <div>
//       <div className="edit-form">
//         <h3>Edit Data</h3>
//         <form>
//           <div className="form-group">
//             <label>First Name</label>
//             <input
//               type="text"
//               className="form-control"
//               name="firstname"
//               value={currentItem.firstname}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               className="form-control"
//               name="email"
//               value={currentItem.email}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>Age</label>
//             <input
//               type="number"
//               className="form-control"
//               name="age"
//               value={currentItem.age}
//               onChange={handleInputChange}
//             />
//           </div>
//           <button
//             type="button"
//             className="btn btn-success mr-2"
//             onClick={handleUpdate}
//           >
//             Update
//           </button>
//           <button
//             type="button"
//             className="btn btn-secondary"
//             onClick={() => setEditing(false)}
//           >
//             Cancel
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default UpdateTask;
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
