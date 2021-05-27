import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_TCS from "../assets/img/experience/tata-consultancy-services.png";
import Tilt from "react-tilt";
import "./styles/Experience.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_TCS} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Assistant System Engineer Trainee</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style">Full Stack Developer</strong>
                    <br />
                    <strong>Technology:</strong> React JS, Java, Javascript, Postgress SQL
                    <br />
                    <strong>Duration:</strong> May 2021 - Present
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Developed &amp; enhanced</strong> Yet to be completed.</li>
                      <li><strong>Developed</strong> Yet to be completed.</li>
                      <li><strong>Provided</strong> Yet to be completed. </li>
                      <li><strong>Performed</strong> Yet to be completed.</li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;