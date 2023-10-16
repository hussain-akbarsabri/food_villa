import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <Link to="/">
          <img className="w-28" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <Link to="/">
            <li className="px-4">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-4">About Us</li>
          </Link>
          <Link to="contact">
            <li className="px-4">Contact Us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
