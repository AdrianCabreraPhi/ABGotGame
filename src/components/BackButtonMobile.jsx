import { ArrowBackIcon } from "@chakra-ui/icons";
import "./BackButtonMobile.css";
import { Link } from "react-router-dom";

export function BackButtonMobile() {
  return (
    <>
      <div className="containerMobileOptions">
        <Link to="/">
        <ArrowBackIcon fontSize="30px" /> Back
        </Link>
      </div>
    </>
  );
}
