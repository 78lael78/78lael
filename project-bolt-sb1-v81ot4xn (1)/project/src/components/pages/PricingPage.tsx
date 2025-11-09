import React from 'react';
import { 
  CheckCircle, 
  Clock, 
  ClipboardList, 
  Package, 
  Video, 
  ArrowRight,
  Star
} from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: string) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  const pricingTiers = [
    {
      name: 'Hourly Consultation',
      icon: Clock,
      price: '$85',
      period: 'per hour',
      description: 'Perfect for quick questions, tool advice, and small projects',
      features: [
        'Expert carpentry guidance',
        'Tool recommendations',
        'Quick problem solving',
        'Material sourcing advice',
        'Basic project planning',
        'Email follow-up summary'
      ],
      bestFor: 'Small fixes, tool selection, quick consultations',
      popular: false
    },
    {
      name: 'Project-Based Service',
      icon: ClipboardList,
      price: '$150-500',
      period: 'per project',
      description: 'Comprehensive service for complete home improvement projects',
      features: [
        'Complete project assessment',
        'Detailed materials list',
        'Step-by-step written instructions',
        'Cost-saving recommendations',
        'Timeline planning',
        'Progress check-ins',
        'Quality control guidance',
        'Ongoing email support'
      ],
      bestFor: 'Full walkthroughs, major projects, comprehensive planning',
      popular: true
    },
    {
      name: 'Service Packages',
      icon: Package,
      price: 'Save 10-15%',
      period: 'bundled pricing',
      description: 'Multi-visit packages and monthly consultation plans',
      features: [
        'Multiple scheduled visits',
        'Continuous project support',
        'Priority booking',
        'Extended email support',
        'Progress documentation',
        'Flexible scheduling',
        'Bulk pricing savings'
      ],
      bestFor: '3+ visit projects, ongoing support, complex builds',
      popular: false
    }
  ];

  const addOnServices = [
    {
      name: 'Video Call Consultation',
      price: '$75',
      duration: '30 minutes',
      description: 'Remote support for progress checks and troubleshooting'
    },
    {
      name: 'Rush Service',
      price: '+50%',
      duration: 'same/next day',
      description: 'Expedited scheduling for urgent projects'
    },
    {
      name: 'Written Project Manual',
      price: '$50',
      duration: 'per project',
      description: 'Detailed PDF guide with photos and step-by-step instructions'
    },
    {
      name: 'Tool Rental Coordination',
      price: '$25',
      duration: 'setup fee',
      description: 'We arrange tool rentals and coordinate delivery/pickup'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Transparent, Fair Pricing
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Choose the pricing structure that works best for your project and budget. 
            No hidden fees, no surprises — just honest, professional service.
          </p>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 inline-block">
            <p className="text-orange-800 font-semibold">
              💡 Every service includes a checklist, shopping recommendations, and basic project timeline
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => {
              const IconComponent = tier.icon;
              return (
                <div key={index} className={`relative bg-white border-2 rounded-lg p-6 ${
                  tier.popular 
                    ? 'border-orange-500 shadow-lg scale-105' 
                    : 'border-gray-200 hover:border-blue-300'
                } transition-all`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="h-4 w-4" />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="bg-blue-700 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {tier.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900">
                        {tier.price}
                      </span>
                      <span className="text-gray-600"> {tier.period}</span>
                    </div>
                    <p className="text-gray-600">
                      {tier.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-sm font-semibold text-gray-900 mb-1">
                      Best for:
                    </p>
                    <p className="text-sm text-gray-600">
                      {tier.bestFor}
                    </p>
                  </div>

                  <button
                    onClick={() => onNavigate('contact')}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      tier.popular
                        ? 'bg-orange-600 text-white hover:bg-orange-700'
                        : 'bg-blue-700 text-white hover:bg-blue-800'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600">
              Enhance your experience with these optional add-on services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addOnServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.name}
                  </h3>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-700">
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-500">
                      {service.duration}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Examples */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Example Project Packages
            </h2>
            <p className="text-lg text-gray-600">
              See how our pricing works for common home improvement projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Kitchen Cabinet Install',
                visits: '3 visits',
                price: '$450',
                includes: ['Initial assessment', 'Installation coaching', 'Final quality check']
              },
              {
                title: 'Deck Repair Project',
                visits: '2 visits + video calls',
                price: '$325',
                includes: ['Damage assessment', 'Repair guidance', 'Progress check-ins']
              },
              {
                title: 'Full Home Walkthrough',
                visits: 'Single comprehensive visit',
                price: '$200',
                includes: ['Complete assessment', 'Priority list', 'Materials planning']
              }
            ].map((example, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {example.title}
                </h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-600">{example.visits}</span>
                  <span className="text-xl font-bold text-blue-700">{example.price}</span>
                </div>
                <ul className="space-y-1">
                  {example.includes.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
            Book your free consultation call to discuss your project needs and get a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;