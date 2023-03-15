import './App.css'
import {BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import logo from "./assets/home/logo.svg"

function App() {

  return (
    <div className="App">
      <Router>
      <div className='flex justify-between px-[6rem] max-[768px]:px-[3rem] py-8'>
        <img className='max-[768px]:hidden' src={logo} alt="logo" />
        <div className='glass p-3'>
        <NavLink className='mx-5 hover:border-b-2' to="/">00 Home</NavLink>
        <NavLink className='mx-5 hover:border-b-2' to="/destination">01 Destination</NavLink>
        <NavLink className='mx-5 hover:border-b-2' to="/crew">02 Crew</NavLink>
        <NavLink className='mx-5 hover:border-b-2' to="/technology">03 Technology</NavLink>
        </div>
        </div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/destination' element={<Destination />}/>
          <Route path='/crew' element={<Crew />}/>
          <Route path='/technology' element={<Technology />}/>
        </Routes>
       </Router>
   </div>
  )
}

export default App
