import BuyImage from '../../images/buy.svg';
import InvestImage from '../../images/invest.svg';
import SellImage from '../../images/sell.svg';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.style.css';
import { Route, Link } from 'react-router-dom';
import Buy from '../../pages/buy.page';
import Invest from '../../pages/invest.page';
import Sell from '../../pages/sell.page';

function BuyPage() {
  return <Buy />;
}
function InvestPage() {
  return <Invest />;
}
function SellPage() {
  return <Sell />;
}

function CarouselComponent() {
  return (
    <div>
      <Carousel controls={false} fade={true} touch={true}>
        <Carousel.Item interval={5000} className='carousel-item'>
          <div className='buy-carousel-item'>
            <div className='coursel-item-text-div'>
              <h1>Buy</h1>
              <ul>
                <li>
                  Store-based model gives you the power to explore{' '}
                  <span style={{ textDecoration: 'line-through' }}>
                    without feeling pressured to buy 🏃
                  </span>
                </li>
                <li>Online fraud? Protect yourself with us 😊</li>
              </ul>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000} className='carousel-item'>
          <div className='invest-carousel-item'>
            <div className='coursel-item-text-div'>
              <h1>Invest</h1>
              <ul>
                <li>
                  Invest in various investment companies and keep track of your
                  investments
                </li>
                <li>Seeking funds for your startup?</li>
              </ul>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={5000} className='carousel-item'>
          <div className='sell-carousel-item'>
            <div className='coursel-item-text-div'>
              <h1>Sell</h1>
              <ul>
                <li>
                  Can't afford to create an e-commerce site? You covered fam! 😉
                </li>
                <li>Book keeping, profit and loss charts, etc</li>
              </ul>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <Route exact path='/buy' component={BuyPage} />
      <Route exact path='/invest' component={InvestPage} />
      <Route exact path='/sell' component={SellPage} />
    </div>
  );
}

export default CarouselComponent;
