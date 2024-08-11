// Home.jsx

import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <h1>Welcome to <span className="highlight">Delicious Bites</span></h1>
        <nav className="navbar">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <h2>Experience the Taste</h2>
        <p>Discover the finest flavors of our gourmet dishes</p>
        <button className="btn">View Menu</button>
      </section>
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>We are a team of culinary experts dedicated to crafting unforgettable dining experiences. Our passion for food drives us to source the freshest ingredients and create innovative dishes that tantalize your taste buds.</p>
      </section>
      <section id="menu" className="menu">
        <h2>Our Menu</h2>
        <div className="menu-items">
          <div className="menu-item">
            <img src="burger.jpg" alt="Burger" />
            <h3>Burger</h3>
            <p>Grilled beef patty topped with fresh lettuce, tomatoes, onions, and our special sauce, served on a toasted bun.</p>
          </div>
          <div className="menu-item">
            <img src="pizza.jpg" alt="Pizza" />
            <h3>Pizza</h3>
            <p>Hand-tossed crust topped with marinara sauce, mozzarella cheese, pepperoni, bell peppers, and olives.</p>
          </div>
          <div className="menu-item">
            <img src="pasta.jpg" alt="Pasta" />
            <h3>Pasta</h3>
            <p>Al dente spaghetti noodles tossed in a creamy Alfredo sauce with grilled chicken, mushrooms, and spinach.</p>
          </div>
          <div className="menu-item">
            <img src="salad.jpg" alt="Salad" />
            <h3>Salad</h3>
            <p>Organic mixed greens with cherry tomatoes, cucumbers, red onions, avocado slices, and balsamic vinaigrette dressing.</p>
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>For reservations or inquiries, contact us at:</p>
        <p>Email: info@deliciousbites.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <br></br>
      </section>
      <footer className="footer">
        <p>&copy; 2024 Delicious Bites. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
