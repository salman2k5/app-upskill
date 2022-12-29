import { Outlet, Link } from "react-router-dom";
import IMG from './assets/coding.png'
const liveClasses=()=>{
   return(
    <>
   <section className="navbar">
    <ul><Link to="/">Course library</Link></ul>
    <ul><Link to="/liveClasses">Live classes</Link></ul>
    <ul><Link to="/About">About</Link></ul>
    <ul><Link to="/Login">Login</Link></ul>
</section>
<span><h1 className="bh">The Live Coding Bootcamp</h1></span>
<div className="bootcamp">
<img src={IMG} alt=""/>
<div>
<h3>Upcoming class dates:</h3>
<br />
<li>December 12-16, 2022</li>
<li>December 12-16, 2022</li>
<br />
<h3>Registration:</h3>
<br />
<p>Due to COVID-19, courses are only being offered in an online format until further notice.</p>
<li>In-person ($1800) --Unavailable</li>
<li>Online ($1200) --Unavailable</li>
<br />
<span><h3>Instructor:</h3>Rob Dey</span>
<br />
<h3>Includes:</h3>
<br />
<li>Breakfast and lunch (in-person only)</li>
<li>Course materials</li>
<li>1-year Upskill Pro Membership</li>
</div>
</div>
<div className="desc">
   <h2>OverView</h2>
   <br />
   <p>In this intense week of training, you'll accelerate from a beginner to a self-sufficient software developer. While you cannot become an expert in one week (expertise requires roughly 10,000 hours of practice), you'll be exposed to enough breadth and depth with programming concepts that you'll graduate with the confidence to continue on as a self-taught programmer.</p>
   <br />
   <p>You'll learn by doing, writing a significant amount of code, and build the foundations (and earn the confidence) necessary for embarking on your software development journey and career.</p>
   <br />
   <p>The core skills and knowledge you gain from this class will set you on a path where you'll be capable of self-teaching any subset of the software industry from web development, mobile/iOS/Android, game development, machine learning, etc. - in other words, the goal is to transform you into a capable autodidact.</p>
   <br />
   <p>With a clear understanding of the industry landscape, armed with essential knowledge and a portfolio of real world projects - this week of rigorous training will be the foundation you need to pursue a career as a self-taught programmer.</p>
   <br />
   <h2>Target Audience</h2>
   <br />
   <p>This class is for beginners/newcomers who are interested in adding software engineering to their skillset. If you are coming from a different career background or need mentorship and guidance to kick off your journey with software development, this program will save you time and money in the long run by giving you all the tools and knowledge you need to become a self-taught programmer.</p>
   <br />
   <p>
Intermediate-level developers looking to bolster their understanding and proficiency with JavaScript and the other technologies covered here may also benefit from this instruction.</p>
<br />
<h2>Instruction Format</h2>
<br />
<p>The class is a modern revision of the Coder Manual Complete Web Developer Bootcamp and the Upskill Essential Web Developer Course. The original versions of these video courses were around 35 hours in duration. This live class is approximately 40 hours of training with a heavy focus on JavaScript, computer science fundamentals, algorithms, and other foundational topics that will make students self-sufficient developers with the confidence to dig deeper in the area of software they desire.</p>
<br />
<p>Each class day consists of a mix of prepared presentation by the instructor, live coded demonstrations, discussion, reading, and time to work through projects and exercises. At various points, the class explores some side projects along with a final project that includes the implementation of a full e-commerce SaaS (subscription-as-a-service) platform complete with user profiles, user authentication/login, database/hosting, etc. Throughout the class, there is a significant amount of instructor-led group discussion.</p>
<br />
<p>The next class will be held Monday, December 12th through Friday, December 16th 2022 from 9am to 5pm Pacific Time, with breaks for lunch and an afternoon coffee break. Due to Covid-19, the class is fully online. Students will access the instructor-led classroom live via Zoom. Each class is recorded and downloadable so that students can access the recordings at anytime in the future. Additional materials will be accessed via Github.</p>
</div>
<div className="syllabus">
   <br />
   <h3>Practical basics:</h3>
   <br />
   <li>HTML & CSS</li>
   <li>Build a blog from scratch with Node.js and database</li>
   <li>Bootstrap and jQuery</li>
   <li>Learn to launch a website in minutes: servers/hosting, DNS, SEO</li>
   <li>Learn to launch a website in minutes</li>
   <br />
   <h3>Computer Science Fundamentals</h3>
   <br />
   <li>Data Structures</li>
   <li>Algorithms</li>
   <li>Big O Notation: Space and Time Complexity</li>
   <li>Computer architecture and analog to digital conversion</li>
   <li>Binary math, circuits</li>
   <br />
   <h3>Practical Applications</h3>
   <br />
   <li>Real world project: build a SaaS startup</li>
   <li>Node.js and Express (modules, middleware, callbacks/promises/async/await)</li>
   <li>MongoDB - SQL vs. NoSQL databases</li>
   <li>How to utilize API's</li>
   <li>Integrating Stripe for online stores, e-commerce, subscription payments</li>
   <li>Using Amazon AWS to store and retreive digital assets</li>
   <li>Using Github to manage code and teams</li>
   <br />
   <h3>About the Instructor</h3>
   <br />
   <p>Hello there! I'm Rob Dey and I'm a software engineer with expertise in full-stack (front/back-end) web development. Over the last 10+ years I've built software for Coca-Cola, Toyota, Newell Rubbermaid, Edison Nation, First Data, Bennigan's, and more. My courses have reached over 100,000 students and I've taught software engineering General Assembly. I've also founded my own profitable startup. In addition to teaching, I'm currently developing EdTech software for musicians.</p>
</div>
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
export default liveClasses