import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProfileCardImage(props) {
  return (
    <Card
      style={{
        maxWidth: "50rem",
        justifyItems: "center",
        backgroundColor: "navy",
        borderRadius: "20px",
      }}
      className="boxShadow2"
    >
      <Card.Header as="h1" style={{ backgroundColor: "navy", borderRadius: "20px" }}>
        {props.header}
      </Card.Header>
      <Card.Img
      style={{borderRadius: "70px"}}
        variant="top"
        img
        src={props.image}
        alt="Pic"
        className="profilePic"
      />
      </Card>      
  );
}