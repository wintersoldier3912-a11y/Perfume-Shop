import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { itemCount } = useCart();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/collections' }, // Placeholder route
    { name: 'About', path: '/about' }, // Placeholder route
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="font-serif text-2xl font-bold tracking-tight text-brand-primary">
              Lumière
            </span>
            <span className="ml-2 text-xs font-sans uppercase tracking-widest text-brand-gray mt-1">Parfumerie</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                  isActive(link.path) ? 'text-brand-primary' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-600 hover:text-brand-primary transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/cart" className="text-gray-600 hover:text-brand-primary transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-primary text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full animate-bounce-short">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Link to="/cart" className="text-gray-600 hover:text-brand-primary mr-4 relative">
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-primary text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-brand-primary focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-100 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-brand-primary bg-stone-50'
                    : 'text-gray-600 hover:text-brand-primary hover:bg-stone-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <div className="relative">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full border border-gray-200 rounded-full py-2 px-4 pl-10 text-sm focus:outline-none focus:border-brand-primary"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
