// import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage";
import { JoinHere } from "./components/JoinHere";
import ParticlesBackground from "./components/ParticlesBackground";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import {FeaturedProducts} from "./components/FeaturedProducts";
import { BackButtonMobile } from "./components/BackButtonMobile";
function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
    {/* AdQkH_DzD8iMCd-UdIJQIKTAHGElfZAkvku9TDB751VzQb1D0FaUuZgpHxUGBMCCFmN2MRAfJttoE094 */}
      <PayPalScriptProvider
        options={{
          clientId: "AdQkH_DzD8iMCd-UdIJQIKTAHGElfZAkvku9TDB751VzQb1D0FaUuZgpHxUGBMCCFmN2MRAfJttoE094",
          components: "buttons",
          intent: "subscription",
          vault: true,
        }}
      >
        <ParticlesBackground />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          {/* <PayPalButtons style={{ layout: "horizontal" }} /> */}
          <Route path="/tiers" element={<JoinHere />}></Route>
          <Route path="/featured_products" element={<FeaturedProducts/>}></Route>
          <Route path="*" element={<MainPage />} />
        </Routes>
        <BackButtonMobile/>
      </PayPalScriptProvider>
    </>
  );
}

export default App;
