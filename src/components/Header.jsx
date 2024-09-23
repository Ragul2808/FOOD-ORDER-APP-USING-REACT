import logoImg from '../assets/logo.jpg';
import React from 'react';

export default function Header() {
  return (
    <header id="main-header">
      <div id='title'>
        <img src={logoImg} alt='restaurant' />
        <h1>React Food</h1>
      </div>
      <nav>
        <button>Cart (0)</button>
      </nav>
    </header>
  );
}
