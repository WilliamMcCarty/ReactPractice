import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProfileCardText(props) {
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
      <Card.Header
        as="h1"
        style={{ backgroundColor: "navy", borderRadius: "20px" }}
      >
        {props.header}
      </Card.Header>
      <Card.Body
        className="boxShadow3"
        style={{
          backgroundColor: "lightblue",
          borderRadius: "70px",
          border: "0.5rem solid rgb(105, 202, 231)",
        }}
      >
        {/* <Card.Title>Fun Facts</Card.Title> */}
        <Card.Text as="h2">{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
