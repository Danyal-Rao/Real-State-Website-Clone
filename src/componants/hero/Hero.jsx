import React from "react";
import "./Hero.css";
import { FaLocationDot } from "react-icons/fa6";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth hero-container ">
        {/* left side div  */}

        <div className=" flexColStart hero-left">
          <div className="hero-title">
            <div className="orage-circle"></div>
            <h1>
              Discover <br /> Most Suitable <br /> Property
            </h1>
          </div>

          <div className=" flexColStart hero-des">
            <span className="secondaryText">
              Find a variety of properties that suit you very easilty
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you
            </span>
          </div>

          <div className=" search-bar">
            <FaLocationDot color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="stats">
            <div className=" flexColStart stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className=" flexColStart stat">
              <span>
                <CountUp start={1200} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className=" flexColStart stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Towards Winnings</span>
            </div>
          </div>
        </div>
        {/* right side div  */}
        <div className=" flexCenter hero-right">
          <div className="image-container">
            <img src="hero-image.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
