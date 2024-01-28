import logo from './logo.svg';
import './css/home.css';
import Lae from './Components/Lae';
import EventListing from './Components/EventListing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrevEvents from './Components/PrevEvents';
import LiveEvents from './Components/LiveEvents';
import UpEvents from './Components/UpEvents';

function App() {
  return (
    // <>

    // <Lae/>
    // <EventListing/>
    // </>
    <Router>

<Lae/>
    <Routes>
    
    
      <Route path="/" element={<EventListing/>}>
        <Route path="prevEvents" element={<PrevEvents/>} />
        <Route path="liveEvents" element={<LiveEvents/>} />
        <Route path="upEvents" element={<UpEvents/>} />
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
