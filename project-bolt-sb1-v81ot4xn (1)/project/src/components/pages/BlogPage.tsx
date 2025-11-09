import React from 'react';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Tag,
  Wrench,
  Home,
  DollarSign,
  AlertTriangle
} from 'lucide-react';

interface BlogPageProps {
  onNavigate: (page: string) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const featuredPost = {
    title: '10 Tools Every New Homeowner Should Own (And Where to Buy Them Cheap)',
    excerpt: 'Building your first tool collection doesn\'t have to break the bank. Here\'s my curated list of essential tools that will handle 90% of home repairs, plus where to find quality tools at the best prices.',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Tool Guides',
    image: 'Featured blog image placeholder'
  };

  const blogPosts = [
    {
      title: 'Drywall Patching: A Complete Step-by-Step Guide for First-Timers',
      excerpt: 'From nail holes to large patches, learn the right technique for every type of drywall repair. Includes tool list and common mistakes to avoid.',
      date: '2025-01-12',
      readTime: '12 min read',
      category: 'DIY Tutorials',
      icon: Wrench
    },
    {
      title: 'What Your Home Inspector Probably Missed (And Why It Matters)',  
      excerpt: 'Even good inspectors can miss critical issues. Learn the most commonly overlooked problems and how to spot them yourself.',
      date: '2025-01-10',
      readTime: '10 min read',
      category: 'Home Inspection',
      icon: AlertTriangle
    },
    {
      title: 'Lumber Yard vs. Big Box Store: Where to Buy Materials for Best Value',
      excerpt: 'Quality and price comparison between lumber yards and home improvement stores. When to shop where, and how to get the best deals.',
      date: '2025-01-08',
      readTime: '6 min read',
      category: 'Material Sourcing',
      icon: DollarSign
    },
    {
      title: 'Kitchen Cabinet Installation: Is It Really a DIY Project?',
      excerpt: 'Breaking down the complexity, tools needed, and realistic timeline for installing kitchen cabinets yourself vs. hiring a pro.',
      date: '2025-01-05',
      readTime: '9 min read',
      category: 'Project Planning',
      icon: Home
    },
    {
      title: 'Safety First: Essential PPE for Every Home Project',
      excerpt: 'The personal protective equipment you actually need (not just what\'s recommended). Practical safety advice for real DIY projects.',
      date: '2025-01-03',
      readTime: '7 min read',
      category: 'Safety',
      icon: AlertTriangle
    },
    {
      title: 'Deck Repair vs. Replacement: Making the Right Choice',
      excerpt: 'How to assess your deck\'s condition and decide whether repair or replacement makes more financial sense. Includes inspection checklist.',
      date: '2025-01-01',
      readTime: '11 min read',
      category: 'Outdoor Projects',
      icon: Home
    }
  ];

  const categories = [
    { name: 'Tool Guides', count: 8 },
    { name: 'DIY Tutorials', count: 12 },
    { name: 'Home Inspection', count: 6 },
    { name: 'Material Sourcing', count: 5 },
    { name: 'Project Planning', count: 9 },
    { name: 'Safety', count: 4 },
    { name: 'Outdoor Projects', count: 7 }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DIY Wisdom & Project Guides
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Practical advice, tutorials, and insights from 15+ years of carpentry experience. 
            Learn the techniques and tips that will make your next project a success.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <div className="bg-orange-500 inline-block px-3 py-1 rounded-full text-sm font-semibold text-white mb-4">
                  FEATURED POST
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-blue-100 mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-blue-200 text-sm mb-6">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Jan 15, 2025</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Tag className="h-4 w-4" />
                    <span>{featuredPost.category}</span>
                  </div>
                </div>
                <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center space-x-2">
                  <span>Read Full Article</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              <div className="bg-gray-200 flex items-center justify-center min-h-[300px] lg:min-h-[400px]">
                <img 
                  src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Home improvement guide book with tools and materials checklist" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Latest Articles
              </h2>
              <div className="space-y-8">
                {blogPosts.map((post, index) => {
                  const IconComponent = post.icon;
                  return (
                    <article key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-700 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                              {post.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-700 cursor-pointer">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-gray-500 text-sm">
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                            <button className="text-blue-700 font-medium hover:text-blue-800 transition-colors">
                              Read More →
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Categories */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Categories
                  </h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index} className="flex items-center justify-between">
                        <button className="text-gray-600 hover:text-blue-700 transition-colors">
                          {category.name}
                        </button>
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          {category.count}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-blue-700 p-6 rounded-lg text-white">
                  <h3 className="text-lg font-semibold mb-3">
                    Get Weekly DIY Tips
                  </h3>
                  <p className="text-blue-100 mb-4 text-sm">
                    Join 2,000+ homeowners getting practical carpentry advice delivered to their inbox every week.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm"
                    />
                    <button className="w-full bg-orange-600 text-white py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Need Personal Guidance?
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    While these articles are helpful, nothing beats personalized advice for your specific project.
                  </p>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full bg-orange-600 text-white py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                  >
                    Book Free Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;