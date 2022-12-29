
import { Outlet, Link } from "react-router-dom";
import List from './list'
import Grid from './grid'
import react,{useState} from 'react'
const Course=()=>
{
    const [isTrue, setisTrue]=useState(true)
return(
    <>
         <section className="navbar">
    <ul><Link to="/">Course library</Link></ul>
    <ul><Link to="/liveClasses">Live classes</Link></ul>
    <ul><Link to="/About">About</Link></ul>
    <ul><Link to="/Login">Login</Link></ul>
</section>
    <h1 className="h">Course Library - Learn by Building</h1>
    
<div className="courselib">
    <li>This high quality curriculum is carefully designed to teach you job skills as a programmer. You're going to learn a massive set of skills ranging from fundamentals of programming and computer science, data structures and algorithms, state-of-the-art tools, libraries, and frameworks.</li>
    <li>You'll learn by building real-world applications, and learn theory along the way.</li>
    <li>These lessons are taught by seasoned teachers who explain everything in surprisingly simple language. That's what makes Upskill unique!</li>
    <li>Don't wait to get started - we offer over 200 free lessons and add new lessons regularly!</li>
   
</div>
<div className="view">
    <button className="red" onClick={()=>setisTrue(true)}>View List</button>
    <button className="blue" onClick={()=>setisTrue(false)}>View Grid</button>
</div>
{isTrue? <List/> : <Grid/>}

<br />  
    <div className="footer">
<span><h1>More courses and exercises coming soon!</h1></span>   
    <ul>
        <li>© Upskill <a href="https://upskillcourses.com/terms">Terms of Use</a></li>
    
        <li><a href="https://upskillcourses.com/privacy">Privacy Policy</a></li>
    
        <li><a href="https://upskillcourses.com/about">About</a></li>
    
        <li><a href="https://upskillcourses.com/faq">FAQ</a></li>
    
        <li><a href="info@upskillcourses.com">Contact Us</a></li>
    </ul>
   </div>
    </>
)
 }
 export default Course
 
