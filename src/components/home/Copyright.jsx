import React from 'react'
import '../home/copyright.css'
import { Container } from 'react-bootstrap';
import Ptag from '../../reuseable/Ptag';

const Copyright = () => {
  return (
    <section className='copyright'>
        <Container>
            <div className='copyright-main-div'>
                    <Ptag className='copyright-pera'>Copyright 2022, Finsweet.com</Ptag>
                <div>
                    <ul className='flex gap-[32px] mb-0'>
                        <li className='font-poppins font-medium' >Home</li>
                        <li className='font-poppins font-medium' >About us</li>
                        <li className='font-poppins font-medium' >Features</li>
                        <li className='font-poppins font-medium' >Pricing</li>
                        <li className='font-poppins font-medium' >FAQ</li>
                        <li className='font-poppins font-medium' >Blog</li>
                    </ul>

                </div>
            </div>

        </Container>
    </section>
  )
}

export default Copyright