import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Header () {
  return (
    <div>
      <h1 style={{color: 'orange', fontSize: '48px', textTransform: 'uppercase'}}>Andy's Pizza Co.</h1>
    </div>
  )
}

function Menu() {
  return (
    <div className="menu">
      <h2 className="menu-title">Our Menu</h2>
      <p>Authentic Italian cuisine, all from our stone oven.</p>
      <div className="pizzas">
        {pizzaData.map((pizza, index) => (
          <Pizza key={index} {...pizza} />
        ))}
      </div>
    </div>
  );
}

function Pizza({ name, ingredients, price, photoName, soldOut }) {
  return (
    <div className="pizza">
      <img src={photoName} alt={name} />
      <h2>{name}</h2>
      <p>{ingredients}</p>
      <p>${price.toFixed(2)}</p>
      {soldOut && <p className="sold-out">Sold Out</p>}
    </div>
  );
}

function Footer () {
  const hour = new Date().getHours();
  if(hour < 22 && hour >= 10){
    return <footer className="footer">We're currently open</footer>
  } else {
    return <footer className="footer">Sorry, we're closed</footer>
  }
}

function Button() {
  return (
    <button className="btn">Order Now</button>
  )
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
      <Button>Order Now</Button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
