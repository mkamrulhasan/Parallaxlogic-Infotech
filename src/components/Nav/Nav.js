import Styles from "./Nav.module.css";
import logo from "../../images/logo.png";

const Nav = () => {
  return (
    <div className={Styles.nav}>
      <img src={logo} alt="Logo" />
      <a
        href="https://github.com/mkamrulhasan/Parallaxlogic-Infotech"
        target="_blank" rel="noreferrer"
      >
        Git Repo
      </a>
    </div>
  );
};

export default Nav;
