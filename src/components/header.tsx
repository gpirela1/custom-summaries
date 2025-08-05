"use client";

import Link from "next/link";
import Image from "next/image";
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
    <Image
      src="/chorus-logo.svg"
      alt="Chorus Logo"
      width={40}
      height={40}
      className="chorus-waveform"
    />
  );
}
