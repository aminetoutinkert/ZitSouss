import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import AwardsShowcase from '../components/awards/AwardsShowcase';
import StorySection from '../components/home/StorySection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>ZitSouss - Huile d'Olive Marocaine Premium</title>
        <meta name="description" content="Découvrez l'authenticité de l'huile d'olive marocaine ZitSouss. Une huile extra vierge primée, issue du terroir de Souss." />
      </Helmet>
      <Hero />
      <FeaturedProducts />
      <StorySection />
      <AwardsShowcase />
    </div>
  );
};

export default Home;
