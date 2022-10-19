import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.linkedin.com/in/shivakumar-sarthi-s82199/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dmago1kw1/image/upload/v1662642213/avatars/cob5hpdsznyuibpl9m9h.jpg"
              alt="Founder"
            />
            <Typography color="blue">Shivakumar Sarthi</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit LinkedIn
            </Button>
            <span>
              This is a sample wesbite made by Shivakumar, I am Certified MERN
              stack Developer
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.linkedin.com/in/shivakumar-sarthi-s82199/"
              target="blank"
            >
              <LinkedInIcon className="linkedinSvgIcon" />
            </a>

            <a href="https://github.com/ShivuSarthi" target="blank">
              <GitHubIcon className="gitSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
