import React from 'react'
import Course from './course'
import LiveClasses from './liveClasses'
import About from './About'
import Login from './Login'


import { BrowserRouter, Route , Routes} from 'react-router-dom'
import "./all.css";
function App() 
{

return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Course/>} />
    <Route path='/liveClasses' element={<LiveClasses/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    
    
    
    
  
    </>
  )
}

export default App