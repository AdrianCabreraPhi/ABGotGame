import { Header } from "./Header";
import { Center, Text } from "@chakra-ui/react";
import { MainButtons } from "./MainButtons";
import Fade from "react-reveal/Fade";
import "./MainPage.css";
export function MainPage() {
  const B = {
    color: "red",
  };
  const estiloTexto = {
    textDecoration: "line-through",
    textDecorationColor: "red",
    textDecorationThickness: "5px",
    // textDecorationStyle: 'double', // Puedes usar otros estilos como 'dotted', 'dashed', etc.
    color: "white", // Cambia el color del texto si es necesario
    fontSize: 150,
  };

  return (
    <>
      <Fade>
        <Header />
        <Fade delay={1000}>
          <Center className="centralLogo" h="50vh">
            <div style={estiloTexto}>
              A<span style={B}>B</span> Got Game
            </div>
          </Center>
        </Fade>
        <Fade delay={2000}>
          <Center className="centerButtons" >
            <MainButtons />
          </Center>
        </Fade>
      </Fade>
    </>
  );
}
