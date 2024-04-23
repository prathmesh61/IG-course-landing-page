import React from "react";
import Heading from "./Heading";

type Props = {};

const Desire = (props: Props) => {
  return (
    <div className="relative mt-28 flex flex-col gap-8 items-center justify-center">
      <Heading>Let’s Turn Your Goal Into Reality🚀</Heading>
      <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-1 justify-center items-center gap-5 max-w-[800px]">
        <span className="px-4 py-1 rounded-lg text-center bg-[#E72B76] border-2 border-gray-500">
          Want to get Big Brand deals
        </span>
        <span className=" px-4 py-1 rounded-lg text-center bg-[#E72B76] border-2 border-gray-500">
          Get Results In 14 Days
        </span>
        <span className=" px-4 py-1 rounded-lg text-center bg-[#E72B76] border-2 border-gray-500">
          Know content that generates engagement
        </span>
        <span className="px-4 py-1 rounded-lg text-center bg-[#E72B76] border-2 border-gray-500">
          Make your post go VIRAL and reach millions of people
        </span>
        <span className="px-4 py-1 rounded-lg text-center bg-[#E72B76] border-2 border-gray-500">
          Become Famous
        </span>
        <span className="px-4 py-1 rounded-lg text-center bg-[#E72B76] border-2 border-gray-500">
          Attract amazing Career Opportunities
        </span>
      </div>
    </div>
  );
};

export default Desire;
