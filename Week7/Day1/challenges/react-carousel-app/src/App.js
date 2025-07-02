import logo from './logo.svg';
import './App.css';
import { Carousel } from 'react-responsive-carousel'; // ✅ bien écrit !
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <div className="App">
      <Carousel />
    </div>
  );
}

export default App;
