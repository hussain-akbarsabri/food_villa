import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between rounded-2xl lg:bg-slate-200">
      <div className="logo-container">
        <Link to="/">
          <img className="w-32 rounded-3xl ml-3 mt-2" src={LOGO_URL} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <Link to="/">
            <li className="px-4 font-semibold text-lg">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-4 font-semibold text-lg">About</li>
          </Link>
          <Link to="contact">
            <li className="px-4 font-semibold text-lg">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
