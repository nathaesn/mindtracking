import React from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-28 pb-20 overflow-hidden bg-gradient-to-br from-purple-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <div className="max-w-lg">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent animate-fade-in-up">
                Balance Your Mind, <br />Boost Your Grades
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 animate-fade-in-up animation-delay-100">
                The first mental wellness tracker designed specifically for students that connects your emotional well-being with academic success. 
                <span className="inline-block mt-2">✨ Because self-care shouldn't be an afterthought in your education.</span>
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-200">
                <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                  Get Started Free
                  <ChevronRight size={20} className="ml-1" />
                </button>
                <button className="px-6 py-3 rounded-full border-2 border-purple-600 text-purple-600 font-medium hover:bg-purple-50 dark:hover:bg-gray-800 transition-all duration-300 dark:text-purple-400 dark:border-purple-400">
                  Watch Demo
                </button>
              </div>
              <div className="mt-8 flex items-center space-x-4 animate-fade-in-up animation-delay-300">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(index => (
                    <img 
                      key={index}
                      src={`https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&dpr=2`} 
                      alt="User" 
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-purple-600 dark:text-purple-400">2,000+</span> students already improving
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative animate-fade-in-up animation-delay-400">
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-teal-500/20 rounded-2xl transform rotate-3 scale-105 dark:from-purple-500/30 dark:to-teal-500/30"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Student using mental health app" 
                  className="w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🧠</span>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 bg-teal-100 dark:bg-teal-900/40 p-3 rounded-lg shadow-md animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-teal-400 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Mood: Focused</span>
                </div>
              </div>
              <div className="absolute -bottom-2 left-12 bg-purple-100 dark:bg-purple-900/40 p-3 rounded-lg shadow-md animate-float animation-delay-500">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">GPA: Improving</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;