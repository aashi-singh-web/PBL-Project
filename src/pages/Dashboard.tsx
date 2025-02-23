import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import RoadmapSection from '../components/RoadmapSection';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Your Learning Dashboard</h1>
            <Link
              to="/"
              className="flex items-center text-indigo-600 hover:text-indigo-700"
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              Back to Home
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Welcome to Pathwise!</h2>
            <p className="text-gray-600">
              Below you'll find your personalized learning roadmap. Follow the structured path
              to master Data Structures and Algorithms at your own pace.
            </p>
          </div>
        </motion.div>

        <RoadmapSection />
      </div>
    </div>
  );
};

export default Dashboard;