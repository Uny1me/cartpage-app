import './App.css';
import Nav from './components/Nav';
import CartItem from './components/CartItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <CartItem />
      {/* Hello world */}
    </div>
  );
}

export default App;
