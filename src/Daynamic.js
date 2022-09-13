import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// use this component inside index page

import Home from "./Container/nasted routing/Home";
import UserPage from "./Container/Dynamic route/UserPage";
import UserDetail from "./Container/Dynamic route/UserDetail";
import Tabpage from "./Container/Dynamic route/Tabpage";
function App() {
  return (
    <>
      <Link to={"/"}> home</Link>
      <Link to={"/users"}> user</Link>
      <Routes>
        <Route exact path="/">
          <Route index element={<Home />} />

          <Route path="/users/*" element={<UserPage />} />
          
          <Route path="userdetail/:userName/*" element={<UserDetail />} >
       

          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
