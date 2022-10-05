import { CodeBody, Sidebar } from "./components";
import { Link, Route, Routes } from "react-router-dom";
import style from "./style/app.module.scss";
import { Container } from "react-bootstrap";
import { Error } from "./components";
import Test from "./Loading";
import { Home, CodeDetails, CodePage } from "./Container";
import CopyExample from "./components/CopyClipbord";

import Timer from "./Timer";

function App() {
  return (
    <>
      <Container fluid className={`${style.app} ${style.container_fluid}`}>
        <div className={`${style.app_flex} app_flex `}>
          {/* Sidebar section  */}
          <div className={style.Sidebar}>
            <Sidebar />
          </div>

          {/* body section start  */}
          <Container className={` ${style.body}`}>
            <Routes>
              {/* <Route  path="/">
          <Route index element={<Home />} />

          <Route path="/users/*" element={<UserPage />} />
          
          <Route path="userdetail/:userName/*" element={<UserDetail />} />
          <Route path="*" element ={ <Error/>} />
       

          </Route> */}

              <Route path="/">
                <Route index element={<CodePage />} />
                <Route path="/copy" element={<CopyExample/>} />
                <Route path="/users/*" element={<CodePage />} />
                <Route path ='test' element={<Test/>} />
                <Route path ='time' element={<Test/>} />
                <Route path ='timer' element={<Timer/>} />
              </Route>
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
