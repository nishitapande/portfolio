import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import swiftbuy from "../../Assets/Projects/swiftbuy.png";
import landingpageclone from "../../Assets/Projects/landingpageclone.png";
import omnifood from "../../Assets/Projects/omnifood.png";
import cusineconnect from "../../Assets/Projects/cusineconnect.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cusineconnect}
              isBlog={false}
              title="CuisineConnect"
              description="CuisineConnect is a dynamic web application built using the MERN stack, combining the power of MongoDB, Express.js, React, and Node.js. This user-friendly platform allows food enthusiasts to search for and create delicious recipes. With an intuitive search feature, users can easily discover a variety of recipes to suit their culinary preferences."
              ghLink="https://github.com/nishitapande/recipe-share-frontend"
              demoLink="https://recipe-share-frontend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swiftbuy}
              isBlog={false}
              title="SwiftBuy"
              description="SwiftBuy is a robust e-commerce platform developed using the MERN stack, incorporating MongoDB, Express.js, React, and Node.js, with Redux for efficient state management. SwiftBuy's integration of Redux ensures smooth and responsive user interactions, maintaining state consistency across the application."
              ghLink="https://github.com/nishitapande/SwiftBuy"

              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={landingpageclone}
              isBlog={false}
              title="Landing Page Clone"
              description="I developed a clone of the Crest.ai landing page using React. This project replicates the sleek and modern design of the original site, showcasing my proficiency in front-end development with React. The clone includes responsive design elements, interactive features, and a clean, user-friendly interface."
              ghLink="https://github.com/nishitapande/landingPage-internship-assignment"
              demoLink="https://landing-page-internship-assignment.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={omnifood}
              isBlog={false}
              title="Landing page for OmniFoods"
              description="Landing page for Omnifood using HTML, CSS, and JavaScript, incorporating EJS (Embedded JavaScript) for templating. This project showcases a modern and responsive design, offering an engaging user experience with dynamic content rendered efficiently using EJS. The landing page features attractive layouts, smooth animations, and interactive elements, demonstrating my skills in front-end development and templating with EJS. This project underscores my ability to build visually appealing and functional web pages with a focus on user experience."
              ghLink="https://github.com/nishitapande/omnifood"
              demoLink="https://omnifood-front-end-project.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
