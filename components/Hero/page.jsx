'use client';

import React, { useState } from 'react';
import { Palmtree, Plane, Hotel, Compass, Car, Train, FileText, ArrowRightLeft, Calendar, Users, Search, MapPin, ChevronDown, Tag } from 'lucide-react';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('holidays');
  const [tripType, setTripType] = useState('oneway');

  const tabs = [
    { id: 'holidays', icon: Palmtree, label: 'Holidays' },
    { id: 'flights', icon: Plane, label: 'Flights' },
    { id: 'hotels', icon: Hotel, label: 'Hotels' },
    { id: 'activities', icon: Compass, label: 'Activities' },
    { id: 'cabs', icon: Car, label: 'Cabs' },
    { id: 'train', icon: Train, label: 'Train' },
    { id: 'visa', icon: FileText, label: 'Visa' },
  ];

  const popularDestinations = [
    { city: 'London', properties: 2424 },
    { city: 'Dubai', properties: 610 },
    { city: 'New Delhi', properties: 1429 },
    { city: 'Singapore', properties: 441 },
    { city: 'Abu Dhabi', properties: 130 },
  ];

  const renderHolidaySearch = () => (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="lg:col-span-1">
          <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 mb-2 uppercase">
            <MapPin className="w-3.5 h-3.5 text-indigo-600" />
            Where To?
          </label>
          <input
            type="text"
            placeholder="Enter destination..."
            className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition-all text-gray-800 placeholder-gray-400 text-sm"
          />
        </div>

        <div className="lg:col-span-1">
          <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 mb-2 uppercase">
            <Calendar className="w-3.5 h-3.5 text-indigo-600" />
            When?
          </label>
          <select className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition-all text-gray-800 cursor-pointer text-sm">
            <option>Select Month</option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
        </div>

        <div className="lg:col-span-1">
          <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 mb-2 uppercase">
            <Tag className="w-3.5 h-3.5 text-indigo-600" />
            Trip Type
          </label>
          <select className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition-all text-gray-800 cursor-pointer text-sm">
            <option>All Types</option>
            <option>Beach Paradise</option>
            <option>Mountain</option>
            <option>Honeymoon</option>
            <option>Family Fun</option>
            <option>Adventure</option>
            <option>Cultural</option>
            <option>Wildlife</option>
          </select>
        </div>

        <div className="lg:col-span-1 flex items-end">
          <button className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </>
  );

  const renderActivitiesSearch = () => (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="lg:col-span-1">
          <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 mb-2 uppercase">
            <MapPin className="w-3.5 h-3.5 text-indigo-600" />
            Destination
          </label>
          <input
            type="text"
            placeholder="Enter city or location..."
            className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition-all text-gray-800 placeholder-gray-400 text-sm"
          />
        </div>

        <div className="lg:col-span-1">
          <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 mb-2 uppercase">
            <Calendar className="w-3.5 h-3.5 text-indigo-600" />
            Date
          </label>
          <input
            type="date"
            defaultValue="2025-10-28"
            className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition-all text-gray-800 text-sm cursor-pointer"
          />
        </div>

        <div className="lg:col-span-1">
          <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 mb-2 uppercase">
            Activity Type
          </label>
          <select className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition-all text-gray-800 cursor-pointer text-sm">
            <option>All Activities</option>
            <option>Adventure Sports</option>
            <option>Sightseeing Tours</option>
            <option>Water Activities</option>
            <option>Cultural Experiences</option>
            <option>Food & Dining</option>
            <option>Entertainment</option>
          </select>
        </div>

        <div className="lg:col-span-1 flex items-end">
          <button className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </>
  );

  const renderCabsSearch = () => (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="lg:col-span-1">
          <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 mb-2 uppercase">
            Pickup Location
          </label>
          <input
            type="text"
            placeholder="Enter pickup location..."
            className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition-all text-gray-800 placeholder-gray-400 text-sm"
          />
        </div>

        <div className="lg:col-span-1">
          <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 mb-2 uppercase">
            Drop Location
          </label>
          <input
            type="text"
            placeholder="Enter drop location..."
            className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition-all text-gray-800 placeholder-gray-400 text-sm"
          />
        </div>

        <div className="lg:col-span-1">
          <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 mb-2 uppercase">
            <Calendar className="w-3.5 h-3.5 text-indigo-600" />
            Pickup Date & Time
          </label>
          <input
            type="datetime-local"
            defaultValue="2025-10-28T10:00"
            className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition-all text-gray-800 text-sm cursor-pointer"
          />
        </div>

        <div className="lg:col-span-1 flex items-end">
          <button className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </>
  );

  const renderTrainSearch = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
        <div className="relative">
          <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 mb-2 uppercase">
            From Station
          </label>
          <input
            type="text"
            placeholder="Enter station name..."
            className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition-all text-gray-800 placeholder-gray-400 text-sm"
          />
        </div>

        <div>
          <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 mb-2 uppercase">
            To Station
          </label>
          <input
            type="text"
            placeholder="Enter station name..."
            className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition-all text-gray-800 placeholder-gray-400 text-sm"
          />
        </div>

        <div>
          <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 mb-2 uppercase">
            <Calendar className="w-3.5 h-3.5 text-indigo-600" />
            Journey Date
          </label>
          <input
            type="date"
            defaultValue="2025-10-28"
            className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition-all text-gray-800 text-sm cursor-pointer"
          />
        </div>

        <div>
          <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 mb-2 uppercase">
            Class
          </label>
          <select className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition-all text-gray-800 cursor-pointer text-sm">
            <option>All Classes</option>
            <option>Sleeper (SL)</option>
            <option>AC 3 Tier (3A)</option>
            <option>AC 2 Tier (2A)</option>
            <option>AC 1 Tier (1A)</option>
            <option>Chair Car (CC)</option>
          </select>
        </div>

        <div className="flex items-end">
          <button className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </>
  );

  const renderVisaSearch = () => (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="lg:col-span-1">
          <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 mb-2 uppercase">
            Destination Country
          </label>
          <input
            type="text"
            placeholder="Enter country name..."
            className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition-all text-gray-800 placeholder-gray-400 text-sm"
          />
        </div>

        <div className="lg:col-span-1">
          <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 mb-2 uppercase">
            Nationality
          </label>
          <input
            type="text"
            placeholder="Your nationality..."
            className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition-all text-gray-800 placeholder-gray-400 text-sm"
          />
        </div>

        <div className="lg:col-span-1">
          <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 mb-2 uppercase">
            Visa Type
          </label>
          <select className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition-all text-gray-800 cursor-pointer text-sm">
            <option>Tourist Visa</option>
            <option>Business Visa</option>
            <option>Student Visa</option>
            <option>Work Visa</option>
            <option>Transit Visa</option>
          </select>
        </div>

        <div className="lg:col-span-1 flex items-end">
          <button className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </>
  );

const renderFlightSearch = () => (
  <>
    {/* Trip Type Radios */}
    <div className="flex gap-6 mb-4 flex-wrap">
      {['oneway', 'roundtrip', 'multicity'].map((type) => (
        <label key={type} className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="tripType"
            value={type}
            checked={tripType === type}
            onChange={(e) => setTripType(e.target.value)}
            className="w-4 h-4 text-indigo-600"
          />
          <span className="text-sm font-semibold text-gray-700 capitalize">
            {type.replace(/([a-z])([A-Z])/g, '$1 $2')}
          </span>
        </label>
      ))}
    </div>

    {/* Flight Search Form */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
      {/* From */}
      <div className="relative">
        <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 mb-2 uppercase">
          From
        </label>
        <input
          type="text"
          placeholder="City or Airport"
          className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition-all text-gray-800 placeholder-gray-400 text-sm"
        />
        <div className="absolute right-3 top-[38px]">
          <ArrowRightLeft className="w-4 h-4 text-indigo-600" />
        </div>
      </div>

      {/* To */}
      <div>
        <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 mb-2 uppercase">
          To
        </label>
        <input
          type="text"
          placeholder="City or Airport"
          className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition-all text-gray-800 placeholder-gray-400 text-sm"
        />
      </div>

      {/* Departure */}
      <div>
        <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 mb-2 uppercase">
          <Calendar className="w-3.5 h-3.5 text-indigo-600" /> Departure
        </label>
        <input
          type="date"
          defaultValue="2025-10-28"
          className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition-all text-gray-800 text-sm cursor-pointer"
        />
      </div>

      {/* Return (conditional) */}
      {tripType === 'roundtrip' && (
        <div>
          <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 mb-2 uppercase">
            <Calendar className="w-3.5 h-3.5 text-indigo-600" /> Return
          </label>
          <input
            type="date"
            className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition-all text-gray-800 text-sm cursor-pointer"
          />
        </div>
      )}

      {/* Travellers | Class */}
      <div className={tripType === 'oneway' ? 'lg:col-span-1' : ''}>
        <label className="flex items-center gap-1.5 text-xs font-bold text-gray-700 mb-2 uppercase">
          <Users className="w-3.5 h-3.5 text-indigo-600" /> Travellers | Class
        </label>
        <select className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:bg-white outline-none transition-all text-gray-800 cursor-pointer text-sm">
          <option>1 Passenger - Economy</option>
          <option>2 Passengers - Economy</option>
          <option>3 Passengers - Economy</option>
          <option>1 Passenger - Business</option>
          <option>2 Passengers - Business</option>
          <option>1 Passenger - First Class</option>
        </select>
      </div>

      {/* Search Flights Button */}
      <div className="lg:col-span-1 flex flex-col justify-end">
        <label className="block text-xs font-bold text-gray-700 mb-2 uppercase invisible">
          Search Flights
        </label>
        <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-2.5 rounded-xl font-bold text-base transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group">
          <span>Search Flights</span>
          <svg
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </div>
  </>
);


  const renderHotelSearch = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-9 gap-0 border-2 border-gray-200 rounded-2xl overflow-hidden bg-white">
        <div className="p-4 border-r border-gray-200 md:col-span-2">
          <label className="block text-xs font-semibold text-gray-500 mb-2">
            Destination
          </label>
          <input
            type="text"
            placeholder="City, Property Name Or Location"
            className="w-full text-base font-bold text-gray-800 placeholder-gray-800 outline-none bg-transparent"
          />
        </div>

        <div className="p-4 border-r border-gray-200 relative cursor-pointer hover:bg-gray-50 md:col-span-2">
          <label className="flex items-center justify-between text-xs font-semibold text-gray-500 mb-2">
            Check-In
            <ChevronDown className="w-4 h-4 text-indigo-600" />
          </label>
          <div className="text-base font-bold text-gray-800">
            28 Oct, Tue
          </div>
        </div>

        <div className="p-4 border-r border-gray-200 relative cursor-pointer hover:bg-gray-50 md:col-span-2">
          <label className="flex items-center justify-between text-xs font-semibold text-gray-500 mb-2">
            Check-Out
            <ChevronDown className="w-4 h-4 text-indigo-600" />
          </label>
          <div className="text-base font-bold text-gray-800">
            29 Oct, Wed
          </div>
        </div>

        <div className="p-4 border-r border-gray-200 relative cursor-pointer hover:bg-gray-50 md:col-span-2">
          <label className="flex items-center justify-between text-xs font-semibold text-gray-500 mb-2">
            Room & Guests
            <ChevronDown className="w-4 h-4 text-indigo-600" />
          </label>
          <div className="text-base font-bold text-gray-800">
            2 Guests, 1 Room
          </div>
        </div>

        <div className="p-4 flex items-center justify-center md:col-span-1">
          <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-6 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Search
          </button>
        </div>
      </div>

      {/* <div className="mt-8">
        <h3 className="text-base font-bold text-gray-800 mb-4">Popular Destination</h3>
        <div className="flex flex-wrap gap-3">
          {popularDestinations.map((dest) => (
            <button
              key={dest.city}
              className="px-5 py-3 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-indigo-500 rounded-xl transition-all group"
            >
              <div className="text-sm font-bold text-gray-800 group-hover:text-indigo-600">
                {dest.city}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">
                {dest.properties} Properties
              </div>
            </button>
          ))}
        </div>
      </div> */}
    </>
  );

  return (
    <div
      className="relative w-full overflow-hidden flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/img/bg-banner.webp')",
        minHeight: '100vh'
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 via-indigo-700/30 to-purple-800/40"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-100/20 via-transparent to-cyan-500/20"></div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-2xl">
              {activeTab === 'flights' ? 'Book Your'
                : activeTab === 'hotels' ? 'Find Your Perfect'
                  : activeTab === 'activities' ? 'Explore Amazing'
                    : activeTab === 'cabs' ? 'Book Comfortable'
                      : activeTab === 'train' ? 'Reserve Your'
                        : activeTab === 'visa' ? 'Get Your'
                          : 'Your Dream'}
              <span className="block bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent">
                {activeTab === 'flights' ? 'Perfect Flight'
                  : activeTab === 'hotels' ? 'Hotel Stay'
                    : activeTab === 'activities' ? 'Activities'
                      : activeTab === 'cabs' ? 'Cab Rides'
                        : activeTab === 'train' ? 'Train Journey'
                          : activeTab === 'visa' ? 'Visa Services'
                            : 'Vacation Awaits'}
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white max-w-2xl mx-auto mt-3 font-light drop-shadow-lg">
              {activeTab === 'flights'
                ? 'Search and compare flights to destinations worldwide'
                : activeTab === 'hotels'
                  ? 'Book hotels worldwide at the best prices'
                  : activeTab === 'activities'
                    ? 'Discover exciting activities and experiences'
                    : activeTab === 'cabs'
                      ? 'Safe and reliable cab services for your journey'
                      : activeTab === 'train'
                        ? 'Book train tickets across the country'
                        : activeTab === 'visa'
                          ? 'Hassle-free visa assistance for your travel'
                          : 'Discover amazing destinations and create unforgettable memories'
              }
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === tab.id
                      ? 'bg-white text-indigo-600 shadow-xl'
                      : 'bg-white/15 backdrop-blur-md text-white hover:bg-white/25 border border-white/30'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-4 sm:p-6">
                {activeTab === 'holidays' && renderHolidaySearch()}
                {activeTab === 'flights' && renderFlightSearch()}
                {activeTab === 'hotels' && renderHotelSearch()}
                {activeTab === 'activities' && renderActivitiesSearch()}
                {activeTab === 'cabs' && renderCabsSearch()}
                {activeTab === 'train' && renderTrainSearch()}
                {activeTab === 'visa' && renderVisaSearch()}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;