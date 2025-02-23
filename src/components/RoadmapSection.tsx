import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Target, Brain, CheckCircle } from 'lucide-react';

const RoadmapSection = () => {
  const roadmapSteps = [
    {
      title: "Data Structures Fundamentals",
      duration: "4-6 weeks",
      topics: ["Arrays", "Linked Lists", "Stacks & Queues", "Trees & Graphs"],
      resources: [
        {
          name: "GeeksForGeeks - DS Course",
          url: "https://www.geeksforgeeks.org/data-structures/"
        },
        {
          name: "LeetCode Arrays & Strings",
          url: "https://leetcode.com/explore/learn/card/array-and-string/"
        }
      ]
    },
    {
      title: "Basic Algorithms",
      duration: "4-6 weeks",
      topics: ["Sorting", "Searching", "Recursion", "Dynamic Programming Basics"],
      resources: [
        {
          name: "GeeksForGeeks - Algorithms",
          url: "https://www.geeksforgeeks.org/fundamentals-of-algorithms/"
        },
        {
          name: "LeetCode Dynamic Programming",
          url: "https://leetcode.com/explore/learn/card/dynamic-programming/"
        }
      ]
    },
    {
      title: "Advanced Topics",
      duration: "6-8 weeks",
      topics: ["Advanced DP", "Graph Algorithms", "System Design Basics"],
      resources: [
        {
          name: "GeeksForGeeks - Advanced DS",
          url: "https://www.geeksforgeeks.org/advanced-data-structures/"
        },
        {
          name: "LeetCode Graph Theory",
          url: "https://leetcode.com/explore/learn/card/graph/"
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Learning Roadmap</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow this structured path to master Data Structures and Algorithms
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {roadmapSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 rounded-full p-3">
                  {index === 0 ? (
                    <BookOpen className="h-6 w-6 text-indigo-600" />
                  ) : index === 1 ? (
                    <Code className="h-6 w-6 text-indigo-600" />
                  ) : (
                    <Brain className="h-6 w-6 text-indigo-600" />
                  )}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-indigo-600">{step.duration}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Topics:</h4>
                <ul className="space-y-2">
                  {step.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Recommended Resources:</h4>
                <ul className="space-y-2">
                  {step.resources.map((resource, resourceIndex) => (
                    <li key={resourceIndex}>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-700 flex items-center"
                      >
                        <Target className="h-4 w-4 mr-2" />
                        {resource.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Ready to start your learning journey?</p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors">
            Create Your Custom Roadmap
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapSection;