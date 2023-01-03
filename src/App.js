// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Test from './pages/Test';
import CarriersTab from './pages/CarriersTab';
import HomeServices from './pages/HomeServices';
// import LTLServices from './pages/HomeServices';
// import RailServices from './pages/RailServices';
// import AirServices from './pages/AirServices';
// import OceanServices from './pages/OceanServices';
// import VolumesServices from './pages/VolumeServices';
// import WarehouseServices from './pages/WarehouseServices';
import WhatOffer from './pages/WhatOffer';
import Faq from './pages/Faq';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';


function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path='carriers' element={<CarriersTab />} />
        <Route path="/test" element={<Test />} />
        <Route path='/services' element={<HomeServices />} />
        <Route path='/offer' element={<WhatOffer />} />
        <Route path='/faq' element={<Faq />} /> 
        {/* <Route path='/servicesLTL' element={<LTLServices />} />
        <Route path='/WarehouseServices' element={<WarehouseServices />} />
        <Route path='/RailServices' element={<RailServices />} />
        <Route path='/AirServices' element={<AirServices />} />
        <Route path='/OceanServices' element={<OceanServices />} />
        <Route path='/VolumePartial' element={<VolumesServices />} />
        */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


{/* <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/test' element={<Test />}></Route>
        <Route path='/carriers' element={<CarriersTab />}></Route>
        <Route path='/services' element={<HomeServices />}></Route>
        <Route path='/servicesLTL' element={<LTLServices />}></Route>
        <Route path='/RailServices' element={<RailServices />}></Route>
        <Route path='/AirServices' element={<AirServices />}></Route>
        <Route path='/OceanServices' element={<OceanServices />}></Route>
        <Route path='/VolumePartial' element={<VolumesServices />}></Route>
        <Route path='/WarehouseServices' element={<WarehouseServices />}></Route>
        <Route path='/offer' element={<WhatOffer />}></Route>
        <Route path='/faq' element={<Faq />}></Route>
      </Routes> */}