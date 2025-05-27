import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h4>Biography</h4>
          <h6>Who We Are?</h6>
          <p>
            <p>Team!</p>
               The hospital has a team of doctors who are dedicated to piroritizing 
               patient comfort
          </p>
          <p>
            <p>Accessibility!</p>
              The hospital has a wheelchair accessible entrance,parking lot, seating,
              and restroom. 
          </p>
          <p>
            <p>Services!</p>
              The hospital offers a range of services, including tratments, surgeries,
              and healthcare packages.
          </p>
          <p>
            <p>Location!</p>
              Sukh Shanti Hospital is located near goverment hospital opposite side, Phulambri.
          </p>
          <p> 
            <p>History!</p>
                Sukh Shanti Hospital is a private hospital that has been a leader in the 
                healthcare industry for many years.
                
                
            


          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;