import React from "react";
import Heading from "./Heading";
import SubHeading from "./SubHeading";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-5 px-4 py-2">
      <SubHeading className=" bg-pinkBrand py-2 px-6 rounded-md">
        Are you ready to take your Instagram game to the next level?
      </SubHeading>
      <Heading>
        🚀Go VIRAL On Instagram in{"  "}
        <span className="text-green-400">18 Days </span>
        Learn Premium Content Method And Become An Instagram Influencer...
      </Heading>
      <SubHeading>
        ❌ No Ads ❌ No Equipements ❌ No Team ❌ No Fake Followers
      </SubHeading>
      <div className="w-full h-full flex justify-center items-center gap-8 mt-5">
        <img
          src="https://utfs.io/f/507ed529-4ae5-49c9-ad2c-034d9b395adf-ytcf3j.png"
          alt="hero-img"
          className="aspect-video w-[600px] h-[350px] xl:w-[800px] xl:h-[450px] object-cover rounded-lg border-2 border-gray-600"
        />
      </div>
    </div>
  );
};

export default Hero;
