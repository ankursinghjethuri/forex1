import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, BarChart3, Upload, MessageSquare, PieChart, LineChart, Lock, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Landing: React.FC = () => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    featureRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      featureRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !featureRefs.current.includes(el)) {
      featureRefs.current[index] = el;
    }
  };

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Data Into Actionable Insights
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Unleash the power of AI to analyze your charts and visualize data trends like never before.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/signup"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors pulse-button"
              >
                Start Free Trial
              </Link>
              <a
                href="#features"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        
        {/* Hero Image/Animation */}
        <div className="max-w-6xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl p-4 rounded-xl shadow-2xl border border-white border-opacity-20">
            <img
              src="https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="AI Dashboard Preview"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </section>
      
      {/* Trusted By Section */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-300">
              Trusted by innovative companies worldwide
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {/* These would normally be logos but we'll use placeholder text */}
            <div className="text-gray-500 dark:text-gray-400 font-bold text-lg">ACME Inc.</div>
            <div className="text-gray-500 dark:text-gray-400 font-bold text-lg">TechCorp</div>
            <div className="text-gray-500 dark:text-gray-400 font-bold text-lg">DataFlow</div>
            <div className="text-gray-500 dark:text-gray-400 font-bold text-lg">InnovateCo</div>
            <div className="text-gray-500 dark:text-gray-400 font-bold text-lg">FutureTech</div>
            <div className="text-gray-500 dark:text-gray-400 font-bold text-lg">VisionAI</div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover how Trendy AI can revolutionize your data analysis workflow with these cutting-edge features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div 
              ref={(el) => addToRefs(el, 0)}
              className="glass-card p-6 opacity-0 translate-y-10 transition-all duration-700 ease-out"
            >
              <div className="h-14 w-14 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-300 mb-6">
                <Upload size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Chart Upload
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Effortlessly upload and analyze your charts. Our system supports various formats including PNG, JPG, and SVG.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div 
              ref={(el) => addToRefs(el, 1)}
              className="glass-card p-6 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-100"
            >
              <div className="h-14 w-14 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 mb-6">
                <MessageSquare size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                AI-Powered Prompting
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ask questions about your data in natural language. Our AI understands your queries and provides insightful responses.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div 
              ref={(el) => addToRefs(el, 2)}
              className="glass-card p-6 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200"
            >
              <div className="h-14 w-14 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-300 mb-6">
                <BarChart3 size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Advanced Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get deep insights from your charts with our premium analysis features. Identify patterns and trends effortlessly.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div 
              ref={(el) => addToRefs(el, 3)}
              className="glass-card p-6 opacity-0 translate-y-10 transition-all duration-700 ease-out"
            >
              <div className="h-14 w-14 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center text-red-600 dark:text-red-300 mb-6">
                <PieChart size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Comprehensive Visualization
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Transform your raw data into beautiful, interactive visualizations that tell a compelling story.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div 
              ref={(el) => addToRefs(el, 4)}
              className="glass-card p-6 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-100"
            >
              <div className="h-14 w-14 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center text-yellow-600 dark:text-yellow-300 mb-6">
                <LineChart size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Trend Prediction
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Leverage the power of AI to predict future trends based on historical data patterns with remarkable accuracy.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div 
              ref={(el) => addToRefs(el, 5)}
              className="glass-card p-6 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200"
            >
              <div className="h-14 w-14 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300 mb-6">
                <Lock size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Secure & Private
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your data security is our priority. All uploads and analyses are encrypted and protected with enterprise-grade security.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get started with Trendy AI in just a few simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 relative">
              <div className="h-12 w-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold absolute -top-6 left-6">
                1
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Upload Your Chart
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Simply upload your chart image or data visualization to our platform.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 relative">
              <div className="h-12 w-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold absolute -top-6 left-6">
                2
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Ask Questions
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Use natural language to ask specific questions about your data and visualizations.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 relative">
              <div className="h-12 w-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold absolute -top-6 left-6">
                3
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Get Insights
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Receive detailed analysis, pattern recognition, and actionable insights from our AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the plan that works best for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-8 flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Free Plan
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">$0</span>
                <span className="text-gray-600 dark:text-gray-300">/month</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Perfect for individuals getting started with data analysis
              </p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Chart upload (up to 5/day)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Basic AI prompting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Standard analysis</span>
                </li>
                <li className="flex items-start text-gray-400 dark:text-gray-500">
                  <CheckCircle size={20} className="mr-2 flex-shrink-0 mt-0.5" />
                  <span>Advanced analysis features</span>
                </li>
                <li className="flex items-start text-gray-400 dark:text-gray-500">
                  <CheckCircle size={20} className="mr-2 flex-shrink-0 mt-0.5" />
                  <span>Trend prediction</span>
                </li>
                <li className="flex items-start text-gray-400 dark:text-gray-500">
                  <CheckCircle size={20} className="mr-2 flex-shrink-0 mt-0.5" />
                  <span>Export reports</span>
                </li>
              </ul>
              
              <Link
                to="/signup"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-6 rounded-md text-center font-medium transition-colors"
              >
                Get Started
              </Link>
            </div>
            
            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl shadow-lg p-8 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2 rotate-45">
                POPULAR
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">
                Premium Plan
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$29</span>
                <span className="text-gray-200">/month</span>
              </div>
              <p className="text-gray-200 mb-6">
                For professionals and teams who need advanced analytics
              </p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-yellow-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Unlimited chart uploads</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-yellow-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Advanced AI prompting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-yellow-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Comprehensive analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-yellow-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Advanced analysis features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-yellow-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-white">AI-powered trend prediction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-yellow-300 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Export detailed reports</span>
                </li>
              </ul>
              
              <Link
                to="/signup"
                className="bg-white hover:bg-gray-100 text-purple-700 py-3 px-6 rounded-md text-center font-medium transition-colors"
              >
                Get Premium
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from the professionals who use Trendy AI to transform their data analysis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-300 mr-4">
                  <span className="font-bold text-lg">JD</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    John Doe
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Data Analyst, Tech Corp
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "Trendy AI has completely transformed how I analyze market data. The AI-powered insights have helped me identify patterns I would have missed otherwise."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-800 flex items-center justify-center text-purple-600 dark:text-purple-300 mr-4">
                  <span className="font-bold text-lg">JS</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    Jane Smith
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Marketing Director, Innovate Inc
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "The premium features are worth every penny. Being able to predict trends based on our historical data has given us a competitive edge in our market."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center text-green-600 dark:text-green-300 mr-4">
                  <span className="font-bold text-lg">RJ</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    Robert Johnson
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    CEO, DataVision
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg className="w-5 h-5 text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "Our entire team relies on Trendy AI for our financial chart analysis. The natural language querying feature has made data accessible to everyone, not just analysts."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="feature-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Data Analysis?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who have already upgraded their data analysis capabilities with Trendy AI.
          </p>
          <Link
            to="/signup"
            className="bg-white hover:bg-gray-100 text-purple-700 px-8 py-4 rounded-md text-lg font-medium transition-colors inline-block"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Landing;