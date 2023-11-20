import { Container, Row, Col } from 'react-bootstrap';
import resumePdf from "../../assets/resume.pdf";
export default function Resume() {
  return (
    <>
      <div>
        <h1>Resume</h1>
        <p>
          Click on the link below in order to download a preliminary resume in PDF format. The columns below detail frameworks, languages, and technologies related to web development
          with which I have become acquainted throughout the course.
        </p>
      </div>
      <Container>
        <div className="mt-4">
          <p className="lead">
            Download:{" "}
            <a href={resumePdf} download="JMG-WebDev-resume.pdf" style={{
              color:'#554640',
            }}>
              Resume.pdf
            </a>
          </p>
        </div>
        <Row>
          <h2 className="text-center my-4">My Tech Stack</h2>
          <Col md={6} style={{
            backgroundColor: '#707078',
            color: '#CDE6F5',
            border: '3px solid #8DA7BE'
          }}>
            <h3>Front-end</h3>
            <ul className="list-unstyled lead">
              <li className="mb-2 text-light">
                <strong>HTML5</strong> Gives structure to Web pages. Standard maintained by W3C.
              </li>
              <li className="mb-2 text-light">
                <strong>CSS3</strong>: Adds style to 95% of Web documents. Standard maintained by W3C.
              </li>
              <li className="mb-2 text-light">
                <strong>Bootstrap</strong>: One of the first CSS frameworks and still relevant.
              </li>
              <li className="mb-2 text-light">
                <strong>JavaScript</strong>: The official scripting language of the Web.
              </li>
              <li className="mb-2 text-light">
                <strong>React</strong>: Powerful library for building websites, single-page applicatons, and client-side routing.
              </li>
            </ul>
          </Col>
          <Col md={6}  style={{
            backgroundColor: '#707078',
            color: '#CDE6F5',
            border: '3px solid #8DA7BE'
          }}>
            <h3>Back-end</h3>
            <ul className="list-unstyled lead">
              <li className="mb-2 text-light">
                <strong>Node.js</strong>: JavaScript Runtime Environment Outside the Browser 
              </li>
              <li className="mb-2 text-light">
                <strong>Express.js</strong>: Servers and back-end routing
              </li>
              <li className="mb-2 text-light">
                <strong>MySQL</strong>: Relational databases using one of the principal SQL dialects
              </li>
              <li className="mb-2 text-light">
                <strong>Sequelize</strong>: ORM for relational databases. 
              </li>
              <li className="mb-2 text-light">
                <strong>MongoDB</strong>: Non-relational (Document-store) databases.
              </li>
              <li className="mb-2 text-light">
                <strong>Mongoose</strong>: ODM for MongoDB NoSQL databases
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};
