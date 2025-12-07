import React from 'react';
import { Review } from '../types';
import { Star, User } from 'lucide-react';

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  if (reviews.length === 0) {
    return (
      <div className="py-8 text-center text-gray-500 italic bg-stone-50 rounded-lg">
        No reviews yet. Be the first to share your thoughts!
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div key={review._id} className="border-b border-gray-100 pb-6 last:border-0">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-gray-500">
                <User className="h-4 w-4" />
              </div>
              <span className="font-medium text-brand-dark">{review.name}</span>
            </div>
            <span className="text-sm text-gray-400">
              {new Date(review.createdAt).toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;