import React from "react";
import Banner from "../Banner";

export default function Projects() {    
  return (
    <section className="banner text-center">
      <Banner heading="Projects" />
      <div className='projects'>
        <ul>
          <li className='projects' onClick={('')}>React Portfolio Site</li>
          <li className='projects' onClick={('')}>ASP.NET Portfolio Site</li>
          <li className='projects' onClick={('')}>ASP.NET Web API</li>
          <li className='projects' onClick={('')}>ToDo React App</li>
          <li className='projects' onClick={('')}>MVC Personal Site</li>
          <li className='projects' onClick={('')}>ASP.NET Portfolio Site</li>
          <li className='projects' onClick={('')}>MVC MSSQL Store Front</li>
          <li className='projects' onClick={('')}>HTML5 CSS3 Studio Project</li>
        </ul>
      </div>
      <br/>
      <br/>
      <br/>
    </section>
  );
}
