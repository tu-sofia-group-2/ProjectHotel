import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/List/List";
import Login from "./pages/login/Login";
import ForgottenPass from "./pages/login/ForgottenPass";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/hotels" element = {<List/>}/>
        <Route path = "/hotels/:id" element = {<Hotel/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/forgotPassword" element = {<ForgottenPass/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
