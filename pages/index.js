import React from 'react';
import { useState } from 'react';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [isCommercial, setIsCommercial] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">Intify</h1>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-6" style={{background: 'linear-gradient(to right, #2563eb, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            Powering Solar Investment
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Connecting businesses with sustainable energy solutions and investors with impact opportunities
          </p>
          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex border-b">
              <button 
                onClick={() => setIsCommercial(true)}
                className={`flex-1 py-4 text-center ${isCommercial ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-600'}`}
              >
                For Businesses
              </button>
              <button 
                onClick={() => setIsCommercial(false)}
                className={`flex-1 py-4 text-center ${!isCommercial ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-600'}`}
              >
                For Investors
              </button>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-center mb-6">
                  {isCommercial ? 'Transform Your Business with Solar' : 'Start Investing in Solar Projects'}
                </h3>
                <p className="text-center text-gray-600">
                  {isCommercial 
                    ? 'Unlock affordable solar financing with zero upfront costs' 
                    : 'Start investing in verified solar projects from €100'}
                </p>
                <div className="flex gap-4 max-w-md mx-auto">
                  <input 
                    type="email"
                    placeholder={isCommercial ? "Enter your business email" : "Enter your email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button 
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    style={{whiteSpace: 'nowrap'}}
                  >
                    {isCommercial ? 'Get Started' : 'Join Waitlist'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {isCommercial ? (
            <>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-2">Zero Upfront Cost</h4>
