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
import KakaoServise from "./components/KakaoServise";
// style
import "./assets/style/style.scss";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
      </Routes>

      <KakaoServise />
      <Footer />
    </>
  );
}

export default App;
