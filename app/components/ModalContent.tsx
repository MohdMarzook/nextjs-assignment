import React from 'react'
import { Button, Input, MultiSelect, Text, Textarea  } from '@mantine/core'
import Flatpickr from "react-flatpickr";

const ModalContent = () => {
    return (
    <>
            <div className='flex flex-col items-center justify-center h-full'>
                <Text fw={550} size="lg" mb="md">Create Job Opening</Text>
            </div>
            <div className='flex flex-col items-center px-8 py-4'>
                <div className='grid grid-cols-2 gap-8 w-full'>
                    <div className='flex flex-col'>
                        <div>
                            <Text fw={500}>Job Title</Text>
                        </div>
                        <div>
                            <Input  radius="md" size='md' placeholder="Full Stack Developer" />
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <div>
                            <Text fw={500}>Company Name</Text>
                        </div>
                        <div >
                            <Input radius="md" size='md' placeholder="Amazon, Microsoft, Swiggy" />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div>
                            <MultiSelect
                                 
                                data={['Remote', 'Onsite', 'Hybrid']}
                                placeholder="Select location"
                                label="Location"
                                radius="md"
                                size="md"
                            />
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <div>
                            <MultiSelect
                                 
                                data={['Intership','Full-time', 'Part-time', 'Contract']}
                                placeholder="Select job type"
                                label="Job Type"
                                radius="md"
                                size="md"
                            />
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <div>
                            <Text fw={500}>Salary Range</Text>
                        </div>
                        <div className="flex items-center text-sm gap-2">
                            <div className="relative ">
                                <span className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                        <path
                                            d="M7 12L4 15M4 15L1 12M4 15V1M9 4L12 1M12 1L15 4M12 1V15"
                                            stroke="#BCBCBC"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    placeholder="$0"
                                    className="h-11 w-full border border-gray-300 rounded-lg py-2 pl-8 focus:outline-none"
                                />
                            </div>

                            <div className="relative">
                                <span className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                        <path
                                            d="M7 12L4 15M4 15L1 12M4 15V1M9 4L12 1M12 1L15 4M12 1V15"
                                            stroke="#BCBCBC"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    placeholder="$12,00,000"
                                    className="h-11 w-full border border-gray-300 rounded-lg py-2 pl-8 focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <div>
                            <Text fw={500}>Application Deadline</Text>
                        </div>
                        <div>
                            <Flatpickr
                                placeholder="Select date"
                                options={{
                                dateFormat: "Y-m-d",
                                allowInput: true,
                                clickOpens: true, 
                                }}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center px-8 py-4'>
                <div className='justify-start w-full'>
                <Text fw={500} size="lg" mb="md">Job Description</Text>
                </div>
                <div className='w-full rounded-xl'>
                    <Textarea  minRows={4} maxRows={5} autosize placeholder="Please share a description to let the candidate know more about the job role" />
                </div>
            </div>
            <div className='flex items-center justify-between px-8 py-4'>
                <button className="flex px-10 py-3 items-center gap-1.5 border border-gray-400 text-gray-800 rounded-lg hover:bg-gray-100">
                    <Text>Save Draft</Text> <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 7.5L5 11.5L1 7.5M9 1.5L5 5.5L1 1.5" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </button>
                <button className="flex px-10 py-3 items-center gap-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <Text>Publish</Text>
                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 1.5L11 5.5L7 9.5M1 1.5L5 5.5L1 9.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>


                </button>
            </div>
    </>
    )
};
export default ModalContent