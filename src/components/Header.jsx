import React from "react";
import { Box, Flex, Text, Spacer,Center } from "@chakra-ui/react";
import { SocialMedia } from "./SocialMedia";
import {Navbar} from "./Navbar"
import "./Header.css";
export function Header() {
const B = {
    color: "red"
}

  return (
    <>
      <Flex
        as="nav"
        alignItems="center"
        justify="space-between"
        pl={4}
        pt={4}
        pr={4}
        bg="transparent"
        color="white"
        mt={5}
        className="header"
      >
        <Box className="socialMedia">
          <SocialMedia />
        </Box>
        <Spacer />
        <Box className="navbar">
          {/* Elemento a la derecha */}
        <Navbar/>
        </Box>
      </Flex>
    <div className="logoForMobile">
      <Center className="logoForMobileText">A <span style={B}>B</span>  </Center>
    </div>
    </>
  );
}
