import React, { useState } from 'react';
import { 
  Upload, 
  FileText, 
  Trash2, 
  Brain, 
  Send, 
  ArrowRight,
  Save,
  Database,
  File
} from 'lucide-react';

interface KnowledgeBaseProps {
  onContinue: () => void;
  onSkip: () => void;
}

const KnowledgeBase: React.FC<KnowledgeBaseProps> = ({ onContinue, onSkip }) => {
  const [message, setMessage] = useState('');
  const [capacityUsed, setCapacityUsed] = useState(0);
  const [uploadedDocuments, setUploadedDocuments] = useState<{id: number, name: string, type: string, size: string}[]>([]);
  
  // Mock function to handle file upload
  const handleFileUpload = () => {
    // In a real implementation, this would handle actual file uploads
    const newDoc = {
      id: uploadedDocuments.length + 1,
      name: `Document_${uploadedDocuments.length + 1}.pdf`,
      type: 'Market Research',
      size: '2.4 MB'
    };
    
    setUploadedDocuments([...uploadedDocuments, newDoc]);
    setCapacityUsed(Math.min(capacityUsed + 15, 100)); // Increment capacity used
  };
  
  const handleRemoveDocument = (id: number) => {
    setUploadedDocuments(uploadedDocuments.filter(doc => doc.id !== id));
    setCapacityUsed(Math.max(capacityUsed - 15, 0)); // Decrement capacity used
  };
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // In a real implementation, this would send the message to the AI
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Chat Area */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* AI Welcome Message */}
        <div className="bg-linkedin-card/50 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-linkedin to-linkedin-light rounded-full flex items-center justify-center flex-shrink-0">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="text-white font-medium">Knowledge Navigator</h4>
                <span className="bg-linkedin/20 text-linkedin-light px-2 py-0.5 rounded-full text-xs">
                  AI Agent
                </span>
              </div>
              <div className="text-gray-300 space-y-3">
                <p>
                  Welcome to the Knowledge Base stage! I'm your Knowledge Navigator, and I'll help you build a strong foundation for your venture.
                </p>
                <p>
                  To provide you with the most accurate guidance, I'll need some information about your market and venture. You can upload relevant documents like market research reports, business plans, or any other materials that will help me understand your venture better.
                </p>
                <p>
                  What kind of documents would you like to upload today?
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Document Upload Section */}
        <div className="bg-linkedin-card/30 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Database className="w-5 h-5 text-linkedin-light mr-2" />
            Knowledge Base
          </h3>
          
          {/* Capacity Bar */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300 text-sm">Project Capacity</span>
              <span className="text-linkedin-light text-sm font-medium">{capacityUsed}% used</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all ${
                  capacityUsed > 80 ? 'bg-red-500' : 'bg-gradient-to-r from-linkedin to-linkedin-light'
                }`}
                style={{ width: `${capacityUsed}%` }}
              ></div>
            </div>
            <p className="text-gray-400 text-xs mt-1">
              {100 - capacityUsed}% remaining (Max 100MB total)
            </p>
          </div>
          
          {/* Upload Button */}
          <div className="mb-6">
            <button
              onClick={handleFileUpload}
              className="w-full border-2 border-dashed border-linkedin-border rounded-lg p-6 flex flex-col items-center justify-center hover:border-linkedin transition-colors"
            >
              <Upload className="w-10 h-10 text-linkedin-light mb-3" />
              <p className="text-white font-medium mb-1">Upload Documents</p>
              <p className="text-gray-400 text-sm">Drag & drop files or click to browse</p>
            </button>
          </div>
          
          {/* Uploaded Documents */}
          {uploadedDocuments.length > 0 && (
            <div>
              <h4 className="text-white font-medium mb-3">Uploaded Documents</h4>
              <div className="space-y-3">
                {uploadedDocuments.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between bg-linkedin-card/50 rounded-lg p-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-linkedin/20 rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-linkedin-light" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{doc.name}</p>
                        <p className="text-gray-400 text-xs">{doc.type} • {doc.size}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveDocument(doc.id)}
                      className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Message Input */}
      <div className="p-4 border-t border-linkedin-border">
        <form onSubmit={handleSendMessage} className="flex items-end space-x-3">
          <div className="flex-1">
            <div className="bg-linkedin-card border border-linkedin-border rounded-lg p-3">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask me anything about the knowledge base..."
                className="w-full bg-transparent text-white placeholder-gray-400 resize-none focus:outline-none"
                rows={2}
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={!message.trim()}
            className="bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white p-3 rounded-lg transition-all"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
        
        {/* Action Buttons */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-linkedin-border">
          <div className="flex items-center space-x-3">
            <button
              onClick={onSkip}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Skip for now
            </button>
            <button
              className="flex items-center space-x-2 bg-linkedin-card hover:bg-linkedin-card/70 text-white px-4 py-2 rounded-lg transition-colors text-sm"
            >
              <Save className="w-4 h-4" />
              <span>Save draft</span>
            </button>
          </div>
          <button
            onClick={onContinue}
            className="flex items-center space-x-2 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-6 py-2 rounded-lg transition-all text-sm"
          >
            <span>Continue to Idea Stage</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;