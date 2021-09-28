import React from "react";
import { Card } from "react-bootstrap";
import profilePic from "../../images/profilepic.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProfileCard() {
  return (
    <Card
      style={{
        maxWidth: "50rem",
        justifyItems: "center",
        backgroundColor: "navy",
      }}
      className="boxShadow2"
    >
      <Card.Header as="h1" style={{ backgroundColor: "navy" }}>
        William McCarty
      </Card.Header>
      <Card.Img
        variant="top"
        img
        src={profilePic}
        alt="Profile Pic"
        className="profilePic"
      />
      <Card.Header as="h1" style={{ backgroundColor: "navy" }}>
        Fun Facts
      </Card.Header>
      <Card.Body style={{ backgroundColor: "lightblue" }}>
        {/* <Card.Title>Fun Facts</Card.Title> */}
        <Card.Text as="h2">
          Favorite Hobby: Model RailRoading
          <br />
          Favorite Car: Mustang
          <br />
          Favorite Drink: Diet Coke
          <br />
          Favorite Food: Bacon CheeseBurger
          <br />
        </Card.Text>
      </Card.Body>
      <Card.Header as="h1" style={{ backgroundColor: "navy" }}>
        Favorite Quote
      </Card.Header>
      <Card.Body style={{ backgroundColor: "lightblue" }}>
        <Card.Text as="h2">
          "You can have everything in life that you want if you just give enough
          other people what they want."
          <br />
          ~~Zig Ziglar~~
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
