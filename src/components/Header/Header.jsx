
import { Link } from "react-router-dom";


function Header() {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="Favorites">Favorites</Link>
        </li>

        <li>
          <Link to="search">Search</Link>
        </li>

      </ul>
    </div>
  );
}

export default Header;
