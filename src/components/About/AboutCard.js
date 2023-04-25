import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <p className="blockquote mb-0">
                    <p style={{textAlign: "justify"}}>
                        Hi Everyone, I am <span className="purple">Mobina Kashaniyan </span>
                        from <span className="purple"> Tehran, Iran.</span>
                      
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
    );
}

export default AboutCard;
