import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function EducationCard() {
    return (
        <Card className="quote-card-view">
            <Card className="quote-card-view">
                <Card.Body>
                    <p className="blockquote mb-0">
                        <p style={{textAlign: "justify"}}>

                            <ul>
                                <li className="about-activity">
                                    <ImPointRight/> <a href="www.iust.ac.ir" style={{textDecoration: 'none'}}> Iran
                                    University of Science and
                                    Technology </a>
                                    <li className="about-activity">
                                        <ol style={{listStyle: 'disc'}}>
                                            <li>Bachelor of Science in Computer Engineering (2017 - 2021)<br/></li>
                                            <li>Current GPA with 134 credits: 3.62<br/></li>
                                        </ol>

                                    </li>
                                </li>
                                <br/>
                                <br/>
                                <li className="about-activity">
                                    <ImPointRight/> <a href="https://en.wikipedia.org/wiki/Tehran_Farzanegan_School"
                                                       style={{textDecoration: 'none'}}> Farzanegn High School
                                    (NODET)</a>
                                    <li className="about-activity">

                                        <ol style={{listStyle: 'disc'}}>
                                            <li>Diploma in Mathematics and Physics Discipline (2013 - 1017)<br/></li>
                                            <li>Diploma GPA: 4.0</li>
                                        </ol>

                                    </li>
                                </li>

                            </ul>
                        </p>
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>


                    {/*    Apart from coding, some other activities that I love to do!*/}
                    {/*</p>*/}
                    {/*<ul>*/}
                    {/*    <li className="about-activity">*/}
                    {/*        <ImPointRight/> Playing Games*/}
                    {/*    </li>*/}
                    {/*    <li className="about-activity">*/}
                    {/*        <ImPointRight/> Writting Tech Blogs*/}
                    {/*    </li>*/}
                    {/*    <li className="about-activity">*/}
                    {/*        <ImPointRight/> Travelling*/}
                    {/*    </li>*/}
                    {/*</ul>*/}

                    {/*<p style={{color: "rgb(155 126 172)"}}>*/}
                    {/*    "Strive to build things that make a difference!"{" "}*/}

                </Card.Body>
            </Card>
        </Card>
    );
}

export default EducationCard;