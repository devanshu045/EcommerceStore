import './App.css';
import Navebar from './components/Navebar';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Order from './pages/Order';


function App() {
  return (
        <div>
          {/* Jai Shree ram */}
          <Navebar/>
         
        <BrowserRouter>
        <Routes>
        <Route path="" element =  {<HomePage/>}/>
        <Route path="/Orders" element = {<Order/>}/>
        </Routes>
        
        </BrowserRouter>

          {/* <HomePage/>
          <NewItemForm/> */}
        </div>
  );
}

export default App;
