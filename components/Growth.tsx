import React from "react";
import Heading from "./Heading";

type Props = {};

const Growth = (props: Props) => {
  return (
    <div className="mt-28 flex flex-col justify-center items-center gap-5 px-4">
      <Heading className="bg-[#E72B76] px-4 py-2 rounded-lg">
        📈 Instagram Growth Model 0 To 100k
      </Heading>
      <img
        src="https://utfs.io/f/6ff8ce4e-0585-4f57-8595-7abb1be940bd-ggqjgv.png"
        alt="growth"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default Growth;
