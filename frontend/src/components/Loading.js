import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 z-50">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-8 h-8 border-4 border-t-4 border-gray-300 border-t-primary-600 rounded-full animate-spin"></div>
        <span className="text-xl font-medium text-gray-900 dark:text-white">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
