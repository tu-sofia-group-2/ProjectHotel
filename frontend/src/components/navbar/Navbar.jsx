import "./navbar.css"
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Navbar = () => {

  const {user} = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
        <span className="logo">ProjectHotel</span>
        </Link>
        {user ? user.username :
         (<div className="navItems">
          <button className="navButton">Регисрирай се</button>
          <button className="navButton">Вход</button>
        </div>)}
      </div>
    </div>
  )
}

export default Navbar