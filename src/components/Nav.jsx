import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Wrapper from '../assets/wrappers/Nav';
import { useNavigate } from "react-router-dom";

function Nav() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => setToken(localStorage.getItem("token"));
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    window.dispatchEvent(new Event("storage"));
    navigate("/login");
  };

  return (
    <Wrapper>
      <nav>
        <Link to="/about">About</Link>

        {token ? (
          <>
            <Link to="/docs">Editor</Link>
            <Link to="/create">Create New</Link>
            <Link to="/users">Users</Link>

            <button
              className="logout-button"
              onClick={() => {
                handleLogout();
              }}
            >
              Logout
            </button>
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
