import "./navbar.css"
import {Link, useNavigate} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Navbar = () => {

  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSearch = () => {navigate("/login")}
  return (
    <div id= "wrapper" className="navbar">
       <a href="/"><img src= "https://media.discordapp.net/attachments/1034810869860806669/1052227508755497040/Blue_and_White_Minimalist_Travel_App_Logo.png"  alt="Wondrous Logo"/></a>
      <div className="navContainer">
        <span className="logo">Wondrous Travel App</span>
        {user ? user.username :
         (<div className="navItems">
          <button className="navButton">Регисрирай се</button>
          <button className="navButton" onClick={handleSearch}>Вход</button>
        </div>)}
      </div>
    </div>
  )
}

export default Navbar