import React from "react";
import Typography from "@atoms/Typography";
import { ghostSvg } from "@atoms/SvgIcons";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark py-[36px] text-light w-full flex flex-col gap-[28px] items-center justify-center">
      <div className="ghost text-red">{ghostSvg}</div>
      <Typography className="text-light font-bold text-[32px]">
        Ghostly | 2023
      </Typography>
    </footer>
  );
};

export default Footer;
