import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub }  from '@fortawesome/free-brands-svg-icons';

const Project = ({ title, description, image, link, repo }) => {
  return (
    <Card>
      <Card.Img src={image} alt={`${title} project`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className= "d-flex justify-space-between">
          <Button href={link} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon/>
            App
          </Button>
          <Button href={repo} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon= {faGithub}/>
            {' '}
            Repo
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Project;
