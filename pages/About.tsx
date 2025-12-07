import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative bg-brand-dark py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=2070&auto=format&fit=crop"
            alt="Perfume lab"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl lg:text-6xl">
            The Essence of Lumière
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Crafting more than just fragrances—we craft memories, emotions, and moments in time.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-brand-dark mb-6">Our Story</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Founded in 2023, Lumière Parfumerie began with a simple question: How can a scent capture the complexity of human emotion? 
                </p>
                <p className="mb-4">
                  Our journey started in Grasse, France, the perfume capital of the world, where our founders studied the ancient art of perfumery. We believe that a fragrance is personal—it's an invisible accessory that tells your story without saying a word.
                </p>
                <p>
                  Today, we blend traditional techniques with modern sustainability practices to create scents that are kind to the earth and captivating to the senses.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl bg-stone-100">
                 <img 
                   src="https://images.unsplash.com/photo-1556228720-1987df2a970d?q=80&w=800&auto=format&fit=crop" 
                   alt="Artisanal perfume making" 
                   className="w-full h-full object-cover"
                 />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-stone-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-brand-dark">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-brand-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Sustainability First</h3>
              <p className="text-gray-600">
                From recyclable glass bottles to ethically sourced ingredients, we are committed to reducing our footprint.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-brand-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Artisanal Quality</h3>
              <p className="text-gray-600">
                Small-batch production ensures that every bottle receives the attention and care it deserves.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-brand-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🐰</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Cruelty Free</h3>
              <p className="text-gray-600">
                Beauty should be kind. We never test on animals, and all our products are 100% vegan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;