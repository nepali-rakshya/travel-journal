import NavCSS from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={NavCSS["nav__content"]}>
      <img src="/images/earth.png" alt="earth-logo" width="20px" />
      <span>my travel journal.</span>
    </nav>
  );
};

export default Nav;
