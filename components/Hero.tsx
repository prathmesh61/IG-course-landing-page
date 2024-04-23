import React from "react";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import Button from "./Button";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-5 px-8 py-2">
      <SubHeading className="text-sm md:text-xl bg-pinkBrand py-2 px-6 rounded-md">
        Are you ready to take your Instagram game to the next level?
      </SubHeading>
      <Heading className="md:text-3xl text-xl">
        🚀Go VIRAL On Instagram in{"  "}
        <span className="text-green-400">18 Days </span>
        Learn Premium Content Method And Become An Instagram Influencer...
      </Heading>
      <SubHeading className="md:text-lg text-sm">
        ❌ No Ads ❌ No Equipements ❌ No Team ❌ No Fake Followers
      </SubHeading>
      <div className="w-full h-full flex flex-col justify-center items-center gap-8 mt-5">
        <img
          src="https://utfs.io/f/507ed529-4ae5-49c9-ad2c-034d9b395adf-ytcf3j.png"
          alt="hero-img"
          className=" w-[440px] h-auto xl:w-[800px] xl:h-[450px] object-contain rounded-lg border-2 border-gray-600 overflow-hidden"
        />
        <p className="font-extrabold text-sm text-yellow-500">
          Enrollment closes on 20 April 2024
        </p>
        <Button className="bg-pinkBrand text-xl text-white py-2 px-8 rounded-lg animate-bounce transition-all duration-1000 delay-1000">
          Reserve Your Seat At ₹299/-
        </Button>
      </div>
    </div>
  );
};

export default Hero;
