import React, { useState } from 'react';
import busBarImage from './images/bus-bar.svg';
import scrollBarImage from './images/scroll-bar.svg';
import homeCenterImage from './images/home-center.svg';
import whereIsMyBusImage from './images/where-is-my-bus.svg';
import locationIcon from './images/location-icon.svg';
import downArrowIcon from './images/down-arrow-icon.svg';
import welcomeImage from './images/Welcome-to-Where-is-my-bus.svg';
import centerBusImage from './images/center-bus.svg';
import ourFeaturesImage from './images/Our-Features.svg';
import twitterImage from './images/twitter.svg';  // Twitter image
import instaImage from './images/insta.svg';    // Instagram image
import youtubeImage from './images/youtube.svg'; // YouTube image
import framesData from './framesData.json'; // Import the JSON data
import './App.css'; // Import the CSS file

// Import images for the frames
import busyFemaleStudentImage from './images/busy-female-student.svg';
import globeLocationImage from './images/globe-location.svg';
import alarmClockImage from './images/alarm-clock.svg';
import secureDocumentImage from './images/secure-document.svg';

function App() {
  const [currentFrame, setCurrentFrame] = useState(0);

  // Get the frames from the imported JSON data
  const frames = framesData.frames;

  // Assign images to the frames
  const images = [
    busyFemaleStudentImage,
    globeLocationImage,
    alarmClockImage,
    secureDocumentImage
  ];

  const goToNextFrame = () => {
    if (currentFrame < frames.length - 1) {
      setCurrentFrame(currentFrame + 1);
    }
  };

  const goToPreviousFrame = () => {
    if (currentFrame > 0) {
      setCurrentFrame(currentFrame - 1);
    }
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Top Navbar with white background for logos */}
      <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", backgroundColor: "white" }}>
        <img src={busBarImage} alt="Left Logo" style={{ height: "50px" }} />
        <img src={scrollBarImage} alt="Right Logo" style={{ height: "50px" }} />
      </div>

      {/* Home Center Image */}
      <div>
        <img 
          src={homeCenterImage} 
          alt="Home Center" 
          style={{ width: '100%', height: 'auto' }} 
        />
      </div>

      {/* Centered "Where Is My Bus" Image */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <img 
          src={whereIsMyBusImage} 
          alt="Where Is My Bus" 
          style={{ maxWidth: '80%', height: 'auto' }} 
        />
      </div>

      {/* Button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            backgroundColor: '#FCD660', 
            border: '1px solid black', 
            borderRadius: '5px', 
            padding: '10px 20px', 
            fontSize: '16px', 
            cursor: 'pointer' 
          }}
        >
          <img 
            src={locationIcon} 
            alt="Location Icon" 
            style={{ height: '20px', marginRight: '10px' }} 
          />
          Track Buses
        </button>
      </div>

      {/* "Know More" Section */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
        <img 
          src={downArrowIcon} 
          alt="Down Arrow Icon" 
          style={{ height: '12px', marginRight: '5px' }} 
        />
        <span 
          style={{ 
            fontSize: '16px', 
            textDecoration: 'underline', 
            cursor: 'pointer', 
            color: 'black' 
          }}
        >
          Know More
        </span>
      </div>

      {/* Yellow Background Section */}
      <div style={{ backgroundColor: '#FFEF9D', padding: '20px 10px', marginTop: '20px', textAlign: 'center' }}>
        {/* Welcome Image */}
        <img 
          src={welcomeImage} 
          alt="Welcome to Where is My Bus" 
          style={{ maxWidth: '100%', height: 'auto', margin: '20px 0' }} 
        />
        
        {/* Paragraph */}
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#333', margin: '20px auto', maxWidth: '600px' }}>
          Your ultimate companion for hassle-free college commutes! Designed with students in mind, our progressive web application provides real-time tracking for college buses, ensuring you never miss a ride. Join us and experience the convenience of knowing exactly where your bus is, every step of the way!
        </p>
        
        {/* Center Bus Image */}
        <img 
          src={centerBusImage} 
          alt="Center Bus" 
          style={{ maxWidth: '100%', height: 'auto', margin: '20px 0' }} 
        />
      </div>

      {/* Centered "Our Features" Image */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <img 
          src={ourFeaturesImage} 
          alt="Our Features" 
          style={{ maxWidth: '100%', height: 'auto' }} 
        />
      </div>

      {/* Dynamic Frames Section */}
      <div style={{ textAlign: "center", padding: "20px" }}>
        {/* Render the current frame */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          flexDirection: 'column', 
          padding: "20px", 
          borderRadius: "8px" 
        }}>
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <div style={{ position: 'relative' }}>
              {/* Frame image */}
              <img 
                src={images[currentFrame]} 
                alt="Frame Image" 
                style={{ width: "50%", height: "auto", marginBottom: '10px' }} 
              />
              {/* Left and Right Arrow Buttons */}
              <button 
                style={{ 
                  position: 'absolute', 
                  left: '-30px', 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  background: 'none', 
                  border: 'none',
                  cursor: 'pointer'
                }}
                onClick={goToPreviousFrame}
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 19l-7-7 7-7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                style={{ 
                  position: 'absolute', 
                  right: '-30px', 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  background: 'none', 
                  border: 'none',
                  cursor: 'pointer'
                }}
                onClick={goToNextFrame}
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5l7 7-7 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <h2 style={{ fontFamily: "Kumbh Sans", color: "#6A4C9C", textAlign: 'center' }}>{frames[currentFrame].heading}</h2>
            <p style={{ textAlign: 'center' }}>{frames[currentFrame].paragraph}</p>
          </div>
        </div>
      </div>

      {/* Black Box for About Us, Contact, and Follow Us */}
      <div style={{ backgroundColor: '	#222222', padding: '30px', marginTop: '30px', border: 'none' }}>
        <section className="about-us" style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2 style={{ color: 'yellow' }}>About Us</h2>
          <p style={{ color: 'white' }}>Our mission is to provide students with the tools they need to travel efficiently and stress-free. Gone are the days of waiting at the bus stop unsure of when your ride will arrive. With "Where is my bus?", you'll have real-time tracking information at your fingertips, ensuring you never miss a bus again.</p>
        </section>

        <section className="contact" style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h3 style={{ color: 'yellow' }}>Want To Reach Out?</h3>
          <a href="mailto:whereismybus22@gmail.com" style={{ color: 'white' }}>Mail us at whereismybus22@gmail.com</a>
        </section>

        <section className="follow-us" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'yellow' }}>Follow Us</h2>
          <div className="social-media-icons" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="social-media-icon" style={{ margin: '0 10px' }}>
              <a href="https://www.instagram.com/whereismybus.tech/" target="_blank" rel="noopener noreferrer">
                <img src={instaImage} alt="Instagram" style={{ height: '30px' }} />
              </a>
            </div>
            <div className="social-media-icon" style={{ margin: '0 10px' }}>
              <a href="https://twitter.com/whereismybus22" target="_blank" rel="noopener noreferrer">
                <img src={twitterImage} alt="Twitter" style={{ height: '30px' }} />
              </a>
            </div>
            <div className="social-media-icon" style={{ margin: '0 10px' }}>
              <a href="https://www.youtube.com/channel/UC-9-wjxow14J10TYWxz2JAw" target="_blank" rel="noopener noreferrer">
                <img src={youtubeImage} alt="YouTube" style={{ height: '30px' }} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
