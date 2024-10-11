import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate(); 

  const handleButtonClick = (path: string) => {
    navigate(path); 
  };

  return (
    <div className="home-container">
      <button onClick={() => handleButtonClick('/opcion1')} className="home-button">
        Encuesta 1
      </button>
      <button onClick={() => handleButtonClick('/opcion2')} className="home-button">
        Encuesta 2
      </button>
      <button onClick={() => handleButtonClick('/opcion3')} className="home-button">
        Encuesta 3
      </button>
    </div>
  );
};

export default Home;

