import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function Langugae() {
    return (
        <Card className="quote-card-view">
            <Card className="quote-card-view">
                <Card.Body>
                    <p className="blockquote mb-0">
                        <p style={{textAlign: "justify"}}>

                            <ul>
                                <li className="about-activity">
                                    <ImPointRight/> <a href="https://www.ets.org/toefl.html" style={{textDecoration: 'none'}}> TOEFL-iBT</a>
                                    <li className="about-activity">
                                        <ol style={{listStyle: 'disc'}}>
                                            <li>Reading: 26 <br/></li>
                                            <li>Listening: 26 <br/></li>
                                            <li>Speaking: 25 <br/></li>
                                            <li>Writing: 25 <br/></li>
                                            <ImPointRight/>Total: 102<br/>
                                            <ImPointRight/>Date: Nov 2022 <br/>
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


                </Card.Body>
            </Card>
        </Card>
    );
}

export default Langugae;