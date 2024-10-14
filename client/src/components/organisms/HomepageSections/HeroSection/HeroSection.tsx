import React from "react";
import "./herosection.scss";
import Typography from "@atoms/Typography";
import CustomButton from "@atoms/CustomButton";
import largeGhost from "@/images/ghost.svg";
import Header from "@mols/Header";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import star from "@/images/star.svg";
import underline from "@/images/underline.svg";

const HeroSection: React.FC = () => {
  return (
    <div className="hero__section h-screen relative flex flex-col items-center">
      <div className="mb-[68px] w-full">
        <Header />
      </div>
      <img
        src={star}
        alt="star"
        className="absolute top-[208px] left-[276px] w-[30px] h-[30px]"
      />
      <img
        src={star}
        alt="star"
        className="absolute bottom-[119px] left-[185px] w-[61px] h-[61px]"
      />
      <div className="absolute top-0 h-screen hero__section-image w-full z-[-1]">
        <div className="relative w-full overflow-hidden">
          <img
            className="absolute top-[40px] right-[-320px]"
            src={largeGhost}
            alt="large ghost"
          />
        </div>
      </div>
      <div className="relative">
        <img
          src={star}
          alt="star"
          className="absolute top-[-26px] right-[-12.5px] w-[37px] h-[37px]"
        />
        <Typography
          variant="h2"
          className="text-6xl text-light font-semibold text-center"
        >
          Speak Your Mind
        </Typography>
      </div>
      <div className="relative">
        <Typography
          variant="h1"
          className="text-[64px] text-light font-extrabold text-center"
        >
          Anonymously 🕵️‍♂️
        </Typography>
        <img
          src={underline}
          alt="underline"
          className="absolute bottom-0 w-[696px] h-[10px]"
        />
      </div>
      <Typography className="text-2xl text-white font-normal text-center max-w-[1090px] mt-[40px] mb-[40px]">
        Use Ghostly to send anonymous messages to anyone, anywhere in the world.
        Whether it's a confession, a compliment, or just a random thought, you
        can express yourself freely and without revealing your identity.
      </Typography>
      <CustomButton
        className="bg-red hover:bg-light text-light hover:text-red flex gap-[24px] items-center"
        onClick={() => window.open("/register", "_self")}
      >
        Sign Up
        <BsFillArrowUpRightSquareFill />
      </CustomButton>
    </div>
  );
};

export default HeroSection;
