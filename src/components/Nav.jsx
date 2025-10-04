import { Link } from "react-router-dom";
import Wrapper from '../assets/wrappers/Nav';

function Nav() {
  return (
    <Wrapper>
      <nav>
        <Link to="/docs">Editor</Link>
        <Link to="/create">Create New</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/users">Users</Link>
      </nav>
    </Wrapper>
  );
}
export default Nav;