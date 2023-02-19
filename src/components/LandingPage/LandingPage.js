import React from 'react';
import './LandingPage.css';
import PropertyCard from '../PropertyCard/PropertyCard';
import airbnbData from '../../dataset/dataset_airbnb.json';
import Footer from '../Footer/Footer';
import FilterSection from '../FilterSection/FilterSection';
import { useState } from "react";


const filterData = {
  search: '',
  location: {
    value: '',
    // options: [...new Set(airbnb_dataset.map((value) => value.address.split(',').slice(1).join(',').trim()))]
    options: ['California, United States', 'New York, United States', 'Florida, United States', 'Ohio, United States', 'Any']
  },
  price: {
    value: '',
    options: ['0-$5,000', '$5,000-$10,000', '$10,000-$15,000', '$15,000-$20,000', 'Any']
  },
  propertyType: {
    value: '',
    options: ['House', 'Townhouse', 'Villa', 'Condo', 'Any']
  },
  rating: {
    value: '',
    options: [
        {label: 'Poor (0-2)', value: '0-2'},
        {label: 'Average (2-3)', value: '2-3'},
        {label: 'Good (3-4)', value: '3-4'},
        {label: 'Very Good (4-5)', value: '4-5'},
        {label: 'Any', value: 'Any'}
      ]
  }
}
const all_airbnb_data = JSON.parse(JSON.stringify(airbnbData))

function LandingPage() {
  const [airbnb_dataset, setAirbnbDataset] = useState(all_airbnb_data);
  const total_cards = airbnb_dataset.length
  const cards_shown = 30
  let total_pages = total_cards / cards_shown
  if(Number(total_pages) === total_pages && total_pages % 1 !== 0) total_pages = parseInt(total_pages + 1)

  const page_wise_airbnb_data = {}
  const all_property_cards = []
  const [selected_page, setSelectedPage] = useState(1)

  Array(total_pages).fill(0).forEach((_, id)=>{
    page_wise_airbnb_data[id+1] = airbnb_dataset.slice(id*cards_shown, (id+1)*cards_shown)
  });

  if(airbnb_dataset.length) page_wise_airbnb_data[selected_page].forEach((element, id) => {
      all_property_cards.push(
        <PropertyCard 
          name={element.name}
          property_url={element.url}
          price={element.pricing.rate.amountFormatted}
          image_url={element.photos[0].pictureUrl}
          address={element.address}
          property_type={element.roomType}
          ratings={element.stars}
        ></PropertyCard>)
  });
  
  const processFilterChange = () => {
    console.log(filterData);
    const processedData = all_airbnb_data.filter((value) => {
      const searchFlag = value.name.toLowerCase().includes(filterData.search.toLowerCase()) || value.address.toLowerCase().includes(filterData.search.toLowerCase())
      const locationFlag = filterData.location.value === '' || filterData.location.value === 'Any' || value.address.toLowerCase().includes(filterData.location.value.toLowerCase())
      const propertyTypeFlag = filterData.propertyType.value === '' || filterData.propertyType.value === 'Any' || value.roomType.toLowerCase().includes(filterData.propertyType.value.toLowerCase())
      const priceFlag = filterData.price.value === '' || filterData.price.value === 'Any' || (value.pricing.rate.amount >= parseInt(filterData.price.value.split('-')[0].replace('$', '').replace(',', '')) && value.pricing.rate.amount <= parseInt(filterData.price.value.split('-')[1].replace('$', '').replace(',', '')))
      const ratingFlag = filterData.rating.value === '' || filterData.rating.value === 'Any' || (value.stars >= parseInt(filterData.rating.value.split('-')[0]) && value.stars <= parseInt(filterData.rating.value.split('-')[1]))
      return searchFlag && locationFlag && propertyTypeFlag && priceFlag && ratingFlag
    });
    setAirbnbDataset(processedData);
  }
  const handlePaginationChange = (action) => (e) => {
    const page = e.target.innerText
    if(action === 'page') setSelectedPage(page);
    if(action === 'previous' && selected_page !== 1) setSelectedPage(selected_page - 1); 
    if(action === 'next' && selected_page !== total_pages) setSelectedPage(selected_page + 1); 
  }
  const handleFilterChange = (filterType) => (e) => {
    if(filterType === 'search') filterData.search = e.target.value;
    if(filterType === 'location') filterData.location.value = e.target.value;
    if(filterType === 'price') filterData.price.value = e.target.value;
    if(filterType === 'property_type') filterData.propertyType.value = e.target.value;
    if(filterType === 'rating') filterData.rating.value = e.target.value;
    processFilterChange();
  }

  return (
    <div>
      <FilterSection
        handleFilterChange={handleFilterChange}
        filterData={filterData}
      ></FilterSection>
      <div className='p-5 mt-5 flex justify-center'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12'>
          {all_property_cards}
        </div>
      </div>
      <Footer 
        total_pages={total_pages}
        selected_page={selected_page}
        handlePaginationChange={handlePaginationChange}
      ></Footer>
    </div>
  )
}

export default LandingPage;