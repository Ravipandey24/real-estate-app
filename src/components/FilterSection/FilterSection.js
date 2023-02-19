import React from 'react';
import './FilterSection.css';


function FilterSection(props) {

  return (
    <div className='px-12 py-5 mx-24 mt-5'>
      <div className='flex lg:justify-between'>
        <h1 className='text-4xl font-semibold'>Search properties to rent</h1>
        <input onKeyUp={props.handleFilterChange('search')} type="search" id="default-search" class="block p-4 h-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-violet-400 focus:border-violet-500" placeholder="Search" required />
      </div>
      <div className='mt-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 px-2'>
        <div className='border-l-2 first:border-l-0 pl-4 border-gray-200'>
          <label for="countries" className='text-gray-900'>Location</label>
          <select id="countries" onChange={props.handleFilterChange('location')} class="bg-gray-50 border-transparent text-gray-900 text-base font-medium rounded-lg focus:ring-0 focus:border-transparent focus:outline-none block w-full p-2.5">
            <option selected disabled hidden>Select Location</option>
            {props.filterData.location.options.map((option) => <option value={option} >{option}</option>)}
          </select>
        </div>
        <div className='border-l-2 first:border-l-0 pl-4 border-gray-200'>
          <label for="countries" className='text-gray-900'>Price</label>
          <select id="countries" onChange={props.handleFilterChange('price')} class="bg-gray-50 border-transparent text-gray-900 text-base font-medium rounded-lg focus:ring-0 focus:border-transparent focus:outline-none block w-full p-2.5">
            <option selected disabled hidden>Select Price Range</option>
            {props.filterData.price.options.map((option) => <option value={option} >{option}</option>)}
          </select>
        </div>
        <div className='border-l-2 first:border-l-0 pl-4 border-gray-200'>
          <label for="countries" className='text-gray-900'>Property Type</label>
          <select id="countries" onChange={props.handleFilterChange('property_type')} class="bg-gray-50 border-transparent text-gray-900 text-base font-medium rounded-lg focus:ring-0 focus:border-transparent focus:outline-none block w-full p-2.5">
            <option selected disabled hidden>Select Property Type</option>
            {props.filterData.propertyType.options.map((option) => <option value={option} >{option}</option>)}
          </select>
        </div>
        <div className='border-l-2 first:border-l-0 pl-4 border-gray-200'>
          <label for="countries" className='text-gray-900'>Ratings</label>
          <select id="countries" onChange={props.handleFilterChange('rating')} class="bg-gray-50 border-transparent text-gray-900 text-base font-medium rounded-lg focus:ring-0 focus:border-transparent focus:outline-none block w-full p-2.5">
            <option selected disabled hidden>Select Ratings Range</option>
            {props.filterData.rating.options.map((option) => <option value={option.value} >{option.label}</option>)}
          </select>
        </div>
      </div>
    </div>
  )
}

export default FilterSection