import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';

import {NextUIProvider, createTheme} from '@nextui-org/react'

import { Users } from './routes/adminUsersList';
import { Home } from './routes/home';

const darkTheme = createTheme({type: 'dark'})

function App() {
  return (
    <NextUIProvider theme={darkTheme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </NextUIProvider>
  );
}

export default App;
