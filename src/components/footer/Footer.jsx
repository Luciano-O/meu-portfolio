import React from "react";
import "./footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">
        LUCIANO
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#experience">Stacks</a>
        </li>
        <li>
          <a href="#portfolio">Projetos</a>
        </li>
        <li>
          <a href="#contacts">Contatos</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/lucianoog/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Luciano-O">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
