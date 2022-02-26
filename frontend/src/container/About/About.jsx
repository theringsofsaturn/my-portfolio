import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

import "./About.scss";

const About = () => {
  const abouts = [
    {
      title: "Front-end development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgURL: images.about01,
    },
    {
      title: "Back-end development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgURL: images.about04,
    },
    {
      title: "Game Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgURL: images.about02,
    },
  ];
  return (
    <>
      <h2 className="head-text">Creating <span>Code & Art</span> <br />for the always evolving <span>Web</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title.index}
          >
            <img src={about.imgURL} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
