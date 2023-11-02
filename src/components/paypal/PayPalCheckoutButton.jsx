import { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { ToastPaypalSuccess } from "../ToastSuccess";
import { ToastOtherInformation } from "../ToastOtherInformation";

const PayPalCheckoutButton = (props) => {
  const { product } = props;
  const [paidFor, setPaidFor] = useState(false);

  const [error, setError] = useState(null);
  const handleApprove = (orderId) => {
    // Call backend function to fulfill order

    // if response is success
    setPaidFor(true);
    // Refresh user's account or subscription status

    // if the response is error
    // setError("Your payment was processed successfully, However, we are unable to fulfill your purchase. Please contact us at support abgames@gmail.com for assistance.")
  };

  return (
    <>
      {error && <ToastOtherInformation description={error} />}
      {paidFor && <ToastPaypalSuccess />}
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: product.description,
                amount: {
                  value: product.price,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          handleApprove(data.orderID);
        }}
        onCancel={() => {
          // Display cancel message modal or redirect user to cancel page or back to cart
        }}
        onError={(err) => {
          setError(err);
          console.error("Paypal Checkout onError", err);
        }}
        style={{
          layout: 'horizontal', // You can customize the layout as needed
          color: 'gold', // Customize the button color
          shape: 'rect', // Customize the button shape
          label: 'pay', // Show only the PayPal button
        }}
      />
    </>
  );
};

export default PayPalCheckoutButton;
