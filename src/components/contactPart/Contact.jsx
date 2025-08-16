import React from "react";
import "./contact.css";
import H3tag from "./../../reuseable/H3tag";
import Ptag from "./../../reuseable/Ptag";
import { Col, Container, Row, Form } from "react-bootstrap";

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

              <div className='con-form'>
                <Form className="form-flex">
                  <Form.Group className='con-form-group'>
                    <Form.Label className="con-form-label">Name</Form.Label>
                    <Form.Control
                      className='input-form'
                      type='text'
                      placeholder='Enter your name'
                    />
                  </Form.Group>

                  <Form.Group className='con-form-group' controlId='formGridEmail'>
                    <Form.Label className="con-form-label">Email</Form.Label>
                    <Form.Control
                      className='input-form'
                      type='email'
                      placeholder='Enter email'
                    />
                  </Form.Group>

                  <Form.Group className='con-form-group'>
                    <Form.Label className="con-form-label">Subject</Form.Label>
                    <Form.Control
                      className='input-form'
                      type='text'
                      placeholder='Provide context'
                    />
                  </Form.Group>

                  <Form.Group className='con-form-group'>
                    <Form.Label className="con-form-label">Subject</Form.Label>
                    <Form.Select
                      className='input-form'
                      aria-label='Default select example'
                    >
                      <option>Open this select menu</option>
                      <option value='1'>Bangla</option>
                      <option value='2'>English</option>
                      <option value='3'>Hindi</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className='con-form-msg'>
                    <Form.Label className="con-form-label">Message</Form.Label>
                    <Form.Control
                      className='input-form'
                      type='text'
                      placeholder='Write your  question here'
                    />
                  </Form.Group>
                  <button className='bg-[#282938] text-white px-[65px] py-[16px] rounded-[41px] mt-[32px]'>
                    Send Messege
                  </button>
                </Form>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
