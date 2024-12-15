import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Cer-YSDP-MAKKRAPONG-SOMBOON-1.png";
import projImg2 from "../assets/img/Coursera 2M2QPY8D2BAA-1.png";
import projImg3 from "../assets/img/Fortinet_Certified_Fundamentals_in_Cybersecurity-1.png";
import projImg4 from "../assets/img/Intro to DA,AI,ML-1.png";
import projImg5 from "../assets/img/Certificate_DL-1.png";
import projImg6 from "../assets/img/python_basic certificate-1.png";
import projImg7 from "../assets/img/css certificate-1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Young Software Developer Program",
            description: "Used TensorFlow to classify the brand and type of pet medications.",
            imgUrl: projImg1,
        },
        {
            title: "Google Cybersecurity",
            description: "Learning about Cybersecurity and risk management",
            imgUrl: projImg2,
        },
        {
            title: "Fortinet Certified Fundamentals in Cybersecurity",
            description: "Learning about Cybersecurity by use tools of Fortinet",
            imgUrl: projImg3,
        },
        {
            title: "Introduction to DA, AI and ML",
            description: "Learning about Data Analytics , AI and ML course",
            imgUrl: projImg4,
        },
        {
            title: "Digital Literacy Level 4",
            description: "Certificate of Digital Literacy Level 4",
            imgUrl: projImg5,
        },
        {
            title: "Hakkerrank Python (Basic)",
            description: "print('Hello World!!')",
            imgUrl: projImg6,
        },
        {
            title: "Hakkerrank CSS (Basic)",
            description: "animation: App-logo-spin infinite 20s linear",
            imgUrl: projImg6,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Experience</h2>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Certificate</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Project</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">About me</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <p>- Create an app for scanning animal medicine bottles by using Tensorflow and Python in 2021.</p>
                                                <p>- Create a mobile application for job searching using Kotlin and JavaScript in 2022.</p>
                                                <p>- Create an 8-bit game similar to Pac-Man using Unity in 2022.</p>
                                                <p>- Interned at BANGKOK COMMERCIAL ASSET MANAGEMENT PUBLIC COMPANY LIMITED as a Cybersecurity position from April to June 2024.</p>
                                                <p>- Worked as a Web Developer at Thai-German Graduate School (TGGS) from July to October 2024.</p>
                                                <p>- Create a waste detection system using YOLOv4 and Darknet in 2024.</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>Hello, my name is Makkrapong Somboon. I am currently a Computer Engineering student, with a strong passion for Artificial Intelligence (AI), Cyber Security, and Web Development. My academic background has provided me with a solid foundation in both hardware and software, which I use to design and develop innovative solutions in the tech industry.</p>
                                                <p>I am deeply interested in AI innovations and how they can be applied to solve real-world problems. I also enjoy exploring embedded systems to create self-sustaining solutions that can improve daily life. Outside of my studies and work, I enjoy exploring new technologies, reading about advancements in machine learning, and learning more about sustainable tech.</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}