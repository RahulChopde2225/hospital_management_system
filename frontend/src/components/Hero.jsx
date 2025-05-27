import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            We Are The Best Healthcare Provider In The 
            Region Of Marathwada With A Total Of 100
            Beds Sukh Shanti Hospital Is A Leading 
            Healthcare Provider In Sabhajinagar Being 
            One Of The High Ranking Hospitals In 
            Maharashtra, Sukh Shanti Hospital Is Home
            TO Outstanding Physicians Trained From Top 
            Medical Schools Around The World. 
      
           </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;