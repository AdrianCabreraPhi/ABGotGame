import React from "react";
import {
  Text,
  List,
  ListItem,
  ListIcon,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import "./JoinHere.css";
import medalltier1 from "../assets/medalltier1.png";
import medalltier2 from "../assets/medalltier2.png";
import medalltier3 from "../assets/medalltier3.png";
import { CheckCircleIcon, InfoIcon } from "@chakra-ui/icons";
import Fade from "react-reveal/Fade";
import { Header } from "./Header";
import PayPalCheckoutButton from "./paypal/PayPalCheckoutButton";
export function JoinHere() {
  return (
    <>
      <Fade>
        <div>
          <Header />
        </div>
        <div className="container">
          <div className="tier tier1">
            <div className="containerTitle containerTitleTier1">
              <Text className="titleTier" fontSize="2xl">
                Bronze
              </Text>
              <img width="80px" src={medalltier3} />
            </div>
            <div className="containerPrice ">
              <Text fontSize="4xl">$2.99</Text>
              <Text fontSize="2xl">Month</Text>
            </div>
            <div className="containerInfo">
              <List fontSize="1xl" spacing={2}>
                <ListItem alignItems="center" display="flex">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Exclusive content
                </ListItem>
                <ListItem alignItems="center" display="flex">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Private Discord community
                </ListItem>
                <ListItem alignItems="center" display="flex">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Direct messaging ability
                </ListItem>
                <ListItem alignItems="center" display="flex">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Stream music playlist
                </ListItem>
                <ListItem alignItems="center" display="flex">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Name in credits
                </ListItem>
              </List>
              <div className="containerSubInfo">
                <List fontSize="1xl" spacing={3}>
                  <ListItem alignItems="center" display="flex">
                    <ListIcon as={CheckCircleIcon} color="gray.500" />
                    Offensive/Defensive E-Books
                  </ListItem>
                  <ListItem alignItems="center" display="flex">
                    <ListIcon as={CheckCircleIcon} color="gray.500" />
                    Pro Tips and Tricks
                  </ListItem>
                  <ListItem alignItems="center" display="flex">
                    <ListIcon as={CheckCircleIcon} color="gray.500" />
                    Ability to request specific tutorials posted in Discord
                  </ListItem>
                </List>
              </div>
              <div className="containerlastinfo">
                <List fontSize="1xl" spacing={2}>
                  <ListItem alignItems="center" display="flex">
                    <ListIcon as={CheckCircleIcon} color="gray.500" />1 x (1
                    hour) Personal training session per month
                  </ListItem>
                  <ListItem alignItems="center" display="flex">
                    <ListIcon as={CheckCircleIcon} color="gray.500" />
                    1 x
                    Gameplay analysis / month
                    <Tooltip bg='black' color="white" placement='left' label="I personally analyze a game of your choice and provide you with in-depth feedback"  fontSize="md">
                    <InfoIcon ml={1} color="#B87333" />
                  </Tooltip>
                  </ListItem>
                  <ListItem alignItems="center" display="flex">
                    <ListIcon as={CheckCircleIcon} color="gray.500" />1 x Game
                    against me / month
                  </ListItem>
                </List>
              </div>
            </div>
            <div className="containerBuy">
              <PayPalCheckoutButton
                plan_id="P-45815596MC532753KMVIQ57Q"
                type="subscription"
              />
            </div>
          </div>
          <div className="tier tier2">
            <div className="containerTitle containerTitleTier2">
              <Text className="titleTier" fontSize="2xl">
                Silver
              </Text>
              <img width="80px" src={medalltier2} />
            </div>
            <div className="containerPrice ">
              <Text fontSize="4xl">$19.99</Text>
              <Text fontSize="2xl">Month</Text>
            </div>
            <div className="containerInfo">
              <List fontSize="1xl" spacing={2}>
                <ListItem alignItems="center" display="flex">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Exclusive content
                </ListItem>
                <ListItem alignItems="center" display="flex">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Private Discord community
                </ListItem>
                <ListItem alignItems="center" display="flex">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Direct messaging ability
                </ListItem>
                <ListItem alignItems="center" display="flex">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Stream music playlist
                </ListItem>
                <ListItem alignItems="center" display="flex">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Offensive/Defensive E-Books
                </ListItem>
                <ListItem alignItems="center" display="flex">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Pro Tips and Tricks
                </ListItem>
                <ListItem alignItems="center" display="flex">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Ability to request specific <br />
                  tutorials posted in Discord
                </ListItem>
              </List>
              <div className="containerSubInfo">
                <List fontSize="1xl" spacing={3}>
                  <ListItem alignItems="center" display="flex">
                    <ListIcon as={CheckCircleIcon} color="gray.500" />1 x (1
                    hour) Personal training session per month
                  </ListItem>
                  <ListItem alignItems="center" display="flex">
                    <ListIcon as={CheckCircleIcon} color="gray.500" />1 x
                    Gameplay analysis / month
                    <Tooltip bg='black' color="white" placement='left' label="I personally analyze a game of your choice and provide you with in-depth feedback"  fontSize="md">
                    <InfoIcon ml={1} color="gray" />
                  </Tooltip>
                  </ListItem>
                  <ListItem alignItems="center" display="flex">
                    <ListIcon as={CheckCircleIcon} color="gray.500" />1 x Game
                    against me / month
                  </ListItem>
                </List>
              </div>
            </div>
            <div className="containerBuy">
              <PayPalCheckoutButton
                plan_id="P-69V56865VU224901SMVIQ7ZA"
                type="subscription"
              />
            </div>
          </div>
          <div className="tier tier3">
            <div className="containerTitle containerTitleTier3">
              <Text className="titleTier" textAlign="center" fontSize="2xl">
                Gold
              </Text>
              <img width="80px" src={medalltier1} />
            </div>
            <div className="containerPrice">
              <Text fontSize="4xl">$49.99</Text>
              <Text fontSize="2xl">Month</Text>
            </div>
            <div className="containerInfo">
              <List fontSize="1xl" spacing={3}>
                <ListItem alignItems="center" display="flex">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Exclusive content
                </ListItem>
                <ListItem alignItems="center" display="flex">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Private Discord community
                </ListItem>
                <ListItem alignItems="center" display="flex">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Direct messaging ability
                </ListItem>
                <ListItem alignItems="center" display="flex">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Stream music playlist
                </ListItem>
                <ListItem alignItems="center" display="flex">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Offensive/Defensive E-Books
                </ListItem>
                <ListItem alignItems="center" display="flex">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Pro Tips and Tricks
                </ListItem>
                <ListItem alignItems="center" display="flex">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Ability to request specific <br />
                  tutorials posted in Discord
                </ListItem>
                <ListItem alignItems="center" display="flex">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  1 x (1 hour) Personal training session <br />
                  per month
                </ListItem>
                <ListItem alignItems="center" display="flex">
                  <ListIcon as={CheckCircleIcon} color="green.500" />1 x
                  Gameplay analysis per month
                  <Tooltip bg='black' color="white" placement='left' label="I personally analyze a game of your choice and provide you with in-depth feedback"  fontSize="md">
                    <InfoIcon color="gold" ml={2} />
                  </Tooltip>
                </ListItem>
                <ListItem alignItems="center" display="flex">
                  <ListIcon as={CheckCircleIcon} color="green.500" />1 x Game
                  against me per month
                </ListItem>
              </List>
            </div>
            <div className="containerBuy">
              <PayPalCheckoutButton
                plan_id="P-7SS07117KR465740NMVIRAHY"
                type="subscription"
              />
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}
