'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Cookie, Shield, Settings } from 'lucide-react';
import { getCookiePreferences, setCookiePreferences, acceptAllCookies, declineAllCookies, hasAcceptedCookies } from '@/lib/cookies';

export default function CookiesPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [preferences, setPreferences] = useState(getCookiePreferences());

  useEffect(() => {
    // Check if user has already accepted cookies
    if (!hasAcceptedCookies()) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    acceptAllCookies();
    setIsVisible(false);
  };

  const handleDecline = () => {
    declineAllCookies();
    setIsVisible(false);
  };

  const handleCustomize = () => {
    setIsExpanded(!isExpanded);
  };

  const handlePreferenceChange = (type: 'analytical' | 'marketing', value: boolean) => {
    const newPreferences = {
      ...preferences,
      [type]: value
    };
    setPreferences(newPreferences);
    setCookiePreferences(newPreferences);
  };

  const handleSavePreferences = () => {
    const newPreferences = {
      ...preferences,
      accepted: true
    };
    setCookiePreferences(newPreferences);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-[#219EBC] shadow-2xl transform transition-transform duration-300 ease-in-out">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col gap-4">
          {/* Main Content */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 bg-[#219EBC] rounded-full flex items-center justify-center">
                <Cookie className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#023047] mb-2">
                    Cookies a súkromie
                  </h3>
                  <p className="font-mono text-sm text-gray-700 mb-3">
                    Používame cookies na zlepšenie vášho zážitku na našej webovej stránke. 
                    Pokračovaním v prehliadaní súhlasíte s používaním cookies.
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-600">
                    <Link href="/sk/cookies" className="text-[#219EBC] hover:underline flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      Zistiť viac
                    </Link>
                    <button
                      onClick={handleCustomize}
                      className="text-[#219EBC] hover:underline flex items-center gap-1"
                    >
                      <Settings className="w-3 h-3" />
                      {isExpanded ? 'Skryť nastavenia' : 'Nastavenia cookies'}
                    </button>
                  </div>
                </div>
                <button
                  onClick={handleDecline}
                  className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Expanded Settings */}
          {isExpanded && (
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h4 className="font-heading font-bold text-[#023047] mb-3">Nastavenia cookies</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-heading font-semibold text-sm text-[#023047]">Nevyhnutné cookies</h5>
                    <p className="font-mono text-xs text-gray-600">Potrebné pre základné fungovanie stránky</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={true}
                      disabled
                      className="w-4 h-4 text-[#219EBC] bg-gray-100 border-gray-300 rounded focus:ring-[#219EBC]"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-heading font-semibold text-sm text-[#023047]">Analytické cookies</h5>
                    <p className="font-mono text-xs text-gray-600">Pomáhajú nám zlepšovať stránku</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={preferences.analytical}
                      onChange={(e) => handlePreferenceChange('analytical', e.target.checked)}
                      className="w-4 h-4 text-[#219EBC] bg-gray-100 border-gray-300 rounded focus:ring-[#219EBC]"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-heading font-semibold text-sm text-[#023047]">Marketingové cookies</h5>
                    <p className="font-mono text-xs text-gray-600">Používajú sa na personalizáciu reklám</p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                      className="w-4 h-4 text-[#219EBC] bg-gray-100 border-gray-300 rounded focus:ring-[#219EBC]"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <button
              onClick={handleDecline}
              className="font-mono text-sm px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors rounded-lg"
            >
              Odmietnuť všetky
            </button>
            {isExpanded ? (
              <button
                onClick={handleSavePreferences}
                className="font-mono text-sm px-8 py-2 bg-[#219EBC] text-white hover:bg-[#1a7a8f] transition-colors rounded-lg font-medium"
              >
                Uložiť nastavenia
              </button>
            ) : (
              <button
                onClick={handleAccept}
                className="font-mono text-sm px-8 py-2 bg-[#219EBC] text-white hover:bg-[#1a7a8f] transition-colors rounded-lg font-medium"
              >
                Prijať všetky
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 