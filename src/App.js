import './App.css';
import Nav from './components/Nav';
import CartItem from './components/CartItem';
import Product from './components/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const MainPage = () => {
  return (
    <div >
      <Nav />
      <CartItem />
    </div>
  );
}

const ProductPage = () => {
  return (
    <div >
      <Nav />
      <Product />
    </div>
  );
}

export { MainPage, ProductPage };
