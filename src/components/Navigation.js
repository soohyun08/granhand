import { Link } from "react-router-dom";
import "./navigation.scss";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="gnbBar">
        <li>
          <Link to="/search">
            <span class="material-symbols-rounded">search</span>
          </Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/stores">Stores</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
