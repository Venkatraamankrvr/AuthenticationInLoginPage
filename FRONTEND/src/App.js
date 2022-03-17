import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AdminPage from "./AdminPage"
import ErrorPage from "./ErrorPage"
import Login from './login';
import UserPage from "./UserPage"

// import { Redirect } from 'react-router-dom'
// import { Route } from "react-router";
// import React from "./React"
// import Redirect from "./Redirect"
// import Route from "./Route"

function App() {
  return (
    <>
      {/* <Route path="/dashboard" component={UserPage} />
      <Route path="/admin" component={AdminPage} />
      <Redirect exact from="/" to="/dashboard" /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/admin" element={< AdminPage />} />
          <Route exact path="/user" element={< UserPage />} />
          <Route exact path="/errorFound" element={< ErrorPage />} />

        </Routes>

      </BrowserRouter>



    </>
  );
}

export default App;
