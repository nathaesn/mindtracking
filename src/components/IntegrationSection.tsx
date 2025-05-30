import React from 'react';
import { Laptop, BookOpen, Clock, Calendar, FileText, PieChart } from 'lucide-react';

const IntegrationSection: React.FC = () => {
  return (
    <section id="integration" className="py-20 bg-gradient-to-br from-purple-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent inline-block">
            Seamless Integration with Your Student Life
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            MindfulGrade connects with the tools you already use, making mental wellness tracking a natural part of your academic routine.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative mx-auto max-w-md animate-fade-in-up">
              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden p-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Calendar className="text-purple-500" />, name: "Calendar" },
                    { icon: <BookOpen className="text-blue-500" />, name: "Canvas LMS" },
                    { icon: <FileText className="text-green-500" />, name: "Google Docs" },
                    { icon: <Clock className="text-amber-500" />, name: "Pomodoro" },
                    { icon: <PieChart className="text-red-500" />, name: "Study Stats" },
                    { icon: <Laptop className="text-indigo-500" />, name: "Focus Mode" },
                  ].map((app, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <div className="w-10 h-10 flex items-center justify-center mb-2">
                        {app.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{app.name}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 relative">
                  <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full"></div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Study Focus: 67%</span>
                    <span className="text-sm text-purple-600 dark:text-purple-400">Above Average</span>
                  </div>
                </div>

                <div className="absolute top-2 right-2 bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded text-xs font-medium text-green-800 dark:text-green-300">
                  Connected
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 lg:pl-12">
            <div className="max-w-lg animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                Connect Your Academic Tools
              </h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                      <span className="text-purple-600 dark:text-purple-400 text-sm">1</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">Sync with Learning Platforms</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      Connect with Canvas, Blackboard, and other LMS platforms to automatically track assignment deadlines and correlate them with your stress levels.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center">
                      <span className="text-teal-600 dark:text-teal-400 text-sm">2</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">Study Time Analysis</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      Track your study sessions and see how duration, time of day, and breaks affect both your mental state and academic performance.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 text-sm">3</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">Smart Notifications</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      Receive personalized suggestions based on your mood patterns, upcoming deadlines, and optimal study times tailored to your mental wellbeing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;