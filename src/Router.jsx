import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Screen1 } from "./screens/screen1/Screen1";
import { Home } from "./screens/Home";
import { Layout } from "./screens/components/Layout";
import { Screen3 } from "./screens/screen3/Screen3";
import { Screen2 } from "./screens/screen2/Screen2";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/screen1"
          element={
            <Layout>
              <Screen1 />
            </Layout>
          }
        />
        <Route path="/screen2" element={<Screen2 />} />
        <Route path="/screen3" element={<Screen3 />} />
      </Routes>
    </BrowserRouter>
  );
};
