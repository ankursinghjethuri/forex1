import { useState } from 'react';
import { Upload, Image, AlertCircle, CheckCircle } from 'lucide-react';

const ChartUpload: React.FC = () => {
  const [dragActive, setDragActive] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  
  // Handle drag events
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };
  
  // Handle drop event
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };
  
  // Handle file input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };
  
  // Handle the file upload
  const handleFile = (file: File) => {
    setIsUploading(true);
    setUploadError(null);
    setUploadSuccess(false);
    setFileName(file.name);
    
    // Check file type
    if (!file.type.match('image.*')) {
      setUploadError('Please upload an image file (JPEG, PNG, etc.)');
      setIsUploading(false);
      return;
    }
    
    // Simulate file upload with a timeout
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
      
      // Reset the success state after a few seconds
      setTimeout(() => {
        setUploadSuccess(false);
        setFileName(null);
      }, 3000);
    }, 1500);
  };
  
  // Recent uploads - Mock data
  const recentUploads = [
    { id: 1, name: 'Q2 Financial Report.png', date: '2 hours ago', type: 'image/png', size: '1.2 MB' },
    { id: 2, name: 'Market Trends 2025.jpg', date: '1 day ago', type: 'image/jpeg', size: '850 KB' },
    { id: 3, name: 'Sales Projections.png', date: '3 days ago', type: 'image/png', size: '2.1 MB' },
  ];
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Upload Charts
      </h1>
      
      {/* Upload Area */}
      <div className="mb-8">
        <div 
          className={`border-2 border-dashed rounded-xl p-8 text-center ${
            dragActive 
              ? 'border-purple-400 bg-purple-50 dark:bg-purple-900/20' 
              : 'border-gray-300 dark:border-gray-700'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-300">
              <Upload size={32} />
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Drag and drop your chart image
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                or click to browse your files
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Supports JPG, PNG, SVG (Max 10MB)
              </p>
            </div>
            
            {/* File Input */}
            <label className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 cursor-pointer">
              Browse Files
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleChange}
                disabled={isUploading}
              />
            </label>
          </div>
        </div>
      </div>
      
      {/* Upload Status */}
      {(isUploading || uploadSuccess || uploadError) && (
        <div className={`mb-8 p-4 rounded-lg ${
          uploadError 
            ? 'bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300' 
            : uploadSuccess 
              ? 'bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-300' 
              : 'bg-blue-50 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300'
        }`}>
          <div className="flex items-center">
            {uploadError && <AlertCircle size={20} className="mr-2" />}
            {uploadSuccess && <CheckCircle size={20} className="mr-2" />}
            {isUploading && (
              <svg className="animate-spin h-5 w-5 mr-2\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            
            <span>
              {uploadError ? uploadError : uploadSuccess ? `Successfully uploaded ${fileName}` : `Uploading ${fileName}...`}
            </span>
          </div>
        </div>
      )}
      
      {/* Recent Uploads */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Recent Uploads
          </h2>
        </div>
        
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {recentUploads.map(file => (
            <div key={file.id} className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <Image size={20} />
                </div>
                
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                      {file.name}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {file.date}
                    </span>
                  </div>
                  
                  <div className="mt-1 flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <span>{file.type}</span>
                    <span className="mx-2">•</span>
                    <span>{file.size}</span>
                  </div>
                </div>
                
                <div>
                  <button className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900/50">
          <button className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
            View all uploads
          </button>
        </div>
      </div>
      
      {/* Upload Tips */}
      <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
        <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-2">
          Tips for Best Results
        </h3>
        <ul className="list-disc pl-5 text-sm text-blue-700 dark:text-blue-400 space-y-1">
          <li>Use high-resolution images for better analysis accuracy</li>
          <li>Ensure charts have clear labels and legends</li>
          <li>Remove any sensitive or confidential information before uploading</li>
          <li>For complex charts, consider uploading multiple perspectives</li>
        </ul>
      </div>
    </div>
  );
};

export default ChartUpload;