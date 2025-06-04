import { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  LayoutDashboard, 
  Upload, 
  BarChart3, 
  Settings, 
  PieChart,
  LogOut, 
  Menu, 
  X,
  TrendingUp,
  MessageSquare,
  Lock
} from 'lucide-react';
import ChartAnalysis from '../components/dashboard/ChartAnalysis';
import ChartUpload from '../components/dashboard/ChartUpload';
import SettingsPage from '../components/dashboard/Settings';
import Overview from '../components/dashboard/Overview';

const Dashboard: React.FC = () => {
  const { user, logout, isPremium } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
      {/* Sidebar - Mobile overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={closeSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-800 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 ease-in-out lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700">
          <Link to="/" className="flex items-center">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white">
              <TrendingUp size={20} />
            </div>
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
              Trendy AI
            </span>
          </Link>
          <button 
            onClick={closeSidebar} 
            className="p-2 rounded-md lg:hidden text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="px-4 py-6">
          <div className="mb-8">
            <div className="px-2 mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Main
            </div>
            <ul className="space-y-1">
              <li>
                <Link 
                  to="/dashboard" 
                  className={`flex items-center px-2 py-2 text-sm font-medium rounded-lg ${
                    location.pathname === '/dashboard' 
                      ? 'bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-purple-100' 
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  onClick={closeSidebar}
                >
                  <LayoutDashboard size={18} className="mr-3" />
                  Overview
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/upload" 
                  className={`flex items-center px-2 py-2 text-sm font-medium rounded-lg ${
                    location.pathname === '/dashboard/upload' 
                      ? 'bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-purple-100' 
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  onClick={closeSidebar}
                >
                  <Upload size={18} className="mr-3" />
                  Upload Charts
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/analysis" 
                  className={`flex items-center px-2 py-2 text-sm font-medium rounded-lg ${
                    location.pathname === '/dashboard/analysis' 
                      ? 'bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-purple-100' 
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  onClick={closeSidebar}
                >
                  <BarChart3 size={18} className="mr-3" />
                  Analysis
                  {!isPremium() && (
                    <span className="ml-2 px-2 py-0.5 text-xs font-medium rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      PRO
                    </span>
                  )}
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/settings" 
                  className={`flex items-center px-2 py-2 text-sm font-medium rounded-lg ${
                    location.pathname === '/dashboard/settings' 
                      ? 'bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-purple-100' 
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  onClick={closeSidebar}
                >
                  <Settings size={18} className="mr-3" />
                  Settings
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="mb-8">
            <div className="px-2 mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Tools
            </div>
            <ul className="space-y-1">
              <li>
                <a 
                  href="#" 
                  className="flex items-center px-2 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={(e) => {
                    e.preventDefault();
                    closeSidebar();
                  }}
                >
                  <PieChart size={18} className="mr-3" />
                  Chart Generator
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="flex items-center px-2 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={(e) => {
                    e.preventDefault();
                    closeSidebar();
                  }}
                >
                  <MessageSquare size={18} className="mr-3" />
                  AI Assistant
                </a>
              </li>
            </ul>
          </div>
          
          {/* User Profile */}
          <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center px-2 py-3">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-purple-200 dark:bg-purple-800 flex items-center justify-center text-purple-700 dark:text-purple-200 font-semibold">
                  {user?.name?.charAt(0).toUpperCase() || 'U'}
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {user?.name || 'User'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {isPremium() ? 'Premium Plan' : 'Free Plan'}
                </p>
              </div>
              <button 
                onClick={logout} 
                className="ml-auto p-1 rounded-full text-gray-500 hover:text-gray-900 dark:hover:text-white"
                aria-label="Logout"
              >
                <LogOut size={18} />
              </button>
            </div>
          </div>
        </nav>
      </aside>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        {/* Top Navigation */}
        <header className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Mobile menu button */}
              <button 
                onClick={toggleSidebar} 
                className="p-2 rounded-md lg:hidden text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <Menu size={24} />
              </button>
              
              {/* Page title - show on larger screens */}
              <h1 className="hidden sm:block text-xl font-semibold text-gray-900 dark:text-white">
                {location.pathname === '/dashboard' && 'Dashboard Overview'}
                {location.pathname === '/dashboard/upload' && 'Upload Charts'}
                {location.pathname === '/dashboard/analysis' && 'Chart Analysis'}
                {location.pathname === '/dashboard/settings' && 'Account Settings'}
              </h1>
              
              {/* Right side elements */}
              <div className="flex items-center">
                {!isPremium() && (
                  <Link
                    to="/dashboard/settings"
                    className="mr-4 inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium rounded-full hover:from-purple-700 hover:to-indigo-700"
                  >
                    <Lock size={14} className="mr-1" />
                    Upgrade
                  </Link>
                )}
                
                <div className="h-8 w-8 rounded-full bg-purple-200 dark:bg-purple-800 flex items-center justify-center text-purple-700 dark:text-purple-200 font-semibold">
                  {user?.name?.charAt(0).toUpperCase() || 'U'}
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/upload" element={<ChartUpload />} />
            <Route path="/analysis" element={<ChartAnalysis />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;