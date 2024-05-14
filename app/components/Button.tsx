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
          ? "bg-accent-pink"
          : props.color === "orange"
          ? "bg-accent-orange"
          : props.color === "white"
          ? "bg-white"
          : props.color === "emerald"
          ? "bg-accent-emerald"
          : "bg-accent-purple"
      }`}
      type={props.type || "button"}
      {...props}
    >
      {props.children}
    </button>
  );
};
