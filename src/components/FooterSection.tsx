import React from 'react';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-400">MindfulGrade</h3>
            <p className="text-gray-400 mb-4">
              Balancing mental wellness and academic success for today's students.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Changelog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Mental Health Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Student Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Research & Data</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Academic Partners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Support Center</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} MindfulGrade. All rights reserved.</p>
          <p className="mt-2">
            Made with care for students' mental health and academic success.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;