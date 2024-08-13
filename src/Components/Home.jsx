import React from 'react';
import Header from './Header';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import Work from './Work';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Work></Work>
      <Contact></Contact>
    </div>
  );
};

export default Home;