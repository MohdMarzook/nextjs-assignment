'use client';
import React from 'react'
import { Input, MultiSelect, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import ModalContent from './ModalContent';
const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal radius={16} opened={opened} onClose={close} size={700} withCloseButton={false} centered>
        <ModalContent/>
      </Modal>
      <div className='flex items-center justify-evenly w-[890px] h-[80px] bg-white rounded-[122px] shadow-md'>
          <div className='flex items-center justify-center h-full w-[44px] '>
              <img src="assets/img/logo.png" alt="" />
          </div>
          <div>
            <button className='px-6 py-2 rounded-xl duration-500 hover:duration-500 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-md '><Text>Home</Text></button>
            <button className='px-6 py-2 rounded-xl duration-500 hover:duration-500 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-md '><Text>Find Jobs</Text></button>
            <button className='px-6 py-2 rounded-xl duration-500 hover:duration-500 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-md '><Text>Find Talents</Text></button>
            <button className='px-6 py-2 rounded-xl duration-500 hover:duration-500 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-md '><Text>About us</Text></button>
            <button className='px-6 py-2 rounded-xl duration-500 hover:duration-500 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-md '><Text>Testimonials</Text></button>
          </div>
          <div>
              <button onClick={open} className="relative px-6 py-2 w-[123px] h-9 rounded-[30px] overflow-hidden bg-gradient-to-tr from-[#6100AD] to-[#A128FF] text-white group duration-500 hover:duration-500 hover:translate-x-0.5 hover:translate-y-0.5 hover:scale-105 ">
                <span className="absolute inset-0 flex items-center justify-center transform transition-transform duration-500 group-hover:-translate-y-full">
                  Create Job
                </span>
                <span className="absolute inset-0 flex items-center justify-center transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                  login
                </span>
              </button>
          </div>
      </div>
    </>
  )
}

export default Navbar