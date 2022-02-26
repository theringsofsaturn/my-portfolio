import { images } from "../../constants";

import { HiMenuAlt4, HiX, Hix } from "react-icons/hi";
import { motion } from "framer-motion"; // Framer motion

import "./Navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    // Classnames according to BEM methodology
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "contact", "work", "skills", "contact"].map(
          (item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {
          // If toggle true then render the Mobile navigation bar (when we are on small screens)
          toggle && (
            // Special div from framer-motion. check /www.framer.com
            <motion.div
              whileInView={{ x: [300, 0] }} // it will take 300px
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {["home", "about", "contact", "work", "skills", "contact"].map(
                  (item) => (
                    <li key={{ item }}>
                      {/* The anchor tag also has an onClick so when we click a link inside the navigation bar we want to close the navigation and redirect to the section we clicked and see that instead */}
                      <a href={`#${item}`} onClick={() => setToggle(false)}>
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </motion.div>
          )
        }
      </div>
    </nav>
  );
};

export default Navbar;
