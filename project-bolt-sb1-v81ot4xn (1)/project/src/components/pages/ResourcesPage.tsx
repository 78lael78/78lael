import React from 'react';
import { 
  Download, 
  FileText, 
  Video, 
  CheckCircle, 
  ArrowRight, 
  AlertTriangle,
  Wrench,
  Calculator
} from 'lucide-react';

interface ResourcesPageProps {
  onNavigate: (page: string) => void;
}

const ResourcesPage: React.FC<ResourcesPageProps> = ({ onNavigate }) => {
  const downloadableResources = [
    {
      icon: AlertTriangle,
      title: 'Home Inspection Red Flags Checklist',
      description: 'Passed an inspection but something feels off? This comprehensive checklist covers the most commonly missed issues that could cost you thousands.',
      format: 'PDF Guide',
      pages: '8 pages',
      featured: true
    },
    {
      icon: Wrench,
      title: 'Essential Tools for New Homeowners',
      description: 'Complete guide to building your first tool collection without breaking the bank. Includes brand recommendations and where to buy.',
      format: 'PDF Guide',
      pages: '12 pages',
      featured: false
    },
    {
      icon: Calculator,
      title: 'DIY Project Cost Calculator',
      description: 'Estimate materials and time for common home improvement projects. Includes local supplier recommendations.',
      format: 'Interactive PDF',
      pages: '6 pages',
      featured: false
    },
    {
      icon: FileText,
      title: 'Project Planning Template',
      description: 'Step-by-step planning worksheet to organize any home improvement project from start to finish.',
      format: 'PDF Template',
      pages: '4 pages',
      featured: false
    }
  ];

  const videoResources = [
    {
      title: 'Drywall Patching Basics',
      duration: '8 mins',
      description: 'Learn professional drywall patching techniques from start to finish. This comprehensive tutorial covers everything from small nail holes to larger repairs, including proper tool selection, compound application, and finishing techniques for seamless results.'
    },
    {
      title: 'Choosing the Right Lumber',
      duration: '12 mins',
      description: 'Navigate the lumber yard like a pro and select quality materials at the best price'
    },
    {
      title: 'Tool Safety Fundamentals',
      duration: '15 mins',
      description: 'Essential safety practices for power tools and hand tools every DIYer should know'
    }
  ];

  const quickTips = [
    {
      category: 'Tool Tips',
      tips: [
        'Always buy the best drill you can afford - it\'s the tool you\'ll use most',
        'A good level is worth the investment. Cheap levels give inaccurate readings',
        'Keep your saw blades sharp. Dull blades are dangerous and create poor cuts'
      ]
    },
    {
      category: 'Material Sourcing',
      tips: [
        'Visit lumber yards early morning for best selection and service',
        'Buy 10% extra materials for waste and mistakes - it\'s cheaper than return trips',
        'Ask about contractor discounts even as a DIYer - many places offer them'
      ]
    },
    {
      category: 'Project Planning',
      tips: [
        'Always start with measuring twice, cutting once',
        'Take "before" photos of wiring and plumbing before covering with drywall',
        'Plan your projects around weather if working outdoors'
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Free Resources & Guides
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Download helpful guides, watch instructional videos, and access the tools you need 
            to tackle your home improvement projects with confidence.
          </p>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 inline-block">
            <p className="text-orange-800 font-semibold">
              💡 All resources are completely free - no email required for basic downloads
            </p>
          </div>
        </div>
      </section>

      {/* Featured Download */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg p-8 text-white mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-orange-500 inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  MOST POPULAR DOWNLOAD
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  "Passed an Inspection... But Something Feels Off?"
                </h2>
                <p className="text-blue-100 mb-6 text-lg">
                  This comprehensive guide covers the most commonly missed inspection issues that could cost you thousands down the road. Learn what to look for and when to take action.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    'Electrical red flags inspectors often miss',
                    'Plumbing issues that get worse over time',
                    'Structural concerns to address immediately',
                    'HVAC problems that affect efficiency',
                    'When to get a second opinion'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Download Free Guide</span>
                </button>
                <a 
                  href="/Free guide.pdf" 
                  download="78-Lael-Home-Inspection-Red-Flags-Guide.pdf"
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center space-x-2"
                >
                  <Download className="h-5 w-5" />
                  <span>Download Free Guide</span>
                </a>
              </div>
              <div className="bg-gray-200 rounded-lg aspect-[4/3] flex items-center justify-center">
                <img 
                  src="/property inspector 1.png" 
                  alt="Property inspector examining home with clipboard and checklist" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Downloads */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              All Free Downloads
            </h2>
            <p className="text-lg text-gray-600">
              Professional guides and templates to support your DIY journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {downloadableResources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <div key={index} className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow ${
                  resource.featured ? 'ring-2 ring-orange-500' : ''
                }`}>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-700 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          <span className="font-medium">{resource.format}</span> • {resource.pages}
                        </div>
                        <button className="bg-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors inline-flex items-center space-x-2">
                          <Download className="h-4 w-4" />
                          <span>Download</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Video Tutorials
            </h2>
            <p className="text-lg text-gray-600">
              Watch and learn fundamental techniques for common DIY projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoResources.map((video, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video">
                  {index === 0 ? (
                    <iframe
                      src="https://www.youtube.com/embed/SA4NtIJ9BzQ?start=2&rel=0&modestbranding=1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full rounded-t-lg"
                    />
                  ) : (
                    <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                      <Video className="h-12 w-12 text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">
                      Make old paint new again
                    </h3>
                    <span className="text-sm text-gray-500">
                      {video.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    How to properly strain paint and stop throwing old paint away because it has dried paint and debris in the can
                  </p>
                  <button className="text-blue-700 font-medium hover:text-blue-800 transition-colors">
                    Watch Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pro Tips & Quick Advice
            </h2>
            <p className="text-lg text-gray-600">
              Bite-sized wisdom from years of carpentry experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickTips.map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.tips.map((tip, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">
                        {tip}
                      </span>
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
            Need Personalized Guidance?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            While these resources are helpful, nothing beats personalized guidance for your specific project. 
            Let's discuss your needs in a free consultation call.
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

export default ResourcesPage;