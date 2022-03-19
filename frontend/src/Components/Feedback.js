import React from "react";
import { Form, Container, Alert, Button } from "react-bootstrap";
import { useForm, ValidationError } from "@formspree/react";

const Feedback = () => {
  const [state, handleSubmit] = useForm("xbjwkqdk");
  if (state.succeeded) {
    return <Alert variant={"success"}>Message sent Successfully</Alert>;
  }
  return (
    <Container>
      <h1>Feedback</h1>
      <Form className="col-lg-6 col-md-12" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" required placeholder="Enter name" name="name" id="name"/>
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" name="email" id="email"/>
          <ValidationError prefix="Email" required field="email" errors={state.errors} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" required rows={3} name="message" id="message"/>
          <ValidationError prefix="Message" required field="message" errors={state.errors} />

        </Form.Group>
        <Button type="submit" disabled={state.submitting}>Send Message</Button>
      </Form>
    </Container>
  );
};

export default Feedback;
