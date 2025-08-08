import React from 'react';
import { ExternalLink, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "E-commerce Giant: 400% Revenue Growth Through AI Automation",
      client: "TechMart Solutions",
      industry: "E-commerce",
      challenge: "Manual order processing, inventory management chaos, and poor customer service response times were limiting growth potential.",
      solution: "Implemented comprehensive AI-powered automation suite including predictive inventory management, automated customer service chatbots, and personalized marketing campaigns.",
      results: [
        "400% increase in revenue within 8 months",
        "95% reduction in order processing time",
        "85% improvement in customer satisfaction",
        "60% reduction in operational costs"
      ],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      metrics: {
        revenue: "400%",
        efficiency: "95%",
        satisfaction: "85%",
        costs: "-60%"
      }
    },
    {
      title: "Manufacturing Revolution: Smart Factory Transformation",
      client: "Industrial Dynamics Corp",
      industry: "Manufacturing",
      challenge: "Outdated production systems, quality control issues, and lack of real-time visibility into manufacturing processes.",
      solution: "Deployed IoT sensors, predictive maintenance AI, automated quality control systems, and real-time dashboard analytics across all production lines.",
      results: [
        "300% improvement in production efficiency",
        "90% reduction in equipment downtime",
        "75% decrease in quality defects",
        "50% reduction in maintenance costs"
      ],
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800",
      metrics: {
        efficiency: "300%",
        uptime: "90%",
        quality: "75%",
        maintenance: "-50%"
      }
    },
    {
      title: "SaaS Startup: From Zero to Market Leader",
      client: "CloudFlow Technologies",
      industry: "SaaS",
      challenge: "New startup needed complete digital infrastructure, customer acquisition systems, and scalable growth processes from ground zero.",
      solution: "Built end-to-end digital transformation including automated sales funnels, AI-driven customer onboarding, data analytics platform, and scalable cloud architecture.",
      results: [
        "1000+ customers acquired in 6 months",
        "250% month-over-month growth rate",
        "99.9% platform uptime achieved",
        "80% automation of customer processes"
      ],
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      metrics: {
        customers: "1000+",
        growth: "250%",
        uptime: "99.9%",
        automation: "80%"
      }
    },
    {
      title: "Healthcare Innovation: Patient Care Optimization",
      client: "MediCare Plus",
      industry: "Healthcare",
      challenge: "Inefficient patient scheduling, poor data management, and manual processes were affecting patient care quality and operational efficiency.",
      solution: "Integrated AI-powered patient management system, automated appointment scheduling, predictive health analytics, and secure data management platform.",
      results: [
        "200% increase in patient satisfaction",
        "70% reduction in appointment wait times",
        "90% improvement in data accuracy",
        "45% increase in operational efficiency"
      ],
      image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800",
      metrics: {
        satisfaction: "200%",
        waitTime: "-70%",
        accuracy: "90%",
        efficiency: "45%"
      }
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-orbitron mb-6 gradient-text">
            Success Stories
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real transformations, real results. See how we've helped businesses across industries 
            achieve unprecedented growth through digital transformation and AI automation.
          </p>
        </div>

        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <div key={index} className="glass-card rounded-2xl overflow-hidden neon-border">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="order-2 lg:order-1 p-8 lg:p-12">
                  <div className="mb-6">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4 glow-text">{study.title}</h2>
                  <p className="text-blue-400 text-lg mb-6 font-semibold">{study.client}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-orange-400">Challenge</h3>
                      <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-green-400">Solution</h3>
                      <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-purple-400">Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <TrendingUp className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 relative">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover lg:min-h-96"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
                  
                  {/* Metrics Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(study.metrics).slice(0, 4).map(([key, value], idx) => (
                        <div key={idx} className="glass-card rounded-lg p-3 text-center">
                          <div className="text-2xl font-bold text-blue-400">{value}</div>
                          <div className="text-sm text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 p-12 glass-card rounded-2xl neon-border">
          <h2 className="text-3xl font-bold mb-6 glow-text">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join these industry leaders who transformed their businesses with our proven methodologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://wa.me/524443113785', '_blank')}
              className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center space-x-2"
            >
              <span>Discuss Your Project</span>
              <ExternalLink className="w-5 h-5" />
            </button>
            <a 
              href="/start-transformation"
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center transition-all"
            >
              Start Your Transformation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;