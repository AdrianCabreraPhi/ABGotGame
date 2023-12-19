import { useEffect,useState } from "react";
import { useToast, Button, Text, Link } from "@chakra-ui/react";

import {
	PayPalButtons,
	usePayPalScriptReducer
} from "@paypal/react-paypal-js";

const PayPalCheckoutButton = ({ type,plan_id,tier }) => {
	const toast = useToast();
	const [success, setSuccess] = useState(false); 
	const [{ options }, dispatch] = usePayPalScriptReducer();

	const onApprove = (data, actions) => {
		return actions.order.capture().then(function (details) {
			const { payer } = details;
			setSuccess(true);
		  });
	  };

	useEffect(() => {
		if (success) {
		  toast({
			title: "JOIN THE DISCORD HERE:",
			position: "top",
			description: (
			  <Text>
				<Link
				  href="https://discord.gg/aDtSCd6B"
				  isExternal
				  color="blue.900"
				>
				  https://discord.gg/aDtSCd6B
				</Link>
			  </Text>
			),
			status: "success",
			duration: null,
			isClosable: true,
		  });
	
		  if (tier == 1) {
			toast({
			  title: "Payment Successful.",
			  position: "top",
			  description: (
				<div style={{ whiteSpace: "pre-wrap", textAlign: "left" }}>
				  {`Yoo,
				
Big shoutout to you for joining my exclusive Discord community! Your subscription is much appreciated and I'm hype to have you
Stay tuned for exciting updates, exclusive content, and discussions about sports,Madden, Youtube, etc

If you ever have questions, suggestions, or simply want to chat, feel free to write in the Private 🔒 chat-room or DM me on Discord directly

INSTRUCTIONS:

Once you join the server, @ one of the server mods (@Naz / @TMA) or at me (@ab) in the "chat-room" channel for access to the subscriber channels of the server. 

Once you get a reply from either one of us, DM us the email you used when paying for your subscription and you will be given access accordingly

Thanks again for choosing to be apart of this community
Best,
AB
				`}
				</div>
			  ),
			  status: "success",
			  duration: null,
			  isClosable: true,
			});
		  } else {
			toast({
			  title: "Payment Successful.",
			  position: "top",
			  description: (
				<div style={{ whiteSpace: "pre-wrap", textAlign: "left" }}>
				  {`Yoo,
	
Big shoutout to you for leveling up with me! 🎮 Welcome to my Madden Mastery community. Your subscription is much appreciated and I'm hype to help you take your game to the next level and dominate the field. 

Stay tuned for exclusive tips, strategies, and insider insights to up your Madden game. 

I want this community to be something that we can all benefit from so if you ever have any questions about Madden, feel free to ask me in Discord DMs, or ask in the Discord servers private 🔒chat-room.

At the same time if you have the answers to someone's question, share your wisdom! Let's make this a hub for Madden excellence. Together we can elevate each other's game and create a powerhouse community.

INSTRUCTIONS:

Once you join the server, @ one of the server mods (@Naz / @TMA) or at me (@ab) in the "chat-room" channel for access to the subscriber channels of the server. Once you get a reply from either one of us, DM us the email you used when paying for your subscription and you will be given access accordingly.

Thanks again for choosing Madden Mastery!

Best,
AB
				`}
				</div>
			  ),
			  status: "success",
			  duration: null,
			  isClosable: true,
			});
	
		  }
	
		  console.log("Order successful . Your order id is--", orderID);
		}
	  }, [success]);
	


	return (<PayPalButtons
		createSubscription={(data, actions) => {
			return actions.subscription
				.create({
					plan_id: plan_id,
				})
				.then((orderId) => {
					// Your code here after create the order
					return orderId;
				});
		}}
		onApprove={onApprove}
		style={{
			label: "subscribe",
			layout: "horizontal"
			
		}}
	/>);
}

export default PayPalCheckoutButton