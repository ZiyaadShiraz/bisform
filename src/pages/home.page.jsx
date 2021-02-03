import React from 'react';
// here you display various stores.
// import BuyImage from './images/buy.svg';
// import InvestImage from './images/invest.svg';
import './home.style.css';
import CarouselComponent from '../components/carousel/carousel.component';
import StoreList from '../components/store-list/store-list.component';

export default class HomePage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // here i will make an ajax call and populate store-list
  }

  render() {
    // return <h1>Home Page</h1>;
    return (
      <div>
        <CarouselComponent />
        <StoreList />
        {/* add a footer */}
      </div>
    );
  }
}
