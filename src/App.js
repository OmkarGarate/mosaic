import './css/home.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrevEvents from './Components/PrevEvents';
import LiveEvents from './Components/LiveEvents';
import UpEvents from './Components/UpEvents';
import AllGallery from './Components/AllGallery';
import Home from './Components/Home';
import EventPage from './Components/EventPage';

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
      <Route path="/eventPage" element={<EventPage/>}/>
    </Routes>
    
  </Router>
  );
}

export default App;
