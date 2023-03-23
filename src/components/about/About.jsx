import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Saiba um pouco mais</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projetos</h5>
              <small>10+ completos</small>
            </article>
          </div>
          <p>
          Apaixonado por tecnologia, gamer e amante de Game of Thrones, Voce poderia usar todos esses adjetivos para me descrever, mas hoje oque mais combina comigo é Desenvolvedor obstinado, porque nesses ultimos meses em que me dediquei a estudar programação, eu percebi que é isso que eu realmente amo, e quando amo algo, aquilo se funde a mim, e experiencias passadas como meu primeiro emprego ou até mesmo quando decidi aceitar o desafio de ser líder técnico na MacFinder, mostram que podem sair coisas incríveis dessa fusão.
          </p>
          <a href="#contact" className="btn btn-primary">
            Vamos conversar!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
