import React from "react";
import "./readbcover.css";
import H3tag from "../../reuseable/H3tag";
import Ptag from "../../reuseable/Ptag";
import Image from "../../reuseable/Image";
import { Col, Container, Row } from "react-bootstrap";
import Rdblog2 from '../../assets/rdblog2.jpg'

const ReadBCover = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <div className='rdblog-cover'>
              <H3tag className='rdblog-cover-heading1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </H3tag>

              <Ptag className='rdblog-cover-pera1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.{" "}
                <span className='rdblog-cover-span'>
                  Excepteur sint occaecat
                </span>{" "}
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </Ptag>

              <H3tag className='rdblog-cover-heading2'>
                Ut enim ad minim veniam, quis nostrud.
              </H3tag>

              <Ptag className='rdblog-cover-pera2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat {" "}
                <span className='rdblog-cover-span'>
                  cupidatat non</span>{" "} proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Ptag>

              <ul className='rdblog-cover-ul'>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
              </ul>

              <Ptag className='rdblog-cover-pera3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Ptag>
              <Image src={Rdblog2} />
              <H3tag className='rdblog-cover-heading2'>
                Ut enim ad minim veniam, quis nostrud
              </H3tag>
              <Ptag className='rdblog-cover-pera3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in {" "}
                <span className='rdblog-cover-span'>
                  voluptate velit esse
                </span>{" "} cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Ptag>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ReadBCover;
