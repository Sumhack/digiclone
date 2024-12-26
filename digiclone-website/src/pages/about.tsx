// src/pages/about.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navjar';
import Footer from '../components/Footer';

const About: NextPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>About - DigiClone AI</title>
        <meta name="description" content="Learn about DigiClone AI and our mission to democratize knowledge through personalized AI clones." />
      </Head>

      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About DigiClone AI</h1>
        
        <div className="prose lg:prose-xl">
          <p className="text-lg text-gray-700 mb-6">
            DigiClone AI is a platform that empowers coaches, influencers, content creators, CEOs, executives, and professional trainers to build and host their clones, enabling 24/7 personalized conversation with their followers and mentees.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            We aim to democratize knowledge and make it personalized for everyone who wants to learn and grow. Our platform unlocks a new digital personal legacy market for those who want to digitally preserve their thoughts for the upcoming generation and their loved ones.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700 mb-6">
            We aspire to become the global leader in Digital Clones, positioning India at the forefront of AI innovation.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;