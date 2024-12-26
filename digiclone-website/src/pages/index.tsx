import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@/components/Navjar';
import Hero from '@/components/Hero';
import Features from '@/components/Feature';
import Demo from '@/components/Demos';
import Footer from '@/components/Footer';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>DigiClone AI - Create Your Digital Clone</title>
        <meta name="description" content="DigiClone AI empowers coaches, influencers, and leaders to create digital clones for 24/7 personalized interactions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Demo />
      </main>

      <Footer />
    </div>
  );
};

export default Home;