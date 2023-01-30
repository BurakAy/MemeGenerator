import "../styles/Navbar.css";
import trollLogo from "../assets/TrollFace.png";

const Navbar = () => {
  return (
    <div className="navbar--container">
      <img className="navbar--logo" src={trollLogo} alt="logo" />
      <p className="navbar--name">MemeGenerator</p>
      <p className="navbar--title">React Course - Project 3</p>
    </div>
  );
};

export default Navbar;
