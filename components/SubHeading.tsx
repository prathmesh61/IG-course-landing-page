import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const SubHeading = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        `font-semibold xl:text-xl text-lg  max-w-[1000px] text-center`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default SubHeading;
