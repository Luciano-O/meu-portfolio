import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.jpg";

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
              <a href="https://luciano-api-investimentos.herokuapp.com/docs/" className="btn btn-primary" target="_blank">
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
            <a href="https://luciano-blog.herokuapp.com" className="btn btn-primary" target="_blank">
              Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn">
              Github
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
