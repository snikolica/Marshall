import { cssBundleHref } from "@remix-run/css-bundle";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const links = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />

        <script type="text/javascript" src="animjs/three.min.js"></script>
        <script type="text/javascript" src="animjs/Projector.js"></script>
        <script type="text/javascript" src="animjs/CanvasRenderer.js"></script>
        <script type="text/javascript" src="animjs/Bird.js"></script>
        <script type="text/javascript" src="animjs/Boid.js"></script>
        <script type="text/javascript" src="animjs/render.js"></script>
      </body>
    </html>
  );
}
