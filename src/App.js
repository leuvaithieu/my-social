import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import {Home, Login , ProtectedLayout, ShareLayout} from "./pages/user";

const App = () =>{
  return(
    <div>
      <ToastContainer
        position="top-right"
        autoClose = {2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        // theme={dark ? "dark" : "light"}
      />
      <BrowserRouter>
        <Routes>
          
          <Route path="/home" element={<Home />} />
          <Route
            path={'/' || '/login'}
            element={<Login/>}
          />
          {/* <Route
            path={'/register'}
            element={<Regiter/>}
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}
export default App