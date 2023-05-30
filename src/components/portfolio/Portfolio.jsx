import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Projetos</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Api de investimentos</h3>

          <div className="portfolio__item-cta">
            <div>
              <a href="https://github.com/Luciano-O/Api-de-investimentos" className="btn">
                Github
              </a>
            </div>

            <div>
              <a href="https://api-invest.onrender.com/docs/#/" className="btn btn-primary" target="_blank">
                Demo
              </a>
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Simulação de blog</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Luciano-O/blog-front-end" className="btn">
              Front-end
            </a>
            <a href="https://github.com/Luciano-O/blog-back-end" className="btn">
              Back-end
            </a>
            <a href="https://blog-46mkeyfco-luciano-o.vercel.app/" className="btn btn-primary" target="_blank">
              Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Portfolio</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Luciano-O/meu-portfolio" className="btn">
              Github
            </a>
            <a href="https://luciano-olivieira-portfolio.vercel.app" className="btn btn-primary" target="_blank">
              Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Portfolio</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Luciano-O/pokedex" className="btn">
              Github
            </a>
            <a href="https://pokedex-psi-nine.vercel.app/" className="btn btn-primary" target="_blank">
              Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
