import "./header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBed,
    faCar,
    faPlane,
    faTaxi,
    faWalking,
  } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <div className="header">
            <div className="headerContainer">
                 <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon= {faBed} /> 
                        <span>Обекти</span>               
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon= {faPlane} /> 
                        <span>Полети</span>               
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon= {faCar} /> 
                        <span>Коли под наем</span>               
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon= {faWalking} /> 
                        <span>Места да посетите</span>               
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon= {faTaxi} /> 
                        <span>Такси</span>               
                    </div>
                </div>
                <h1 className="headerTitle">
                    Търсите къде да отседнете?
                </h1>
                <p className="headerDesc">
                    Ние ви предлагаме най-добрите оферти
                </p>
                <button className="headerBtn">
                    Вход / Регистрирай се
                </button>
            </div>
          
        </div>
    )
}

export default Header