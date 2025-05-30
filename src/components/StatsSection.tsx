import React from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      value: "67%",
      label: "of students report that stress negatively impacts their academic performance",
      color: "from-purple-500 to-purple-600"
    },
    {
      value: "89%",
      label: "of MindfulGrade users reported improved academic focus after 3 months",
      color: "from-teal-500 to-teal-600"
    },
    {
      value: "3.2x",
      label: "more likely to reach academic goals when mental wellness is prioritized",
      color: "from-blue-500 to-blue-600"
    },
    {
      value: "44%",
      label: "reduction in exam anxiety reported by regular app users",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="stats" className="py-20 bg-gradient-to-br from-purple-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent inline-block">
            The Impact of Mental Wellness on Academics
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Data-driven insights that reveal the connection between mental health and student success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-r ${stat.color} text-white text-4xl font-bold rounded-lg py-4 px-6 mb-4 text-center`}>
                {stat.value}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-center">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 max-w-4xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Student Mental Health Trends</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our research shows clear patterns between mental wellness practices, stress management, and academic outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg bg-gray-50 dark:bg-gray-700 p-4">
              <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Stress vs. GPA Correlation</h4>
              <div className="h-40 relative">
                {/* Simple bar chart visualization */}
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-red-400 dark:bg-red-600"></div>
                <div className="absolute bottom-0 left-1/4 w-1/4 h-2/4 bg-orange-400 dark:bg-orange-600"></div>
                <div className="absolute bottom-0 left-2/4 w-1/4 h-3/4 bg-yellow-400 dark:bg-yellow-600"></div>
                <div className="absolute bottom-0 left-3/4 w-1/4 h-full bg-green-400 dark:bg-green-600"></div>
                
                <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300 dark:bg-gray-500"></div>
                <div className="absolute bottom-full left-0 text-xs text-gray-500 dark:text-gray-400">GPA</div>
                
                <div className="absolute top-0 left-0 h-full w-px bg-gray-300 dark:bg-gray-500"></div>
                <div className="absolute top-0 left-full transform -translate-x-full text-xs text-gray-500 dark:text-gray-400">Stress Level</div>
              </div>
            </div>
            
            <div className="rounded-lg bg-gray-50 dark:bg-gray-700 p-4">
              <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Wellness Practice Adoption</h4>
              <div className="h-40 relative">
                {/* Simple pie chart visualization */}
                <div className="absolute inset-0 m-auto w-32 h-32 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 w-1/2 h-full bg-purple-400 dark:bg-purple-600"></div>
                  <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-teal-400 dark:bg-teal-600"></div>
                  <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-400 dark:bg-blue-600"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              *Data based on surveys of 5,000+ college students across 25 universities between 2023-2024.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;