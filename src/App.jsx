// import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage";
import { JoinHere } from "./components/JoinHere";
import ParticlesBackground from "./components/ParticlesBackground";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import {FeaturedProducts} from "./components/FeaturedProducts";
function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <PayPalScriptProvider
        options={{
          "client-id": "AZ9s3zex2kMIXRoNVYkYpLWgytEFdunwbdKL_zXM4is8h3SjGTDdt-wGAGxOzi0eS1CWA-Mx6E70SBsp",
        }}
      >
        <ParticlesBackground />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          {/* <PayPalButtons style={{ layout: "horizontal" }} /> */}
          <Route path="/tiers" element={<JoinHere />}></Route>
          <Route path="/featured_products" element={<FeaturedProducts/>}></Route>
        </Routes>
      </PayPalScriptProvider>
    </>
  );
}

export default App;
