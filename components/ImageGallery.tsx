import React, { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, alt }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible py-2 lg:py-0">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setMainImage(img)}
            className={`relative w-20 h-24 flex-shrink-0 border-2 overflow-hidden ${
              mainImage === img ? 'border-brand-primary' : 'border-transparent hover:border-gray-300'
            }`}
          >
            <img src={img} alt={`${alt} view ${idx + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative flex-1 aspect-[4/5] lg:aspect-[3/4] bg-stone-100 overflow-hidden">
        <img
          src={mainImage}
          alt={alt}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
    </div>
  );
};

export default ImageGallery;