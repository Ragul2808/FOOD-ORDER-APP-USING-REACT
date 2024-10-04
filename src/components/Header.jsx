import logoImg from '../assets/logo.jpg';
import React, { useContext } from 'react';
import Button from './UI/Button';
import CartContext from '../store/CartContext';

export default function Header() {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberrsOfItems, item) => {
    return totalNumberrsOfItems + item.quantity;
  }, 0)
  return (
    <header id="main-header">
      <div id='title'>
        <img src={logoImg} alt='restaurant' />
        <h1>React Food</h1>
      </div>
      <nav>
        <Button textOnly >Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
