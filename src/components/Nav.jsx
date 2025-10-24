import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Wrapper from '../assets/wrappers/Nav';

function Nav() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const handleStorageChange = () => setToken(localStorage.getItem("token"));
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  function handleLogout() {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      alert("You are now logged out.");
      navigate("/login");
  }

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
/*                 localStorage.clear();
                window.dispatchEvent(new Event("storage"));
                window.location.href = "/login"; */
                handleLogout()
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
