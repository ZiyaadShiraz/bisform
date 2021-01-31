import BuyImage from '../../images/buy.svg';
import InvestImage from '../../images/invest.svg';
import SellImage from '../../images/sell.svg';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.style.css';
function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item interval={3000} className='carousel-item'>
        <img
          className='d-block'
          src={BuyImage}
          alt='Buy'
          height='100%'
          width='100%'
        />
        {/* <Carousel.Caption>
          <h3 className='homepage-carousel-captions'>Buy</h3>
          <p className='homepage-carousel-captions'>
            Our store based model lets you buy products from trusted suppliers.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={3000} className='carousel-item'>
        <img
          className='d-block'
          src={InvestImage}
          alt='Third slide'
          height='100%'
          width='100%'
        />
        {/* <Carousel.Caption>
          <h3 className='homepage-carousel-captions'>Second slide label</h3>
          <p className='homepage-carousel-captions'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <img
          className='d-block'
          src={SellImage}
          alt='Third slide'
          height='100%'
          width='100%'
        />
        {/* <Carousel.Caption>
          <h3 className='homepage-carousel-captions'>Third slide label</h3>
          <p className='homepage-carousel-captions'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
