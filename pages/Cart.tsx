import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { items, updateQuantity, removeFromCart, cartTotal } = useCart();

  const handleCheckout = () => {
    alert('Proceeding to checkout... (This is a placeholder)');
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[60vh] flex flex-col items-center justify-center animate-fade-in">
        <div className="bg-stone-50 p-6 rounded-full mb-6">
          <ShoppingBag className="h-12 w-12 text-gray-300" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8 max-w-md text-center">
          Your shopping bag is waiting for its first luxury addition. Explore our collection to find your signature scent.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium text-white bg-brand-primary hover:bg-brand-primary/90 transition-colors shadow-md"
        >
          Start Shopping <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      <h1 className="text-3xl font-serif font-bold text-brand-dark mb-12">Your Shopping Cart</h1>

      <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
        <div className="lg:col-span-7">
          <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
            {items.map((item) => {
               // Calculate price for the specific size selected
               const sizeData = item.sizes.find(s => s.size === item.selectedSize);
               const unitPrice = sizeData ? sizeData.price : item.price;
               
               return (
                <li key={`${item._id}-${item.selectedSize}`} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32"
                    />
                  </div>

                  <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <Link to={`/product/${item._id}`} className="font-medium text-brand-dark hover:text-brand-primary">
                              {item.name}
                            </Link>
                          </h3>
                        </div>
                        <div className="mt-1 flex text-sm">
                           <p className="text-gray-500">Size: <span className="font-medium text-brand-dark">{item.selectedSize || 'Standard'}</span></p>
                        </div>
                        <p className="mt-1 text-sm font-medium text-brand-dark">
                          {item.currency === 'USD' ? '$' : ''}{unitPrice}
                        </p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <div className="flex items-center border border-gray-300 rounded-sm w-max">
                          <button
                            onClick={() => updateQuantity(item._id, item.selectedSize, item.quantity - 1)}
                            className="p-1 hover:bg-gray-100"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-4 w-4 text-gray-500" />
                          </button>
                          <span className="px-3 text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item._id, item.selectedSize, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-4 w-4 text-gray-500" />
                          </button>
                        </div>

                        <div className="absolute top-0 right-0">
                          <button
                            onClick={() => removeFromCart(item._id, item.selectedSize)}
                            className="-m-2 p-2 inline-flex text-gray-400 hover:text-red-500"
                          >
                            <span className="sr-only">Remove</span>
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-5 mt-16 lg:mt-0">
          <div className="bg-stone-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8">
            <h2 className="text-lg font-medium text-brand-dark">Order summary</h2>
            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-brand-dark">${cartTotal}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-sm text-gray-600">Shipping</dt>
                <dd className="text-sm font-medium text-brand-dark">
                  {cartTotal > 150 ? 'Free' : '$15.00'}
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-brand-dark">Order total</dt>
                <dd className="text-base font-medium text-brand-dark">
                  ${cartTotal > 150 ? cartTotal : cartTotal + 15}
                </dd>
              </div>
            </dl>

            <div className="mt-6">
              <button
                onClick={handleCheckout}
                className="w-full bg-brand-primary border border-transparent py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
              >
                Checkout
              </button>
            </div>
            <p className="mt-4 text-center text-xs text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;