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

import { initialState } from "./assets/DB/data";

function App() {
  const [shopItems, setShopItems] = useState([]);
  const [SignatureItems, setSignatureItems] = useState([]);
  const [PerfumeItems, setPerfumeItems] = useState([]);
  const [MultiPerfumeItems, setMultiPerfumeItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const DataList = await axios.get("./DB/shopData.json");
      // console.log(DataList.data.ShopItems);
      setShopItems(DataList.data.shopItems);
      /*       setSignatureItems(DataList.data.ShopItems.SignatureItems);
      setPerfumeItems(DataList.data.ShopItems.PerfumeItems);
      setMultiPerfumeItems(DataList.data.ShopItems.MultiPerfumeItems); */
    };
    getData();
  }, []);

  // const { initialState } = data;
  /*   const [items, setItems] = useState(initialState.items);
  const [cartItems, setCartItems] = useState(initialState.cartItems);

  const addToCart = (itemId) => {
    const found = cartItems.filter((el) => el.itemId === itemId)[0];

    if (found) {
      setQuantity(itemId, found.quantity + 1);
    } else {
      setCartItems([
        ...cartItems,
        {
          itemId,
          quantity: 1,
        },
      ]);
    }
  };

  const setQuantity = (itemId, quantity) => {
    const found = cartItems.filter((el) => el.itemId === itemId)[0];
    const idx = cartItems.indexOf(found);

    const cartItem = {
      itemId,
      quantity,
    };

    setCartItems([
      ...cartItems.slice(0, idx),
      cartItem,
      ...cartItems.slice(idx + 1),
    ]);
  };

  const handleDelete = (itemId) => {
    setCartItems(
      cartItems.filter((ele) => {
        return ele.itemId !== itemId;
      })
    );
  };
 */
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
        <Route path="/search" element={<Search shopItems={shopItems} />} />
        <Route path="/lineUp" element={<LineUp />} />
      </Routes>

      <KakaoService />
      <Footer />
    </>
  );
}

export default App;
