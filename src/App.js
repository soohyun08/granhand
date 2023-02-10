import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// pages
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Stores from "./pages/Stores";
// components
import Join from "./components/Join";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Search from "./components/Search";
import KakaoService from "./components/KakaoService";
// style
import "./assets/style/style.scss";
import Perfume from "./components/shopSubPage/Perfume";
import Signature from "./components/shopSubPage/Signature";
import Perfume2 from "./components/shopSubPage/Perfume2";
import MultiPerfume from "./components/shopSubPage/MultiPerfume";
import LineUp from "./components/shopSubPage/LineUp";
import ProductPage from "./components/shopSubPage/ProductPage";
import ProductList from "./components/shopSubPage/ProductList";
import WishList from "./components/WishList";

function App() {
  const [ShopItems, setShopItems] = useState([]);
  const [SignatureItems, setSignatureItems] = useState([]);
  const [PerfumeItems, setPerfumeItems] = useState([]);
  const [MultiPerfumeItems, setMultiPerfumeItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const DataList = await axios.get("./DB/shopData.json");
      // console.log(DataList.data.ShopItems);
      setShopItems(DataList.data.ShopItems);
      /*       setSignatureItems(DataList.data.ShopItems.SignatureItems);
      setPerfumeItems(DataList.data.ShopItems.PerfumeItems);
      setMultiPerfumeItems(DataList.data.ShopItems.MultiPerfumeItems); */
    };
    getData();
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<Shop />} />

        <Route path="/productList">
          <Route index element={<ProductList />} />
          <Route path=":itemId" element={<ProductPage />} />
        </Route>
        {/* 
        <Route path="/perfume" element={<Perfume />} />
        <Route path="/signature" element={<Signature />} />
        <Route path="/perfume2" element={<Perfume2 />} />
        <Route path="/multiPerfume" element={<MultiPerfume />} /> */}

        <Route path="/stores" element={<Stores />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/lineUp" element={<LineUp />} />
      </Routes>

      <KakaoService />
      <Footer />
    </>
  );
}

export default App;
