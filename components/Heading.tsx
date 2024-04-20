import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Heading = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        `font-extrabold xl:text-5xl text-3xl max-w-[1000px]  text-center`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Heading;
