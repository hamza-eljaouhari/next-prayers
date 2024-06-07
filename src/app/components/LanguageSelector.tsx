// src/components/LanguageSelector.tsx
"use client";

import React from 'react';

type Language = 'english' | 'french' | 'arabic';

interface LanguageSelectorProps {
    languages: { [key: string]: string };
    language: Language; // Change this line
    setLanguage: (language: Language) => void; // Change this line
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ languages, language, setLanguage }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">Select Language:</label>
      <div className="flex space-x-2">
        {Object.keys(languages).map((lang) => (
          <button
            key={lang}
            className={`px-2 py-1 rounded-full text-white text-sm ${language === lang ? 'bg-blue-500' : 'bg-gray-500'} hover:bg-blue-400`}
            onClick={() => setLanguage(lang as Language)}
          >
            {languages[lang]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
