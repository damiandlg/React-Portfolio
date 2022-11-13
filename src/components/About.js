import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import profPic from '../assets/ProfilePic.jpg';


function About() {
    return(
        <Container id="aboutMe">
            <Row>
                <Col>
                    <Image id="profilePic" src={profPic}></Image>
                </Col>
            </Row>
            <Row>
                <Col className="aboutCol">
                <p>I am Damian De La Garza. Tody I work in Dallas, Tx but am originally from Mexico. My motto is "Comfort is the enemy of innovation". I've been working in IT consulting for about 5 years now, previously I earned my B.S in Economics and Entreprenurship.
                        This class has teached us that in order to be succesful in the coding world, may hours need to be invested into your work, so I do hope you enjoy my work below. I'm keen to dive into solidity and start innovating within that ecosystem so please feel free to reach out if you like my work. ENJOY!" </p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;