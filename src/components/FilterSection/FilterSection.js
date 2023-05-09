import React from 'react';
import './FilterSection.css';


function FilterSection(props) {

  return (
    <div className='px-12 mx-24 my-6'>
      <div className='flex lg:justify-between'>
        <h1 className='text-3xl font-mono font-semibold'>SEARCH PROPERTIES TO RENT</h1>
        <input onKeyUp={props.handleFilterChange('search')} type="search" id="default-search" class="block px-3 py-1 h-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-violet-400 focus:border-violet-500" placeholder="Search" required />
      </div>
      <div className='mt-3 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4'>
        <div className='flex'>
          <div className='flex items-center font-medium text-violet-600 border-2 border-r-0 rounded-md rounded-r-none px-2 border-solid border-gray-300'><span>Location</span></div>
          <select id="countries" onChange={props.handleFilterChange('location')} class="bg-gray-50 border-2 border-solid border-gray-300 text-gray-900 text-base font-normal rounded-md rounded-l-none focus:ring-0 focus:border-gray-300 focus:outline-none block w-full p-2.5">
            <option selected disabled hidden>Select Location</option>
            {props.filterData.location.options.map((option) => <option value={option} >{option}</option>)}
          </select>
        </div>
        <div className='flex'>
        <div className='flex items-center font-medium text-violet-600 border-2 border-r-0 rounded-md rounded-r-none px-2 border-solid border-gray-300'><span>Price</span></div>
          <select id="countries" onChange={props.handleFilterChange('price')} class="bg-gray-50 border-2 border-solid border-gray-300 text-gray-900 text-base font-normal rounded-md rounded-l-none focus:ring-0 focus:border-gray-300 focus:outline-none block w-full p-2.5">
            <option selected disabled hidden>Select Price Range</option>
            {props.filterData.price.options.map((option) => <option value={option} >{option}</option>)}
          </select>
        </div>
        <div className='flex'>
        <div className='flex items-center font-medium text-violet-600 border-2 border-r-0 rounded-md rounded-r-none px-2 border-solid border-gray-300'><span>Type</span></div>
          <select id="countries" onChange={props.handleFilterChange('property_type')} class="bg-gray-50 border-2 border-solid border-gray-300 text-gray-900 text-base font-normal rounded-md rounded-l-none focus:ring-0 focus:border-gray-300 focus:outline-none block w-full p-2.5">
            <option selected disabled hidden>Select Property Type</option>
            {props.filterData.propertyType.options.map((option) => <option value={option} >{option}</option>)}
          </select>
        </div>
        <div className='flex'>
        <div className='flex items-center font-medium text-violet-600 border-2 border-r-0 rounded-md rounded-r-none px-2 border-solid border-gray-300'><span>Location</span></div>
          <select id="countries" onChange={props.handleFilterChange('rating')} class="bg-gray-50 border-2 border-solid border-gray-300 text-gray-900 text-base font-normal rounded-md rounded-l-none focus:ring-0 focus:border-gray-300 focus:outline-none block w-full p-2.5">
            <option selected disabled hidden>Select Ratings Range</option>
            {props.filterData.rating.options.map((option) => <option value={option.value} >{option.label}</option>)}
          </select>
        </div>
      </div>
      <div className='flex justify-end mt-3'>
        <div>
            <select onChange={props.handleFilterChange('entries')} className='bg-gray-50 border-2 border-solid border-gray-300 text-gray-900 text-base font-medium rounded-lg focus:ring-0 focus:border-gray-300 focus:outline-none py-1 px-2'>
              {props.filterData.entries.options.map((option) => <option value={option} selected={option == props.filterData.entries.value}>{option}</option>)}
            </select>
        </div>
      </div>
    </div>
  )
}

export default FilterSection