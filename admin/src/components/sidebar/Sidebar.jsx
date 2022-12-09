import "./sidebar.css"
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">Wondrous</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                <p className="title">НАЧАЛО</p>
                    <li>
                        <DashboardIcon className="icon"  />
                        <span>Дашборд</span>
                    </li>
                    <p className="title">СПИСЪЦИ</p>
                    <li>
                        <PersonOutlineIcon className="icon" />
                        <span>Потребители</span>
                    </li>
                    <li>
                        <StoreIcon className="icon" />
                        <span>Продукти</span>
                    </li>
                    <li>
                        <CreditCardIcon className="icon" />
                        <span>Поръчки</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon" />
                        <span>Доставки</span>
                    </li>
                    <p className="title">ПОЛЕЗНИ</p>
                    <li>
                        <InsertChartIcon className="icon" />
                        <span>Статистики</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon" />
                        <span>Нотификации</span>
                    </li>
                    <p className="title">УСЛУГИ</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon" />
                        <span>Система</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon" />
                        <span>Логове</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon" />
                        <span>Настройки</span>
                    </li>
                    <p className="title">ПОТРЕБИТЕЛ</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>Профил</span>
                    </li>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span>Log out</span>
                    </li>

                </ul>
            </div>
          

        </div>
    )
}

export default Sidebar