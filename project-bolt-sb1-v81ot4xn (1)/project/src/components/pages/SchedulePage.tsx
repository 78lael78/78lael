import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  MessageSquare,
  CheckCircle,
  ArrowLeft,
  Video,
  Home as HomeIcon
} from 'lucide-react';

interface SchedulePageProps {
  onNavigate: (page: string) => void;
}

const SchedulePage: React.FC<SchedulePageProps> = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const services = [
    {
      id: 'consultation',
      title: 'Free Consultation Call',
      duration: '30 minutes',
      price: 'Free',
      description: 'Discuss your project and get expert advice',
      icon: Phone
    },
    {
      id: 'walkthrough',
      title: 'Home Walkthrough',
      duration: '2-3 hours',
      price: 'Starting at $150',
      description: 'On-site assessment of your home improvement needs',
      icon: HomeIcon
    },
    {
      id: 'video-call',
      title: 'Video Consultation',
      duration: '30 minutes',
      price: '$75',
      description: 'Remote support and guidance',
      icon: Video
    }
  ];

  // Mock available time slots - in real implementation, this would come from Google Calendar API
  const availableSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setStep(2);
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setStep(3);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep(4);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would integrate with Google Calendar API and Airtable/Google Sheets
    const bookingData = {
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      ...formData,
      timestamp: new Date().toISOString()
    };

    console.log('Booking submitted:', bookingData);
    
    // Simulate API call
    setTimeout(() => {
      setStep(5); // Go to confirmation page
    }, 1000);
  };

  const getNextWeekDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        date: date.toISOString().split('T')[0],
        display: date.toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        })
      });
    }
    return dates;
  };

  const selectedServiceData = services.find(s => s.id === selectedService);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/78 Lael.jpg" 
              alt="78 Lael Logo" 
              className="h-12 w-12 rounded-lg object-cover mr-3"
            />
            <h1 className="text-3xl font-bold text-gray-900">Schedule Your Appointment</h1>
          </div>
          <p className="text-lg text-gray-600">
            Book your carpentry consultation with Aaron
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3, 4].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step >= stepNum 
                    ? 'bg-blue-700 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {stepNum}
                </div>
                {stepNum < 4 && (
                  <div className={`w-12 h-1 mx-2 ${
                    step > stepNum ? 'bg-blue-700' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2">
            <div className="text-sm text-gray-600">
              {step === 1 && 'Select Service'}
              {step === 2 && 'Choose Date'}
              {step === 3 && 'Pick Time'}
              {step === 4 && 'Your Details'}
              {step === 5 && 'Confirmed!'}
            </div>
          </div>
        </div>

        {/* Step 1: Service Selection */}
        {step === 1 && (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What type of consultation do you need?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => handleServiceSelect(service.id)}
                    className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-700 hover:shadow-md transition-all text-left"
                  >
                    <div className="bg-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {service.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {service.duration}
                      </span>
                      <span className="font-semibold text-blue-700">
                        {service.price}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 2: Date Selection */}
        {step === 2 && (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <button
              onClick={() => setStep(1)}
              className="flex items-center text-blue-700 hover:text-blue-800 mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to services
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Select a date for your {selectedServiceData?.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {getNextWeekDates().map((dateObj) => (
                <button
                  key={dateObj.date}
                  onClick={() => handleDateSelect(dateObj.date)}
                  className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-700 hover:shadow-md transition-all text-center"
                >
                  <Calendar className="h-6 w-6 mx-auto mb-2 text-blue-700" />
                  <div className="font-semibold text-gray-900">
                    {dateObj.display}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Time Selection */}
        {step === 3 && (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <button
              onClick={() => setStep(2)}
              className="flex items-center text-blue-700 hover:text-blue-800 mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to dates
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Available times for {new Date(selectedDate).toLocaleDateString('en-US', { 
                weekday: 'long', 
                month: 'long', 
                day: 'numeric' 
              })}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {availableSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeSelect(time)}
                  className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-700 hover:shadow-md transition-all text-center"
                >
                  <Clock className="h-6 w-6 mx-auto mb-2 text-blue-700" />
                  <div className="font-semibold text-gray-900">
                    {time}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Contact Form */}
        {step === 4 && (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <button
              onClick={() => setStep(3)}
              className="flex items-center text-blue-700 hover:text-blue-800 mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to times
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Almost done! Tell us about yourself
            </h2>
            
            {/* Booking Summary */}
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Booking Summary:</h3>
              <div className="text-sm text-gray-700">
                <p><strong>Service:</strong> {selectedServiceData?.title}</p>
                <p><strong>Date:</strong> {new Date(selectedDate).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric',
                  year: 'numeric'
                })}</p>
                <p><strong>Time:</strong> {selectedTime}</p>
                <p><strong>Duration:</strong> {selectedServiceData?.duration}</p>
                <p><strong>Price:</strong> {selectedServiceData?.price}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
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
                    Email Address *
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
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

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
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your project, any specific concerns, or questions you have..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        )}

        {/* Step 5: Confirmation */}
        {step === 5 && (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Booking Confirmed! 🎉
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Thank you, {formData.name}! Your appointment has been successfully scheduled.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6 text-left">
              <h3 className="font-semibold text-gray-900 mb-4">Appointment Details:</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Service:</strong> {selectedServiceData?.title}</p>
                <p><strong>Date:</strong> {new Date(selectedDate).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric',
                  year: 'numeric'
                })}</p>
                <p><strong>Time:</strong> {selectedTime}</p>
                <p><strong>Duration:</strong> {selectedServiceData?.duration}</p>
                <p><strong>Contact:</strong> {formData.email}</p>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg mb-6">
              <p className="text-orange-800 text-sm">
                📧 A confirmation email has been sent to {formData.email} with all the details and next steps.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600">
                Aaron will contact you within 24 hours to confirm the appointment and answer any questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => onNavigate('home')}
                  className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Back to Home
                </button>
                <button
                  onClick={() => {
                    setStep(1);
                    setSelectedService('');
                    setSelectedDate('');
                    setSelectedTime('');
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      projectType: '',
                      message: ''
                    });
                  }}
                  className="border-2 border-blue-700 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-colors"
                >
                  Book Another Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchedulePage;