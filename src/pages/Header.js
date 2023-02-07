import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
// 이미지
import logo from "../assets/images/logo.png";
// process.env.PUBLIC_URL/images/
import "./header.scss";

function Header() {
  return (
    <header>
      <Link to="/">
        <h1>
          <img src={logo} alt="그랑핸드 로고" />
        </h1>
      </Link>

      <Navigation />
    </header>
  );
}

export default Header;
