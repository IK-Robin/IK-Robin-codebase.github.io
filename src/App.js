import {  Link, Routes, Route } from "react-router-dom";
import './style/nestade route.css'
import Home from "./Container/nasted routing/Home";
import Products from "./Container/nasted routing/products/Product";
import Login from "./Container/nasted routing/Login";
import Search from "./Container/nasted routing/products/Search";
import ProductDisplay from "./Container/nasted routing/products/ProductDisplay";
import ListProducts from "./Container/nasted routing/products/ListProducts";



function App() {
  return (
   
  <>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="login"> Login </Link>
        <Link to="products/search"> Products </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="products" element={<Products />}>
          <Route path="search" element={<Search />} />
          <Route path="list" element={<ListProducts />} />
          <Route path=":id" element={<ProductDisplay />} />
        </Route>
      </Routes>
   </>
  );
}

export default App;
