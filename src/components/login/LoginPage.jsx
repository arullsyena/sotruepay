import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // For navigation after successful login
import { login } from "../../api/auth"; // Adjust the import based on your file structure
import { toast } from "react-toastify"; // For notifications
import "./LoginPage.css";
import { useAuth } from "../../auth/AuthProvider";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Call the login API
      const response = await login({ phoneNumber, username, password });

      // Assuming the API returns a token or some user info
      console.log("Logged in:", response);
      let notificationMsg = "";

      if (username) {
        notificationMsg = "Logged in successfully!";
        setIsAuthenticated(true);
        navigate("/dashboard");
      } else {
        setUsername(response.username);
        notificationMsg = "Phone Number Verified Successfully!";
      }
      console.log("isAuthenticated", isAuthenticated);
      // Store the token in local storage (or handle it with HTTP-only cookies)
      //   localStorage.setItem("token", response.token);

      // Redirect to the dashboard or another page
      //   navigate("/dashboard");

      // Show a success notification

      toast.success(notificationMsg);
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed! Please check your credentials.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <Container fluid>
    <Row className='vh-100 login-card d-flex justify-content-center align-items-center'>
      <Col
        md={8}
        lg={6}
        xs={12}
        className='d-flex justify-content-center align-items-center p-3'
      >
        <Card className='shadow w-100' style={{ width :"100%" , minHeight : "30rem" }}>
          {/* Progress Bar */}
          {loading && <div className='progress-bar-animation'></div>}
          <Card.Body className='d-flex flex-column flex-md-row'>
            {/* Left Side - Company Name */}
            <div className='company-info d-flex flex-column justify-content-center align-items-center p-4 w-100 w-md-50'>
              <h2 className='fw-bold text-uppercase text-center login-page-title'>SoTruePay</h2>
              <p className='text-center'>Your trusted partner in payments.</p>
            </div>
  
            {/* Right Side - Login Form */}
            <div className='login-form d-flex flex-column justify-content-center  p-4 w-100 w-md-50'>
              <h4 className='text-uppercase mb-3 text-center login-page-title' >Login</h4>
              <Form className='mb-3' onSubmit={handleLogin}>
                {username ? (
                  <>
                    <Form.Group className='mb-3' controlId='formBasicUserName'>
                      <Form.Label>Registered User Name</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder={username}
                        value={username}
                        disabled
                      />
                    </Form.Group>
  
                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </>
                ) : (
                  <Form.Group className='mb-3' controlId='formBasicPhoneNumber'>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter Phone Number'
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </Form.Group>
                )}
  
                <div className='d-grid'>
                  <Button
                    className='btn'
                    type='submit'
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Login"}
                  </Button>
                </div>
              </Form>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  
  );
}
