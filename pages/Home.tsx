import React, { useEffect, useState, useMemo } from 'react';
import { api } from '../services/api';
import { Product } from '../types';
import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';
import { Loader2, ArrowUpDown } from 'lucide-react';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState<string>('default');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await api.getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const sortedProducts = useMemo(() => {
    const items = [...products];
    switch (sortOption) {
      case 'price-asc':
        return items.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return items.sort((a, b) => b.price - a.price);
      case 'name-asc':
        return items.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return items;
    }
  }, [products, sortOption]);

  return (
    <div className="animate-fade-in">
      <HeroBanner />
      
      <div id="product-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-2 border-b border-stone-100">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-serif font-bold text-brand-dark">Our Collections</h2>
            <p className="mt-2 text-gray-500">Curated fragrances for every mood and occasion</p>
          </div>
          
          <div className="flex items-center justify-center md:justify-end pb-4 md:pb-0">
             <label htmlFor="sort-select" className="text-sm text-gray-600 mr-3">Sort by:</label>
             <div className="relative">
               <select
                 id="sort-select"
                 value={sortOption}
                 onChange={(e) => setSortOption(e.target.value)}
                 className="appearance-none bg-white border border-gray-200 text-gray-700 py-2 pl-4 pr-8 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary cursor-pointer shadow-sm"
               >
                 <option value="default">Featured</option>
                 <option value="price-asc">Price: Low to High</option>
                 <option value="price-desc">Price: High to Low</option>
                 <option value="name-asc">Name: A - Z</option>
               </select>
               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                 <ArrowUpDown className="h-4 w-4" />
               </div>
             </div>
           </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-brand-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 xl:gap-x-8">
            {sortedProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Feature Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-xl font-serif font-medium mb-3">Cruelty Free</h3>
              <p className="text-gray-500 text-sm">We never test on animals. All our products are 100% vegan and cruelty-free.</p>
            </div>
            <div className="p-6 border-l-0 md:border-l border-r-0 md:border-r border-stone-100">
              <h3 className="text-xl font-serif font-medium mb-3">Sustainable Sourcing</h3>
              <p className="text-gray-500 text-sm">We partner with local farmers to ensure ethical harvesting of all ingredients.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif font-medium mb-3">Artisanal Craft</h3>
              <p className="text-gray-500 text-sm">Every bottle is hand-poured and inspected for perfection in our studio.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;