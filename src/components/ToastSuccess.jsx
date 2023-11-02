import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";

export function ToastPaypalSuccess() {
  const toast = useToast();
  useEffect(() => {
      toast({
        title: "Successful subscription",
        description: "Thank you for your purchase!",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top"
      });
  }, []);
  return null;
}






