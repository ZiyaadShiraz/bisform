import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/home.page';
import BuyPage from './pages/buy.page';
import InvestPage from './pages/invest.page';
import SellPage from './pages/sell.page';
import LoginPage from './pages/login.page';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return <Header />;
}

function Home() {
  return <HomePage />;
}

function Buy() {
  return <BuyPage />;
}

function Invest() {
  return <InvestPage />;
}

function Sell() {
  return <SellPage />;
}

function Login() {
  return <LoginPage />;
}

export default App;
