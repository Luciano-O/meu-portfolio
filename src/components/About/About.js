import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from './styles.module.css';
import myPhoto from '../../images/Minha-foto.jpeg';

function About() {
  return (
    <div>
      <h2>About</h2>
      <Row className={styles.container}>
        <Col sm={8} className={styles.infos}>
          <span>Bem-vindo ao meu portfólio.</span>
          <h3>Luciano Oliveira, Desenvolvedor Web Full-Stack.</h3>
          <p>
            Apaixonado por tecnologia, gamer e amante de Game of Thrones,
            Voce poderia usar todos esses adjetivos para me descrever, mas
            hoje oque mais combina comigo é Desenvolvedor obstinado, porque
            nesses ultimos meses em que me dediquei a estudar programação,
            eu percebi que é isso que eu realmente amo, e quando amo algo,
            aquilo se funde a mim, e experiencias passadas como meu ultimo
            emprego ou até mesmo quando tive meu próprio negócio, mostram
            que podem sair coisas incríveis dessa fusão.
          </p>
        </Col>
        <Col sm={4} className={styles.photo}>
          <img src={myPhoto} alt="Minha foto" />
        </Col>
      </Row>
    </div>
  );
}

export default About;
