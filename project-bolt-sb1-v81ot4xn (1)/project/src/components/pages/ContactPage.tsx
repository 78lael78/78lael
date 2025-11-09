import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Clock, 
  CheckCircle,
  MessageSquare,
  Video,
  ArrowRight
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    urgency: '',
    message: '',
    preferredContact: 'email'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: Calendar,
      title: 'Book Free Consultation Call',
      description: 'Schedule a 30-minute call to discuss your project and get expert advice',
      action: 'Schedule Now',
      highlight: true
    },
    {
      icon: Video,
      title: 'Video Call Consultation',
      description: 'Perfect for progress check-ins and remote troubleshooting',
      action: 'Book Video Call',
      highlight: false
    },
    {
      icon: MessageSquare,
      title: 'Quick Question Form',
      description: 'Get answers to simple questions within 24 hours',
      action: 'Ask Question',
      highlight: false
    }
  ];

  const serviceAreas = [
    'Pittsburgh Metro Area',
    'Allegheny County',
    'Westmoreland County',
    'Washington County',
    'Butler County',
    'Beaver County'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get Started With Your Project
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Ready to build with confidence? Let's discuss your project and create a plan that sets you up for success. 
            Your first consultation is completely free.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 inline-block">
            <p className="text-green-800 font-semibold flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Free 30-minute consultation call for all new clients</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Would You Like to Connect?
            </h2>
            <p className="text-lg text-gray-600">
              Choose the method that works best for you and your project timeline
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className={`p-6 rounded-lg text-center ${
                  method.highlight 
                    ? 'bg-blue-700 text-white ring-4 ring-blue-200' 
                    : 'bg-gray-50 text-gray-900 hover:shadow-lg transition-shadow'
                }`}
                onClick={() => method.title.includes('Book Free Consultation') ? onNavigate('schedule') : undefined}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    method.highlight ? 'bg-orange-500' : 'bg-blue-700'
                  }`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {method.title}
                  </h3>
                  <p className={`mb-6 ${method.highlight ? 'text-blue-100' : 'text-gray-600'}`}>
                    {method.description}
                  </p>
                  <button className={`px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2 ${
                    method.highlight
                      ? 'bg-orange-600 text-white hover:bg-orange-700'
                      : 'bg-blue-700 text-white hover:bg-blue-800'
                  }`}>
                    <span>{method.action}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Tell Us About Your Project
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select project type</option>
                      <option value="home-walkthrough">Home Walkthrough</option>
                      <option value="deck-repair">Deck Repair/Build</option>
                      <option value="kitchen-cabinets">Kitchen Cabinets</option>
                      <option value="drywall-repair">Drywall Repair</option>
                      <option value="trim-work">Trim/Molding Work</option>
                      <option value="general-repair">General Home Repair</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="this-week">This Week</option>
                      <option value="next-week">Next Week</option>
                      <option value="this-month">This Month</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Email
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Phone
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, any specific concerns, or questions you have..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  Send Message & Schedule Free Call
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-700" />
                    <div>
                      <p className="font-medium text-gray-900">(412) - 447 - 8731</p>
                      <p className="text-sm text-gray-600">Call or text</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-700" />
                    <div>
                      <p className="font-medium text-gray-900">78lael@gmail.com</p>
                      <p className="text-sm text-gray-600">Email for questions</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-700" />
                    <div>
                      <p className="font-medium text-gray-900">Pittsburgh, PA and surrounding area</p>
                      <p className="text-sm text-gray-600">Service area</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Times */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Response Times
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">
                      <strong>Email:</strong> Within 24 hours
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">
                      <strong>Phone:</strong> Same day callback
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">
                      <strong>Urgent:</strong> Within 4 hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Service Areas
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Outside our service area? We offer video consultations nationwide!
                </p>
              </div>

              {/* Office Hours */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Availability
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="font-medium">7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="font-medium">8:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="font-medium">By appointment</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Emergency consultations available outside regular hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "What happens during the free consultation call?",
                answer: "We'll discuss your project, assess your skill level, and determine the best service approach. No obligation - just honest advice about your options."
              },
              {
                question: "Do you work on projects outside the Pittsburgh area?",
                answer: "For in-person services, we focus on the Pittsburgh area and surrounding regions. However, we offer video consultations and virtual coaching nationwide."
              },
              {
                question: "How far in advance should I book?",
                answer: "We typically book 1-2 weeks out, but we always try to accommodate urgent needs. Rush service is available for same-day or next-day appointments."
              },
              {
                question: "What if I'm a complete beginner?",
                answer: "Perfect! We specialize in helping first-time DIYers. We'll start with the basics and build your confidence step by step."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;