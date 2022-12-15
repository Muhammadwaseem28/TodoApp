import React from "react";
import Home from "./pages/Home";
import{BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <>
   <Router>
    <Routes>
     <Route path='/' element={<Home/>} />

    </Routes>
   </Router>
   
   <ToastContainer />
   </>
  );
}

export default App;
