import React from "react";

export default function ProjectLinks(props) {
  return (
    <li className="projects">
      <a href={props.link} target="_blank" rel="noreferrer">
        {props.linkText}
      </a>
    </li>
  );
}
