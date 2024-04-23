import Link from "next/link";
import React from "react";

type Props = {};

const CTA = (props: Props) => {
  return (
    <div className="bg-[#D62976] rounded-lg text-white px-6 py-2 mt-14 md:mt-28 mb-10 flex flex-col justify-center items-center gap-y-4">
      <p className="md:text-3xl text-xl font-bold text-center">
        0 To 100k Followers On Instagram (Assured Growth)
      </p>
      <Link
        href={"/"}
        className="bg-white py-2 px-4 font-bold rounded-lg text-black hover:scale-125"
      >
        Get Your Dream IN ₹299/-😎
      </Link>
    </div>
  );
};

export default CTA;
