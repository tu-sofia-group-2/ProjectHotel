import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./ForgottenPass.css";

const ForgottenPass = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState('');

  const navigate = useNavigate()
    const onSubmitClicked = async() =>{
        try {
            await axios.put(`/api/login/reissue/${user}`);
            setSuccess(true);
            setTimeout(()=>{
                navigate('/login');
            },3000);
        }catch (e) {
            setErrorMsg(e);
        }
    }


  return success ? (
        <div className="container">
        <h1>Новата парола е изпратена. Проверете своя имейл .</h1>
        </div>
    ) : (
        <div className="container">
            <h1>Въведете Вашето потребителско име в полето</h1>
            {errorMsg && <div className="fail">{errorMsg}</div>}
            <input
                value={user}
                onChange={e=>setUser(e.target.value)}/>

            <button 
                disabled={!user}
                onClick={onSubmitClicked}
                className="lButton"
            >Изпрати линк за възстановяване на паролата на този потребирел.</button>

        </div>
  )
};

export default ForgottenPass;