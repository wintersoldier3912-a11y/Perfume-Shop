import React from 'react';

const HeroBanner: React.FC = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('product-grid');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-stone-100 overflow-hidden h-[500px] md:h-[600px]">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=2070&auto=format&fit=crop"
          alt="Elegant perfume bottles"
        />
        <div className="absolute inset-0 bg-brand-dark/30 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-serif">
          Scent of Elegance
        </h1>
        <p className="mt-6 text-xl text-stone-100 max-w-3xl">
          Discover our curated collection of artisanal fragrances. Each scent is a journey, crafted to evoke memories and inspire dreams.
        </p>
        <div className="mt-10">
          <button
            onClick={scrollToProducts}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-brand-dark bg-white hover:bg-brand-secondary transition-colors duration-300 shadow-lg"
          >
            Explore Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;