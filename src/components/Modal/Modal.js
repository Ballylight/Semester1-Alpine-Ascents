// import React from 'react';
// import './Modal.css';

// const Modal = ({ closeModal, location, mountainData }) => {
//   return (
//     <div className="modal-overlay">
//       <div className="modal-container">
//         <button className="close-button" onClick={closeModal}>
//           ×
//         </button>
//         <div className="modal-content">
//           <div className="modal-left">
//             <h2>Mountain Info</h2>
//             {mountainData.map((mountain, index) => (
//               <div key={index}>
//                 <h3>{mountain.name}</h3>
//                 <p>{mountain.description}</p>
//               </div>
//             ))}
//           </div>
//           <div className="modal-right">
//             <h2>Map</h2>
//             {location ? (
//               <iframe
//                 src={`https://www.google.com/maps?q=${location.latitude},${location.longitude}&z=15&output=embed`}
//                 width="105%"
//                 height="210px"
//                 style={{ border: 'none' }}
//               ></iframe>
//             ) : (
//               <p>Fetching location...</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;






import React from 'react';
import './Modal.css';

const Modal = ({ closeModal, location, mountainData }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={closeModal}>
          ×
        </button>
        <div className="modal-content">
          <div className="modal-left">
            <h2>Mountain Info</h2>
            {mountainData && mountainData.length > 0 ? (
              mountainData.map((mountain, index) => (
                <div key={index} className="mountain-item">
                  <h3>{mountain.name}</h3>
                  <p><strong>Location:</strong> {mountain.location}</p>
                  <p><strong>Elevation:</strong> {mountain.elevation}</p>
                  <p>{mountain.description}</p>
                  <p><strong>coordinates:</strong> {mountain.weather}</p>
                </div>
              ))
            ) : (
              <p>No mountain data available.</p>
            )}
          </div>
          <div className="modal-right">
            <h2>Map</h2>
            {location ? (
              <iframe
                src={`https://www.google.com/maps?q=${location.latitude},${location.longitude}&z=15&output=embed`}
                width="100%"
                height="200px"
                style={{ border: 'none' }}
              ></iframe>
            ) : (
              <p>Fetching location...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
