'use client'

import { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className="w-full">
      {/* Tabs Navigation */}
      <div className="flex space-x-4 border-b">
        <button
          onClick={() => setActiveTab('tab1')}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === 'tab1'
              ? 'border-b-2 border-black text-black'
              : 'text-gray-500'
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab('tab2')}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === 'tab2'
              ? 'border-b-2 border-black text-black'
              : 'text-gray-500'
          }`}
        >
          Additional Information
        </button>
      </div>

      {/* Tabs Content */}
      <div className="mt-4 p-4">
        {activeTab === 'tab1' ? (
          <div>This is the content for Tab 1</div>
        ) : (
          <div>This is the content for Tab 2</div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
