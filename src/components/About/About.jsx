import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me </h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/abot.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Passionate Fullstack Developer</h3>
              <p>
              I specialize in creating seamless user experiences by merging clean, efficient code with intuitive, visually appealing interfaces.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Cybersecurity Focus</h3>
              <p>
              Currently specializing in cybersecurity, learning to integrate security practices seamlessly into the development process.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
              Passionate about designing intuitive and engaging user interfaces using tools like Figma and WalkMe.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
