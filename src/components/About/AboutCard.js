import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saimukesh Jonnadula </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am currently employed as a software developer at Accenture.
            <br />
            I have completed Integrated B.Tech in JNTUK
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "All our dreams can come true, if we have the courage to pursue them."{" "}
          </p>
          <footer className="blockquote-footer">Saimukesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
