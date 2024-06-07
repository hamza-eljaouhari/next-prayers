import React from 'react';
import PrayerItem from './PrayerItem';

interface Prayer {
  text: string;
  audioUrl: string;
  textUrl: string;
}

interface PrayerListProps {
  prayers: Prayer[];
  backgrounds: string[];
  expandedPrayers: { [key: number]: boolean };
  dropdownOpen: { [key: number]: boolean };
  toggleFullText: (index: number) => void;
  toggleDropdown: (index: number) => void;
  handleBackgroundChange: (index: number, value: string) => void;
  downloadPoster: (format: string, selectedBackground: string, selectedPrayer: string) => void;
}

const PrayerList: React.FC<PrayerListProps> = ({
  prayers,
  backgrounds,
  expandedPrayers,
  dropdownOpen,
  toggleFullText,
  toggleDropdown,
  handleBackgroundChange,
  downloadPoster,
}) => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-2">All Prayers:</h2>
      {prayers.map((prayer, index) => (
        <PrayerItem
          key={index}
          prayer={prayer}
          backgrounds={backgrounds}
          expanded={expandedPrayers[index]}
          dropdownOpen={dropdownOpen[index]}
          toggleFullText={() => toggleFullText(index)}
          toggleDropdown={() => toggleDropdown(index)}
          handleBackgroundChange={(value) => handleBackgroundChange(index, value)}
          downloadPoster={downloadPoster}
        />
      ))}
    </div>
  );
};

export default PrayerList;
