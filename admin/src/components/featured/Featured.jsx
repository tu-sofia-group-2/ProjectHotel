import "./featured.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
    return (
      <div className="featured">
         <div className="top">
        <h1 className="title">Общи приходи</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Общо резервации днес</p>
        <p className="amount">420лв.</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Цел</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">18700лв</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Минала седмица</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">18700лв</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Минал месец</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">18700лв</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
  
  export default Featured;