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
                        <br/>I am a graduate student with a Bachelor of Science in
                        Computer Engineering from Iran University of Science and Technology<a
                        href="www.iust.ac.ir" style={{textDecoration:'none'}} > (IUST). </a>
                        Currently, I'm a researcher at Data Mining lab, under supervision of Dr. Behrooz Minaei Bidgoli
                        , working on a Arabic to Persian Machine Translation project. I'm also
                        working as a Machine Learning Researcher in ML lab under
                        the supervision of Dr. Nasser Mozayeni. I'm also highly interested in Artificial Intelligence
                        and
                        Machine Learning and Computational Vision, and I am working on two papers
                        with the subject of "Arabic to Persian Machine Translation" and "Persian and Arabic Handwritten
                        Recognition".
                        As part of my studies, projects, and internships, I have attempted to gain relevant experience
                        in my field of interest. In order to pursue my graduate study and do significant research, I am
                        applying to Master's programs related to my interests.
                    {/*<blockquote>*/}
                    {/*    <footer className="blockquote-footer">Mobina Kashaniyan</footer>*/}
                        {/*</blockquote>*/}
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
    );
}

export default AboutCard;
