import React from "react";

import { Container, Row } from "react-bootstrap";
import CodeContainer from "../CodeContainer/CodeContainer";
import style from "./CodeBody.module.scss";


function CodeOutput({ code_title, css, react }) {
  

  return (
    <Container className={` ${style.codeOutput}`}>

      <Row className={style.codeTitle}>
        <h1> Raw Code</h1>
      
        <p> 
           <strong>
              {code_title}
             </strong>
         
        </p>


      </Row>
      {/* code out put  */}
      {/* <Row className={style.code_output}>
      
      </Row> */}

      {/* raw basic code  */}
      <Row>
        
        <CodeContainer codeItem={react} />
        <h4> {css}</h4>
       
      </Row>
      {/* raw basic code  */}
    </Container>
  );
}

export default CodeOutput;
