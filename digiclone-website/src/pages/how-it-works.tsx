// src/pages/how-it-works.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navjar';
import Footer from '../components/Footer';

const HowItWorks: NextPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>How It Works - DigiClone AI</title>
        <meta name="description" content="Learn how DigiClone AI creates personalized digital clones for meaningful conversations." />
      </Head>

      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">How DigiClone AI Works</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Data Collection</h2>
              <p className="text-lg text-gray-700">
                Share your knowledge through text, videos, or documents. Our AI processes this information to understand your unique perspective and communication style.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. AI Training</h2>
              <p className="text-lg text-gray-700">
                Our advanced AI models analyze your data to create a digital clone that captures your expertise and personality.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Clone Creation</h2>
              <p className="text-lg text-gray-700">
                Your digital clone is created and fine-tuned to ensure authentic interactions that reflect your knowledge and style.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Deployment</h2>
              <p className="text-lg text-gray-700">
                Your clone becomes available 24/7, ready to engage with your audience and share your knowledge through natural conversations.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;