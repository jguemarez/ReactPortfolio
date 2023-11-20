import { Container, Row, Col } from "react-bootstrap";
import Project from "../Project";
import projects from "../../utils/projects";

function Portfolio() {
  return (
    <Container>
      <h2>Selected Deployed Projects</h2>
      <p>Click the button on the left in order to see a live deployment or the one to the right in order to download the source code/fork the repo!</p>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} sm={6} md={4} lg={3}>
            <Project
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              repo={project.repo}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;