import logo from './logo.svg';
import './css/home.css';
import Lae from './Components/Lae';
import EventListing from './Components/EventListing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrevEvents from './Components/PrevEvents';
import LiveEvents from './Components/LiveEvents';
import UpEvents from './Components/UpEvents';
import Gallery from './Components/Gallery';
import AllGallery from './Components/AllGallery';
import Home from './Components/Home';

function App() {
  return (
    // <>

    // <Lae/>
    // <EventListing/>
    // </>
    <Router>


    <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="prevEvents" element={<PrevEvents/>} />
        <Route path="/" element={<LiveEvents/>} />
        <Route path="upEvents" element={<UpEvents/>} />
      </Route>
      <Route path="/allGallery" element={<AllGallery/>}/>
    </Routes>
    
  </Router>
  );
}

export default App;
