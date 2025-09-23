import "./Nav.css";

function Nav({ current, onNavigate }) {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "0.5rem 0" }}>
      <button onClick={() => onNavigate("editor")} disabled={current === "editor"}>Editor</button>
      <button onClick={() => onNavigate("create")} disabled={current === "create"}>Create New</button>
      <button onClick={() => onNavigate("about")}   disabled={current === "about"}>About</button>
    </nav>
  );
}
export default Nav;