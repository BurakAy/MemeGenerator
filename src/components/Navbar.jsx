import "../styles/Navbar.css";
import trollLogo from "../assets/TrollFace.png";

const Navbar = () => {
  return (
    <div className="navbar--container">
      <img className="navbar--logo" src={trollLogo} alt="logo" />
      <h2 className="navbar--name">Meme Generator</h2>
      <h3 className="navbar--title">React Course - Project 3</h3>
    </div>
  );
};

export default Navbar;
