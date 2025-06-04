import { PieChart, BarChart3, LineChart, Clock, TrendingUp, Users } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Overview: React.FC = () => {
  const { user, isPremium } = useAuth();
  
  // Mock data for charts and recent activity
  const recentActivity = [
    { id: 1, action: 'Uploaded stock market chart', time: '2 hours ago', type: 'upload' },
    { id: 2, action: 'Analyzed quarterly results', time: '1 day ago', type: 'analysis' },
    { id: 3, action: 'Updated account settings', time: '3 days ago', type: 'settings' },
    { id: 4, action: 'Uploaded sales projection chart', time: '1 week ago', type: 'upload' },
  ];
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Here's what's happening with your charts and analysis.
        </p>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Chart Uploads */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300">
              <BarChart3 size={24} />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Chart Uploads</h3>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">12</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">This month</span>
              <span className="flex items-center text-green-600 dark:text-green-400">
                <TrendingUp size={16} className="mr-1" /> 8%
              </span>
            </div>
          </div>
        </div>
        
        {/* Analysis Run */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-300">
              <PieChart size={24} />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Analysis Run</h3>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">38</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">This month</span>
              <span className="flex items-center text-green-600 dark:text-green-400">
                <TrendingUp size={16} className="mr-1" /> 12%
              </span>
            </div>
          </div>
        </div>
        
        {/* Usage Time */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-300">
              <Clock size={24} />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Usage Time</h3>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">8.5 hrs</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">This month</span>
              <span className="flex items-center text-red-600 dark:text-red-400">
                <TrendingUp size={16} className="mr-1 transform rotate-180" /> 3%
              </span>
            </div>
          </div>
        </div>
        
        {/* Insights Generated */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300">
              <LineChart size={24} />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Insights</h3>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">156</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">This month</span>
              <span className="flex items-center text-green-600 dark:text-green-400">
                <TrendingUp size={16} className="mr-1" /> 24%
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
          
          <div className="space-y-4">
            {recentActivity.map(activity => (
              <div key={activity.id} className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 mt-1">
                  {activity.type === 'upload' && <BarChart3 size={16} />}
                  {activity.type === 'analysis' && <PieChart size={16} />}
                  {activity.type === 'settings' && <Users size={16} />}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="mt-4 w-full text-center text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
            View all activity
          </button>
        </div>
        
        {/* Charts Overview */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Charts Overview</h2>
          
          {/* This would typically be a real chart component, but we'll use a placeholder */}
          <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 size={48} className="mx-auto text-gray-400 dark:text-gray-500 mb-2" />
              <p className="text-gray-500 dark:text-gray-400">Analytics visualization would appear here</p>
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
              <h3 className="text-xs font-medium text-gray-500 dark:text-gray-400">Total Charts</h3>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">42</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
              <h3 className="text-xs font-medium text-gray-500 dark:text-gray-400">Analyzed</h3>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">38</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
              <h3 className="text-xs font-medium text-gray-500 dark:text-gray-400">Pending</h3>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">4</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Upgrade Banner - Only show for free users */}
      {!isPremium() && (
        <div className="mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-md p-6 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold mb-2">Upgrade to Premium</h2>
              <p className="text-purple-100">Get access to advanced analysis features and unlimited chart processing.</p>
            </div>
            <button className="px-6 py-2 bg-white text-purple-600 font-medium rounded-md hover:bg-gray-100 transition-colors">
              Upgrade Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Overview;