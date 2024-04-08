import "./App.css";
import {Routes, Route} from 'react-router-dom'
import Home from "./Home";
import Component from "./Component";


function App() {

  return (
    <div>
      <Routes>
      <Route path={"/"} element={<Home/>}/> 
      <Route path={"/:genre/:id"} element={<Component/>}/> 
    </Routes>
    </div>
  );
}

export default App;
