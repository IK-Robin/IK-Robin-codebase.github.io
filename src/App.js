import Main from "./Container/Main";
import BodyContainer from "./Container/bodyContainer/BodyContainer";
import { Sidebar } from "./components";
import { Route, Routes } from "react-router-dom";
import style from "./style/app.module.scss";
import { Container } from "react-bootstrap";
import {Error} from './components'
import User from "./Container/User";
import CodePage from "./Container/CodePage";


function App() {
  

  return (
    <>
      {/* <Sidebar/> 
    <Routes>
      
      <Route path="/" element={<Main />} />
      <Route path="/bodycontainer" element={<BodyContainer />} />
      
    </Routes> */}

      <Container fluid className={`${style.app} ${style.container_fluid}`}>
        <div className={`${style.app_flex} app_flex `}>
          {/* Sidebar section  */}
          <div className={style.Sidebar}>
            <Sidebar />
          </div>

          {/* body section start  */}
          <Container className={` ${style.body}`}>
            <Routes>
              <Route path="/" element={<BodyContainer />} />
              <Route path="/BodyContaine" element={<BodyContainer />} />
              <Route path="codepage" element={<CodePage/>} />
             
              <Route path="codepage/user/:userId/:userName/:userText" element={<User/>} />
              

              <Route path="*" element ={ <Error/>} />
            </Routes>
          </Container>

          {/* body end  */}

          <Container className={style.rightSide}>rithe container</Container>
        </div>
      </Container>
    </>
  );
}

export default App;
