import { useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
  const path = useLocation().pathname;
  const array = ["/screen1", "/screen2"];
  return (
    <div>
      <Navbar />
      {children}
      {array.includes(path) ? <></> : <Footer />}
    </div>
  );
};
