import React, { ComponentType } from "react";
import {
  CssBaseline,
  MuiThemeProvider,
} from "@material-ui/core";
import oceanic from "./themes/oceanic.ts"

export default function App(
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: any },
) {
  return (
    <main>
      <head>
        <meta name="viewport" content="width=device-width" />
        <style>
          {`
          body {
            font-family: sans-serif;
            background-color: #263238
          }
          .loader-container {
            position: fixed;
            top: 50%;
            left: 50%;
            /* bring your own prefixes */
            transform: translate(-50%, -50%);
          }
          @keyframes ldio-ctbooqqpn3k {
            0%, 100% {
              animation-timing-function: cubic-bezier(0.45,0,0.9,0.55)
            }
            0% {
              transform: translate(0,0)
            }
            50% {
              transform: translate(0,108px);
              animation-timing-function: cubic-bezier(0,0.45,0.55,0.9);
            }
            100% {
              transform: translate(0,0);
            }
          }
          
          .ldio-ctbooqqpn3k div {
            position: absolute;
            width: 52px;
            height: 52px;
            border-radius: 50%;
            background: #009688;
            left: 74px;
            top: 20px;
            animation: ldio-ctbooqqpn3k 1s linear infinite;
          }
          .loadingio-spinner-ball-yfsjmyxwdg {
            width: 200px;
            height: 200px;
            display: inline-block;
            overflow: hidden;
            background: rgba(NaN, NaN, NaN, 0);
          }
          .ldio-ctbooqqpn3k {
            width: 100%;
            height: 100%;
            position: relative;
            transform: translateZ(0) scale(1);
            backface-visibility: hidden;
            transform-origin: 0 0; /* see note above */
          }
          .ldio-ctbooqqpn3k div { box-sizing: content-box; }
          /* generated by https://loading.io/ */
        `}
        </style>
      </head>
      <div className="loader-container">
        <div className="loadingio-spinner-ball-yfsjmyxwdg">
          <div className="ldio-ctbooqqpn3k">
            <div></div>
          </div>
        </div>
      </div>
      <MuiThemeProvider theme={oceanic}>
        <CssBaseline />
        <Page {...pageProps} />
      </MuiThemeProvider>
    </main>
  );
}
