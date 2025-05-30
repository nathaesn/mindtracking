import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  content: string;
  author: string;
  role: string;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      content: "MindfulGrade helped me see the connection between my anxiety and my test performance. After using it for a semester, my GPA went up by 0.7 points! The stress management tools literally saved my academic career.",
      author: "Alex J.",
      role: "Psychology Major, Junior",
      image: "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      content: "As someone with ADHD, balancing my mental health and schoolwork was impossible before this app. The integration with my calendar and assignment deadlines gives me structure while the mood tracking helps me understand my focus patterns.",
      author: "Taylor M.",
      role: "Computer Science Major, Sophomore",
      image: "https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      content: "The correlation between my stress levels and exam performance was eye-opening. I've started using the guided meditations before study sessions and my retention has improved significantly.",
      author: "Jordan P.",
      role: "Pre-Med Student, Senior",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent inline-block">
            What Students Are Saying
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real students sharing real results from using MindfulGrade in their academic journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 p-4">
                    <div className="bg-gradient-to-br from-purple-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-md">
                      <div className="flex items-center mb-6">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-purple-300 dark:border-purple-500"
                        />
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{testimonial.author}</h4>
                          <p className="text-purple-600 dark:text-purple-400">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-lg italic leading-relaxed">"{testimonial.content}"</p>
                      <div className="flex mt-6 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-2xl">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transform transition-transform hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transform transition-transform hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-purple-600 dark:bg-purple-400' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-purple-300 dark:hover:bg-purple-700'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Endorsed by Mental Health Professionals</h3>
          <div className="flex flex-wrap justify-center gap-8 mt-6">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mb-2"></div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">University of {['California', 'Michigan', 'Texas', 'Florida'][index - 1]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;