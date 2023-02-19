import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import './PropertyCard.css';

function PropertyCard(props) {
    let propertyType = '';
    if (props.property_type.toLowerCase().includes('townhouse')) propertyType = 'TownHouse';
    else if (props.property_type.toLowerCase().includes('house')) propertyType = 'House';
    else if (props.property_type.toLowerCase().includes('villa')) propertyType = 'Villa';
    else if (props.property_type.toLowerCase().includes('condo')) propertyType = 'Condo';
    else propertyType = 'House';
    
    let net_ratings = 0;
    if (props.ratings) net_ratings = props.ratings;
    if (Number(net_ratings) === net_ratings && net_ratings % 1 !== 0) net_ratings = parseInt(net_ratings)
    const rating_components = Array(5).fill(0).map((_, id) => <svg aria-hidden="true" className={id+1 <= net_ratings ? "w-5 h-5 text-violet-400" : "w-5 h-5 text-gray-300"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>);

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
                    <h5 class="mb-2 text-xl tracking-tight font-semibold text-gray-900">{props.name}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700">{props.address}</p>
                <div className='flex justify-between'>
                    <span><FontAwesomeIcon icon={faHouse} className='text-purple-600' /> {propertyType}</span>
                    <div class="flex items-center">
                        {rating_components}
                        <p class="ml-2 text-sm font-medium text-gray-500">{props.ratings ? props.ratings : 0}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard