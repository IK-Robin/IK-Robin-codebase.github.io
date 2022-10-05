import {images} from '../../conostant'

const codeData = [
  {
    name: "CodeDetails",
    image:images.test,
    description: `import React from 'react'

      import {   Link, Route, Routes, useParams} from 'react-router-dom';
      import codeData from './CodeData';
      
      function CodeDetails() {
          const {userName} = useParams();
          const code = codeData.find(({name}) => name === userName);
        return (
         <>
          <div>CodeDetails</div>
      
          <div>
              <h1>
              User ID test:
                <strong> 
                {code.name}
                </strong>
             
              </h1>
              <p>
                  {code.description}
              </p>
          </div>
         </>
        )
      }
      
      export default CodeDetails`,

    tabs: [
      {
        name: "personal",
        content: {
          firstname: "Param",
          lastname: "Harrison",
        },
      },
      {
        name: "employer",
        content: {
          name: "Jobbatical",
          city: "Tallinn, Estonia",
        },
      },
    ],
  },
  {
    name: "Sidebar",
    description: `import React, { useState } from "react";
      import style from "./Sidebar.module.scss";
      import {NavLink, Route, Routes} from 'react-router-dom'
      import {CodeData, CodeDetails} from '../../Container'
      
      function Sidebar() {
        const [navitem, setNavitem] = useState(CodeData);
        const activeNavlink = ({isActive}) => {
            return{
              color:isActive? 'red':'black'
            }
        }
         
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
                      <li key={index * Math.random(88543 *359784357)}> <NavLink style={activeNavlink}  to={'
                       === "home"
                          ? "/"
                          : "users/codedetails/(item.name)}"
                      }  '}> {item.name} </NavLink></li>
                  )
              })
             }
              </ul>
            </nav>
            <Routes>
              <Route path="codedetails/:userName/*" element={<CodeDetails/> } />
            </Routes>
          </div>
        );
      }
      
      export default Sidebar;
      `,
    tabs: [
      {
        name: "personal",
        content: {
          firstname: "Miguel",
          lastname: "Medina",
        },
      },
      {
        name: "employer",
        content: {
          name: "Skype",
          city: "Arizona, US",
        },
      },
      {
        name: "other",
        content: {
          country: "Mexico",
          age: 30,
        },
      },
    ],
  },
];

export default codeData;
