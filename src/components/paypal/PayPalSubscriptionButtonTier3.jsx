import React, { useEffect } from 'react';

const PayPalSubscriptionButtonTier3 = () => {
  useEffect(() => {
    // Cargar el script de PayPal SDK dinámicamente
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=AdQkH_DzD8iMCd-UdIJQIKTAHGElfZAkvku9TDB751VzQb1D0FaUuZgpHxUGBMCCFmN2MRAfJttoE094&vault=true&intent=subscription';
    script.async = true;
    script.onload = () => {
      // Renderizar el botón de PayPal después de cargar el script
      window.paypal.Buttons({
        style: {
          shape: 'rect',
          color: 'gold',
          layout: 'vertical',
          label: 'subscribe',
        },
        createSubscription: function (data, actions) {
          return actions.subscription.create({
            plan_id: "",
          });
        },
        onApprove: function (data, actions) {
          alert(data.subscriptionID); // Puedes agregar un mensaje de éxito opcional para el suscriptor aquí
        },
      }).render('#paypal-button-container'); // Renderiza el botón de PayPal en el contenedor con el ID 'paypal-button-container'
    };
    document.body.appendChild(script);

    return () => {
      // Limpiar el script cuando el componente se desmonta
       document.body.removeChild(script);
    };
  }, []);

  return <div id="paypal-button-container-tier3"></div>;
};

export default PayPalSubscriptionButtonTier3;