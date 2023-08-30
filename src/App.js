import React from 'react';
import { Route, Routes } from "react-router-dom"
import Home from './Components/Home';
import './App.css';
import AboutUs from './Components/AboutUs';
import Procedures from './Components/Procedures';
import Massage, { FullMassage, BackMassage, LegsMassage } from './Components/Peocedures/Massage';
import Time from './Components/WorkTime';
import Contacts from './Components/Contacts';
import Offers from './Components/Offers';
import Cosmetics, { Face, Cleaning, Diamant, Led, Hydro, Acne, Light, AntiAge, Oxygen, NoEdge, Radio, Acid, Lifting, Painting } from './Components/Peocedures/Cosmetics';
import Cellulite, { Celutron, Press, AntiCellulite} from './Components/Peocedures/Cellulite';
import Waxing, { Man, Woman} from './Components/Peocedures/Waxing';
import Therapies, {Shoko, Honey, Peeling, Paraffin} from './Components/Peocedures/Therapies';
import Makeup, {ProMakeup, ProPlus, Teach} from './Components/Peocedures/Makeup';
import Manicure, {Nails, Gel, Uv, Repair, Decoration, HandTherapie} from './Components/Peocedures/Manicure';
import Login from './Components/Login';
import Signup from './Components/Signup';
import AuthPage from './Components/AuthPage';
import Admin from './Components/Admin';

function App() {

  return (
         
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Procedures' element={<Procedures />} />
        <Route path='/Massage' element={<Massage />} />
        <Route path='/FullMassage' element={<FullMassage />} />
        <Route path='/BackMassage' element={<BackMassage />} />
        <Route path='/LegsMassage' element={<LegsMassage />} />
        <Route path='/Cosmetics' element={<Cosmetics />} />
        <Route path='/Face' element={<Face />} />
        <Route path='/Cleaning' element={<Cleaning />} />
        <Route path='/Diamant' element={<Diamant />} />
        <Route path='/Led' element={<Led />} />
        <Route path='/Hydro' element={<Hydro />} />
        <Route path='/Acne' element={<Acne />} />
        <Route path='/Light' element={<Light />} />
        <Route path='/AntiAge' element={<AntiAge />} />
        <Route path='/Oxygen' element={<Oxygen />} />
        <Route path='/NoEdge' element={<NoEdge />} />
        <Route path='/Radio' element={<Radio />} />
        <Route path='/Acid' element={<Acid />} />
        <Route path='/Lifting' element={<Lifting />} />
        <Route path='/Painting' element={<Painting />} />
        <Route path='/Cellulite' element={<Cellulite />} />
        <Route path='/Celutron' element={<Celutron />} />
        <Route path='/Press' element={<Press />} />
        <Route path='/AntiCellulite' element={<AntiCellulite />} />
        <Route path='/Waxing' element={<Waxing />} />
        <Route path='/Man' element={<Man />} />
        <Route path='/Woman' element={<Woman />} />
        <Route path='/Therapies' element={<Therapies />} />
        <Route path='/Shoko' element={<Shoko />} />
        <Route path='/Honey' element={<Honey />} />
        <Route path='/Peeling' element={<Peeling />} />
        <Route path='/Paraffin' element={<Paraffin />} />
        <Route path='/Makeup' element={<Makeup />} />
        <Route path='/ProMakeup' element={<ProMakeup />} />
        <Route path='/ProPlus' element={<ProPlus />} />
        <Route path='/Teach' element={<Teach />} />
        <Route path='/Manicure' element={<Manicure />} />
        <Route path='/Nails' element={<Nails />} />
        <Route path='/Gel' element={<Gel />} />
        <Route path='/Uv' element={<Uv />} />
        <Route path='/Repair' element={<Repair />} />
        <Route path='/Decoration' element={<Decoration />} />
        <Route path='/HandTherapie' element={<HandTherapie />} />
        <Route path='/Time' element={<Time />} />
        <Route path='/Contacts' element={<Contacts />} />
        <Route path='/Offers' element={<Offers />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/AuthPage' element={<AuthPage />} />
        <Route path='/Admin' element={<Admin />} />
      
      </Routes>
   
  );
}

export default App;
