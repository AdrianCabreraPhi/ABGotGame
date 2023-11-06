import loveGIF from "../../assets/loveicon.png";
import {Link} from "react-router-dom";

export function PayPalDonateButton() {
  return (
    <>
      {/* <Stack direction='row' spacing={4}> */}
      <Link to="https://www.paypal.com/donate/?hosted_button_id=S8U3KJ252AGJU"
        target="_blank"
        rel="noopener noreferrer">
        <img src={loveGIF} width={250} height={50} alt="Love Icon" />
      </Link>
      {/* <Button size='lg' colorScheme='red'>
    Donate
  </Button>
<img src={loveGIF} width={50} height={30} alt="Love Icon" /> */}

      {/* </Stack> */}

    </>
  )
}