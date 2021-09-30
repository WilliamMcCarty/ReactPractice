import React from "react";
import Banner from "../Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileCardImage from "../Profile/ProfileCardImage";
import ProfileCardText from "../Profile/ProfileCardText";
import ProjectLinks from "../Projects/ProjectLinks";
import CsharpImage from "../../images/csharp.jpg";

export default function TechnicalSkills() {
  return (
    <section className="banner text-center">
      <Banner heading="Technical Skills" />
      <div className="projects">
        <ul>
      <br />
      <center>
        <ProfileCardImage header="C Sharp (C#)" image={CsharpImage} />
        <br />
        <ProfileCardText
          header="C# Name"
          text="Microsoft first used the name C# in 1988 for a variant of the C language designed for incremental compilation."
        />

        <ProjectLinks link="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" linkText="C Sharp Wikipedia" />
      </center>
      </ul>
      </div>
      <br />
      <br />
      <br />
    </section>
  );
}
