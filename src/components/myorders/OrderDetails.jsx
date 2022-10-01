import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {"Parvati -16/b amt"}
          </p>
        </div>

        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"Abhishek kuntare"}
          </p>
        </div>
        <div>
          <h1>Phone</h1>
          <p>
            <b>Phone No.</b>
            {"987656399"}
          </p>
        </div>

        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed At</b>
            {"29-08-2022"}
          </p>
          <p>
            <b>Deliverd At</b>
            {"29-08-2022"}
          </p>
        </div>

        <div>
          <h1>Payment</h1>
          <p>
            <b>Payemt Method</b>
            {"Online"}
          </p>
          <p>
            <b>Payment Reference</b># {"1273938237239"}
          </p>
          <p>
            <b>Paid At</b>
            {"29-08-2022"}
          </p>
        </div>

        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>₹ {"999"}
          </p>
          <p>
            <b>Shipping Charges</b>₹ {"100"}
          </p>
          <p>
            <b>Tax</b>₹ {"50"}
          </p>
          <p>
            <b>Total Amount</b>₹ {`${999 + 100 + 50}`}
          </p>
        </div>

        <article>
          <h1>Order Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{2}</span> X <span>{159}</span>
            </div>
          </div>
          <div>
            <h4>Veg Pizza Panner</h4>
            <div>
              <span>{2}</span> X <span>{499}</span>
            </div>
          </div>
          <div>
            <h4>Coca Cola</h4>
            <div>
              <span>{1}</span> X <span>{79}</span>
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: 800 }}>Sub Total</h4>
            <div style={{ fontWeight: 800 }}>
              ₹{`${159 * 2 + 499 * 2 + 79}`}
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
