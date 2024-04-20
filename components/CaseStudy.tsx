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
    <div className=" flex flex-col gap-8 justify-center items-center">
      <div
        className={cn(
          "flex flex-wrap gap-3 justify-center items-center ",
          rowDirection
        )}
      >
        <img
          src={imgURL}
          alt="case-study"
          className="object-cover object-center xl:w-[700px] xl:h-[400px] w-[500px] h-[300px]"
        />
        <div className="flex flex-col gap-y-4">
          <h2 className="font-bold text-3xl w-[500px] text-center">
            {headline}
          </h2>
          <SubHeading className="border-2 border-gray-400 rounded-lg px-3 py-1">
            ✅{subHeadline}
          </SubHeading>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
