import { Product, Review } from '../types';
import { MOCK_PRODUCTS, MOCK_REVIEWS } from './mockData';

// Simulating network latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock Database State (in-memory)
let reviews = [...MOCK_REVIEWS];

export const api = {
  getProducts: async (category?: string): Promise<Product[]> => {
    await delay(500); // Simulate API delay
    if (category) {
      return MOCK_PRODUCTS.filter(p => p.category === category);
    }
    return MOCK_PRODUCTS;
  },

  getProductById: async (id: string): Promise<Product | undefined> => {
    await delay(300);
    return MOCK_PRODUCTS.find(p => p._id === id);
  },

  getReviews: async (productId: string): Promise<Review[]> => {
    await delay(400);
    return reviews.filter(r => r.productId === productId).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  addReview: async (productId: string, reviewData: { name: string; rating: number; comment: string }): Promise<Review> => {
    await delay(600);
    const newReview: Review = {
      _id: Math.random().toString(36).substr(2, 9),
      productId,
      ...reviewData,
      createdAt: new Date().toISOString()
    };
    reviews = [newReview, ...reviews];
    return newReview;
  }
};
