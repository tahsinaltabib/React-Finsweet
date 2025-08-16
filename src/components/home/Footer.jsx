import React from "react";
import '../../components/home/footer.css'
import { Container, Row, Col } from "react-bootstrap";
import LogoFooter from '../../assets/LogoFooter.png'
import Image from "../../reuseable/Image";
import H3tag from "../../reuseable/H3tag";
import Ptag from "../../reuseable/Ptag";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Copyright from './Copyright';


const Footer = () => {
  return (
    <>
      <section className='footer-sec'>
        <Container>
          <Row>
            <Col lg={5}>
              <div className='footer-heading'>
                <Image src={LogoFooter} />
                <Ptag className='footer-head-pera'>We are always open to discuss your project and improve your online presence.</Ptag>
              </div>

              <div className='footer-med'>
                
                <div className=''>
                  <H3tag className='footer-med-h3'>
                    Email me at
                  </H3tag>
                  <Ptag className='footer-med-pera'>
                    contact@website.com
                  </Ptag>
                </div>

                <div className=''>
                  <H3tag className='footer-med-h3'>Call us</H3tag>
                  <Ptag className='footer-med-pera'>0927 6277 28525</Ptag>
                </div>

              </div>
            </Col>

            <Col lg={{ span: 4, offset: 1 }}>
              <div className='footer-end'>
                <H3tag className='footer-end-h3'>
                  Lets Talk!
                </H3tag>
                <Ptag className='footer-end-pera'>
                  We are always open to discuss your project, improve your
                  online presence and help with your UX/UI design challenges.
                </Ptag>

                <div className='footer-end-icon'>
                  <FaLinkedin />
                  <FaFacebook />
                  <FaInstagramSquare />
                  <FaTwitter />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Copyright/>
    </>
  );
};

export default Footer;
