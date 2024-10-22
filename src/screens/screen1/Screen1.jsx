import { useNavigate } from "react-router-dom";
import { Component1 } from "./components/Component1";
import { Component2 } from "./components/Component2";

export const Screen1 = () => {
  const navigate = useNavigate();
  const goToScreen2 = () => {
    navigate("/screen2");
  };
  return (
    <>
      <div>Screen 1</div>
      <Component1 />
      <Component2 />
      <button onClick={goToScreen2}>Go to screen 2</button>
    </>
  );
};
