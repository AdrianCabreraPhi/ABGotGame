import { Header } from "./Header";
import { Center} from "@chakra-ui/react";
import { MainButtons } from "./MainButtons";
import "./MainPage.css";
import { PayPalDonateButton } from "./paypal/PayPalDonateButton";
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
            <div style={estiloTexto}>
              A<span style={B}>B</span> GOT GAME
            </div>
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
