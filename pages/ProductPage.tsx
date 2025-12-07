import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../services/api';
import { Product, Review } from '../types';
import ImageGallery from '../components/ImageGallery';
import ReviewList from '../components/ReviewList';
import ReviewForm from '../components/ReviewForm';
import { useCart } from '../context/CartContext';
import { Star, Truck, ShieldCheck, Share2, Loader2, Minus, Plus, Check } from 'lucide-react';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isAdded, setIsAdded] = useState(false);
  
  const { addToCart } = useCart();

  useEffect(() => {
    const loadData = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const [productData, reviewsData] = await Promise.all([
          api.getProductById(id),
          api.getReviews(id)
        ]);
        if (productData) {
          setProduct(productData);
          setSelectedSize(productData.sizes[0].size);
        }
        setReviews(reviewsData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
    // Scroll to top when loading new product
    window.scrollTo(0, 0);
  }, [id]);

  const handleAddReview = async (reviewData: { name: string; rating: number; comment: string }) => {
    if (!id) return;
    try {
      const newReview = await api.addReview(id, reviewData);
      setReviews(prev => [newReview, ...prev]);
    } catch (err) {
      console.error('Failed to post review', err);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product?.name,
          text: `Check out ${product?.name} at Lumière Parfumerie`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing', error);
      }
    } else {
      alert('Link copied to clipboard!');
    }
  };

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product, selectedSize, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <Loader2 className="h-10 w-10 animate-spin text-brand-primary" />
      </div>
    );
  }

  if (!product) {
    return <div className="text-center py-20">Product not found.</div>;
  }

  const currentPrice = product.sizes.find(s => s.size === selectedSize)?.price || product.price;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
        {/* Gallery */}
        <ImageGallery images={product.images} alt={product.name} />

        {/* Info */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <div className="flex justify-between">
            <h1 className="text-3xl font-serif font-bold text-brand-dark tracking-tight">{product.name}</h1>
            <button onClick={handleShare} className="p-2 text-gray-400 hover:text-brand-primary transition-colors">
              <Share2 className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-3 flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.round(product.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="ml-3 text-sm text-gray-500">{reviews.length} reviews</p>
          </div>

          <div className="mt-6">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-brand-dark font-light">
              {product.currency === 'USD' ? '$' : ''}{currentPrice}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <p className="text-base text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Select Size</h3>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                {product.sizes.map((sizeOption) => (
                  <button
                    key={sizeOption.size}
                    onClick={() => setSelectedSize(sizeOption.size)}
                    className={`
                      border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1
                      ${selectedSize === sizeOption.size 
                        ? 'bg-brand-dark text-white border-brand-dark' 
                        : 'bg-white text-gray-900 border-gray-200 hover:bg-gray-50'}
                    `}
                  >
                    {sizeOption.size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-6 mb-8">
              <div className="flex items-center border border-gray-300 rounded-sm">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-100"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-gray-100"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              
              <button
                onClick={handleAddToCart}
                className={`flex-1 border border-transparent py-4 px-8 flex items-center justify-center text-base font-medium text-white transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary shadow-lg ${isAdded ? 'bg-green-600 hover:bg-green-700' : 'bg-brand-primary hover:bg-opacity-90'}`}
              >
                {isAdded ? (
                  <>
                    <Check className="h-5 w-5 mr-2" />
                    Added to Cart
                  </>
                ) : (
                  `Add to Cart${quantity > 1 ? ` (${quantity})` : ''}`
                )}
              </button>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Truck className="h-5 w-5 mr-2 text-brand-secondary" />
                <span>Free shipping on orders over $150</span>
              </div>
              <div className="flex items-center">
                <ShieldCheck className="h-5 w-5 mr-2 text-brand-secondary" />
                <span>2-year quality guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-16 lg:mt-24">
        <div className="border-b border-gray-200 pb-5">
          <h3 className="text-2xl font-serif font-bold text-brand-dark">Customer Reviews</h3>
        </div>
        
        <div className="mt-10 lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-7 mb-10 lg:mb-0">
            <ReviewList reviews={reviews} />
          </div>
          
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <ReviewForm onSubmit={handleAddReview} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;