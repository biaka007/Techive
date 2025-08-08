import React from 'react';
import { Bot, Cloud, Shield, BarChart3, Cog, Users, Smartphone, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI-Powered Process Automation",
      description: "Transform manual workflows with intelligent automation that learns and adapts to your business needs.",
      features: [
        "Custom AI workflow design",
        "Intelligent document processing",
        "Automated decision making",
        "24/7 process monitoring",
        "ROI tracking and optimization"
      ],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure & DevOps",
      description: "Scalable cloud solutions with automated deployment, monitoring, and maintenance for maximum uptime.",
      features: [
        "Multi-cloud architecture design",
        "CI/CD pipeline automation",
        "Infrastructure as Code (IaC)",
        "Automated scaling & monitoring",
        "Disaster recovery planning"
      ],
      image: "https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: BarChart3,
      title: "Data Analytics & Business Intelligence",
      description: "Turn raw data into actionable insights with advanced analytics and real-time dashboards.",
      features: [
        "Custom dashboard development",
        "Predictive analytics modeling",
        "Real-time data processing",
        "Advanced reporting systems",
        "Data visualization & insights"
      ],
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-green-500 to-green-700"
    },
    {
      icon: Shield,
      title: "Cybersecurity & Compliance",
      description: "Comprehensive security solutions to protect your digital assets and ensure regulatory compliance.",
      features: [
        "Security audit & assessment",
        "Threat detection & response",
        "Compliance framework implementation",
        "Security training programs",
        "Incident response planning"
      ],
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-red-500 to-red-700"
    },
    {
      icon: Cog,
      title: "Legacy System Modernization",
      description: "Upgrade outdated systems with modern technologies while maintaining business continuity.",
      features: [
        "System assessment & planning",
        "Gradual migration strategies",
        "API integration & development",
        "Performance optimization",
        "Staff training & support"
      ],
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-orange-500 to-orange-700"
    },
    {
      icon: Users,
      title: "Digital Transformation Consulting",
      description: "Strategic guidance to navigate your complete digital transformation journey successfully.",
      features: [
        "Digital maturity assessment",
        "Transformation roadmap creation",
        "Change management support",
        "Technology stack optimization",
        "ROI measurement & tracking"
      ],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-teal-500 to-teal-700"
    },
    {
      icon: Smartphone,
      title: "Mobile & Web Application Development",
      description: "Custom applications that deliver exceptional user experiences across all platforms and devices.",
      features: [
        "Cross-platform mobile apps",
        "Progressive web applications",
        "API development & integration",
        "UI/UX design optimization",
        "Performance monitoring & analytics"
      ],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-indigo-500 to-indigo-700"
    },
    {
      icon: Database,
      title: "Database Design & Management",
      description: "Optimized database solutions that scale with your business and ensure data integrity.",
      features: [
        "Database architecture design",
        "Performance optimization",
        "Backup & recovery solutions",
        "Data migration services",
        "Real-time synchronization"
      ],
      image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-pink-500 to-pink-700"
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-orbitron mb-6 gradient-text">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital transformation services designed to accelerate your business growth 
            and optimize operations through cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="glass-card rounded-2xl overflow-hidden neon-border rotate-3d">
                <div className="relative h-64">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className={`absolute top-6 left-6 w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center pulse-glow`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 glow-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Features:</h4>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => window.open('https://wa.me/524443113785', '_blank')}
                    className="mt-6 btn-primary px-6 py-3 rounded-lg font-semibold w-full transition-all hover:scale-105"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mt-20 glass-card rounded-2xl p-12 neon-border">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 glow-text">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology that ensures successful delivery and maximum ROI for every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-400">Discovery</h3>
              <p className="text-gray-300">Deep dive into your business needs and current systems</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-400">Strategy</h3>
              <p className="text-gray-300">Develop customized roadmap and implementation plan</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-400">Implementation</h3>
              <p className="text-gray-300">Execute solutions with continuous testing and optimization</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-2 text-orange-400">Support</h3>
              <p className="text-gray-300">Ongoing maintenance, monitoring, and optimization</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-6 glow-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can drive your business forward with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://wa.me/524443113785', '_blank')}
              className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold"
            >
              Contact Us Today
            </button>
            <a 
              href="/start-transformation"
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;