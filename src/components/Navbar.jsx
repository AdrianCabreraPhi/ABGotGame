import "./Navbar.css";
import { Link } from "react-router-dom";
import {FaHome} from "react-icons/fa"

export function Navbar() {

    return (
        <>
        <div className="navbar">
            <Link to="/">
                <button className="homebtn">
                <FaHome className="homeIcon"/>
                Home
                </button>
            </Link>
            <Link to="/tiers">
                <button>
                Tiers
                </button>
            </Link>
            <Link to="/featured_products">
                <button>
                Featured Products
                </button>
            </Link>
        </div>
        </>
    )



}