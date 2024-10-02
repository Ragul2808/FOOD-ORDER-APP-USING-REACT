import logoImg from '../assets/logo.jpg';
import React from 'react';
import Button from './UI/Button';

export default function Header() {
  return (
    <header id="main-header">
      <div id='title'>
        <img src={logoImg} alt='restaurant' />
        <h1>React Food</h1>
      </div>
      <nav>
        <Button textOnly >Cart (0)</Button>
      </nav>
    </header>
  );
}
