import React from 'react'
import './readCom.css'
import { Container } from 'react-bootstrap'
import H3tag from '../../reuseable/H3tag';
import Ptag from '../../reuseable/Ptag';
import Image from '../../reuseable/Image';
import Rdblog from '../../assets/rdblog1.png'


const ReadBBanner = () => {
  return (
    <section>
      <Container>
        <div className='rdblog-st-div'>
          <div className='rdblog-st-head'>
            
            <H3tag className='rdblog-st-heading'>A UX Case Study on Creating a Studious Environment for Students
            </H3tag>

            <Ptag className='rdblog-st-pera'>Andrew Jonson Posted on 27th January 2021</Ptag>
          </div>
           <Image src={Rdblog}/>
        </div>
      </Container>
    </section>
  )
}

export default ReadBBanner