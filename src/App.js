// App.js
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import FormComponent from './components/Form';
import TableComponent from './components/TableComponent';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
       <Routes>
          <Route  path="/" element={<FormComponent />} />
          <Route path="/table" element={<TableComponent/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
