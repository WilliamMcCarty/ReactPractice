import React from "react";
import Banner from "../Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./ProfileCards";

export default function Profile() {
  return (
    <section className="banner text-center">
      <Banner heading="Profile" className="textShadow" />
      <br />
      <center>
        <Cards />
      </center>
      <br />
      <br />
      <br />
      <br />
    </section>
  );
}
