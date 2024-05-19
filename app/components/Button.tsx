import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Props<T extends "button" | "a"> = (T extends "button"
  ? ButtonHTMLAttributes<HTMLButtonElement>
  : AnchorHTMLAttributes<HTMLAnchorElement>) & {
  color: "pink" | "orange" | "white" | "emerald" | "purple";
  element?: T;
};

export const Button = <T extends "button" | "a" = "button">(
  props: Props<T>
) => {
  const className = `text-center rounded-full px-12 py-2 border-2 border-black font-medium hover:brightness-90 transition-all whitespace-nowrap ${
    props.color === "pink"
      ? "bg-accent-pink"
      : props.color === "orange"
      ? "bg-accent-orange"
      : props.color === "white"
      ? "bg-white"
      : props.color === "emerald"
      ? "bg-accent-emerald"
      : "bg-accent-purple"
  }`;

  if (props.element === "a") {
    return (
      <a
        className={className}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {props.children}
      </a>
    );
  }

  props.type ??= "button";

  return (
    <button
      className={className}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {props.children}
    </button>
  );
};
