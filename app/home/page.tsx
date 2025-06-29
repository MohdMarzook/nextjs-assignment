import Link from 'next/link'
import React from 'react'
import ProductCard from '../components/ProductCard'
import Navbar from '../components/Navbar'
import FilterMenu from '../components/FilterMenu'

function home() {
  return (
    <main>
      <div className='flex justify-center flex-col items-center h-[214px] bg-white shadow-lg shadow-gray-200'>
        <Navbar />
        <FilterMenu />
      </div>
      <div className='flex flex-wrap gap-4 justify-center p-16'>
        {Array.from({ length: 8 }, (_, index) => (
          <ProductCard />
        ))}
      </div>
    </main>
  )
}

export default home