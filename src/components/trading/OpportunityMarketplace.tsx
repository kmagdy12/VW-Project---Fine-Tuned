import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Bookmark, 
  Star,
  MapPin,
  Building2,
  Clock,
  DollarSign,
  TrendingUp,
  Share2,
  ArrowRight,
  Eye,
  Target,
  Users
} from 'lucide-react';

interface OpportunityMarketplaceProps {
  onSectionChange: (section: string) => void;
}

const OpportunityMarketplace: React.FC<OpportunityMarketplaceProps> = ({ onSectionChange }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = [
    { id: 'all', label: 'All Opportunities' },
    { id: 'primary', label: 'Primary Deals' },
    { id: 'secondary', label: 'Secondary Deals' },
    { id: 'watchlist', label: 'Watchlist' }
  ];

  const opportunities = [
    {
      id: 1,
      name: 'AgriTech Innovations',
      description: 'Developing sustainable farming solutions using AI and IoT for arid regions.',
      relevanceScore: 95,
      industry: 'AgriTech',
      hq: 'Dubai, UAE',
      dealType: 'Primary',
      primaryDetails: {
        round: 'Seed',
        ask: '$1.5M',
        valuation: '$8M',
        equity: '18.75%',
        stage: 'Traction'
      },
      traction: { arr: '$120K', growth: '20%', users: '500+', teamSize: '10' },
      opportunityStats: { views: 1200, saves: 80, closingIn: 30 },
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'primary',
      tags: ['AgriTech', 'AI', 'IoT']
    },
    {
      id: 2,
      name: 'HealthFlow Solutions',
      description: 'AI-powered platform for personalized healthcare management and remote patient monitoring.',
      relevanceScore: 88,
      industry: 'HealthTech',
      hq: 'Riyadh, KSA',
      dealType: 'Secondary',
      secondaryDetails: {
        sharesAvailable: '10,000',
        askingPrice: '$25/share',
        originalRound: 'Series A',
        originalDate: '2023-03-15',
        sellerType: 'Early Investor',
        sellerName: 'Investor B',
        currentValuation: '$25M'
      },
      traction: { arr: '$50K', growth: '15%', users: '1000+', teamSize: '15' },
      opportunityStats: { views: 800, saves: 50, closingIn: 45 },
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'secondary',
      tags: ['HealthTech', 'AI', 'Healthcare']
    }
  ];

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return 'bg-green-500/20 text-green-400';
    if (score >= 80) return 'bg-blue-500/20 text-blue-400';
    return 'bg-yellow-500/20 text-yellow-400';
  };

  const filteredOpportunities = opportunities.filter(opportunity => {
    const matchesSearch = opportunity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opportunity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opportunity.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'primary' && opportunity.dealType === 'Primary') ||
                      (activeTab === 'secondary' && opportunity.dealType === 'Secondary') ||
                      (activeTab === 'watchlist' && opportunity.dealType === 'Watchlist');
    
    return matchesSearch && matchesTab;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Opportunity Marketplace</h1>
        <p className="text-gray-300">Discover and evaluate investment opportunities</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search opportunities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-linkedin-card border border-linkedin-border rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-linkedin"
            />
          </div>
          <button className="flex items-center space-x-2 bg-linkedin hover:bg-linkedin-dark text-white px-6 py-3 rounded-lg transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>

        <div className="flex items-center space-x-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-linkedin to-linkedin-light text-white'
                  : 'bg-linkedin-card text-gray-300 hover:text-white hover:bg-linkedin-card/70'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredOpportunities.map((opportunity) => (
          <div key={opportunity.id} className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-6 hover:border-linkedin/50 transition-all">
            <div className="relative mb-4">
              <img 
                src={opportunity.image} 
                alt={opportunity.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-linkedin text-white px-3 py-1 rounded-full text-sm font-medium">
                  {opportunity.dealType}
                </span>
              </div>
              <div className="absolute bottom-3 right-3">
                <div className={`px-2 py-1 rounded-full text-xs font-bold ${getMatchScoreColor(opportunity.relevanceScore)}`}>
                  {opportunity.relevanceScore}% Match
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">{opportunity.name}</h3>
            <p className="text-gray-300 text-sm mb-3 line-clamp-2">{opportunity.description}</p>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
              <div className="flex items-center space-x-1">
                <Building2 className="w-4 h-4" />
                <span>{opportunity.industry}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>{opportunity.hq}</span>
              </div>
            </div>

            {opportunity.dealType === 'Primary' && opportunity.primaryDetails && (
              <div className="bg-linkedin-card/50 rounded-lg p-4 mb-4">
                <h4 className="text-white font-semibold mb-2">Primary Deal Details</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                  <span>Round: <span className="text-white">{opportunity.primaryDetails.round}</span></span>
                  <span>Ask: <span className="text-white">{opportunity.primaryDetails.ask}</span></span>
                  <span>Valuation: <span className="text-white">{opportunity.primaryDetails.valuation}</span></span>
                  <span>Equity: <span className="text-white">{opportunity.primaryDetails.equity}</span></span>
                </div>
              </div>
            )}

            {opportunity.dealType === 'Secondary' && opportunity.secondaryDetails && (
              <div className="bg-linkedin-card/50 rounded-lg p-4 mb-4">
                <h4 className="text-white font-semibold mb-2">Secondary Deal Details</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                  <span>Shares: <span className="text-white">{opportunity.secondaryDetails.sharesAvailable}</span></span>
                  <span>Price: <span className="text-white">{opportunity.secondaryDetails.askingPrice}</span></span>
                  <span>Round: <span className="text-white">{opportunity.secondaryDetails.originalRound}</span></span>
                  <span>Seller: <span className="text-white">{opportunity.secondaryDetails.sellerType}</span></span>
                </div>
              </div>
            )}

            <div className="bg-linkedin-card/50 rounded-lg p-4 mb-4">
              <h4 className="text-white font-semibold mb-2">Traction</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                <span>ARR/MRR: <span className="text-white">{opportunity.traction.arr}</span></span>
                <span>Growth: <span className="text-white">{opportunity.traction.growth}</span></span>
                <span>Users: <span className="text-white">{opportunity.traction.users}</span></span>
                <span>Team: <span className="text-white">{opportunity.traction.teamSize}</span></span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {opportunity.tags.map((tag, index) => (
                <span key={index} className="bg-linkedin-card text-gray-300 px-2 py-1 rounded text-xs">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{opportunity.opportunityStats.views} views</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Bookmark className="w-4 h-4" />
                  <span>{opportunity.opportunityStats.saves} saves</span>
                </span>
              </div>
              <span className="text-linkedin-light">Closing in {opportunity.opportunityStats.closingIn} days</span>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => onSectionChange('investment-pipeline')}
                className="flex-1 bg-gradient-to-r from-linkedin to-linkedin-light hover:from-linkedin-dark hover:to-linkedin text-white px-4 py-2 rounded-lg font-medium transition-all flex items-center justify-center space-x-2"
              >
                <span>View Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="p-2 bg-linkedin-card hover:bg-linkedin-card/70 text-gray-400 hover:text-white rounded-lg transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpportunityMarketplace;