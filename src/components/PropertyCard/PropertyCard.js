import React from 'react';
import './PropertyCard.css';

function PropertyCard(props) {
    return (
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
                <img class="rounded-t-lg" src={props.image_url} alt="" />
            </a>
            <div class="px-2 py-4">
                <div className='flex mb-1 items-center'>
                    <span className='text-purple-700 font-bold text-xl mr-1'>{props.price} </span>
                    <p className='font-normal text-gray-800 text-lg'>/night</p>
                </div>
                <a href={props.property_url} className='hover:underline'>
                    <h5 class="mb-2 text-xl tracking-tight font-semibold text-gray-900">{ props.name }</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700">{props.address}</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-500 rounded-lg hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-300">
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
    )
}

export default PropertyCard