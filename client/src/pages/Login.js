import React, { useContext, useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Register from './Register';

const Login = () => {

  const {handleLogin} = useContext(AuthContext);
  const [email, setEmail]=useState("test@test.com")
  const [password, setPassword]=useState(123456)
  const [show, setShow]=useState(false)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({email, password}, navigate)
  };

  const toggleShow = () => {
    setShow(!show);
  };

  return(
    <Container>
      <Card bg="dark" style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", margin: "20px", padding: "20px"}} >
        <img 
              src= "https://res.cloudinary.com/djhlv2nfc/image/upload/v1642264997/Hackathon%202/HackathonLogo_sqddye.png"
              width = "300px"
              height = "300px"
              className = "d-inline-block align-top"
              alt = "AppHatch logo"/>
          <h1 style={{color: "white", fontSize: "5.25em"}} >AppHatch</h1>
      </Card>
      <h1 style={{textAlign: "center"}} >Welcome to AppHatch, please log in</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" value = {email} placeholder="Enter Email" onChange = {(e)=>setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} placeholder="Password" onChange= {(e)=>setPassword(e.target.value)}/>
        </Form.Group>
        <Button type ="submit">Login</Button>
      </Form>
      <br/>
      <div style={{margin: "10px", padding: "10px"}} className="d-grid gap-2" >
        <h3 style={{textAlign: "center"}} >Don't have an account?</h3>
        <Button size="lg" onClick={toggleShow} variant={show ? "secondary": "primary"} >{show ? "Cancel" : "Register Here"}</Button>
        {show && <Register/>}
      </div>
    </Container>
  )
};

export default Login;