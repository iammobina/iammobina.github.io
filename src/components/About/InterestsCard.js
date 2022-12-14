import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function InterestsCard() {
    return (
        <Card className="quote-card-view">
            <Card className="quote-card-view">
                <Card.Body>
                    <p className="blockquote mb-0">
                        <p style={{textAlign: "justify"}}>

                            <ul>
                                <li className="about-activity">
                                    <ImPointRight/> Machine Learning, Deep Learning, Neural Networks
                                    <br/>
                                    <ImPointRight/> Computer Vision, Image Processing<br/>
                                    <ImPointRight/>  Brain-inspired Artificial Intelligence<br/>
                                    <ImPointRight/>  Natural Language Processing<br/>
                                    <ImPointRight/>  Bioinformatics, Computational Biology<br/>
                                    <ImPointRight/>  Software Design and Architecture, Backend Development, Game Development<br/>
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

                    
                </Card.Body>
            </Card>
        </Card>
    );
}

export default InterestsCard;