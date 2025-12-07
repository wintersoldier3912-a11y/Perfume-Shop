export interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  currency: string;
  sizes: { size: string; price: number }[];
  images: string[];
  category: string;
  tags: string[];
  rating: number;
  reviewsCount: number;
}

export interface Review {
  _id: string;
  productId: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}

export interface User {
  name: string;
  email: string;
}
