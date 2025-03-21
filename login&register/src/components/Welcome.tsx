import React from 'react';

interface WelcomeProps {
  username: string;
}

export const Welcome: React.FC<WelcomeProps> = ({ username }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 rounded-xl shadow-2xl p-12 mx-4 transition-colors">
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-8 text-center animate-fade-in">
        Welcome, {username}!
      </h1>
      <p className="text-2xl text-gray-600 dark:text-gray-300 text-center max-w-2xl transition-colors">
        We're excited to have you here. This is your personalized dashboard where you can manage all your activities.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Quick Start</h3>
          <p className="text-gray-600 dark:text-gray-400">Get started with our platform's core features</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Resources</h3>
          <p className="text-gray-600 dark:text-gray-400">Access helpful guides and documentation</p>
        </div>
      </div>
    </div>
  );
};