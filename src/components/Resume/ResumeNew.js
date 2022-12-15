import React, {useState, useEffect} from "react";
import {Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Mobina_Kashaniyan_s_Resume_updated.pdf";
import {AiOutlineDownload} from "react-icons/ai";
import {Document, Page, pdfjs} from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const resumeLink ="https://iammobina.github.io/static/media/Mobina_Kashaniyan_s_Resume_updated.df7a6e3618b1ae107162.pdf"
  // "https://iammobina.github.io/Mobina_Kashaniyan_s_Resume.pdf";

function ResumeNew() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <Container fluid className="resume-section">
                <Particle/>
                <Row style={{justifyContent: "center", position: "relative"}}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{maxWidth: "250px"}}
                    >
                        <AiOutlineDownload/>
                        &nbsp;Download CV
                    </Button>
                </Row>

                <Row className="resume">
                    {/*<Document file={resumeLink} className="d-flex justify-content-center">*/}
                        <embed src="https://iammobina.github.io/static/media/Mobina_Kashaniyan_s_Resume_updated.df7a6e3618b1ae107162.pdf" width="100%" height="550px"/>
                        {/*<Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6}/>*/}
                    {/*</Document>*/}
                </Row>


                <Row style={{justifyContent: "center", position: "relative"}}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{maxWidth: "250px"}}
                    >
                        <AiOutlineDownload/>
                        &nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </div>
    );
}

export default ResumeNew;
