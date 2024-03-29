import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const ProductDetailsCarousel = ({images}) => {
  return (
    <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto stikcy top-[50px]'>
        <Carousel
            infiniteLoop={true}
            showIndicators={false}
            showStatus={false}
            thumbWidth={60}
            className='productCarousel'
        >
          {images.map((img) => (
            <img src={img.attributes.url} alt={img.name} key={img.id} />
          ))}
        </Carousel>
    </div>
  )
}

export default ProductDetailsCarousel