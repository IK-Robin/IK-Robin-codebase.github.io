import React from "react";
import { Container, Row } from "react-bootstrap";
import CodeContainer from "../CodeContainer/CodeContainer";
import style from "./CodeBody.module.scss";
function CodeBody({ code_title, css, html, react }) {
    const rawCode = [`
    import React from "react";
    import { Container, Row } from "react-bootstrap";
    import CodeContainer from "../CodeContainer/CodeContainer";
    import style from "./CodeBody.module.scss";
    function CodeBody({ code_title, css, html, react }) {
    
      return (
        <Container>
          {/* title  */}
          <Row className={style.codeTitle}>
            <h4>{code_title}</h4>
          </Row>
          {/* code out put  */}
          <Row className={style.code_output}>
            <p> Show the style</p>
          </Row>
    
          {/* raw basic code  */}
          <Row>
            <h4> {react}</h4>
            <CodeContainer codeItem={rawCode} />
          </Row>
          {/* raw basic code  */}
        </Container>
      );
    }
    
    export default CodeBody;
    `]
  const csss = [
    `.container_fluid{
        width: 100%;
        height: 100vh;
        
        .Sidebar {
            width: 20%;
            height: 100vh;
            background-color: #F7F7F7;
         
            border-right: 1px solid
            rgb(220, 198, 198);
        }
      .body{
        width: 60%;
      }
      .rightSide{
        width: 20%;
        border-left: 1px solid
        rgb(220, 198, 198);
      }
    
    }
    `,
  ];
  return (
    <Container>
      {/* title  */}
      <Row className={style.codeTitle}>
        <h4>{code_title}</h4>
      </Row>
      {/* code out put  */}
      <Row className={style.code_output}>
        <p> Show the style</p>
      </Row>

      {/* raw basic code  */}
      <Row>
        <h4> {react}</h4>
        <CodeContainer codeItem={rawCode} />
        <h4> {css}</h4>
        <CodeContainer codeItem={csss} />
      </Row>
      {/* raw basic code  */}
    </Container>
  );
}

export default CodeBody;
