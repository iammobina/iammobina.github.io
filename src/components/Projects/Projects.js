import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/fam.png";
import emotion from "../../Assets/Projects/wdot.png";
import editor from "../../Assets/Projects/sn.png";
import chatify from "../../Assets/Projects/alph.png";
import suicide from "../../Assets/Projects/cham.png";
import bitsOfCode from "../../Assets/Projects/tras.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle/>
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{color: "white"}}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={chatify}
                            isBlog={false}
                            title="Persian-Arabic Handwritten Optical Character Recognition"
                            description="
                            Converting Persian texts form images to text is always one of the common challenges. This challenge will be much more difficult when the text is handwritten, because the complexity and variety of handwritten texts is much greater than typed texts. This repository contains my thesis project concerning the classification of Arabic handwritten characters, as well as Persian handwritten characters."
                            ghLink="https://github.com/iammobina/Handwritten-Recognition"
                            // demoLink="https://chatify-49.web.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={bitsOfCode}
                            isBlog={false}
                            title="Arabic-Persian Machine Tranlsation"
                            description="Machine translation is the translation of a text from one natural language into another natural language without human intervention and is completely automatic by computer. This repository contains, I'm trying to implement a machine translation system."
                            ghLink="https://github.com/iammobina/Machine-Translation"
                            // demoLink="https://blogs.soumya-jit.tech/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={editor}
                            isBlog={false}
                            title="Snake Game with Reinforcement Learning"
                            description=" Snake is a game where the agent must maneuver a line which grows in length each time food is touched by the head of the segment. The line follows the previous paths taken which eventually become obstacles for the agent to avoid. In This repository, Snake game is implemented with Q-learning."
                            ghLink="https://github.com/iammobina/Snake-Reinforcement-Learning"
                            // demoLink="https://editor.soumya-jit.tech/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={leaf}
                            isBlog={false}
                            title="Artists Face Recognition"
                            description="This repository contains an artist face recognition system. There are two categories of problems with this face recognition system, face verification, and face recognition and both of them are matching problems."
                            ghLink="https://github.com/iammobina/Artists-Recognition"
                            // demoLink="https://plant49-ai.herokuapp.com/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={suicide}
                            isBlog={false}
                            title="Chameleon"
                            description="This game is inspired by color switch game in which the player crosses obstacles by changing the color, color switch is my main competitor in this area, but by adding different features to the game, I try to have more advantages than this game and a more attractive environment and Make it more fun."
                                ghLink="https://github.com/iammobina/Chameleon"
                            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={emotion}
                            isBlog={false}
                            title="DoNoghte"
                            description="
DoNoghte is a cool intellectual game in the style of casual games that will entertain you for hours. The intellectual game of DoNoghte is basically a kind of dot game that can be a useful intellectual entertainment with its challenging and attractive steps.
This new game starts in such a way that you have to find those of the same color among the colored dots in each stage and connect them. The more points you have, the more points you get and the faster you finish the stage"
                                // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
                            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
