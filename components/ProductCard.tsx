import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { ShoppingBag, Eye, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const displayImage = product.images && product.images.length > 0 ? product.images[0] : '';

  return (
    <div className="group relative bg-white border border-stone-100 flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
        {displayImage ? (
          <img
            src={displayImage}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-stone-200 text-stone-400">
            No Image
          </div>
        )}
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <Link
            to={`/product/${product._id}`}
            className="p-3 bg-white text-brand-dark rounded-full hover:bg-brand-primary hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-md"
            title="View Details"
          >
            <Eye className="h-5 w-5" />
          </Link>
          <button
            className="p-3 bg-white text-brand-dark rounded-full hover:bg-brand-primary hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75 shadow-md"
            title="Quick Add"
          >
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex-1 p-4 flex flex-col">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-serif font-medium text-brand-dark">
            <Link to={`/product/${product._id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>
          <p className="text-sm font-medium text-brand-primary">
            {product.currency === 'USD' ? '$' : ''}{product.price}
          </p>
        </div>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.shortDescription}</p>
        
        <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                <span className="ml-1 text-xs text-gray-500">{product.rating} ({product.reviewsCount})</span>
            </div>
            <span className="text-xs text-gray-400 uppercase tracking-wide">{product.category}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;