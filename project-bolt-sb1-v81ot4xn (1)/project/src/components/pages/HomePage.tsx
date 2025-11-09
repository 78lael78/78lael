import React from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Clock, 
  Shield,
  Hammer,
  Home,
  Phone
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Get professional carpentry advice tailored to your skill level and project needs'
    },
    {
      icon: Clock,
      title: 'Save Time & Money',
      description: 'Avoid costly mistakes and learn efficient techniques that get results faster'
    },
    {
      icon: Shield,
      title: 'Build with Confidence',
      description: 'Gain the knowledge and skills to tackle future projects independently'
    }
  ];

  const services = [
    {
      title: 'Home Walkthrough Consultations',
      description: 'Comprehensive on-site assessment of your home improvement needs',
      price: 'Starting at $150'
    },
    {
      title: 'Step-by-Step Project Coaching',
      description: 'Hands-on guidance where you do the work with expert supervision. Kind of like having a pro on speed dial when your in the middle of a project and you have a need for an immediate answer',
      price: '$85/hour'
    },
    {
      title: 'Virtual Consultations',
      description: 'Remote support and guidance when in-person visits aren\'t possible',
      price: '$75/session'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      text: 'After our home inspection revealed several issues, I was completely overwhelmed. 78 Lael walked me through each problem and gave me the confidence to tackle repairs myself.',
      rating: 5
    },
    {
      name: 'Mike D.',
      text: 'The step-by-step coaching was incredible - I learned proper techniques while actually completing my deck project.',
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Build Your Dream Home with 
                <span className="text-blue-700"> Expert Guidance</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Don't let home improvement projects overwhelm you. Get professional carpentry guidance 
                that empowers you to build with confidence, save money, and learn skills for life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('schedule')}
                  className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>Schedule Now</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-colors"
                >
                  View Services
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/image.png" 
                alt="Professional carpenter providing guidance" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">15+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Professional Guidance?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn from 15+ years of carpentry experience and avoid the costly mistakes that derail DIY projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Choose the level of support that fits your project and experience level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-700">
                    {service.price}
                  </span>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-blue-700 font-medium hover:text-blue-800 transition-colors"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Tools & Techniques
            </h2>
            <p className="text-lg text-gray-600">
              Learn to use the right tools for each job and master professional techniques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg aspect-video overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional measuring and marking tools for precise carpentry work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg aspect-video overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/8961342/pexels-photo-8961342.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Power saw being used for carpentry work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg aspect-video overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/5691658/pexels-photo-5691658.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Hand tools and craftsmanship techniques for detailed woodwork" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book your free consultation call and take the first step toward building with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('schedule')}
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Schedule Now</span>
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
            >
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;