import { useState } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import validateEmail from "../utils/validation";


function ContactForm() {

    // Here we set two state variables for firstName and lastName using `useState`
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    function handleInputChange(e) {
      // Getting the value and name of the input which triggered the change
      const { name, value } = e.target;
  
      // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
      if (name === 'name') return setName(value);
      if (name === 'email') return setEmail(value);
      return setMessage(value);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      
    if (!validateEmail(email)) {
      alert("The email address is not valid. Please try again.");
      return;
    };
      const welcoming= `Welcome ${name}. 
      We will reach you at ${email} very soon! 
      For the record, your message was:
      ${message}`;
    alert(welcoming);
    };

  return (
    <div>
      <h1 className='text-center'>
        Hello {name}.
      </h1>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form onSubmit={handleFormSubmit}>
              <Row>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label className="error-message py-1">Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your first and last name."
                      onChange= {handleInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label className="error-message py-1">E-mail</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter a valid email."
                      name="email"
                      onChange= {handleInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group>
                <Form.Label className="error-message py-1">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Leave a message."
                  name="message"
                  onChange= {handleInputChange}
                  required
                />
              </Form.Group>
              <Button type="submit" className="contact-me mt-3">
                Contact Me
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactForm;
