import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import L_AgriMax from "../assets/img/projects/agrimax.png";
import L_YennumYazhuthum from "../assets/img/projects/yennum-yazhuthum.webp";
import L_PuzzleGame from "../assets/img/projects/puzzle-game.jpeg";
import L_MineSweeper from "../assets/img/projects/mine-sweeper.jpeg";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../assets/img/skills/html-5.svg";
import L_CSS3 from "../assets/img/skills/css3.svg";
import L_ANDROID from "../assets/img/skills/android.png";
import L_PYTHON3 from "../assets/img/skills/python3.jpg";
import L_FLASK from "../assets/img/skills/flask.svg";
import L_PHP from "../assets/img/skills/php.png";
import L_MYSQL from "../assets/img/skills/mysql.jpg";
import L_CPP from "../assets/img/skills/cpp.png";
import "./styles/Projects.css";

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        <ImageEvent
            date="23/01/2020"
            className="text-center"
            text="Android AgriMax App"
            src={L_AgriMax}
            alt="Android AgriMax App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className=" accordion-main p-2 text-center"
                    >
                        PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This app is used to predict on which month a particular plant can sowed to eanr profit in a particular district to earn profit.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Predicts data</li>
                          <li>Machine learning embedded</li>
                          <li>Simple User Interface</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_ANDROID}
                                alt="Android Studio"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Android Studio
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHON3}
                                alt="Python 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Python 3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FLASK}
                                alt="Flask"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Flask
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-center flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/Dhinesh100/AgriMax"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
        </ImageEvent>

        <ImageEvent
            date="21/08/2020"
            className="text-center"
            text="Yennum Yazhuthum"
            src={L_YennumYazhuthum}
            alt="Yennum Yazhuthum"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordion-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This app is built for study purpose. The study materials related to Mathematics and Tamil are available and can be downloaded.
                        The user can also write to use through this website.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Can download materials of your needs</li>
                          <li>Real-time API calls with Backend features</li>
                          <li>Styled with  CSS</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML5"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS3"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PHP}
                                alt="PHP"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              PHP
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MYSQL}
                                alt="MySql"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MySql
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-center flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/Dhinesh100/Yennum-Yazhuthum"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            date="13/01/2021"
            className="text-center"
            text="Puzzle Game In Console"
            src={L_PuzzleGame}
            alt="Puzzle Game in Console"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordion-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A console application which is built in C is used to play a puzzle game with three difficulty levels.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Help option available</li>
                          <li>Real time console updation</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CPP}
                                alt="CPP"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CPP
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-center flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/Dhinesh100/Zoho-Puzzle-Game"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            date="19/01/2021"
            className="text-center"
            text="Minesweeper Game In Console"
            src={L_MineSweeper}
            alt="Minesweeper Game in Console"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordion-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A console application which is built in C is used to play a minesweeper game withArtificial Intelligence enabled.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>AI embedded</li>
                          <li>Real time console updation</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CPP}
                                alt="CPP"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CPP
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-center flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/Dhinesh100/MineSweeper"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default Projects;