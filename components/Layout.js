import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css'
        />
      </Head>
      <Navbar />
      {children}
    </div>
  );
}
