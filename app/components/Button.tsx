import type { ButtonHTMLAttributes } from "react";

export const Button = (
  props: ButtonHTMLAttributes<HTMLButtonElement> & {
    color: "pink" | "orange" | "white" | "emerald" | "purple";
  }
) => {
  return (
    <button
      className={`rounded-full px-12 py-2 border-2 border-black font-medium hover:brightness-90 transition-all whitespace-nowrap ${
        props.color === "pink"
          ? "bg-[#FFA7A7]"
          : props.color === "orange"
          ? "bg-orange-300"
          : props.color === "white"
          ? "bg-white"
          : props.color === "emerald"
          ? "bg-emerald-300"
          : "bg-[#DBBEFF]"
      }`}
      type={props.type || "button"}
      {...props}
    >
      {props.children}
    </button>
  );
};
