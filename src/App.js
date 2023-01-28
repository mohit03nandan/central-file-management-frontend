import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import LoginPin from "./Components/LoginPin/LoginPin";
// import SetPin from "./Components/SetPin/SetPin";
const App = () => {
  return (
    <div>
       
      <BrowserRouter>
              
        <Routes>
                  
          <Route path="/"   element={<LoginPin />} />
                  
          <Route path="Home" element={<Home />} />
                  
          {/* <Route path="setPin" element={<SetPin />} /> */}
                
        </Routes>
            
      </BrowserRouter>
    </div>
  );
};

export default App;
