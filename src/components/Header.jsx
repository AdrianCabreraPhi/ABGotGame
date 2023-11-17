import React from "react";
import { Box, Flex, Spacer, Center } from "@chakra-ui/react";
import { SocialMedia } from "./SocialMedia";
import { Navbar } from "./Navbar";
import "./Header.css";

export function Header() {
  const B = {
    color: "red",
    marginRight: 10,
    letterSpacing:-1
  };

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
          <Navbar />
        </Box>
      </Flex>
      <div className="logoForMobile">
        <Center className="logoForMobileText">
          A<span style={B}>B</span>  GOT GAME
        </Center>
      </div>
    </>
  );
}
