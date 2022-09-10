import Main from "./Container/Main";
import BodyContainer from "./Container/bodyContainer/BodyContainer";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="bodycontainer" element={<BodyContainer />} />
    </Routes>
  );
}

export default App;
