import React from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertCircle } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Shield className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Disclaimer</h1>
          <p className="text-xl text-gray-600">
            Please read this disclaimer carefully before using the Pathwise platform.
          </p>
        </motion.div>

        {/* Disclaimer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">General Information</h2>
              <p className="text-gray-600">
                The information provided on Pathwise is for general educational purposes only. While we strive to keep the
                information up to date and correct, we make no representations or warranties of any kind, express or implied,
                about the completeness, accuracy, reliability, suitability, or availability of the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Educational Content</h2>
              <p className="text-gray-600">
                The educational content provided through Pathwise is designed to support, not replace, traditional educational
                methods. Success in using our platform depends on individual effort and dedication. Results may vary based on
                personal circumstances and commitment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
              <p className="text-gray-600">
                Users are responsible for their own learning progress and how they utilize the platform's resources. We
                encourage users to verify information and consult with appropriate educational advisors when making important
                academic decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy & Data</h2>
              <p className="text-gray-600">
                We collect and process user data in accordance with our privacy policy and applicable laws. Users are
                responsible for maintaining the confidentiality of their account information and for all activities under
                their account.
              </p>
            </section>

            <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 mt-1" />
                <p className="text-sm text-yellow-700">
                  By using Pathwise, you acknowledge that you have read, understood, and agree to be bound by this
                  disclaimer. We reserve the right to modify this disclaimer at any time without notice.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Disclaimer;