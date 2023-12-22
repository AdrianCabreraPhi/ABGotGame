import {
  Button,
  Text,
  Tooltip
} from "@chakra-ui/react";
import { FaPencilAlt } from "react-icons/fa";
import "./ContactMe.css";

export function ContactMe() {
  const email = "business@abgotgame.com";
  const handleEmailClick = () => {
    window.location.href=`mailto:${email}`;
  }

  return (
    <>
    <Tooltip label="business@abgotgame.com" bg='red.600' fontSize="md">
    <Button onClick={handleEmailClick} className="btn" size="lg">
        <FaPencilAlt />
        <Text ml={2}>Contact Me</Text>
      </Button>
    </Tooltip>
    </>
  );
}
