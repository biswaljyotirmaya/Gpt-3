import React from 'react';

import Navvbar from './components/navbar/Navvbar';
import Header from './containers/header/Header';
import Brands from './components/brands/Brands';
import WhatGpt3 from './containers/whatGpt3/WhatGpt3';
import Possibility from './containers/possibility/Possibility';
import Ctaa from './components/cta/Ctaa';
import Blog from './containers/blog/Blog';
import Footer from './containers/footer/Footer';
import Features from './containers/features/Features';

const App = () => (
  <div className="box-border scroll-smooth bg-gradient-to-r from-[#22416d] to-[#040C18]  h-vh w-full transition delay-150 duration-300 ease-in-out ">
    <div>
      <Navvbar />
      <Header />
    </div>
    <div>
    <Brands />
    <WhatGpt3 />
    <Features/>
    <Possibility />
    <Ctaa />
    <Blog />
    <Footer />
    </div>
    
  </div>
);

export default App;
