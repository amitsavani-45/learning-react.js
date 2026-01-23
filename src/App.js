import  React, { useState } from "react";
import intern from './images/intern.jpeg';
import intern2 from './images/intern2.jpg';
import intern3 from './images/intern3.png';
import './App.css';
import logo from './images/AtomOne-Logonew.jpg';


function App() { 
    const [ setMenuOpen] = useState(false);

  return (
    <>

  
    <div className="container">

    <div className="header1">
        <img src={logo} alt="AtomOne Logo" style={{ width: '200px', height: 'auto' }}/>
        <button className="button" onClick={() => setMenuOpen(prev => !prev)}>
          ☰
        </button>
          <img src={intern} alt="intern" className="center-img" width="120" />
          <img src={intern2} alt="intern2" className="center-img2" width="120" />
          <img src={intern3} alt="intern3" className="center-img3" width="120" />

      </div>
          

      <header className="content">
        <h1>Intern information</h1>
      </header>
  
 
      
       

      
      <p>This Intern Information page is designed to collect and maintain essential details of interns joining Atom One. It includes personal and academic information such as name, college, department, city, contact number, email, and joining dat</p>
      <section><h3>Name: Amit Savani</h3></section> 
      <section><h3>college: Gec dahod</h3></section>
      <section><h3>Department:IT</h3></section>
      <section><h3>City:Jamnagar</h3></section>
      <section><h3>Mobile Number:9773447607</h3></section>
      <section><h3>Gmail:amitsavani45@gmail.com</h3></section>
      <section><h3>Joining Date:05/01/2025</h3></section>
       <section><h3>Internship Position:Software Engineer Trainee</h3></section>
       <section><h3>Mentor Name:Abishek Verma</h3></section>
      <footer className="footer  ">
        <p>&copy; 2026 My Website. All rights reserved.</p>
        <p>Contact: atomone@gmail.com</p>
      </footer>
    </div>
    </>
  );
}
 
export default App;