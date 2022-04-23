
import "./App.css";
import InfoProvider from "./context/CountaryInfo";
import Header from './components/Header';
import Home from "./pages/Home";
import { Routes, Route,Navigate } from "react-router-dom";
import Countary from "./pages/Countary";
function App() {
  return (
    <div >
      <InfoProvider>
        <Routes>
          <Route path='/' element={<Header/>}>
            <Route path='' element={<Home/>}/>
            <Route path=':name' element={<Countary/>}/>

           
          </Route>
          
        </Routes>
       
      </InfoProvider>
    </div>
  );
}

export default App;
