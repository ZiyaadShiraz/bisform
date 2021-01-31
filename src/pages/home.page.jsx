import React from 'react';
// here you display various stores.
// import BuyImage from './images/buy.svg';
// import InvestImage from './images/invest.svg';
import './home.style.css';
import CarouselComponent from '../components/carousel/carousel.component';

export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    // return <h1>Home Page</h1>;
    return <CarouselComponent />;
  }
}
