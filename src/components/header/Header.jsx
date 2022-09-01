import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, eu sou o</h5>
        <h1>Luciano</h1>
        <h5 className="text-light">Desenvolvedor Fullstack</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Role para baixo
        </a>
      </div>
    </header>
  );
};

export default Header;
