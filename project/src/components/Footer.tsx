import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2">
              <Compass className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">Pathwise</span>
            </div>
            <p className="mt-4 text-gray-600">
              Empowering students through personalized learning paths, mentorship, and real-time feedback.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-indigo-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-indigo-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-600 hover:text-indigo-600">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Connect</h3>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Pathwise. Created by Aashi and Lakshita, Manipal University Jaipur.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;