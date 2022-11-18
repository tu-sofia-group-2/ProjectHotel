import "./header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
    faWalking,
  } from "@fortawesome/free-solid-svg-icons";
  import { DateRange } from 'react-date-range';
  import {useState} from 'react';
  import 'react-date-range/dist/styles.css'; // main css file
  import 'react-date-range/dist/theme/default.css'; // theme css file
  import {format} from 'date-fns';

const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const [openOptions, setOpenOptions] = useState(false);
      const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
      });    

      const handleOption = (name, operation) => {
        setOptions((prev) => {
          return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
          };
        });
      };

    return (
        <div className="header">
            <div className={type == "list" ? "headerContainer listMode" : "headerContainer"}>
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
                { type !== "list" &&
                    <>
                    <h1 className="headerTitle">
                    Търсите къде да отседнете?
                </h1>
                <p className="headerDesc">
                    Ние ви предлагаме най-добрите оферти
                </p>
                <button className="headerBtn">
                    Вход / Регистрирай се
                </button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input 
                        type="text" 
                        placeholder="Накъде отивате?" 
                        className="headerSearchInput"
                        />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span onClick= {() =>setOpenDate(!openDate)}className="headerSearchText">{`${format(
                            date[0].startDate, 
                            "dd/MM/yyyy"
                            )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                        {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                        />}
                    </div>
                   <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span 
                        onClick={() => setOpenOptions(!openOptions)}
                        className="headerSearchText"
                        >{`${options.adult} възрастен ${options.children} деца ${options.room} стая`}</span>
                        {openOptions && (
                        <div className="options"> 
                        <div className="optionItem">                            
                            <span className="optionText">Възрастен</span>
                            <div className="optionCounter">
                            <button 
                            disabled={options.adult <= 1}
                            className="optionCounterButton" 
                            onClick={() => handleOption("adult", "d")}
                            >
                                -
                                </button>
                            <span className="optionCounterNumber">{options.adult}</span>
                            <button 
                            className="optionCounterButton" 
                            onClick={() => handleOption("adult", "i")}
                            >
                                +
                                </button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Деца</span>
                            <div className="optionCounter">
                            <button 
                            disabled={options.children <= 0}
                            className="optionCounterButton" 
                            onClick={() => handleOption("children", "d")}
                            >
                                -
                                </button>
                            <span className="optionCounterNumber">{options.children}</span>
                            <button 
                            className="optionCounterButton"
                            onClick={() => handleOption("children", "i")}
                            >
                                +
                                </button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Стая</span>
                            <div className="optionCounter">
                            <button 
                            disabled={options.room <= 1}
                            className="optionCounterButton" 
                            onClick={() => handleOption("room", "d")}
                            >
                                -
                                </button>
                            <span className="optionCounterNumber">{options.room}</span>
                            <button 
                            className="optionCounterButton" 
                            onClick={() => handleOption("room", "i")}
                            >
                                +
                                </button>
                            </div>
                        </div>
                        </div>
                        )}
                        </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn">Търси</button>
                    </div>
                </div>
                </>}
            </div>
        </div>
    )
}

export default Header