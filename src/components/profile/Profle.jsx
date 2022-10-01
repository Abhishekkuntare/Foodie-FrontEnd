import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/abhishek.jpg";
import { Link } from "react-router-dom";

const Profle = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <section className="profile">
      <main>
        <motion.img src={me} alt="User" {...options} />
        <motion.h5 transition={{ delay: 0.3 }} {...options}>
          Abhishek
        </motion.h5>
        <motion.div {...options} transition={{ delay: 0.5 }}>
          <Link
            to="/admin/dashboard"
            style={{ backgroundColor: "rgb(40,40,40" }}
          >
            Dashboard{" "}
          </Link>
        </motion.div>
        <motion.div {...options} transition={{ delay: 0.5 }}>
          <Link to="/myorders">My Orders</Link>
        </motion.div>

        <motion.button>Logout</motion.button>
      </main>
    </section>
  );
};

export default Profle;
