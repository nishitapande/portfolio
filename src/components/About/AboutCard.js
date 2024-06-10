import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nishita Pande </span>
            from <span className="purple"> Ghaziabad, India.</span>
            <br />
            <br />
            I am currently in my final year of pursuing a B.Tech in Computer
            Science and Engineering.
            <br />
            <br />
            I specialize in creating dynamic and responsive web applications,
            with expertise in both front-end and back-end development.
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
