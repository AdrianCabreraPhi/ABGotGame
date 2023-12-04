import { Header } from "./Header";
import { Center} from "@chakra-ui/react";
import { MainButtons } from "./MainButtons";
import "./MainPage.css";
import { PayPalDonateButton } from "./paypal/PayPalDonateButton";
import ABGOTGAMELOGO from '../assets/AB_GOT_GAME_logo.png'

export function MainPage() {
  const B = {
    color: "red",
  };
  const estiloTexto = {
    // textDecorationStyle: 'double', // Puedes usar otros estilos como 'dotted', 'dashed', etc.
    color: "white", // Cambia el color del texto si es necesario
    fontSize: 150,
  };

  return (
    <>
        <Header />
          <Center className="centralLogo" h="50vh">
          <img width={1600}  src={ABGOTGAMELOGO} />
          </Center>
          <Center className="centerButtons" >
            <MainButtons />
          </Center>
          <Center mt={4}>
          <PayPalDonateButton/>
          </Center>
    </>
  );
}
