import React from "react";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import { Link } from "react-router-dom";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="item" />
    </div>
    <div>
      <button onClick={increment}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={decrement}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const increment = (item) => {};
  const decrement = (item) => {};
  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese burger"}
          img={burger1}
          value={0}
          increment={() => increment(1)}
          decrement={() => increment(1)}
        />
        <CartItem
          title={"Veg burger"}
          img={burger2}
          value={0}
          increment={() => increment(2)}
          decrement={() => increment(3)}
        />
        <CartItem
          title={"Panner  burger"}
          img={burger3}
          value={0}
          increment={() => increment(4)}
          decrement={() => increment(5)}
        />
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
