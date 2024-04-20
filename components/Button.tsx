import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, className }: Props) => {
  return <button className={cn(`font-bold`, className)}>{children}</button>;
};

export default Button;
