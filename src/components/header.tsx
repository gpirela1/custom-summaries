"use client";

import Link from "next/link";
import { Search, Settings, User, LogOut, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function ChorusHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <Link href="/" className="flex items-center mr-8">
            <ChorusLogo />
            <span className="ml-2 text-xl font-semibold chorus-logo">Chorus</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-chorus-blue border-b-2 border-chorus-blue py-4 font-medium">
              Home
            </Link>
            <Link href="/engagements" className="text-gray-600 hover:text-chorus-blue py-4 font-medium">
              Engagements
            </Link>
            <Link href="/deals" className="text-gray-600 hover:text-chorus-blue py-4 font-medium">
              Deals
            </Link>
            <Link href="/playlists" className="text-gray-600 hover:text-chorus-blue py-4 font-medium">
              Playlists
            </Link>
            <div className="relative group">
              <button className="text-gray-600 hover:text-chorus-blue py-4 font-medium flex items-center">
                More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
        
        <div className="flex items-center">
          <div className="relative mr-4">
            <div className="flex items-center border rounded-md px-3 py-1.5 bg-gray-50">
              <Search className="h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search in Chorus"
                className="ml-2 bg-transparent outline-none text-sm w-40 md:w-60"
              />
              <button className="ml-2 text-gray-400 border-l pl-2">
                Options
              </button>
            </div>
          </div>
          
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => {
                console.log('Button clicked, current state:', isDropdownOpen);
                setIsDropdownOpen(!isDropdownOpen);
              }}
              className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold text-white hover:bg-blue-600 transition-colors border-2 border-blue-300 shadow-lg"
              style={{ minWidth: '40px', minHeight: '40px' }}
            >
              GP
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 min-w-[200px] bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                <div className="px-3 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900">Gabe Pirela</p>
                  <p className="text-xs text-gray-500">gabe.pirela@chorus.ai</p>
                </div>
                
                <Link
                  href="/settings/personal-settings.html"
                  className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <User className="h-4 w-4 mr-2" />
                  Personal Settings
                </Link>
                
                <Link
                  href="/settings/custom-summaries.html"
                  className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Custom Summaries
                </Link>
                
                <div className="h-px bg-gray-200 my-1" />
                
                <button 
                  className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

function ChorusLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" className="chorus-waveform">
      <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M7 14C7 14 8.5 16 12 16C15.5 16 17 14 17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M7 10C7 10 8.5 8 12 8C15.5 8 17 10 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
