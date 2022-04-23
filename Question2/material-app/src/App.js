import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/Login';
import Dashbord from "./pages/Dashbord";
import UserAthe from './components/UserAthe';
import UserProvider from "./context/ContextLogin";
function App() {

  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
       <Route></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Dashbord" element={<UserAthe>
            <Dashbord />
          </UserAthe>}></Route>
         
          
      </Routes>
      </UserProvider>
      
  );
}

export default App;
