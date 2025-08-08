import React, { useState } from 'react';
import { ArrowRight, CheckCircle, User, Building, FileText } from 'lucide-react';

const StartTransformation = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    description: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `🚀 *New Transformation Request* 🚀

*Name:* ${formData.name}
*Company:* ${formData.company}
*Project Description:*
${formData.description}

I'm interested in starting my digital transformation journey with TECHive group!`;

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/524443113785?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="glass-card rounded-2xl p-12 neon-border">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 pulse-glow">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-6 glow-text">Request Sent Successfully!</h1>
            <p className="text-xl text-gray-300 mb-8">
              Thank you for your interest in transforming your business. We've opened WhatsApp for you 
              with your project details pre-filled. Our team will respond shortly to discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/"
                className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center space-x-2"
              >
                <span>Return to Home</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="/services"
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center transition-all"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold font-orbitron mb-6 gradient-text">
            Start Your Transformation
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to revolutionize your business? Fill out the form below and we'll connect with you 
            to discuss your digital transformation journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="glass-card rounded-2xl p-8 neon-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="flex items-center text-lg font-semibold text-gray-200 mb-3">
                  <User className="w-5 h-5 mr-2 text-blue-400" />
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="company" className="flex items-center text-lg font-semibold text-gray-200 mb-3">
                  <Building className="w-5 h-5 mr-2 text-blue-400" />
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="description" className="flex items-center text-lg font-semibold text-gray-200 mb-3">
                  <FileText className="w-5 h-5 mr-2 text-blue-400" />
                  Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-vertical"
                  placeholder="Describe your project, challenges, goals, and what you'd like to achieve with digital transformation..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center space-x-2"
              >
                <span>Send to WhatsApp</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <p className="text-sm text-gray-400 mt-4 text-center">
              Your information will be sent directly to our WhatsApp for immediate assistance.
            </p>
          </div>

          {/* Info Panel */}
          <div className="space-y-8">
            <div className="glass-card rounded-xl p-6 neon-border">
              <h3 className="text-2xl font-bold mb-4 glow-text">What Happens Next?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400">Instant Connection</h4>
                    <p className="text-gray-300">We'll connect via WhatsApp within minutes to discuss your project.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-400">Free Consultation</h4>
                    <p className="text-gray-300">Schedule a detailed consultation to understand your specific needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400">Custom Proposal</h4>
                    <p className="text-gray-300">Receive a tailored proposal with timeline and investment details.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 neon-border">
              <h3 className="text-2xl font-bold mb-4 glow-text">Why Choose Us?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Proven track record with 100+ successful transformations
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Expert team with cutting-edge AI and automation expertise
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Guaranteed ROI within first 6 months
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  24/7 support and monitoring
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-xl p-6 neon-border text-center">
              <h3 className="text-xl font-bold mb-2 text-orange-400">Urgent Project?</h3>
              <p className="text-gray-300 mb-4">Need immediate assistance?</p>
              <button 
                onClick={() => window.open('https://wa.me/524443113785', '_blank')}
                className="btn-primary px-6 py-3 rounded-lg font-semibold w-full"
              >
                Chat Now on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartTransformation;