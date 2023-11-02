import {
  Flex,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import { IoLogoYoutube } from "react-icons/io";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord, FaTwitch } from "react-icons/fa";
import { BsFillHouseDoorFill } from "react-icons/bs";
import "./SocialMedia.css";
export function SocialMedia() {
  return (
    <Flex>
      <Box marginRight={4}>
        <Popover>
          <PopoverTrigger>
            <button className="linkHover">
              <IoLogoYoutube fontSize={30} />
            </button>
          </PopoverTrigger>
          <PopoverContent bg="transparent">
            <PopoverBody style={{ border: "0" }}>
              <Stack direction="row" spacing={4}>
                <a
                  href="https://www.youtube.com/@ABGotGame"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="linkHover">Main YT Channel</Button>
                </a>

                <a
                  href="https://www.youtube.com/@abgotgamelive"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="linkHover">2nd Channel</Button>
                </a>
              </Stack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        {/* 
        <a
          className="linkHover"
          href="https://www.youtube.com/@ABGotGame"
          target="_blank"
        >
        </a> */}
      </Box>
      <Box marginRight={4}>
        <a
          className="linkHover"
          href="https://www.instagram.com/andrewcbelton/"
          target="_blank"
        >
          <AiOutlineInstagram fontSize={30} />
        </a>
      </Box>
      <Box marginRight={4}>
        <a
          className="linkHover"
          href="https://twitter.com/ab_gotgame?lang=en"
          target="_blank"
        >
          <AiOutlineTwitter fontSize={30} />
        </a>
      </Box>

      <Box marginRight={4}>
        <a
          href="https://www.twitch.tv/abgotgame_"
          target="_blank"
          className="linkHover"
        >
          <FaTwitch fontSize={30} />
        </a>
      </Box>
      <Box>
        <a
          href="https://discord.com/invite/3RfVFwum"
          target="_blank"
          className="linkHover"
        >
          <FaDiscord fontSize={30} />
        </a>
      </Box>
    </Flex>
  );
}
