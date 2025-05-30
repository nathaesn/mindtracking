import React, { useState } from 'react';
import { Play } from 'lucide-react';

const TutorialSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "Create Your Profile",
      description: "Set up your student profile with your courses, study goals, and initial mental wellness assessment.",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Connect Your Tools",
      description: "Link MindfulGrade with your learning management system, calendar, and other academic tools.",
      image: "https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Daily Check-ins",
      description: "Take 30 seconds each day to log your mood, stress level, and energy using our quick emoji system.",
      image: "https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Review Insights",
      description: "See your personalized patterns and get recommendations to improve both wellness and academics.",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent inline-block">
            Getting Started is Easy
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Four simple steps to begin improving your mental wellness and academic performance today.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <div className="relative h-96 sm:h-[450px] w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-xl">
              <img 
                src={steps[activeStep].image} 
                alt={steps[activeStep].title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <button className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center mb-4 shadow-lg hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors self-center">
                  <Play size={24} className="text-purple-600 dark:text-purple-400 ml-1" />
                </button>
                <h3 className="text-2xl font-bold text-white mb-2">{steps[activeStep].title}</h3>
                <p className="text-gray-200">{steps[activeStep].description}</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 lg:pl-12">
            <div className="max-w-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                Follow These Steps
              </h3>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <button
                    key={index}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      activeStep === index 
                        ? 'bg-purple-100 dark:bg-purple-900/30 border-l-4 border-purple-600 dark:border-purple-400' 
                        : 'bg-gray-50 dark:bg-gray-800 hover:bg-purple-50 dark:hover:bg-gray-700'
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                        activeStep === index 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}>
                        {index + 1}
                      </div>
                      <h4 className={`font-medium ${
                        activeStep === index 
                          ? 'text-purple-700 dark:text-purple-400' 
                          : 'text-gray-700 dark:text-gray-300'
                      }`}>
                        {step.title}
                      </h4>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="mt-8">
                <button className="w-full py-4 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium hover:shadow-lg transition-all">
                  Get Started Now - It's Free
                </button>
                <p className="text-center mt-3 text-sm text-gray-600 dark:text-gray-400">
                  No credit card required. Free for students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorialSection;