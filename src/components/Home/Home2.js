import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import myImg from "../../Assets/mobina.jpg";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{fontSize: "2.6em"}}>
                            To <span className="purple"> TALK </span>  BRIEFLY
                        </h1>
                        <p className="home-about-body">
                            Programming is one of my favorite things to do, so I spend most of my time working on
                            different projects and learning new things during that time! 🤗
                            <br/>
                            <br/>I am proficient  in classics like
                            <i>
                                <b className="purple"> C++, Java and Python. </b>
                            </i>
                            <br/>
                            <br/>
                            My field of Interest's are building new &nbsp;
                            <i>
                                <b className="purple">Machine Learning Applications</b> and
                                also in areas related to{" "}
                                <b className="purple">
                                  Visual Computing </b>and {" "}
                              <b className="purple">Natural Launguage Processing.
                                </b>
                            </i>
                            <br/>
                            <br/>
                            Currently, I am applying to
                             <b className="purple"> Master's programs </b>
                            <i>
                               related to
                                <b className="purple">
                                    {" "}
                                  my interests.
                                </b>
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar"/>
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/iammobina"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://twitter.com/mobina_k"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/MobinaKashaniyan/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/iammobina"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram/>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Home2;
