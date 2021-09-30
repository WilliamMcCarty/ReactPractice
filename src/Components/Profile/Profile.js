import React from "react";
import Banner from "../Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileCardImage from "./ProfileCardImage";
import ProfileCardText from "./ProfileCardText";
import ProfilePic from "../../images/profilepic.jpg"

export default function Profile() {
  return (
    <section className="banner text-center">
      <Banner heading="Profile" className="textShadow" />
      <br />
      <center>
        <ProfileCardImage
        header="William McCarty"
        image={ProfilePic}/>
        <br/>
        <ProfileCardText 
        header="Fun Facts"        
        text={["Favorite Hobby: Model RailRoading",
        <br />,
        "Favorite Car: Mustang",
        <br />,
        "Favorite Drink: Diet Coke",
        <br />,
        "Favorite Food: Bacon CheeseBurger",
        <br />,""]} />
        <br/>
        <ProfileCardText 
        header="Favorite Quote"
        text={["You can have everything in life that you want if you just give enough",
        "other people what they want.",
        <br />,
        "~~Zig Ziglar~~"]}/>
      </center>
      <br />
      <br />
      <br />
      <br />
    </section>
  );
}
