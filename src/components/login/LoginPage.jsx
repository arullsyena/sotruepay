import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import "./LoginPage.css";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  // Simulate login submission for demonstration purposes
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate an API call or loading time
    setTimeout(() => {
      setLoading(false);
      // Add logic for successful login here, e.g., redirecting
    }, 2000);
  };

  return (
    <Container>
      <Row className='vh-100 d-flex justify-content-center align-items-center'>
        <Col md={8} lg={6} xs={12}>
          <Card className='shadow position-relative'>
            {/* Progress Bar */}
            {loading && <div className='progress-bar-animation'></div>}
            <Card.Body>
              <div className='mb-3 mt-4'>
                <h2 className='fw-bold text-uppercase mb-2'>SoTruePay</h2>
                <p className='mb-5'>Please enter your login and password!</p>
                <Form className='mb-3' onSubmit={handleLogin}>
                  <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label className='text-center'>
                      Phone Number
                    </Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter Phone Number'
                    />
                  </Form.Group>

                  <Form.Group className='mb-3' controlId='formBasicUserName'>
                    <Form.Label className='text-center'>
                      Registered User Name
                    </Form.Label>
                    <Form.Control type='text' placeholder='Enter User Name' />
                  </Form.Group>

                  <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type='password'
                      placeholder='Enter Password'
                    />
                  </Form.Group>

                  <div className='d-grid'>
                    <Button
                      className='submit-btn'
                      type='submit'
                      disabled={loading}
                    >
                      {loading ? "Loading..." : "Login"}
                    </Button>
                  </div>
                </Form>
                <div className='mt-3'>
                  <p className='mb-0 text-center'>{""}</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
