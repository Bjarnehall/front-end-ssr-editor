import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Wrapper from '../assets/wrappers/Nav';
import { useNavigate } from "react-router-dom";

/*
Component to handle navbar, the component behaves diffrently
depending if user is logged in or not.
*/
function Nav({ onUserNameUpdate }) {
  // Get token value from localstorage used to se if user is logged
  // in and validation.
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => setToken(localStorage.getItem("token"));
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);
// Handles logout by removing token from client and reset the user name
// redirects user to login page.
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    if (onUserNameUpdate) onUserNameUpdate("");
    window.dispatchEvent(new Event("storage"));
    navigate("/login");
  };
// Render the visable parts of nav components
// check if token show right options.
  return (
    <Wrapper>
      <nav>
        <Link to="/about">About</Link>
        {token ? (
          <>
            <Link to="/docs">Editor</Link>
            <Link to="/create">Create New</Link>
            <Link to="/users">User Pofile</Link>

            <button className="logout-button"
              onClick={() => {
                handleLogout();
              }}
            > Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </Wrapper>
  );
}

export default Nav;
