// App.js
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import FormComponent from "./components/Form";
import TableComponent from "./components/TableComponent";
import UpdateTask from "./components/UpdateTask";
import Layout from "./Layout/Layout";
// import EditForm from './components/EditForm';

const App = () => {
  return (
    <BrowserRouter>
      <Layout/>
      <Routes>
        <Route path="/" element={<Navigate to={"/form"} />}/>
          <Route path="/form" element={<FormComponent />} />
          <Route path="/table" element={<TableComponent />} />
          <Route path="/edit" element={<UpdateTask />} />
     
      </Routes>
    </BrowserRouter>
  );
};

export default App;
