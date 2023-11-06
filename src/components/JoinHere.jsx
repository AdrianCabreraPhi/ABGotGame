import React from "react";
import { Text, List, ListItem, ListIcon,Button } from "@chakra-ui/react";
import "./JoinHere.css";
import medalltier1 from "../assets/medalltier1.png";
import medalltier2 from "../assets/medalltier2.png";
import medalltier3 from "../assets/medalltier3.png";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Fade from "react-reveal/Fade";
import PayPalCheckoutButton from "./paypal/PayPalCheckoutButton";
import {Header} from "./Header";
export function JoinHere() {
  const productTier1 = {
    description: "Tier 1",
    price: "2.99",
    donate: false
  }

  const productTier2 = {
    description: "Tier 2",
    price: "19.99"
  }

  const productTier3 = {
    description: "Tier 3",
    price: "49.99"
  }

  return (
    <>
    <Fade>
      <div>
      <Header/>
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
            <Text fontSize="6xl">$2.99</Text>
            <Text fontSize="3xl">Month</Text>
          </div>
          <div className="containerInfo">
            <List fontSize="2xl" spacing={3}>
              <ListItem alignItems="center" display="flex">
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Exclusive content
              </ListItem>
              <ListItem alignItems="center" display="flex">
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Stream music Playlist
              </ListItem>
              <ListItem alignItems="center" display="flex">
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Name in credits
              </ListItem>
            </List>
            <div className="containerSubInfo">
              <List fontSize="2xl" spacing={3}>
                <ListItem alignItems="center" display="flex">
                  <ListIcon as={CheckCircleIcon} color="gray.500" />
                  E-Books (tutorial videos)
                </ListItem>
              </List>
            </div>
            <div className="containerlastinfo">
              <List fontSize="2xl" spacing={3}>
                <ListItem alignItems="center" display="flex">
                  <ListIcon as={CheckCircleIcon} color="gray.500" />
                  Personal Training
                </ListItem>
                <ListItem alignItems="center" display="flex">
                  <ListIcon as={CheckCircleIcon} color="gray.500" />
                  Play against me
                </ListItem>
              </List>
            </div>
          </div>
          <div className="containerBuy">
            <PayPalCheckoutButton product={productTier1}/>
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
            <Text fontSize="6xl">$19.99</Text>
            <Text fontSize="3xl">Month</Text>
          </div>
          <div className="containerInfo">
            <List fontSize="2xl" spacing={3}>
              <ListItem alignItems="center" display="flex">
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Exclusive content
              </ListItem>
              <ListItem alignItems="center" display="flex">
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Stream music Playlist
              </ListItem>
              <ListItem alignItems="center" display="flex">
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Name in credits
              </ListItem>
              <ListItem alignItems="center" display="flex">
                <ListIcon as={CheckCircleIcon} color="green.500" />
                E-Books (tutorial videos)
              </ListItem>
            </List>
            <div className="containerSubInfo">
            <List fontSize="2xl" spacing={3}>
              <ListItem alignItems="center" display="flex">
                <ListIcon as={CheckCircleIcon} color="gray.500" />
                Personal Training
              </ListItem>
              <ListItem alignItems="center" display="flex">
                <ListIcon as={CheckCircleIcon} color="gray.500" />
                Play against me
              </ListItem>
            </List>
          </div>
          </div>
          <div className="containerBuy">
          <PayPalCheckoutButton product={productTier2}/>
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
            <Text fontSize="6xl">$49.99</Text>
            <Text fontSize="3xl">Month</Text>
          </div>
          <div className="containerInfo">
            <List fontSize="2xl" spacing={3}>
            <ListItem alignItems="center" display="flex">
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Exclusive content
              </ListItem>
              <ListItem alignItems="center" display="flex">
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Stream music Playlist
              </ListItem>
              <ListItem alignItems="center" display="flex">
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Name in credits
              </ListItem>
              <ListItem alignItems="center" display="flex">
                <ListIcon as={CheckCircleIcon} color="green.500" />
                E-Books (tutorial videos)
              </ListItem>
              <ListItem  alignItems="center" display="flex">
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Personal Training
              </ListItem>
              <ListItem  alignItems="center" display="flex">
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Play against me
              </ListItem>
            </List>
          </div>
          <div className="containerBuy">
          <PayPalCheckoutButton product={productTier3}/>
          </div>
        </div>
      </div>
      </Fade>
    </>
  );
}
