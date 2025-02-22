import { Outlet } from "react-router";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
