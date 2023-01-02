// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import Home from './pages/Home';
import CarriersTab from './pages/CarriersTab';
// import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
// import { About } from './components/About';
// import { Projects } from './components/Projects';
// import {Skills} from './components/Skills';
// import { Banner } from './components/Banner';
import Test from './pages/Test';
import Faq from './pages/Faq';
// import Services from './pages/Services';
import WhatOffer from './pages/WhatOffer';
import HomeServices from './pages/Services';
import LTLServices from './pages/LTLServices';
import RailServices from './pages/RailServices';
import AirServices from './pages/AirServices';
import OceanServices from './pages/OceanServices';
import WarehouseServices from './pages/WarehouseServices';
import VolumesServices from './pages/VolumeServices';
import './components/serviceFolder/ServicesTest.css'
// import { Banner } from './components/Banner';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
