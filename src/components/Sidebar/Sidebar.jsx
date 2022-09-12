import React from "react";
import style from "./Sidebar.module.scss";
import {NavLink} from 'react-router-dom'
function Sidebar() {
  const activeNavlink = ({isActive}) => {
      return{
        color:isActive? 'red':'black'
      }
  }
    const navitem = ["home","Main","BodyContaine", "user", "codepage", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex"];
  return (
    <div className={style.sidebar}>
      <div className={style.brand}>
        <h1> Robin Cods</h1>
      </div>
      <div className={style.search}> search</div>
      <nav className={style.nav}>
        <ul>
         
       {
        navitem.map((item, index) => {
            return( 
                <li key={index * Math.random(88543 *359784357)}> <NavLink style={activeNavlink}  to={item === 'home' ? '/' : `${item}`}> {item} </NavLink></li>
            )
        })
       }
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
