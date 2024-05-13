import { Link } from "@remix-run/react";
import helloNostrTextIconSrc from "~/assets/HelloNostrText.svg";

export const Header = () => {
  return (
    <div className="p-6 border-b-2 border-black flex">
      <Link className="inline" to="/">
        <img src={helloNostrTextIconSrc} alt="Hello, Nostr Icon" className="" />
      </Link>
    </div>
  );
};
