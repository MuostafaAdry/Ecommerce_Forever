import React from 'react';
 import Hero from '../Components/Home/Hero/Hero';
import LatesCollections from '../Components/Home/LatesCollections/LatesCollections';
import { products } from '../assets/frontend_assets/assets';
import BestSeller from '../Components/Home/BestSeller/BestSeller';
import OurPolicy from '../Components/Home/OurPolicy/OurPolicy';
const Home = () => {
  let text1='BEST'
  let text2='Seller'
  return (
    <div>
     
          <Hero/>
          <LatesCollections products={products}/>
          <BestSeller products={products} text1={text1} text2={text2}/>
          <OurPolicy/>
       
     
    </div>
  );
}

export default Home;
