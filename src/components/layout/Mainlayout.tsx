import { Outlet } from "react-router-dom";
import Header from "../homeComponent/Header";
import Footer from "../homeComponent/Footer";

const Mainlayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Mainlayout;
