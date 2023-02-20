import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// pages
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Main from "./pages/Main";

// components
import Join from "./components/Join";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Search from "./components/Search";

// style
import "./assets/style/style.scss";
import ProductPage from "./components/shopSubPage/ProductPage";
import ProductList from "./components/shopSubPage/ProductList";
import WishList from "./components/WishList";

function App() {
  const [shopItems, setShopItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const DataList = await axios.get("./DB/shopData.json");
      setShopItems(DataList.data.shopItems);
    };
    getData();
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/productList">
          <Route index element={<ProductList />} />
          <Route path=":itemId" element={<ProductPage />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/search" element={<Search shopItems={shopItems} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
