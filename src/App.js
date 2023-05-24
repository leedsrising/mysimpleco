import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';

import { Users } from './routes/adminUsersList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
    </Routes>
  );
}

export default App;
