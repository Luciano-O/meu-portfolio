import React from 'react';
import './styles.module.css';

function Header() {
  return (
    <nav>
      <button type="button">
        About
      </button>
      <button type="button">
        Projetos
      </button>
      <button type="button">
        Contato
      </button>
    </nav>
  );
}

export default Header;
