import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleContactClick = () => {
    window.open('https://wa.me/524443113785', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center pulse-glow">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold font-orbitron glow-text">TECHive group</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-blue-400 ${isActive('/') ? 'text-blue-400' : 'text-gray-300'}`}
            >
              Home
            </Link>
            <Link 
              to="/case-studies" 
              className={`font-medium transition-colors hover:text-blue-400 ${isActive('/case-studies') ? 'text-blue-400' : 'text-gray-300'}`}
            >
              Case Studies
            </Link>
            <Link 
              to="/services" 
              className={`font-medium transition-colors hover:text-blue-400 ${isActive('/services') ? 'text-blue-400' : 'text-gray-300'}`}
            >
              Services
            </Link>
            <button 
              onClick={handleContactClick}
              className="font-medium text-gray-300 hover:text-blue-400 transition-colors"
            >
              Contact Us
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link 
              to="/" 
              className={`block font-medium transition-colors hover:text-blue-400 ${isActive('/') ? 'text-blue-400' : 'text-gray-300'}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/case-studies" 
              className={`block font-medium transition-colors hover:text-blue-400 ${isActive('/case-studies') ? 'text-blue-400' : 'text-gray-300'}`}
              onClick={() => setIsOpen(false)}
            >
              Case Studies
            </Link>
            <Link 
              to="/services" 
              className={`block font-medium transition-colors hover:text-blue-400 ${isActive('/services') ? 'text-blue-400' : 'text-gray-300'}`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <button 
              onClick={() => {
                handleContactClick();
                setIsOpen(false);
              }}
              className="block font-medium text-gray-300 hover:text-blue-400 transition-colors text-left"
            >
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;