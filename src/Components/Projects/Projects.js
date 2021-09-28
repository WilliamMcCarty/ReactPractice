import React from "react";
import Banner from "../Banner";
import ProjectLinks from "./ProjectLinks.js";

export default function Projects() {
  return (
    <section className="banner text-center">
      <Banner heading="Projects" />
      <div className="projects">
        <ul>
          <ProjectLinks 
          link="#"
          linkText="React Portfolio Site"/>        
          <ProjectLinks 
          link="http://william-mccarty.com/Home/Portfolio"
          linkText="ASP.NET Portfolio Site"/>
          <ProjectLinks 
          link="https://github.com/WilliamMcCarty/ToDoAPI"
          linkText="ASP.NET Web API"/>
          <ProjectLinks 
          link="#"
          linkText="ToDo React App"/>
          <ProjectLinks 
          link="http://william-mccarty.com/"
          linkText="MVC Personal Site"/>
          <ProjectLinks 
          link="http://storefront.william-mccarty.com/"
          linkText="MVC MSSQL Store Front"/>
          <ProjectLinks 
          link="http://bytebrothers.william-mccarty.com/"
          linkText="HTML5 CSS3 Studio Project"/>
        </ul>
      </div>
      <br />
      <br />
      <br />
    </section>
  );
}
