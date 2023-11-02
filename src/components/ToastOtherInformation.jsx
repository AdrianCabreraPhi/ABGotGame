import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";

export function ToastOtherInformation(props) {
  const toast = useToast();
  useEffect(() => {
      toast({
        description: props.description,
        status: "info",
        duration: 9000,
        isClosable: true,
        position: "top"
      });
  }, []);
  return null;
}