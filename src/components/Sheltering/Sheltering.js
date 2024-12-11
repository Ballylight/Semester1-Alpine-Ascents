import React, { useState } from 'react';
import './Sheltering.css';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Location icon
// import firstCab from '../../images/firstcab.png'; 
// import secCab from '../../images/seccab.jpg'; 

const Sheltering = () => {
  const [isActive, setIsActive] = useState(true);

  const handleHover = (hoveredCard) => {
    setIsActive(hoveredCard === 'left');
  };

  return (
    <div className="sheltering-section">
      <div className="sheltering-images">
        <div
          className={`image-card ${isActive ? 'active' : ''}`}
          onMouseEnter={() => handleHover('left')}
          onMouseLeave={() => setIsActive(true)} // Restore the active state when mouse leaves
        >
          {/* <img src={firstCab} alt="Cozy Cabin - Semeru" /> */}
          <div className="image-overlay">
            <div className="stars">★★★★★</div>
            <h4>Cozy Cabin - Semeru</h4>
            <p>
              <FaMapMarkerAlt className="location-icon" /> Malang, Indonesia
            </p>
          </div>
        </div>
        <div
          className="image-card"
          onMouseEnter={() => handleHover('right')}
        >
          {/* <img src={secCab} alt="Tranquil Retreat - Bromo" /> */}
          <div className="image-overlay">
            <div className="stars">★★★★★</div>
            <h4>Tranquil Retreat - Bromo</h4>
            <p>
              <FaMapMarkerAlt className="location-icon" /> Malang, Indonesia
            </p>
          </div>
        </div>
      </div>
      <div className="sheltering-info">
        <h3 className="sheltering-header">Sheltering Packages</h3>
        <h1 className="sheltering-title">Safe Havens</h1>
        <p>Explore our sheltering options, offering safety and comfort with insurance coverage.</p>
        <div className="sheltering-stats">
          <div>
            <h4>30+</h4>
            <p>Safe Shelters</p>
          </div>
          <div>
            <h4>30+</h4>
            <p>Locations</p>
          </div>
          <div>
            <h4>100K+</h4>
            <p>Satisfied Shelter Seekers</p>
          </div>
        </div>
        <button className="search-trip-btn">Search Trip</button>
      </div>
    </div>
  );
};

export default Sheltering;
