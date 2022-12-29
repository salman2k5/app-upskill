import { Outlet, Link } from "react-router-dom";
import benigans from './assets/bennigans.gif'
import coke from './assets/cocacola.gif'

const About=()=>{
    return (
        <>
        <section className="navbar">
    <ul><Link to="/">Course library</Link></ul>
    <ul><Link to="/liveClasses">Live classes</Link></ul>
    <ul><Link to="/About">About</Link></ul>
    <ul><Link to="/Login">Login</Link></ul>
</section>
<div className="overview">
<span><h1 className="overh">Curriculum Overview </h1></span>
<p className="ov">Our mission is to help people get great jobs.</p>
</div>
<hr className="hr"/>
<div className="essentials">
    <div className="left">
        <h2>Start with the Essentials</h2>
        <br />
        <p>Get exposure to the essentials of programming and web development. Start with our popular, free course The Essential Web Developer Course - a massive course that covers full-stack web development. You'll learn by building a fictional startup called DevMatch, complete with a login/logout system, e-commerce, email notifications, and more - all deployed on your own free, pro-grade server!</p>
    </div>
    <div className="right">
    <button>HTML</button>
    <button>CSS</button>
    <button>JAVASCRIPT</button>
    <button>GIT</button>
    <button>GITHUB</button>
    <button>RUBY</button>
    <button>RAILS</button>
    <button>JQUERY</button>
    <button>DATABASE</button>
    <button>E-COMMERCE</button>
    <button>SERVERS</button>
    <button>BOOTSTRAP</button>
    <button>API'S</button>
    <button>HTTP</button>
    <button>OBJECT ORIENTED PROGRAMMING</button>
    </div>
</div>
<hr />
<div className="fundamentals">
    <div className="fright">
    <button>circuits</button>
    <button>binary digits</button>
    <button>information theory</button>
    <button>von neumann architecture</button>
    <button>analog to digital conversion</button>
    <button>transistors</button>
    <button>computer engineering</button>
    </div>
    <div className="left">
        <h2>Computer Science Fundamentals</h2>
        <br />
        <p>Survey the landscape of computer science and develop a feel for how computers actually work. The computer you're using right now is, at its core, an information manipulation machine - it senses information from the outside world and converts it into electrons! How does it do that? We'll explain it all.</p>
    </div>
</div>
<hr />
<div className="htss">
    <div className="left">
        <h2>HTML & CSS</h2>
        <br />
        <p>Since the early days of the web, these are the two go-to languages for getting content like text, images, video, or audio on a web page (HTML) and adding colors, sizing, animations, and more (CSS).</p>
    </div>
    <div className="right">
<button>html 5</button>
<button>css 3</button>
<button>user interface</button>
<button>box model</button>
<button>typography</button>
<button>animation</button>
<button>shadows</button>
    </div>
</div>
<hr />
<div className="algorithm">
    <div className="fright">
    <button>recursion</button>
    <button>arrays</button>
    <button>sorting</button>
    <button>graphs</button>
    <button>iteration</button>
    <button>efficiency</button>
    <button>data structures</button>
    </div>
    <div className="left">
        <h2>Algorithms</h2>
        <br />
        <p>Data structures and algorithms are the bread and butter of computer science. Learn everything from sorting, searching, graphs, cryptography and more to take your abilities to the next level. You'll develop an appreciation for efficiency and design with this knowledge, and become an overall better developer.</p>
    </div>
</div>
<hr />
<div className="ghb">
    <div className="left">
        <h2>Advanced JavaScript and Node.js (Coming Soon)</h2>
        <br />
        <p>JavaScript is often called the language of the web - it also happens to be the most popular programming language in the world. You can use it to do nearly anything from adding functionality to your websites, build iOS and Android apps, and even create artificial intelligence. Our curriculum is currently designed around JavaScript - everything from the basics to advanced applications.</p>
    </div>
    <div className="right">
    <button>objects</button>
    <button>prototypes</button>
    <button>arrays</button>
    <button>functions</button>
    <button>primitives</button>
    <button>control flow</button>
    <button>loops</button>
    <button>operators</button>
    <button>scope</button>
    <button>closure</button>
    <button>recursion</button>
    <button>document object model</button>
    </div>
</div>
<hr className="hr"/>
<div className="subfooter">
    <span><h1>These are the courses I wish I had.</h1></span>
    <br />
<p>A decade ago, I was a product manager in a web development team at a funded startup. We quickly spent a large portion of our budget building our web technology. Spending so much limited our ability to grow in the long run and we still didn’t get the product that we envisioned in our heads. I came out of that experience realizing that I needed to learn to code: I saw it as one of the most valuable skills of the 21st century, as we all become more dependent on programmers – the people who are building the world around us.</p>
<div className="logos">
<img src={benigans} alt="" />
<img src={coke} alt="" />
</div>
<p>Since then I’ve had success as a web developer building technology for Coca-Cola, Edison Nation, Toyota, Newell Rubbermaid, First Data, Bennigan’s, and Getaround. I’m a self-taught programmer and after learning how to code online, I was able to get great job offers from multiple companies.</p>
<br />
<p>But learning to code wasn’t easy – in fact there are tons of books, tutorials, and videos out there and it’s easy to get overwhelmed. I was tired of wading through hundreds of resources and still not feeling like a confident web developer. So I ended up creating my own study plan – one that I knew would work. That’s why I created these courses – this is what I wish I had when I was learning.
</p>
<br />
<p>Becoming job-ready should be straightforward and the world needs more developers right now. You’re getting a step-by-step guide, including things my team of great instructors and I have learned on the job, boiled down into a clear path that shows you exactly what to do to get hired or build your own startup.</p>
</div>
<hr className="hr"/>
<span className="fter"><h1>A fraction of the cost of a college education.</h1></span>
<br />
<p className="ftrp">Upskill makes it simple and affordable for anyone worldwide to become a job-ready programmer by taking a straight forward approach to education and job prep.</p>

    <div className="footer">
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
    export default About