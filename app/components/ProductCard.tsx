import React from 'react'
import { Text, List, Button } from '@mantine/core'

const names = [
    "Full Stack Developer",
    "Node Js Developer",
    "UX/UI Designer"
]

const ProductCard = () => {
  return (
    <div className='flex flex-col p-4 h-[360px] w-[316px] rounded-[12px] shadow-md bg-white'>
        <div className='flex justify-between'>
            <div className='shadow-lg rounded-[12px] w-20 h-20 p-2 bg-gray-100 '>
                <img  src={`/assets/img/image-${Math.floor(Math.random()*3)+1}.png`} alt="" />
            </div>
            <div className='flex justify-center items-center w-[75px] h-[33px] rounded-[10px] bg-[#B0D9FF]'>
                <p className='text-sm '>24h Ago</p>
            </div>
        </div>
        <div>
            <h3 className='text-xl font-bold pt-6'>{names[Math.floor(Math.random()*names.length)]}</h3>
        </div>
        <div className='flex gap-4 items-center  pt-7 h-[22px] text-[#5A5A5A]'>
            <div className='flex items-center gap-1'>
                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7 14.75C11.7 12.7618 9.28233 11.15 6.29999 11.15C3.31766 11.15 0.899994 12.7618 0.899994 14.75M15.3 12.05V9.35M15.3 9.35V6.65M15.3 9.35H12.6M15.3 9.35H18M6.29999 8.45C4.31177 8.45 2.69999 6.83822 2.69999 4.85C2.69999 2.86177 4.31177 1.25 6.29999 1.25C8.28822 1.25 9.89999 2.86177 9.89999 4.85C9.89999 6.83822 8.28822 8.45 6.29999 8.45Z" stroke="#5A5A5A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className='text-base font-medium '>1-3 yr Exp</p>
            </div>
            <div className='flex items-center gap-1'>
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.76364 16.3408H3.49091M3.49091 16.3408H12.1273M3.49091 16.3408V4.42274C3.49091 3.45538 3.49091 2.97133 3.67918 2.60185C3.84478 2.27684 4.10882 2.0128 4.43383 1.8472C4.80331 1.65894 5.28736 1.65894 6.25472 1.65894H9.36381C10.3312 1.65894 10.8142 1.65894 11.1837 1.8472C11.5087 2.0128 11.7736 2.27684 11.9392 2.60185C12.1273 2.97097 12.1273 3.45443 12.1273 4.4199V9.43166M12.1273 16.3408H17.3091M12.1273 16.3408V9.43166M17.3091 16.3408H19.0364M17.3091 16.3408V9.43166C17.3091 8.62686 17.309 8.22465 17.1775 7.90723C17.0022 7.484 16.6663 7.14754 16.243 6.97223C15.9256 6.84075 15.5228 6.84075 14.718 6.84075C13.9132 6.84075 13.5108 6.84075 13.1933 6.97223C12.7701 7.14754 12.4341 7.484 12.2588 7.90723C12.1273 8.22465 12.1273 8.62685 12.1273 9.43166M6.08182 7.70439H9.53637M6.08182 5.11348H9.53637" stroke="#5A5A5A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className='text-base font-medium '>Onsite</p>

            </div>
            <div className='flex items-center gap-1'>
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.1728 10.0001L8.99096 15.4546L0.809143 10.0001M17.1728 13.6365L8.99096 19.091L0.809143 13.6365M17.1728 6.36373L8.99096 11.8183L0.809143 6.36373L8.99096 0.90918L17.1728 6.36373Z" stroke="#5A5A5A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className='text-base font-medium '>12LPA</p>
            </div>
        </div>
        <div className='-ml-1 pt-7 text-[#5A5A5A] text-sm font-medium'>
            <ul>
                <li className='flex gap-1'><Text>{'\u2022'}</Text> <Text size='sm'> A user-friendly interface lets you browse stunning photos and videos</Text></li>
                <li className='flex gap-1'><Text>{'\u2022'}</Text> <Text size='sm'>Filter destinations based on interests and travel style, and create personalized</Text></li>
            </ul>
        </div>
        <div className='flex justify-center items-center pt-5'>
            <Button size='md' variant="filled" fullWidth color="#00AAFF" radius="md">
                <Text>Apply Now</Text>
            </Button>
        </div>
    </div>
  )
}

export default ProductCard      