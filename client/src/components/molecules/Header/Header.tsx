import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "@atoms/CustomButton";
import logo from "@/images/ghostly-logo.svg";
import "./header.scss";
import Typography from "@atoms/Typography";

const Header: React.FC = () => {
  return (
    <header className="bg-accent w-full h-[106px] header__wrap flex items-center">
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        <a className="text-light text-xl font-bold flex gap-4" href="/">
          <img src={logo} alt="logo" />
          <Typography className="text-light text-semibold text-[2rem]">
            Ghostly
          </Typography>
        </a>
        <ul className="flex space-x-[78px] items-center">
          <li>
            <Link to="/" className="text-light hover:text-red text-2xl">
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-light hover:text-red text-2xl">
              Contact
            </Link>
          </li>

          <li>
            <CustomButton
              onClick={() => window.open("/register", "_self")}
              className=" bg-light hover:bg-red text-blue hover:text-light "
            >
              Sign Up
            </CustomButton>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
