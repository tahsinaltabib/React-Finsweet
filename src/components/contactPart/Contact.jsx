import React from "react";
import "./contact.css";
import H3tag from "./../../reuseable/H3tag";
import Ptag from "./../../reuseable/Ptag";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg={{ span: 10, offset: 1 }}>
            
            <div className='con-heading'>
              <H3tag className='con-head-h3'>Contact Us</H3tag>

              <Ptag className='con-head-p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </Ptag>
            </div>

            <div>
              
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
