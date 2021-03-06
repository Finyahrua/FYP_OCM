//This is the main application file, it gets rendered before any other page

//instaled bootstrap and ant design which will be added here, the command npm i boostrap antd was used
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../public/css/styles.css";

import React from "react";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
