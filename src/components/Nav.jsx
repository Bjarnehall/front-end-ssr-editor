import "./Nav.css";

function Nav({ current, onNavigate }) {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "0.5rem 0" }}>
      <button onClick={() => onNavigate("home")}   disabled={current === "home"}>Home</button>
      <button onClick={() => onNavigate("all")}    disabled={current === "all"}>All docs</button>
      <button onClick={() => onNavigate("create")} disabled={current === "create"}>Create</button>
      <button onClick={() => onNavigate("update")} disabled={current === "update"}>Update</button>
      <button onClick={() => onNavigate("delete")} disabled={current === "delete"}>Delete</button>
    </nav>
  );
}
export default Nav;