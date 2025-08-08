import React from 'react';

const SponsorsSection = () => {
  const sponsors = [
    {
      name: 'n8n',
      logo: 'https://images.apifyusercontent.com/M92B6mGwwCIHH3sbkvv8pnTMYDTBRQ7MdttOVQ0eyE0/rs:fill:250:250/cb:1/aHR0cHM6Ly9hcGlmeS1pbWFnZS11cGxvYWRzLXByb2QuczMudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vSElNQUNaaE9uN1lKNzFkVHUtYWN0b3ItM3NJQzBENWV6Rm9RcEczbXotTTNpS21ldlJpcy1uOG4ucG5n.webp',
      description: 'Workflow Automation'
    },
    {
      name: 'Make',
      logo: 'https://cdn2.futurepedia.io/3b501973b98be992f82711fb73392ec935fb07bb-225x225.png?w=256',
      description: 'Integration Platform'
    },
    {
      name: 'BIAKA Corp',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMTYiIGZpbGw9IiMwMDMzOTkiLz4KPHRleHQgeD0iNjQiIHk9IjY0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iMC4zZW0iIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIj5CSUFLQTwvdGV4dD4KPC9zdmc+',
      description: 'Business Intelligence'
    },
    {
      name: 'Nexantis',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMTYiIGZpbGw9IiMwMDY2RkYiLz4KPHRleHQgeD0iNjQiIHk9IjY0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iMC4zZW0iIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIj5ORVhBTlRJUzwvdGV4dD4KPC9zdmc+',
      description: 'Technology Solutions'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-950/10 to-black/20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Our Technology Partners</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We collaborate with industry-leading platforms to deliver comprehensive solutions
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300 neon-border"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center">
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  className="w-12 h-12 object-contain filter brightness-0 invert group-hover:filter-none transition-all"
                />
              </div>
              <h3 className="font-bold text-white mb-2">{sponsor.name}</h3>
              <p className="text-sm text-gray-400">{sponsor.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400">
© 2023 TECHive Group. All rights reserved.|BIAKA Corp| Trusted by leading technology platforms to deliver exceptional results
          </p>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
