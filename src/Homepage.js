import { useState, useEffect } from "react";

import "./Homepage.css";
import logo from "./images/atomone.jpg";
import machine1 from "./images/machine1.png";

import slide1 from "./images/slide1.png";
import slide2 from "./images/slide2.png";
import slide3 from "./images/slide3.png";
import slide4 from "./images/slide4.png";
import slide5 from "./images/slide5.png";
import slide6 from "./images/slide6.png";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

/* ================= PHOTO SLIDER ================= */



function PhotoSlider() {
  const images = [slide1, slide2, slide3, slide4, slide5, slide6];

  const IMAGES_PER_VIEW = 3;
  const totalSlides = Math.ceil(images.length / IMAGES_PER_VIEW);

  const [current, setCurrent] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 3000); 

    return () => clearInterval(interval);
  }, [totalSlides]);

  const prev = () => {
    setCurrent(current === 0 ? totalSlides - 1 : current - 1);
  };

  const next = () => {
    setCurrent(current === totalSlides - 1 ? 0 : current + 1);
  };

  return (
    <div className="slider-container">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div className="slide" key={index}>
            <img src={img} alt={`slide-${index}`} />
          </div>
        ))}
      </div>

      <button className="slider-btn left" onClick={prev}>
        <ChevronLeft size={30} />
      </button>

      <button className="slider-btn right" onClick={next}>
        <ChevronRight size={30} />
      </button>

      <div className="slider-dots">
        {[...Array(totalSlides)].map((_, i) => (
          <span
            key={i}
            className={i === current ? "dot active" : "dot"}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
 

  );
}

/* ================= HOME ================= */

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }
    alert("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <>
      {/* HEADER */}
      <header className="homeheader">
        <img src={logo} alt="logo" className="logo-img" />

        <nav className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
          <a href="#services">What We Do</a>
          <a href="#location">Location</a>
          <a href="#career">Career</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </header>

      <img src={machine1} alt="machine" className="center-machine1" />

      {/* ABOUT */}
      <section className="about-container">
        <h1 className="about-tagline">
          “Precision in Every Cut, Excellence in Every Fold.”
        </h1>

        <div className="about-grid">
          <div>
            <h2 className="section-heading">MISSION</h2>
            <p className="section-text">
            
             To deliver end-to-end solutions in metal stamping and sheet metal processing. We aim to exceed customer expectations while upholding high quality products, safety standards, profitability, and integrity.
            </p>

            <h2 className="section-heading">VISION</h2>
            <p className="section-text">
             To be the preferred partner of OEM’s and Tier 1 suppliers seeking advanced metal stamping solutions globally, recognised for our commitment to excellence and to engineering excellence and customer satisfaction.
            </p>
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
              <div className="stat-number stat-number-small">
                100+ upto 450T
              </div>
              <div className="stat-label">Stamping Presses</div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDER */}
      <PhotoSlider />

      {/* FOOTER */}
      <footer className="footer-container1">
        <div className="footer-content1">
          <div>
            <h2 className="footer-logo1">ATOMONE</h2>
            <p className="address1">
              Plot No. D1D1aD2D2a E8 & E21 Mascot Industrial Park <br />
              Mehsana, Gujarat – 382715
            </p>
            <p className="contact-info1">
              <strong>Email:</strong> visheshgoyal@atomone.in <br />
              <strong>Phone:</strong> +91-9999761226
            </p>
          </div>

          <div>
            <h3 className="section-title1">QUICK LINKS</h3>
            <ul className="links-list1">
              <li><a href="#Products">Products</a></li>
              <li><a href="#Facilities">Facilities</a></li>
              <li><a href="#Industry 4.0">Industry 4.0</a></li>
              <li><a href="#Location">Location</a></li>
            </ul>
          </div>

          <div>
            <h3 className="section-title1">NEWSLETTER</h3>
            <div className="newsletter-form1">
              <input
                type="email"
                placeholder="Subscribe newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleSubmit}>→</button>
            </div>
          </div>
        </div>

        <p className="copyright1">
          © 2026 ATOMONE. All rights reserved.
        </p>
      </footer>
    </>
  );
}
