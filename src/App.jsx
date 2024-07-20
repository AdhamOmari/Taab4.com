import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="back_ground">
      <div className="text_container">
        <h1>This website is under construction until August'5 but...</h1>
        <h2>You can reach us via </h2>
        <div className='flex'>
        <a href="https://wa.me/962791441424" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} style={{ marginLeft: '10px', color: '#25D366', fontSize: '50px' }} />
          </a> 
          <a href="info@taab4.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} style={{ marginLeft: '10px', color: '#ffff', fontSize: '50px' }} />
          </a>
          <a href="https://www.linkedin.com/in/taab4-company/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} style={{ marginLeft: '10px', color: '#0077B5', fontSize: '50px' }} />
          </a>
        </div>
      </div>
    </div>
  );
  
}

export default App;
