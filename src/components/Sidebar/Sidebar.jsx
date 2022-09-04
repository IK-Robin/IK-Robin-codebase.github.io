import React from "react";
import style from "./Sidebar.module.scss";
import {Link} from 'react-router-dom'
function Sidebar() {
    const navitem = ["nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex","nav", "container", "footer", "link", "flex"];
  return (
    <div className={style.sidebar}>
      <div className={style.brand}>
        <h1> Robin Cods</h1>
      </div>
      <div className={style.search}> search</div>
      <nav className={style.nav}>
        <ul>
       {
        navitem.map((item) => {
            return(
                <li> <Link  to={`#${item}`}> {item} </Link></li>
            )
        })
       }
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
