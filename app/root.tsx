import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css?url";

import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

import ogpSrc from "~/assets/OGP.jpg";

import "@fontsource/noto-sans-jp/400.css";
import "@fontsource/noto-sans-jp/500.css";
import "@fontsource/noto-sans-jp/700.css";

export const links: LinksFunction = () => {
  return [
    { rel: "icon", href: "/favicon.ico?v=2" },
    { rel: "stylesheet", href: stylesheet },
    ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  ];
};

export const meta: MetaFunction = () => {
  return [
    { title: "Hello, Nostr! - Nostr日本語チュートリアルサイト" },
    {
      name: "text",
      content:
        "Nostrについての情報や使い方を紹介するチュートリアルサイトです。",
    },
    {
      tagName: "meta",
      property: "og:title",
      content: "Hello, Nostr! - Nostr日本語チュートリアルサイト",
    },
    {
      tagName: "meta",
      property: "og:description",
      content:
        "Nostrについての情報や使い方を紹介するチュートリアルサイトです。",
    },
    {
      tagName: "meta",
      property: "og:image",
      content: ogpSrc,
    },
    {
      tagName: "meta",
      property: "og:url",
      content: "https://hello.nostrapp.me",
    },
    {
      tagName: "meta",
      property: "og:type",
      content: "website",
    },
    {
      tagName: "meta",
      property: "og:site_name",
      content: "Hello, Nostr! - Nostr日本語チュートリアルサイト",
    },
    {
      tagName: "meta",
      property: "og:locale",
      content: "ja_JP",
    },
    {
      tagName: "meta",
      property: "twitter:card",
      content: "summary_large_image",
    },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
