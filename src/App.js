import { Routes, Route } from "react-router-dom";

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

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop">
          <Route index element={<Shop />} />
          <Route path=":perfume" element={<Perfume />} />
          <Route path=":signature" element={<Signature />} />
          <Route path=":perfume2" element={<Perfume2 />} />
          <Route path=":MultiPerfume" element={<MultiPerfume />} />
        </Route>

        <Route path="/stores" element={<Stores />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
      </Routes>

      <KakaoService />
      <Footer />
    </>
  );
}

export default App;
