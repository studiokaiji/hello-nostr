import { Link as RemixLink } from "@remix-run/react";

type LinkProps = {
  to: string;
  external?: boolean;
  children: React.ReactNode;
};

export const Link = ({ to, external, children }: LinkProps) => {
  const className =
    "underline text-orange-400 hover:brightness-90 transition-all cursor-pointer";
  if (external) {
    return (
      <a className={className} href={to}>
        {children}
      </a>
    );
  }
  return (
    <RemixLink className={className} to={to}>
      {children}
    </RemixLink>
  );
};
