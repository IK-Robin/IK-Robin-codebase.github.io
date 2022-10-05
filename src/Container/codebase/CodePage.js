import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import codeData from "./CodeData";
import CodeDetails from "./CodeDetails";

function CodePage() {
  return (
    <>
    
      {/* <div>
        {codeData.map((code, index) => {
          return (
            <h5 key={index}>
              <Link to={`codedetails/${code.name}`}>{code.name} </Link>
            </h5>
          );
        })}
      </div> */}
      <Routes>
        <Route path={`codedetails/:userName/*`} element={<CodeDetails/> } />
      </Routes>
    </>
  );
}

export default CodePage;
