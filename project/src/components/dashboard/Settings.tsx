import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import { User, CreditCard, Bell, Shield, Moon, Sun } from 'lucide-react';

const Settings: React.FC = () => {
  const { user, isPremium } = useAuth();
  const { theme, toggleTheme } = useTheme();
  
  const [activeTab, setActiveTab] = useState('profile');
  
  // Form state for profile settings
  const [profileForm, setProfileForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    company: 'Acme Inc.',
    role: 'Data Analyst'
  });
  
  // Form state for notification settings
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    newFeatures: true,
    tips: false,
    marketingEmails: false
  });
  
  // Handle form input changes
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle notification toggle changes
  const handleNotificationToggle = (setting: keyof typeof notificationSettings) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };
  
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Account Settings
      </h1>
      
      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'profile'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab('subscription')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'subscription'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Subscription
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'notifications'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Notifications
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'security'
                ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Security
          </button>
        </nav>
      </div>
      
      {/* Tab Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="p-6">
            <div className="flex items-center mb-6">
              <div className="mr-4">
                <div className="h-16 w-16 rounded-full bg-purple-200 dark:bg-purple-800 flex items-center justify-center text-purple-700 dark:text-purple-200 text-2xl font-semibold">
                  {profileForm.name.charAt(0).toUpperCase()}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {profileForm.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {isPremium() ? 'Premium Plan' : 'Free Plan'}
                </p>
              </div>
              <button className="ml-auto px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                Change Photo
              </button>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={profileForm.name}
                    onChange={handleProfileChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={profileForm.email}
                    onChange={handleProfileChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={profileForm.company}
                    onChange={handleProfileChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={profileForm.role}
                    onChange={handleProfileChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <User size={20} className="text-gray-500 dark:text-gray-400 mr-2" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Profile last updated on May 15, 2025
                  </span>
                </div>
                
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        )}
        
        {/* Subscription Tab */}
        {activeTab === 'subscription' && (
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                Current Plan
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Manage your subscription and billing information
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {isPremium() ? 'Premium Plan' : 'Free Plan'}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {isPremium() 
                      ? 'Unlimited access to all features' 
                      : 'Basic access with limited features'}
                  </p>
                </div>
                
                {isPremium() ? (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                    Active
                  </span>
                ) : (
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                    Upgrade
                  </button>
                )}
              </div>
              
              {isPremium() && (
                <div className="border-t border-gray-200 dark:border-gray-600 pt-4 mt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      Next billing date:
                    </span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      June 15, 2025
                    </span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-gray-600 dark:text-gray-400">
                      Amount:
                    </span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      $29.00 / month
                    </span>
                  </div>
                </div>
              )}
            </div>
            
            {isPremium() && (
              <>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Payment Method
                  </h3>
                  
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex items-center">
                    <div className="h-10 w-16 bg-blue-100 dark:bg-blue-900/30 rounded flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <CreditCard size={20} />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-900 dark:text-white">
                        •••• •••• •••• 4242
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Expires 12/25
                      </p>
                    </div>
                    <button className="ml-auto text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
                      Edit
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button className="text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300">
                    Cancel Subscription
                  </button>
                  
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                    Update Billing
                  </button>
                </div>
              </>
            )}
            
            {!isPremium() && (
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-md p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Upgrade to Premium</h3>
                <p className="mb-4">Get access to advanced analysis features and unlimited chart processing.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yellow-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Unlimited chart uploads</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yellow-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Advanced AI analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yellow-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Trend prediction</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yellow-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Priority support</span>
                  </li>
                </ul>
                <button className="w-full py-2 bg-white text-purple-700 font-medium rounded-md hover:bg-gray-100 transition-colors">
                  Upgrade Now - $29/month
                </button>
              </div>
            )}
          </div>
        )}
        
        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                Notification Preferences
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Manage how and when you receive notifications
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="emailNotifications"
                      type="checkbox"
                      checked={notificationSettings.emailNotifications}
                      onChange={() => handleNotificationToggle('emailNotifications')}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="emailNotifications" className="font-medium text-gray-700 dark:text-gray-300">
                      Email Notifications
                    </label>
                    <p className="text-gray-500 dark:text-gray-400">
                      Receive email notifications about your account activity
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="newFeatures"
                      type="checkbox"
                      checked={notificationSettings.newFeatures}
                      onChange={() => handleNotificationToggle('newFeatures')}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="newFeatures" className="font-medium text-gray-700 dark:text-gray-300">
                      New Features
                    </label>
                    <p className="text-gray-500 dark:text-gray-400">
                      Get notified when we release new features and updates
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="tips"
                      type="checkbox"
                      checked={notificationSettings.tips}
                      onChange={() => handleNotificationToggle('tips')}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="tips" className="font-medium text-gray-700 dark:text-gray-300">
                      Tips & Tutorials
                    </label>
                    <p className="text-gray-500 dark:text-gray-400">
                      Receive tips and tutorials on how to make the most of Trendy AI
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="marketingEmails"
                      type="checkbox"
                      checked={notificationSettings.marketingEmails}
                      onChange={() => handleNotificationToggle('marketingEmails')}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="marketingEmails" className="font-medium text-gray-700 dark:text-gray-300">
                      Marketing Emails
                    </label>
                    <p className="text-gray-500 dark:text-gray-400">
                      Receive marketing emails about our products and services
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <Bell size={20} className="text-gray-500 dark:text-gray-400 mr-2" />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Notifications last updated on May 10, 2025
                </span>
              </div>
              
              <button
                type="button"
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
        
        {/* Security Tab */}
        {activeTab === 'security' && (
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                Security Settings
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Manage your account security and preferences
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Change Password
                </h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Current Password
                    </label>
                    <input
                      type="password"
                      id="currentPassword"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      id="newPassword"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                  >
                    Update Password
                  </button>
                </form>
              </div>
              
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Two-Factor Authentication
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Add an extra layer of security to your account
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      We'll send you a code to verify your identity when you sign in.
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-white border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600">
                    Enable
                  </button>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Theme Preference
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Toggle between light and dark mode
                    </p>
                  </div>
                  <button 
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                  >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <Shield size={20} className="text-gray-500 dark:text-gray-400 mr-2" />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Last security update: May 5, 2025
                </span>
              </div>
              
              <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                Delete Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;