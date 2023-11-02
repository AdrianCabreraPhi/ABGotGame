import { Button, Text } from "@chakra-ui/react";
import "./MainButtons.css";
import { Link } from "react-router-dom";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitch } from "react-icons/fa";
import { ContactMe } from "./ContactMe";

export function MainButtons() {
  return (
    <>
      <Link to="/tiers">
        <Button className="btn" colorScheme="red" mr={5} size="lg">
          Join Here
        </Button>
      </Link>

      <Link
        to="https://www.youtube.com/@ABGotGame"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="btn" mr={5} size="lg">
          <IoLogoYoutube />
          <Text ml={2}>AB Got Game</Text>
        </Button>
      </Link>
      <Link
        to="https://www.youtube.com/@abgotgamelive"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="btn" mr={5} size="lg">
          <IoLogoYoutube />
          <Text ml={2}>AB Live</Text>
        </Button>
      </Link>

      <Link
        to="https://www.twitch.tv/abgotgame_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="btn" mr={5} size="lg">
          <FaTwitch />
        </Button>
      </Link>
      
      <Link to="/featured_products">
        <Button className="btn" mr={5} size="lg">
          Featured Products
        </Button>
      </Link>

      <ContactMe />
    </>
  );
}
