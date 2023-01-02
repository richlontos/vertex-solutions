import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img1.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import floatPic from "../assets/img/floatPic.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import { HashLink } from "react-router-hash-link";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(500 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["LTL", "FTL", "LCL", "AIR", "RAIL", "OCEAN"];
    const period = 700;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(300);
        } else {
            setIndex(prevIndex => prevIndex + 1);
            index()
        }
    }



    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to Vertex Solutions</span>
                                    <br />
                                    <h1 style={{ "color": "aliceblue" }} >Freight Broker <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                                    <p style={{ color: "gainsboro" }}>YOUR COMPLETE BROKER COMPANY, <br></br> <span style={{ color: "gainsboro" }}>FROM START TO FINISH</span></p>

                                    <button> <a href="#connect" style={{ 'color': "gainsboro", "text-decoration": "none" }}>Let’s Connect</a><ArrowRightCircle size={25} /></button>

                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={floatPic} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
