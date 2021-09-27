import React from "react";
import Banner from "../Banner";
import ProjectLinks from "./ProjectLinks.js";

export default function Projects() {    
  return (
    <section className="banner text-center">
      <Banner heading="Projects" />
      <div className='projects'>
        <ProjectLinks />
      </div>
      <br/>
      <br/>
      <br/>
    </section>
  );
}
