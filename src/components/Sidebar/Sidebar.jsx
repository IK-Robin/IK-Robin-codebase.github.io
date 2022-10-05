import React, { useState } from "react";
import style from "./Sidebar.module.scss";
import { NavLink, Route, Routes } from "react-router-dom";
import { CodeData, CodeDetails } from "../../Container";
import { FaSearch } from "react-icons/fa";

function Sidebar() {
  const [navitem, setNavitem] = useState(CodeData);
  const [toggle, setToggle] = useState(true);

  // const expand = (item) => {
  //   item.classList.toggle("close");
  //   item.classList.toggle("square");
  //   // searchBtn.addEventListener("click", expand);
  // };

  const expand = () => {
    setToggle(!toggle);
  };

  const activeNavlink = ({ isActive }) => {
    return {
      color: isActive ? "red" : "black",
    };
  };

  return (
    <div className={style.sidebar}>
      <div className={style.brand}>
        <h1> Robin Cods</h1>
      </div>
      <div className={style.searchD}>
      

        <div className={style.content}>
          <span className={toggle ? ``:`${style.displayNone}`}> Search anything you want</span>
          <input
            type="text"
            name="input"
            className={
              toggle ? `${style.input}` : ` ${style.input} ${style.square}`
            }
            onClick={() => expand}
            id="search-input"
          />
          <button
            type="reset"
            onClick={() => expand()}
            className={
              toggle ? `${style.search}` : `${style.search}  ${style.close}`
            }
            id="search-btn"
          ></button>
        </div>

        {/* <FaSearch /> */}
      </div>

      <nav className={style.nav}>
        <ul>
          <NavLink style={activeNavlink} to="/">
            {" "}
            home
          </NavLink>
          {navitem.map((item, index) => {
            return (
              <li key={index * Math.random(88543 * 359784357)}>
                {" "}
                <NavLink
                  style={activeNavlink}
                  to={
                    item.name === "home"
                      ? "/"
                      : `/users/codedetails/${item.name}`
                  }
                >
                  {" "}
                  {item.name}{" "}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <Routes>
        <Route path="codedetails/:userName/*" element={<CodeDetails />} />
      </Routes>
    </div>
  );
}

export default Sidebar;
