import { useState } from 'react';
import { MessageSquare, Send, Lock, Image, ChevronRight, BarChart3 } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const ChartAnalysis: React.FC = () => {
  const { isPremium } = useAuth();
  const [message, setMessage] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  // Mock messages for the chat
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Welcome to Chart Analysis! Upload a chart or select a recent one to begin analysis.' },
  ]);
  
  // Recent charts - Mock data
  const recentCharts = [
    { id: 1, name: 'Q2 Financial Report', thumbnail: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 2, name: 'Market Trends 2025', thumbnail: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 3, name: 'Sales Projections', thumbnail: 'https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  ];
  
  // Mock analysis features
  const analysisFeatures = [
    { id: 1, name: 'Trend Detection', description: 'Identify up/down trends and patterns', isPremium: false },
    { id: 2, name: 'Statistical Analysis', description: 'Get detailed statistical insights', isPremium: false },
    { id: 3, name: 'Anomaly Detection', description: 'Find outliers and anomalies', isPremium: true },
    { id: 4, name: 'Predictive Modeling', description: 'Forecast future trends', isPremium: true },
    { id: 5, name: 'Sentiment Analysis', description: 'Determine market sentiment', isPremium: true },
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (message.trim() === '') return;
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: message }]);
    setIsAnalyzing(true);
    setMessage('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { 
          role: 'assistant', 
          content: 'Based on the chart analysis, I can see a positive trend in Q3 with a 15% increase in revenue compared to Q2. The main growth drivers appear to be the new product lines introduced in August.' 
        }
      ]);
      setIsAnalyzing(false);
    }, 2000);
  };
  
  // If not premium, show upgrade prompt
  if (!isPremium()) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-12">
        <div className="h-20 w-20 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-300 mb-6">
          <Lock size={40} />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Premium Feature
        </h1>
        
        <p className="text-gray-600 dark:text-gray-300 text-center max-w-md mb-8">
          Upgrade to our Premium plan to access advanced chart analysis features including trend prediction, pattern recognition, and AI-powered insights.
        </p>
        
        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-md hover:from-purple-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg">
          Upgrade to Premium
        </button>
        
        <div className="mt-12 w-full max-w-2xl">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            What's included in Premium?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {analysisFeatures.map((feature) => (
              <div 
                key={feature.id} 
                className={`border rounded-lg p-4 ${
                  feature.isPremium 
                    ? 'border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20' 
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className="flex items-start">
                  {feature.isPremium && (
                    <Lock size={16} className="text-purple-600 dark:text-purple-400 mt-1 mr-2" />
                  )}
                  <div>
                    <h3 className={`font-medium ${
                      feature.isPremium 
                        ? 'text-purple-900 dark:text-purple-300' 
                        : 'text-gray-900 dark:text-white'
                    }`}>
                      {feature.name}
                    </h3>
                    <p className={`text-sm ${
                      feature.isPremium 
                        ? 'text-purple-700 dark:text-purple-400' 
                        : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="h-full flex flex-col">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Chart Analysis
      </h1>
      
      <div className="flex flex-col md:flex-row gap-6 h-full">
        {/* Main Analysis Area */}
        <div className="flex-1 flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-3/4 rounded-lg px-4 py-2 ${
                      msg.role === 'user' 
                        ? 'bg-purple-600 text-white' 
                        : msg.role === 'system' 
                          ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200' 
                          : 'bg-blue-100 dark:bg-blue-900/30 text-gray-800 dark:text-gray-200'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              
              {isAnalyzing && (
                <div className="flex justify-start">
                  <div className="max-w-3/4 rounded-lg px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-gray-800 dark:text-gray-200">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="h-2 w-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="h-2 w-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                      <span>Analyzing...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Input Area */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask about this chart..."
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  >
                    <MessageSquare size={18} />
                  </button>
                </div>
              </div>
              <button
                type="submit"
                disabled={message.trim() === '' || isAnalyzing}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="w-full md:w-64 space-y-6">
          {/* Recent Charts */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
              <h2 className="font-semibold text-gray-900 dark:text-white">Recent Charts</h2>
            </div>
            
            <div className="p-4 space-y-3">
              {recentCharts.map(chart => (
                <div 
                  key={chart.id} 
                  className="flex items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer"
                >
                  <div className="h-10 w-10 rounded bg-gray-200 dark:bg-gray-700 overflow-hidden flex-shrink-0">
                    <img 
                      src={chart.thumbnail} 
                      alt={chart.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {chart.name}
                    </p>
                  </div>
                  <ChevronRight size={16} className="text-gray-400" />
                </div>
              ))}
              
              <button className="w-full mt-2 text-center text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
                View all charts
              </button>
            </div>
          </div>
          
          {/* Analysis Tools */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
              <h2 className="font-semibold text-gray-900 dark:text-white">Analysis Tools</h2>
            </div>
            
            <div className="p-4 space-y-3">
              <button className="w-full flex items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                <div className="h-8 w-8 rounded bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <BarChart3 size={16} />
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
                  Statistical Analysis
                </span>
              </button>
              
              <button className="w-full flex items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                <div className="h-8 w-8 rounded bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Image size={16} />
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
                  Image Processing
                </span>
              </button>
              
              <button className="w-full flex items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                <div className="h-8 w-8 rounded bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                  <MessageSquare size={16} />
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
                  GPT Analysis
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartAnalysis;