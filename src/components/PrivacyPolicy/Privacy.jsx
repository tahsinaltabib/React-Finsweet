import React from 'react'
import H3tag from './../../reuseable/H3tag';
import Ptag from './../../reuseable/Ptag';
import { Col, Container, Row } from 'react-bootstrap';
import './privacy.css'
import Image from './../../reuseable/Image';


const Privacy = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            
            <div className='pri-heading'>
              <H3tag className='p-h3'>Privacy Policy</H3tag>
              <Ptag className='p-p'>When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help you bring your</Ptag>

            </div>
            <div className='pri-med'>

              <H3tag className='pri-med-h3'>Lorem ipsum dolor.</H3tag>

              <Ptag className='pri-med-p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <span className='pri-med-span'>Excepteur sint occaecat</span> cupidatat non proident.</Ptag>

              <Ptag className='pri-med-p2'>Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Ptag>

            </div>
            <div className='pri-end'>

              <H3tag className='pri-end-h3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</H3tag>

              <Ptag className='pri-end-p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <span className='pri-end-span'>cupidatat</span> non proident. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</Ptag>

              <ul className='pri-end-ul'>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
              </ul>

              <Ptag className='pri-end-p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</Ptag>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Privacy