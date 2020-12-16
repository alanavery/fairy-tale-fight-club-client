import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/fighters/new">New</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
