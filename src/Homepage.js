import './Homepage.css';
import logo from './images/AtomOne-Logonew.jpg';
import machine1 from './images/machine1.png';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import slide1 from './images/slide1.png';
import slide2 from './images/slide2.png';
import slide3 from './images/slide3.png';
import slide4 from './images/slide4.png';
import slide5 from './images/slide5.png';
import slide6 from './images/slide6.png';

function PhotoSlider() {
  const images = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6
  ];

  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const next = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="slider-container" style={{ position: 'relative', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ position: 'relative', height: '500px', overflow: 'hidden', borderRadius: '8px' }}>
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            transition: 'opacity 0.5s ease'
          }}
        />
      </div>

      {/* Previous Button */}
      <button
        onClick={prev}
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.3s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'}
      >
        <ChevronLeft size={30} />
      </button>

      {/* Next Button */}
      <button
        onClick={next}
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.3s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'}
      >
        <ChevronRight size={30} />
      </button>

      {/* Dots Indicators */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px'
      }}>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? '30px' : '10px',
              height: '10px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: i === current ? 'white' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          />
        ))}
      </div>
    </div>
  );
}

function Home() { 

   const [email, setEmail] = useState('');
  
    const handleSubmit = () => {
      console.log('Newsletter subscription:', email);
      setEmail(''); };
  return (
    <>
      <div className="homepagelogo">
        <div className="homeheader">
          <img src={logo} alt="AtomOne Logo" style={{ width: '200px', height: 'auto' }}/>
        </div>
        <img src={machine1} alt="machine1" className="center-machine1" width="120" />
      </div>

      <div className="about-container">
        <div className="about-wrapper">
         
          <h1 className="about-tagline">
            " Precision in Every Cut, Excellence in Every Fold. "
          </h1>

          <div className="about-grid">
           
            <div className="mission-vision-section">
             
              <div className="content-block">
                <h2 className="section-heading">MISSION</h2>
                <p className="section-text">
                  To deliver end-to-end solutions in metal stamping and sheet metal processing. We aim 
                  to exceed customer expectations while upholding high quality products, safety 
                  standards, profitability, and integrity.
                </p>
              </div>

           
              <div className="content-block">
                <h2 className="section-heading">VISION</h2>
                <p className="section-text">
                  To be the preferred partner of OEM's and Tier 1 suppliers seeking advanced metal 
                  stamping solutions globally, recognised for our commitment to excellence and to 
                  engineering excellence and customer satisfaction.
                </p>
              </div>
            </div>

            
            <div className="stats-section">
           
              <div className="stat-item">
                <div className="stat-number">400+</div>
                <div className="stat-label">Employees</div>
              </div>

              
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Manufacturing Units</div>
              </div>

             
              <div className="stat-item">
                <div className="stat-number stat-number-small">100+, upto 450T</div>
                <div className="stat-label">Stamping Presses</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PHOTO SLIDER AFTER STATS SECTION */}
      <div style={{ padding: '40px 20px', backgroundColor: '#f5f5f5' }}>
        <PhotoSlider />



        <footer className="footer-container1">
      
      <div className="footer-content1">
        <div className="footer-section company-info1">
          <h2 className="footer-logo1">ATOMONE</h2>
          <p className="address1">
            Plot No. D1D1aD2D2a E8 & E21 Mascot Industrial Park<br />
            Jadavpura Cross Road Kadi-Vithalapur Highway Dist –<br />
            Mehsana, Gujarat – 382715
          </p>
          <p className="contact-info1">
            <strong>Email:-</strong> visheshgoyal@atomone.in<br />
            <strong>Phone:-</strong> +91-9999761226
          </p>
        </div>

       
        <div className="footer-section quick-links1">
          <h3 className="section-title1">QUICK LINKS</h3>
          <ul className="links-list1">
            <li><a href="#products">PRODUCTS</a></li>
            <li><a href="#facilities">FACILITIES</a></li>
            <li><a href="#industry">INDUSTRY 4.0</a></li>
            <li><a href="#location">LOCATION</a></li>
          </ul>
        </div>

      
        <div className="footer-section newsletter1">
          <h3 className="section-title1">NEWSLETTER</h3>
          <div className="newsletter-form1">
            <input
              type="email"
              placeholder="subscribe our newsletter"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input1"
            />
            <button onClick={handleSubmit} className="newsletter-btn1">→</button>
          </div>
          
          <div className="social-section1">
            <h4 className="social-title1">Follow Us On</h4>
            <a href="#linkedin" className="social-link1">in</a>
          </div>
        </div>
      </div>

      
      <div className="footer-bottom1">
        <p className="copyright1" >© 2026 ATOMONE. All rights reserved.</p>
        <button className="scroll-top1" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>↑</button>
      </div>
</footer>
</div>

</>
  );
}

export default Home;