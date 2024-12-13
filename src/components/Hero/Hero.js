// import React, { useState, useEffect } from 'react';
// import './HeroSection.css';
// import Modal from '../Modal/Modal';
// import mountainData from '../../assets/json/mountains.json';
// import mountainImage from '../../assets/images/mountain.jpg';

// const HeroSection = () => {
//     const [location, setLocation] = useState(null);
//     const [isModalOpen, setModalOpen] = useState(false);

//     useEffect(() => {
//         // Fetch user geolocation
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const { latitude, longitude } = position.coords;
//                     setLocation({ latitude, longitude });
//                 },
//                 (error) => {
//                     console.error('Error fetching location:', error);
//                 }
//             );
//         }
//     }, []);

//     const handleSearchClick = () => {
//         setModalOpen(true); // Open the modal
//     };

//     return (
//         <div className="hero-section">
//             <div className="hero-text">
//                 <h1>Find Your Mountain Peak With Us</h1>
//                 <p>
//                     Do not follow where the path may lead. Go instead where there is no
//                     path and leave a trail - <strong>Alpine Team</strong>
//                 </p>
//             </div>
//             <div className="hero-controls">
//                 <div className="control-item">
//                     <span>Semeru</span>
//                     <p>Select the Mountain</p>
//                 </div>
//                 <div className="control-item">
//                     <span>9 June 2022</span>
//                     <p>Choose Trip Date</p>
//                 </div>
//                 <div className="control-item">
//                     <span>Open Trip</span>
//                     <p>Choose Trip Type</p>
//                 </div>
//                 <button className="search-button" onClick={handleSearchClick}>
//                     Search Trip
//                 </button>
//             </div>
//             {/* <div className="hero-image">
//         <img src="/assets/images/mountain.jpg" alt="Mountain" />
//       </div> */}

//             <div className="hero-image">
//                 <img src={mountainImage} alt="Mountain" />
//             </div>


//             {isModalOpen && (
//                 <Modal
//                     closeModal={() => setModalOpen(false)}
//                     location={location}
//                     mountainData={mountainData}
//                 />
//             )}
//         </div>
//     );
// };

// export default HeroSection;













// import React, { useState, useEffect } from 'react';
// import './HeroSection.css';
// import Modal from '../Modal/Modal';
// import mountainData from '../../assets/json/mountains.json';
// import mountainImage from '../../assets/images/mountain.jpg';

// const HeroSection = () => {
//     const [location, setLocation] = useState(null);
//     const [isModalOpen, setModalOpen] = useState(false);

//     useEffect(() => {
//         // Fetch user geolocation
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const { latitude, longitude } = position.coords;
//                     setLocation({ latitude, longitude });
//                 },
//                 (error) => {
//                     console.error('Error fetching location:', error);
//                 }
//             );
//         }
//     }, []);

//     const handleSearchClick = () => {
//         setModalOpen(true); // Open the modal
//     };

//     return (
//         <div className="hero-section">
//             <div className="hero-text">
//                 <h1>Find Your Mountain Peak With Us</h1>
//                 <p>
//                     Do not follow where the path may lead. Go instead where there is no
//                     path and leave a trail - <strong>Alpine Team</strong>
//                 </p>
//             </div>

//             <div className="hero-controls">
//                 <div className="control-item">
//                     <span>Semeru</span>
//                     <p>Select the Mountain</p>
//                 </div>
//                 <div className="control-item">
//                     <span>9 June 2022</span>
//                     <p>Choose Trip Date</p>
//                 </div>
//                 <div className="control-item">
//                     <span>Open Trip</span>
//                     <p>Choose Trip Type</p>
//                 </div>
//                 <button className="search-button" onClick={handleSearchClick}>
//                     Search Trip
//                 </button>
//             </div>

//             <div className="hero-image">
//                 <img src={mountainImage} alt="Mountain" />
//             </div>

//             {isModalOpen && (
//                 <Modal
//                     closeModal={() => setModalOpen(false)}
//                     location={location}
//                     mountainData={mountainData}
//                 />
//             )}
//         </div>
//     );
// };

// export default HeroSection;












import React, { useState, useEffect } from 'react';
import './Hero.css';
import Modal from '../Modal/Modal';
import mountainData from '../../assets/json/mountains.json';
import mountainImage from '../../assets/images/mountain.jpg';
import { FaPlane } from 'react-icons/fa'; // Use travel icon

const HeroSection = () => {
    const [location, setLocation] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        // Fetch user geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude });
                },
                (error) => {
                    console.error('Error fetching location:', error);
                }
            );
        }
    }, []);

    const handleSearchClick = () => {
        setModalOpen(true); // Open the modal
    };

    return (
        <div className="hero-section">
            <div className="hero-content">
                {/* Hero Text */}
                <div className="hero-text">
                    <h1>Find Your Mountain Peak With Us</h1>
                    <p>
                        Do not follow where the path may lead. Go instead where there is no
                        path and leave a trail - <strong>Alpine Team</strong>
                    </p>
                </div>

                {/* Hero Image */}
                <div className="hero-image">
                    <img src={mountainImage} alt="Mountain" />
                </div>

                {/* Floating Menu */}
                <div class="floating-wrapper">
                    <div className="floating-menu">
                        <div className="control-item">
                            <span>Semeru</span>
                            <p>Select the Mountain</p>
                        </div>
                        <div className="control-item">
                            <span>9 June 2022</span>
                            <p>Choose Trip Date</p>
                        </div>
                        <div className="control-item">
                            <span>Open Trip</span>
                            <p>Choose Trip Type</p>
                        </div>
                        <button className="search-button" onClick={handleSearchClick}>
                            Search Trip
                        </button>
                        <div className="travel-icon">
                            <FaPlane size={30} color="#008cba" />
                        </div>
                    </div>
                </div>

            </div>



            {isModalOpen && (
                <Modal
                    closeModal={() => setModalOpen(false)}
                    location={location}
                    mountainData={mountainData}
                />
            )}
        </div>
    );
};

export default HeroSection;