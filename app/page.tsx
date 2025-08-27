'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Apply from './components/Apply';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Courses />
      <Reviews />
      <FAQ />
      <Apply />
      <Footer />
    </div>
  );
}