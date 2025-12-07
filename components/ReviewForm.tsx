import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface ReviewFormProps {
  onSubmit: (data: { name: string; rating: number; comment: string }) => Promise<void>;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    setIsSubmitting(true);
    await onSubmit({ name, rating, comment });
    setIsSubmitting(false);
    
    // Reset form
    setName('');
    setRating(5);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-stone-200 p-6 shadow-sm rounded-sm">
      <h3 className="text-lg font-serif font-medium text-brand-dark mb-4">Write a Review</h3>
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary"
          placeholder="Jane Doe"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Rating
        </label>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className="focus:outline-none transition-transform hover:scale-110"
            >
              <Star
                className={`h-6 w-6 ${
                  star <= rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
          Your Review
        </label>
        <textarea
          id="comment"
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary"
          placeholder="Tell us what you think..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-brand-dark text-white py-2 px-4 uppercase tracking-wider text-sm font-medium transition-colors ${
          isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-gray-800'
        }`}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Review'}
      </button>
    </form>
  );
};

export default ReviewForm;