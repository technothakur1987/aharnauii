
import './App.css';

import NavBar from './Components/NavBar';
import AboutKLocal from './Components/AboutKLocal';
import Blog from './Components/Blog';
import PopularPlaces from './Components/PopularPlaces';
import Explore from './Components/Explore';




import {
  BrowserRouter,
  Routes,
  Route
  
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/AboutKLocal" element={<AboutKLocal kl="this is aboutklocal section"/>}/>
    <Route path="/Blog" element={<Blog bg="this is blog section"/>}/>
    <Route path="/PopularPlaces" element={<PopularPlaces ps="this is popular places section" />}/>
    <Route path="/Explore" element={<Explore />}/>
      
    </Routes>
    
    
    </BrowserRouter>
    
  );
}

export default App;
