import "./navbar.css"

const Navbar = () => {
  return (
    <div id= "wrapper" className="navbar">
       <a href="/"><img src= "https://media.discordapp.net/attachments/1034810869860806669/1052227508755497040/Blue_and_White_Minimalist_Travel_App_Logo.png"  alt="Wondrous Logo"/></a>
      <div className="navContainer">
        <span className="logo">Wondrous Travel App</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
           