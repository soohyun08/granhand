import { Link } from "react-router-dom";
import "./navigation.scss";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="globalNav">
        <li>
          <Link to="/search">
            <span className="material-symbols-rounded">search</span>
          </Link>
        </li>
        {/*         <li>
          <Link to="/shop">Shop</Link>
        </li> */}
        <li>
          <Link to="/productList">Products</Link>
        </li>
        {/*         <li>
          <Link to="/stores">Stores</Link>
        </li> */}
      </ul>

      <ul className="registry">
        {/* <li>
          <Link to="/login">Login</Link>
        </li> */}
        <li>
          <Link to="/join">Join</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/wishList">Wish List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
