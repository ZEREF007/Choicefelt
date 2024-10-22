import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <span>Home</span>
      <Link to={"/screen1"}>
        <span>Screen1</span>
      </Link>
      <span>Screen2</span>
      <span>Screen3</span>
    </div>
  );
};
