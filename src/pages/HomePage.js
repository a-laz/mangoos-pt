import React from 'react';
import Slider from 'react-slick';
import '../style/HomePage.css';
import Navbar from '../components/Navbar';
import foot from '../assets/foot.jpg';
import knee from '../assets/knee.jpg';
import stretch from '../assets/stretch.jpg';
import { Link } from 'react-router-dom';

function HomePage() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true
  };

  const carouselItems = [
    {
      image: knee,
      caption: "Expert Physical Therapy Care"
    },
    {
      image: stretch,
      caption: "State-of-the-Art Facilities"
    },
    {
      image: foot,
      caption: "Personalized Treatment Plans"
    }
  ];

  return (
    <div className="homepage">
      <Navbar />
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Mangoos Physical Therapy!</h1>
{/*           <div className="hero-carousel">
            <Slider {...carouselSettings}>
              {carouselItems.map((item, index) => (
                <div key={index} className="carousel-item">
                  <img src={item.image} alt={item.caption} />
                  <div className="carousel-caption">{item.caption}</div>
                </div>
              ))}
            </Slider>
          </div> */}
          <p>Expert physical therapy care tailored to your needs. We specialize in rehabilitation, pain management, and helping you achieve optimal movement and function.</p>
          <Link to="/book">
            <button className="cta-button">Book Appointment</button>
          </Link>
          <div className="hero-info">
            <div className="hours">
              <i className="fas fa-clock"></i>
              <p>Monday - Friday: 10AM - 6PM<br />Early and late appointments<br /> available upon request</p>
            </div>
            <div className="phone">
              <i className="fas fa-phone"></i>
              <p>(347) 642-3043</p>
            </div>
            <div className="location">
              <i className="fas fa-map-marker-alt"></i>
              <p>27-53 Crescent St.,<br />Lower Level<br />Astoria, NY 11102</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Specializations</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Orthopedic Care</h3>
            <i className="fas fa-crutch"></i>
            <p>Expert treatment for rotator cuff repairs, hip, knee, and ankle injuries. Get back to your active lifestyle with our specialized care.</p>
          </div>
          <div className="feature-card">
            <h3>Musculoskeletal Therapy</h3>
            <i className="fas fa-user-injured"></i>
            <p>Effective relief for neck and lower back pain through targeted therapeutic exercises and trigger point therapy.</p>
          </div>
          <div className="feature-card">
            <h3>Athletic Recovery</h3>
            <i className="fas fa-running"></i>
            <p>Specialized rehabilitation programs for athletes, focusing on injury recovery and performance enhancement.</p>
          </div>
          <div className="feature-card">
            <h3>Neurological Rehabilitation</h3>
            <i className="fas fa-brain"></i>
            <p>Comprehensive care for stroke recovery, Bell's palsy, Parkinson's disease, and balance disorders.</p>
          </div>
          <div className="feature-card">
            <h3>Advanced Treatment Methods</h3>
            <i className="fas fa-microscope"></i>
            <p>Utilizing state-of-the-art techniques including electrical stimulation, therapeutic exercises, and gait training.</p>
          </div>
          <div className="feature-card">
            <h3>Personalized Care Plans</h3>
            <i className="fas fa-clipboard-list"></i>
            <p>Customized treatment programs combining various therapeutic approaches to meet your specific recovery goals.</p>
          </div>
        </div>
        <Link to="/services">
          <button className="services-button">See our services</button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Mangoos Physical Therapy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
