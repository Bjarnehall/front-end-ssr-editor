import Wrapper from '../assets/wrappers/Nav';

function Nav({ current, onNavigate }) {
  return (
    <Wrapper>
      <nav>
        <button onClick={() => onNavigate("editor")} disabled={current === "editor"}>Editor</button>
        <button onClick={() => onNavigate("create")} disabled={current === "create"}>Create New</button>
        <button onClick={() => onNavigate("about")}   disabled={current === "about"}>About</button>
      </nav>
    </Wrapper>
  );
}
export default Nav;