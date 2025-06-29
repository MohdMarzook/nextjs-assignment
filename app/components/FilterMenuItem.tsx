import React from 'react'

interface FilterMenuItemProps {
  component: React.ReactNode;
}

const FilterMenuItem = ({component}: FilterMenuItemProps) => {
  return (
    <div className='w-[260px] h-12'>
      {component}
    </div>
  )
}

export default FilterMenuItem   