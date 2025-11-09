import React from 'react';
import { 
  Hammer, 
  GraduationCap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  Quote
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const experience = [
    {
      icon: Hammer,
      title: '15+ Years in Carpentry',
      description: 'From framing houses to custom cabinetry, I\'ve worked on projects of every scale'
    },
    {
      icon: GraduationCap,
      title: 'Teaching & Mentoring',
      description: 'Helped dozens of apprentices and DIY enthusiasts master fundamental skills'
    },
    {
      icon: Users,
      title: 'Homeowner-First Approach',
      description: 'Specializing in guidance that empowers you to tackle projects with confidence'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'Denver, CO',
      text: 'After our home inspection revealed several issues, I was completely overwhelmed. 78 Lael walked me through each problem, prioritized what needed immediate attention, and gave me the confidence to tackle repairs myself. Saved me thousands!',
      rating: 5
    },
    {
      name: 'Mike D.',
      location: 'Boulder, CO',
      text: 'I wanted to build a deck but had zero experience. The step-by-step coaching was incredible - I learned proper techniques while actually completing the project. Now I feel confident taking on future DIY projects.',
      rating: 5
    },
    {
      name: 'Jennifer L.',
      location: 'Fort Collins, CO',
      text: 'Professional, patient, and knowledgeable. 78 Lael made DIY home improvement feel achievable for a complete beginner. The written instructions and shopping lists were invaluable.',
      rating: 5
    }
  ];

  const values = [
    {
      title: 'Empowerment Over Dependency',
      description: 'I teach you skills that last a lifetime, not just quick fixes that require calling me back.'
    },
    {
      title: 'Transparent Communication',
      description: 'No confusing jargon or hidden costs. Everything is explained in plain English with honest pricing.'
    },
    {
      title: 'Safety First',
      description: 'Every project starts with proper safety protocols and tool handling techniques.'
    },
    {
      title: 'Quality Without Compromise',
      description: 'We do things right the first time, using proper techniques and quality materials.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Hi, I'm <span className="text-blue-700">Aaron</span> — Your Carpentry Guide
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                After 15+ years in professional carpentry, I discovered my true passion: 
                helping homeowners build confidence and skills to tackle their own projects successfully.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're dealing with a concerning home inspection or ready to start your first DIY build, 
                I'm here to guide you through every step with patience, expertise, and practical advice.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center space-x-2"
              >
                <span>Schedule Your Free Call</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <img 
                src="/image.png" 
                alt="Aaron Witmer - Professional Carpenter with toolbelt and clipboard" 
                className="rounded-lg aspect-square object-cover w-full"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-blue-700 text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Hammer className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">15+ Years</p>
                    <p className="text-sm text-blue-100">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Homeowners Trust My Guidance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              My approach combines professional expertise with a genuine passion for teaching, 
              ensuring you not only complete your project but gain skills for the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {experience.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* My Story */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The 78 Lael Story</h3>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-4">
                Growing up with a hammer in my hand and following in my late father's footsteps, 
                I discovered that my true calling wasn't just building — it was teaching others to build with confidence. 
                78 Lael started when I realized that many homeowners were getting overwhelmed by home improvement projects, 
                especially after receiving concerning inspection reports.
              </p>
              <p className="mb-4">
                Traditional contractors often pushed for expensive full replacements when simple repairs 
                and guidance could solve the problem. I saw too many people either:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Paying thousands for work they could learn to do themselves</li>
                <li>Avoiding necessary repairs due to cost concerns</li>
                <li>Starting DIY projects without proper guidance and getting frustrated</li>
                <li>Making costly mistakes that could have been easily prevented</li>
              </ul>
              <p>
                That's when I decided to focus on what I do best: sharing the knowledge and passion 
                my father passed down to me. 78 Lael bridges the gap between "do it all yourself" and "hire it all out" 
                by providing the expert guidance and confidence you need to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Approach */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              My Approach to Carpentry Guidance
            </h2>
            <p className="text-lg text-gray-600">
              These core values guide every consultation and project coaching session
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Homeowners Are Saying
            </h2>
            <p className="text-lg text-gray-600">
              Real experiences from people who've transformed their approach to home improvement
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg relative">
                <Quote className="h-8 w-8 text-blue-700 mb-4" />
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#F0EAD6' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xl text-gray-600 mb-6">
              I've been dabbling in construction ever since they let me hold a hammer. Building forts, 
              homemade haunted houses, and tree huts since I was 8, I've always had a flair for carpentry, 
              naturally following in my late father's footsteps.
            </p>
            <p className="text-lg text-black mb-6">
              My passion lies within the walls of a home. Repurposing, rebuilding, adding beauty, 
              creativity, and character to my customers' homes has always been my priority.
            </p>
            <p className="text-lg text-black mb-8">
              Pittsburgh native, but servicing surrounding areas, if you or yours are ever in need of 
              an honest, fair, efficient, thorough, adept, and creative carpenter, you've come to the right place.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Book Your Free Call</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors ml-4"
            >
              View All Services
            </button>
          </div>
      </section>
    </div>
  );
};

export default AboutPage;