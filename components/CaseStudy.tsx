import React from "react";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import { cn } from "@/lib/utils";

type Props = {
  imgURL: string;
  headline?: string;
  subHeadline?: string;
  rowDirection?: string;
};

const CaseStudy = ({ headline, imgURL, subHeadline, rowDirection }: Props) => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center px-4">
      <div
        className={cn(
          "flex flex-wrap gap-3 justify-center items-center ",
          rowDirection
        )}
      >
        <img
          src={imgURL}
          alt="case-study"
          className="object-contain md:w-[700px] w-[400px] h-auto px-4"
        />
        <div className="flex flex-col justify-center items-center gap-y-4">
          <h2 className="font-bold text-xl md:text-3xl  text-center text-wrap">
            {headline}
          </h2>
          <SubHeading className="md:w-full w-fit md:text-xl text-sm rounded-lg px-3 py-1 bg-[#1A1A1A] border-2 border-gray-500">
            ✅ {subHeadline}
          </SubHeading>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
