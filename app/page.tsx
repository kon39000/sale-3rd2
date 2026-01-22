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
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* 背景のキラキラエフェクト */}
      <div className="sparkle-overlay absolute inset-0 z-0 pointer-events-none" />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Courses />
        <Reviews />
        <FAQ />
        <Apply />
        <Footer />
      </div>
    </div>
  );
}
