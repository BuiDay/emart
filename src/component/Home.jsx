import React from "react";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-red border-0">
        <img src="/assets/bg.jpg" class="card-img" alt="..." height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center ">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
