import { useEffect,useState } from "react";
import {
	PayPalButtons,
	usePayPalScriptReducer
} from "@paypal/react-paypal-js";

const [paymentApproved, setPaymentApproved] = useState(false);

const PayPalCheckoutButton = ({ type,plan_id }) => {
	const [{ options }, dispatch] = usePayPalScriptReducer();

	useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                intent: "subscription",
            },
        });
    }, [type]);
	
	const onApprove = (data, actions) => {
		// Función que se ejecuta cuando el pago se ha aprobado
		console.log('Pago aprobado:', data);
		setPaymentApproved(true);
	  };

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