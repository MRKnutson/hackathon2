import React, { useState } from "react";
import {Card, CardGroup, Col, Container, Nav, Row} from 'react-bootstrap'

const programmers = [
  {
    name: "Austin Choi", 
    image: "https://res.cloudinary.com/djhlv2nfc/image/upload/v1642279386/Hackathon%202/Austin-bw_qa5oep.jpg",
    GitHub: "https://github.com/MRKnutson/",
    LinkedIn: "www.linkedin.com/in/michaelrknutson",
    email: "mrknutson44@gmail.com",
    blurb: "Austin Blurb"

},
{
  name: "Michael Knutson", 
  image: "https://res.cloudinary.com/djhlv2nfc/image/upload/v1642279394/Hackathon%202/mike-bw_ghkhzs.jpg",
  GitHub: "https://github.com/MRKnutson/",
  LinkedIn: "www.linkedin.com/in/michaelrknutson",
  email: "mrknutson44@gmail.com",
  blurb: "I come from a biological and statistical background. After helping to design a server that can be deployed on research vessels I realized my passion was in programming. It didn't take me long to decide to become a full-time developer!"

},
{
  name: "Dennis Plank", 
  image: "https://res.cloudinary.com/djhlv2nfc/image/upload/v1642279406/Hackathon%202/Denny-bw_sli0qt.jpg",
  GitHub: "https://github.com/DennyPlank/",
  LinkedIn: "www.linkedin.com/in/michaelrknutson",
  email: "mrknutson44@gmail.com",
  blurb: "I just like to climb. Oh, and code. That too."

},
{
  name: "Fabio Xavier", 
  image: "https://res.cloudinary.com/djhlv2nfc/image/upload/v1642279425/Hackathon%202/Fabio-bw_hic16m.jpg",
  GitHub: "https://github.com/XavioArts/",
  LinkedIn: "www.linkedin.com/in/fabioxavier",
  email: "fabio.g.xavier33@gmail.com",
  blurb: "Fabio is a comic book artist and graphic designer. I love cats <3"

}
]

const AboutUs = () =>{

  const renderProgrammers = () =>{
    return programmers.map((developer)=>{
      return(
        <Col key = {developer.name} style = {{display: "flex", justifyContent: "center"}}>
        <Card style ={{
          width: "25rem",
          boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          marginTop: "45px",
          height: "45rem"
          }}>
          <Card.Img variant = "top" src = {developer.image} style = {{
             maxWidth: "20rem"
            }}/>
          <Card.Body>
            <Card.Title style ={{marginBottom: "15px"}}>{developer.name}</Card.Title>
            <Card.Subtitle style ={{marginBottom: "15px"}}>{developer.email}</Card.Subtitle>
            <Card.Text>{developer.blurb}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Nav>
              <Nav.Item>
                <Nav.Link href = {developer.GitHub}>
                  <img src = "https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png" 
                  style = {{height: "3rem"}}
                  />
                </Nav.Link>
                <Nav.Link href = {developer.LinkedIn}>
                  <img src = "https://www.passionateinmarketing.com/wp-content/uploads/2021/11/linledin-B2Binstitute.png"
                  style = {{height: "2rem"}}
                  />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Footer>
        </Card>
        </Col>
      )
    })
  };

  return(
    <Container>
      <h1>Hackstreet Boys</h1>

      <Row md = {1} lg = {2}>
        {renderProgrammers()}
      </Row>
    </Container>
  )
};

export default AboutUs;

