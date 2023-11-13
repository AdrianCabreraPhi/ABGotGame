import { Box, Grid, Text, Center } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import { Navbar } from "./Navbar";
import { FcCalendar } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./FeaturedProducts.css";
import ropa from "../assets/ropa.png";
import accesorios from "../assets/accesorios.png";
import { SocialMedia } from "./SocialMedia";

export function FeaturedProducts() {
  const arrowStyle = {
    fontSize: "40px",
    color: "#63BDA5",
  };
  return (
    <Fade>
      <Box color="white" p={4}>
        <div className="containerHeader">
          <div className="containerSocialMedia">
            <SocialMedia />
          </div>
          <div className="containerNavbar">
            <Navbar />
          </div>
        </div>
      </Box>
      <Grid
        templateColumns={["1fr", "1fr", "1fr 1fr"]} // Cambia la estructura en dispositivos móviles
        gap={4}
        height="calc(100vh - 64px)" // Resta la altura del navbar
      >
        <Box>
          <Text pt={10} pl={5}>
            <Center className="textMobileVersion" color="white" fontSize="2xl">
              For <span style={{ color: "#63BDA5", margin: "10px" }}>$40 </span>{" "}
              you can play me in a game
            </Center>
            <Center pt={10}>
              <Link
                to="https://calendly.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FcCalendar style={{ fontSize: "250px" }} />
              </Link>
            </Center>
            <Center className="floating-icon">
              <AiOutlineArrowUp style={arrowStyle} />
            </Center>
            <Center pt={2}>
              <Text color="#63BDA5" fontSize="1xl">
                Click here to choose your date{" "}
                <Link
                  to="https://calendly.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                ></Link>
              </Text>
            </Center>
          </Text>
        </Box>
        <Box>
          <Text className="title" fontSize="3xl" pl={5} pt={10} color="white">
            Merchandise
            <span
              style={{ color: "#63BDA5", fontSize: "25px", marginLeft: "5px" }}
            >
              (coming soon)
            </span>
          </Text>

          <Box className="containerMerchandise" h="91%">
            <div className="cardProduct">
              <img src={ropa} alt="" />
              <span>Clothes</span>
            </div>
            <div className="cardProduct">
              <img src={accesorios} alt="" />
              <span>Accessories</span>
            </div>
          </Box>
        </Box>
      </Grid>
    </Fade>
  );
}
