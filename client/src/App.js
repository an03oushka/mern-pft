import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { Button } from "antd";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Chart from "./pages/Chart"; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/test" element={<ProtectedRoute><Test /></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/chart" element={<Chart />} /> {/* Update to Chart */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export function ProtectedRoute(props){

  if(localStorage.getItem('expense-tracker-user'))
  {
    return props.children
  }else{
   return <Navigate to='/login'/>
  }

}



export default App;
