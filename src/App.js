import "./styles/app.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConformOrder from "./components/cart/ConformOrder";
import PaymentSuccess from "./components/cart/PaymentSuccess";
import Login from "./components/login/Login";
import Profle from "./components/profile/Profle";
import OrderDetails from "./components/myorders/OrderDetails";
import Dashborad from "./components/admin/Dashborad";
import Myorders from "./components/myorders/Myorders";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders";
import About from "./components/about/About";
import NotFound from "./components/layout/NotFound";

import "./styles/header.scss";
import "./styles/app.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/conformOrder.scss";
import "./styles/paymentsuccess.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/dashboard.scss";
import "./styles/about.scss";

function App() {
  return (
    <Router>
      <Header isAuthenticated={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/confirmOrder" element={<ConformOrder />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<Profle />} />
        <Route path="/myorders" element={<Myorders />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path="/admin/dashboard" element={<Dashborad />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
