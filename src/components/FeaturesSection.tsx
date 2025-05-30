import React from 'react';
import { LineChart, Brain, BookOpen, BarChart3, ShieldCheck, Calendar } from 'lucide-react';
import FeatureCard from './ui/FeatureCard';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <LineChart className="text-purple-500" />,
      title: "Daily Mood Tracking",
      description: "Log and visualize your mood patterns with our intuitive tracking system. Identify triggers and trends over time."
    },
    {
      icon: <Brain className="text-teal-500" />,
      title: "Stress Management Tools",
      description: "Access guided meditations, breathing exercises, and mindfulness activities tailored for academic stress."
    },
    {
      icon: <BarChart3 className="text-blue-500" />,
      title: "Academic Correlation",
      description: "See how your mental wellbeing impacts your grades and academic performance with data-driven insights."
    },
    {
      icon: <BookOpen className="text-indigo-500" />,
      title: "Study Habit Integration",
      description: "Connect your study schedule, track productivity, and optimize your learning based on your mental state."
    },
    {
      icon: <ShieldCheck className="text-red-500" />,
      title: "Privacy-First Design",
      description: "Your data stays private with end-to-end encryption and strict privacy controls you can customize."
    },
    {
      icon: <Calendar className="text-amber-500" />,
      title: "Goal Setting & Rewards",
      description: "Set wellness and academic goals, track your progress, and earn rewards for maintaining balance."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent inline-block">
            Features Designed for Student Success
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tools that understand the unique challenges of balancing academics and mental health in today's fast-paced educational environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;