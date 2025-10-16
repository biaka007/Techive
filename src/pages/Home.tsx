import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Users, Puzzle, Zap, Shield, Rocket, Target } from 'lucide-react';
import SponsorsSection from '../components/SponsorsSection';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center tech-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-orbitron mb-6 floating">
            <span className="gradient-text">We build hands-off</span>
            <br />
            <span className="glow-text">growth systems</span>
            <br />
            <span className="text-gray-300">for B2B founders</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Transform your business with AI-powered automation and cutting-edge digital solutions. 
            Scale efficiently while you focus on what matters most.
          </p>
          <Link 
            to="/start-transformation" 
            className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center space-x-2"
          >
            <span>Start Your Transformation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Elements Section */}
      <section className="py-20 bg-gradient-to-b from-blue-950/20 to-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 gradient-text">
              What is Techive?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              
Techive is a global AI-powered digital agency with a presence in Mexico, the United States, France, and Ivory Coast that empowers businesses to thrive in the digital age. We live in a time where efficiency is no longer a luxury ,it's a necessity. Automation is no longer limited to large corporations; it's the tool that allows businesses of any size to optimize, scale, and free up valuable resources.

Today, critical tasks like email management, accounting, customer service, and technical support consume a significant amount of time and effort. By integrating automation, we transform these operations into smooth and efficient processes.

Our modular solutions, also called Techives, are designed to help you:

Automate: Eliminate the repetitive, manual tasks that slow down your team.

Optimize: Improve accuracy and speed in key areas like accounting and support, reducing errors and response times.

Scale: Prepare your business for growth without having to drastically increase operational costs.

With Techive, Canadian companies can focus on what truly matters: strategy, innovation, and connecting with their customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card rounded-xl p-8 rotate-3d neon-border">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-6 pulse-glow">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 glow-text">AI-Powered Automation</h3>
              <p className="text-gray-300 leading-relaxed">
                Smart tools built on SaaS technology that scale with your business. 
                Our AI solutions eliminate manual processes and optimize workflows automatically.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 rotate-3d neon-border">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center mb-6 pulse-glow">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 glow-text">Human Expertise</h3>
              <p className="text-gray-300 leading-relaxed">
                Strategic oversight and support from real specialists who understand your goals. 
                Our team combines AI efficiency with human insight for optimal results.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 rotate-3d neon-border">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center mb-6 pulse-glow">
                <Puzzle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 glow-text">Modular Integration</h3>
              <p className="text-gray-300 leading-relaxed">
                Each Element connects seamlessly with others to build your custom tech stack. 
                Scale up or down based on your specific business requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-black/40 to-blue-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 gradient-text">
              Why Choose TECHive Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another digital agency. We're your strategic partner in building 
              sustainable, automated growth systems that work 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 pulse-glow group-hover:scale-110 transition-transform">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 glow-text">Lightning Fast</h3>
              <p className="text-gray-300">
                Rapid implementation and deployment. Get your systems running in weeks, not months.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 pulse-glow group-hover:scale-110 transition-transform">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 glow-text">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security protocols protect your data and business operations at all times.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 pulse-glow group-hover:scale-110 transition-transform">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 glow-text">Scalable Growth</h3>
              <p className="text-gray-300">
                Systems that grow with you. From startup to enterprise, our solutions adapt and scale.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-6 pulse-glow group-hover:scale-110 transition-transform">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 glow-text">Results Focused</h3>
              <p className="text-gray-300">
                We measure success by your ROI. Every solution is designed to deliver measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-950 via-black to-blue-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 glow-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join hundreds of successful B2B founders who've automated their growth with our proven systems.
          </p>
          <Link 
            to="/start-transformation" 
            className="btn-primary px-10 py-5 rounded-lg text-xl font-semibold inline-flex items-center space-x-2 mr-6 mb-4 md:mb-0"
          >
            <span>Get Started Now</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
          <Link 
            to="/services" 
            className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-10 py-5 rounded-lg text-xl font-semibold inline-flex items-center transition-all"
          >
            View Our Services
          </Link>
        </div>
      </section>

      <SponsorsSection />
    </div>
  );
};

export default Home;
