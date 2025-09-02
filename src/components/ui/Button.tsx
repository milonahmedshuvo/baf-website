"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type ButtonColor = {
  children: React.ReactNode;
  variant?: "white" | "black" | "orange";
  size?: "small" | "medium";
  href?: string;
  buttonEvent: () => void;
};

const Button = ({
  children,
  variant,
  buttonEvent,
  size,
  href,
}: ButtonColor) => {
  const variants: Record<"white" | "black" | "orange", string> = {
    white: "text-neutral-900 bg-neutral-900",
    black: "text-white border hover:border-white",
    orange: "text-white bg-neutral-900",
  };

  const overlayVariants: Record<"white" | "black" | "orange", string> = {
    white:
      "absolute inset-0 bg-white transition-transform duration-500 group-hover:scale-x-0 origin-center",
    black:
      "absolute inset-0 bg-neutral-900 transition-transform duration-500 group-hover:scale-x-0 origin-center",
    orange:
      "absolute inset-0 bg-orange-600 transition-transform duration-500 group-hover:scale-x-0 origin-center",
  };

  const sizes: Record<"small" | "medium", string> = {
    small:
      "text-[12px] font-normal uppercase px-[10px] py-[3px] rounded-none bg-[#e41b23] text-white inline-block mb-[10px] cursor-pointer",
    medium:
      "text-[15px] font-normal uppercase px-[20px] py-[10px] rounded-[5px] bg-[#e41b23] text-white inline-block mb-[10px] cursor-pointer",
  };

  if (variant) {
    return (
      <div onClick={buttonEvent}>
        <Link
          href={`/${href}`}
          className={` group relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold uppercase tracking-widest overflow-hidden transition-colors ease-in-out duration-500 ${variants[variant]}`}
        >
          <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
            {children}
            <ArrowRight className="w-4 h-4 transition-colors duration-500 group-hover:text-white " />
          </span>

          <span className={overlayVariants[variant]} />
        </Link>
      </div>
    );
  }

  if (size) {
    return (
      <Link href={`/${href}`}>
        <button onClick={buttonEvent} className={sizes[size]}>
          {children}
        </button>
      </Link>
    );
  }
};

export default Button;
