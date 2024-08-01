import React from "react";
import "./About.css";

import { SiAdguard } from "react-icons/Si";
import { AiFillStar } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { BsCheck2Square } from "react-icons/bs";

const About = () => {
  return (
    <div>
      <section className="about container">
        <div className="about-img">
          <img src="./about.png" alt="about" />
        </div>
        {/* About Data */}
        <div className="about-data">
          <h2 className="heading">
            Why <span className="gradient-text">Choose</span> Us?
          </h2>
          <p>
            Our products are of the best quality that is suitable for all
            activities for you, this is the reason why you consider us as your
            choice
          </p>
          <div className="about-box-data">
            <div className="about-box">
              <span className="about-icon">
                <SiAdguard />
              </span>
              <h3 className="box-title">Longevity</h3>
              <p>
                When the problems your solving are meaningful to people, and the
                solutions you propose are honest
              </p>
            </div>
            <div className="about-box">
              <span className="about-icon">
                <AiFillStar />
              </span>
              <h3 className="box-title">Heritage</h3>
              <p>
                When the problems your solving are meaningful to people, and the
                solutions you propose are honest. We are a pioneer.
              </p>
            </div>
            <div className="about-box">
              <span className="about-icon">
                <BsCheck2Square />
              </span>
              <h3 className="box-title">Quality</h3>
              <p>
                Our manufacturing facilities use the best, sustainable materials
                and follow world-class to ensure quality
              </p>
            </div>
            <div className="about-box">
              <span className="about-icon">
                <IoIosPeople />
              </span>
              <h3 className="box-title">Community</h3>
              <p>
                We always pay attention to our users, we always accompanies us
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
