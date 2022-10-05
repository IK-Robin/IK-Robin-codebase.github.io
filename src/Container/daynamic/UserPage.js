import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import TabPage from "./Tabpage";
import users from "./userData";
import UserDetail from "./UserDetail";

function UserPage() {
  // Getting the userId from match props and display the user from the users array

  return (
    <>
      <h1> UserPage</h1>
      <div>
        {users.map((user, index) => {
          return (
            <h5 key={index}>
              <Link to={`userdetail/${user.name} `}> {user.name}</Link>
            </h5>
          );
        })}
      </div>
      <Routes>
        <Route path="userdetail/:userName/*" element={<UserDetail />} />
      </Routes>
    </>
  );
}

export default UserPage;
