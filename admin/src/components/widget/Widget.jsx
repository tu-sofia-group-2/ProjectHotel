import "./widget.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";


const Widget = ({type}) => {

    let data;

    const amount = 100;
    const diff = 20;
  
    switch (type) {
      case "user":
        data = {
          title: "ПОТРЕБИТЕЛИ",
          isMoney: false,
          link: "Виж всички потребители",
          icon: (
            <PersonOutlinedIcon
              className="icon"
              style={{
                color: "red",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
              }}
            />
          ),
        };
        break;
      case "order":
        data = {
          title: "РЕЗЕРВАЦИИ",
          isMoney: false,
          link: "Виж всички резервации",
          icon: (
            <ShoppingCartOutlinedIcon
              className="icon"
              style={{
                backgroundColor: "rgba(218, 165, 32, 0.2)",
                color: "golden",
              }}
            />
          ),
        };
        break;
      case "earning":
        data = {
          title: "ПРИХОДИ",
          isMoney: true,
          link: "Виж всички приходи",
          icon: (
            <MonetizationOnOutlinedIcon
              className="icon"
              style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
            />
          ),
        };
        break;
      case "balance":
        data = {
          title: "Баланс",
          isMoney: true,
          link: "Виж детайли",
          icon: (
            <AccountBalanceWalletOutlinedIcon
              className="icon"
              style={{
                backgroundColor: "rgba(128, 0, 128, 0.2)",
                color: "purple",
              }}
            />
          ),
        };
        break;
      default:
        break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="count">
                {data.isMoney && "$"} {amount}
                </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon/>
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget