import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBlog, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:huhsey@gmail.com" className="footer__link">
        <FontAwesomeIcon icon={faEnvelope} />
        <br />
        huhsey@gmail.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a href="https://github.com/seyhuh">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="social-list__item">
          <a href="https://www.linkedin.com/in/seyeon-huh/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="social-list__item">
          <a href="https://velog.io/@seyhuh">
            <FontAwesomeIcon icon={faBlog} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
