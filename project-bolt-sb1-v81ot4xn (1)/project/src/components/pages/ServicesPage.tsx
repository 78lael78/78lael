import React from 'react';
import { 
  Home, 
  Users, 
  Video, 
  DollarSign, 
  CheckCircle, 
  ArrowRight,
  ClipboardList,
  Wrench
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const mainServices = [
    {
      icon: Home,
      title: 'Home Walkthrough Consultations',
      description: 'Comprehensive on-site assessment of your home improvement needs',
      includes: [
        'On-site visit and project assessment',
        'Detailed tool and materials checklist',
        'Cost-saving tips and recommendations',
        'Written project timeline and steps',
        'Sourcing advice for best materials'
      ],
      idealFor: [
        'New homeowners',
        'People with poor inspection reports',
        'DIY beginners',
        'Major project planning'
      ],
      pricing: 'Project-based rates starting at $150'
    },
    {
      icon: Users,
      title: 'Step-by-Step Project Coaching',
      description: 'Hands-on guidance where you do the work with expert supervision. Kind of like having a pro on speed dial when your in the middle of a project and you have a need for an immediate answer',
      includes: [
        'Multiple coaching visits as needed',
        'Written step-by-step instructions',
        'Tool technique demonstrations',
        'Progress checkpoints and adjustments',
        'Quality control guidance'
      ],
      idealFor: [
        'Deck repairs and construction',
        'Trim replacement projects',
        'Drywall patches and repairs',
        'Kitchen cabinet installations'
      ],
      pricing: 'Hourly rates or project packages'
    },
    {
      icon: Video,
      title: 'Virtual Consultations',
      description: 'Remote support and guidance when in-person visits aren\'t possible',
      includes: [
        'Scheduled video call sessions',
        'Tool inspection and recommendations',
        'Progress reviews and feedback',
        'DIY question troubleshooting',
        'Follow-up support emails'
      ],
      idealFor: [
        'Follow-up after walkthroughs',
        'Quick project questions',
        'Progress check-ins',
        'Remote problem-solving'
      ],
      pricing: '$75 per 30-minute session'
    }
  ];

  const pricingOptions = [
    {
      icon: CheckCircle,
      title: 'Hourly Rate',
      description: 'Perfect for small jobs and quick consultations',
      rate: '$85/hour',
      bestFor: 'Short consultations, tool advice, quick fixes'
    },
    {
      icon: ClipboardList,
      title: 'Project Rate',
      description: 'Comprehensive pricing for full walkthroughs and larger projects',
      rate: '$150-500',
      bestFor: 'Full walkthroughs, ongoing project support'
    },
    {
      icon: DollarSign,
      title: 'Package Deals',
      description: 'Save money with bundled services',
      rate: 'Save 10-15%',
      bestFor: '3-visit bundles, monthly consultation plans'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Carpentry Guidance Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial assessments to project completion, we provide the expertise and support 
            you need to tackle any home improvement challenge with confidence.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="bg-blue-700 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <div className="bg-orange-50 p-4 rounded-lg mb-6">
                      <p className="font-semibold text-orange-800 mb-2">
                        Starting at: {service.pricing}
                      </p>
                    </div>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center space-x-2"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-4">What's Included:</h3>
                      <ul className="space-y-2 mb-6">
                        {service.includes.map((item, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <h3 className="font-semibold text-gray-900 mb-4">
                        {Array.isArray(service.idealFor) && service.idealFor[0].includes('New') ? 'Who It\'s For:' : 'Example Projects:'}
                      </h3>
                      <ul className="space-y-2">
                        {service.idealFor.map((item, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <Wrench className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Options */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Flexible Pricing Options
            </h2>
            <p className="text-lg text-gray-600">
              Choose the pricing structure that works best for your project and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {pricingOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <div className="bg-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {option.description}
                  </p>
                  <div className="bg-orange-50 p-3 rounded-lg mb-4">
                    <p className="font-bold text-orange-800 text-lg">
                      {option.rate}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">
                    <strong>Best for:</strong> {option.bestFor}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-blue-700 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-white mb-2">
              Every Visit Includes:
            </h3>
            <p className="text-blue-100 mb-4">
              A detailed checklist, shopping recommendations, and a basic project timeline to keep you on track.
            </p>
            <button
              onClick={() => onNavigate('pricing')}
              className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>View Detailed Pricing</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Book your free consultation call to discuss your project and find the perfect service package for your needs.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center space-x-2"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;