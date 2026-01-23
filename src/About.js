import './About.css';
import React, { useState } from 'react';
import logo from './images/AtomOne-Logonew.jpg';
import md from './images/md.png';
import icon from './images/icon.png';
import plant from './images/plant.png';
function About(){

  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Newsletter subscription:', email);
    setEmail(''); };
  
  return (
    <div className="container1">

    <div className="header2">
        <header>
        <img src={logo} alt="AtomOne Logo" style={{ width: '200px', height: 'auto' }}/>
        </header>
        </div>
        <section className="content1">
        <h1>About Us</h1>
      </section>

      <p className="paragraph"><h1>" Success is the sum of small efforts, repeated day in and day out. "</h1></p>
      
        <img src={md} alt="md" className="center-imgage " /><div/>
  
  <section className="content-section">
  <div className="content-text">
      <p >
        AtomOne Technologies was founded by Mr. Satish Goyal in 1996. Our company
        is a leading engineering firm specializing in sheet metal fabrication
        products for various industrial sectors, including automotive,
        electrical, electronics and heavy fabrication.
      </p>

      <p>
        Our facilities are equipped with cutting-edge technology and advanced
        manufacturing processes. This enables us to handle technically
        challenging projects while delivering high-quality products, cost-
        competitive design solutions, technical assistance, and timely
        deliveries.
      </p>
       </div>
</section>
    

  <section className="content2">
        <h1>Our Values</h1>

        <img src={icon} alt="icon"  /><div/>
      </section>



  <section className="content-section1">
  <div className="timeline-text">
      <p >
        AtomOne Technologies is committed to being a long-term, reliable strategic partner for our customers. Our early investments in our plants demonstrate our commitment
         to providing the highest quality products and services. We are open to partnerships in press-stampings, welding, machining, plastic injection moulding, and other 
         engineering solutions based on customer needs
      </p>

     
       </div>
</section>
     

     
        <img src={plant} alt="plant" className="center-imgage1 "  /><div/>



         <footer className="footer-container">
      
      <div className="footer-content">
        <div className="footer-section company-info">
          <h2 className="footer-logo">ATOMONE</h2>
          <p className="address">
            Plot No. D1D1aD2D2a E8 & E21 Mascot Industrial Park<br />
            Jadavpura Cross Road Kadi-Vithalapur Highway Dist –<br />
            Mehsana, Gujarat – 382715
          </p>
          <p className="contact-info">
            <strong>Email:-</strong> visheshgoyal@atomone.in<br />
            <strong>Phone:-</strong> +91-9999761226
          </p>
        </div>

       
        <div className="footer-section quick-links">
          <h3 className="section-title">QUICK LINKS</h3>
          <ul className="links-list">
            <li><a href="#products">PRODUCTS</a></li>
            <li><a href="#facilities">FACILITIES</a></li>
            <li><a href="#industry">INDUSTRY 4.0</a></li>
            <li><a href="#location">LOCATION</a></li>
          </ul>
        </div>

      
        <div className="footer-section newsletter">
          <h3 className="section-title">NEWSLETTER</h3>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="subscribe our newsletter"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input"
            />
            <button onClick={handleSubmit} className="newsletter-btn">→</button>
          </div>
          
          <div className="social-section">
            <h4 className="social-title">Follow Us On</h4>
            <a href="#linkedin" className="social-link">in</a>
          </div>
        </div>
      </div>

      
      <div className="footer-bottom">
        <p className="copyright" >© 2026 ATOMONE. All rights reserved.</p>
        <button className="scroll-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>↑</button>
      </div>
</footer>
</div>


        )
};

    

export default About;
