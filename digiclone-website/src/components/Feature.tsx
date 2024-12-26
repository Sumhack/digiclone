// src/components/Features.tsx
interface Feature {
    title: string;
    description: string;
  }
  
  const Features = () => {
    const features: Feature[] = [
      {
        title: '24/7 Availability',
        description: 'Your digital clone is always ready to engage with your audience, providing consistent value around the clock.'
      },
      {
        title: 'Personalized Learning',
        description: 'Each interaction is tailored to the individual, creating meaningful and engaging conversations.'
      },
      {
        title: 'Scale Your Impact',
        description: 'Reach thousands of people simultaneously while maintaining the personal touch of one-on-one interactions.'
      },
      {
        title: 'Digital Legacy',
        description: 'Preserve your knowledge and insights for future generations in an interactive, engaging format.'
      }
    ];
  
    return (
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Transform Your Digital Presence
            </p>
          </div>
  
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Features;