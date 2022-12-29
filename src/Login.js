import { Outlet, Link } from "react-router-dom";
import upskill from './assets/upskill.svg'
const login=()=>{
return (
    <>
    <section className="navbar">
    <ul><Link to="/">Course library</Link></ul>
    <ul><Link to="/liveClasses">Live classes</Link></ul>

    <ul><Link to="/About">About</Link></ul>
    <ul><Link to="/Login">Login</Link></ul>
</section>
<div className="login">
    <h3>welcome back!</h3>
    <div>
    <img src={upskill} alt="" />
    <h1>LOG IN</h1>
    
   <label>Email</label>
    <input type="text" placeholder="Enter E-mail" />
    <label>Password</label>
    <input type="Number" placeholder="Enter Password" />
    <button>Login</button>
    
    <p><a href="">sign up here</a> or <a href="">forgot password?</a></p>
    </div>
</div>
<div className="footerlogin">
    
    <ul>
        <li>© Upskill <a href="https://upskillcourses.com/terms">Terms of Use</a></li>
    
        <li><a href="https://upskillcourses.com/privacy">Privacy Policy</a></li>
    
        <li><a href="https://upskillcourses.com/about">About</a></li>
    
        <li><a href="https://upskillcourses.com/faq">FAQ</a></li>
    
        <li><a href="info@upskillcourses.com">Contact Us</a></li>
    </ul>
   </div>
    <Outlet/>
    </>
)
}
export default login