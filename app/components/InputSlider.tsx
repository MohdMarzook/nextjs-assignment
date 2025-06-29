'use client';
import React from 'react'
import { RangeSlider, Text } from '@mantine/core';

import { useState } from 'react';

const InputSlider = () => {
    const [minvalue, setMinValue] = useState(20);
    const [maxvalue, setMaxValue] = useState(60);
  return (
    <>
        <div className='flex items-center justify-between -mt-1'>
            <Text size="lg">The Range: </Text>
            <Text><b>${minvalue}k - ${maxvalue}k</b></Text>
        </div>

        <RangeSlider
            className='mt-2'
            minRange={20}
            min={20}
            max={250}
            step={5}
            label={null}
            color="blue"
            defaultValue={[minvalue, maxvalue]}
            onChange={(value) => {
                setMinValue(value[0]);
                setMaxValue(value[1]);
            }}
            styles={(theme) => ({
                track: {
                    height: 2,
                },
                bar: {
                    backgroundColor: 'black',
                },
                thumb: {
                    width: 16,
                    height: 16,
                    backgroundColor: 'white',
                    border: '5px solid black'
                }
            })}

        />
    </>
  )
}

export default InputSlider