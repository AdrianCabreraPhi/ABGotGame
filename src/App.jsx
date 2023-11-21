// import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage";
import { JoinHere } from "./components/JoinHere";
import ParticlesBackground from "./components/ParticlesBackground";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import {FeaturedProducts} from "./components/FeaturedProducts";
import { BackButtonMobile } from "./components/BackButtonMobile";
import { useNavigate, useLocation } from 'react-router-dom';
function App() {
  // const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // No mostrar el botón de retroceso en la ruta "/"
  const showBackButton = location.pathname !== '/';
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
        {showBackButton && <BackButtonMobile />}
      </PayPalScriptProvider>
    </>
  );
}

export default App;
