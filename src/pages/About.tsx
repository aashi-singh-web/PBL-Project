import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, Code } from 'lucide-react';

const About = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Pathwise</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Created by students, for students. Our mission is to revolutionize the way people learn and grow in their educational journey.
          </p>
        </motion.div>

        {/* Our Story */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="mb-4">
                Pathwise was born from a vision shared by two passionate computer science students at Manipal University Jaipur. 
                Aashi and Lakshita, both from the CSE Core Department, recognized the need for a more personalized and 
                engaging approach to learning in today's digital age.
              </p>
              <p>
                What started as a project to help their peers has evolved into a comprehensive platform that combines 
                AI-powered learning paths, expert mentorship, and real-time feedback to create an unparalleled 
                educational experience.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap className="h-8 w-8" />,
                title: "Educational Excellence",
                description: "We believe in providing the highest quality educational resources and experiences to help students achieve their goals."
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Student-Centric",
                description: "Every feature and decision is made with our students' best interests at heart, ensuring an optimal learning experience."
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: "Innovation",
                description: "We continuously evolve our platform with cutting-edge technology to provide the best learning solutions."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="text-indigo-600 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Aashi",
                role: "Co-Founder",
                description: "Computer Science student at Manipal University Jaipur with a passion for educational technology."
              },
              {
                name: "Lakshita",
                role: "Co-Founder",
                description: "Computer Science student at Manipal University Jaipur dedicated to making education accessible and engaging."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="mb-4">
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-indigo-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;