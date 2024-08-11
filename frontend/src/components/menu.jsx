// menu.jsx

import React from 'react';

const Menu = () => {
    return (
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
    );
};

export default Menu;
