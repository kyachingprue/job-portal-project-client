import React from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Jobs from '../components/Jobs';
import Testimonials from '../components/Testimonials';
import Mencap from '../components/mencap';
import MillionsJob from '../components/MillionsJob';
import ArticleNews from '../components/ArticleNews';
import Superio from '../components/Superio';
import Recruiting from '../components/Recruiting';


const Home = () => {
  return (
    <div>
      <Header></Header>
      <Categories></Categories>
      <div className='divider py-16 '></div>
      <Jobs></Jobs>
      <Testimonials></Testimonials>
      <Mencap></Mencap>
      <MillionsJob></MillionsJob>
      <ArticleNews></ArticleNews>
      <Superio></Superio>
      <Recruiting></Recruiting>
    </div>
  );
};

export default Home;