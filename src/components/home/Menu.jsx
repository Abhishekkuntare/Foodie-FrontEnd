import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import cocacola from "../../assets/cocacola.avif";
import pizza1 from "../../assets/pizza1.avif";

const Menu = () => {
  const addToCartHandler = (itemNum) => {};
  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={200}
          title="Cheese Burger"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={cocacola}
          price={200}
          title="Coca - Cola"
          handler={addToCartHandler}
          delay={0.5}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={pizza1}
          price={200}
          title="Freeze iceCream"
          handler={addToCartHandler}
          delay={0.8}
        />
      </div>
    </section>
  );
};

export default Menu;
