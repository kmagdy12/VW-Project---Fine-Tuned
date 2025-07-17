import React, { useState } from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Building2, 
  Users, 
  BarChart3,
  AlertTriangle,
  Star,
  Calendar,
  ExternalLink,
  PieChart,
  Activity,
  Target,
  Award,
  Briefcase,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Newspaper,
  Wallet,
  Globe,
  Layers
} from 'lucide-react';
import PortfolioPerformanceDashboard from './PortfolioPerformanceDashboard';
import VentureOverview from './VentureOverview';
import VentureFunding from './VentureFunding';
import VenturePerformance from './VenturePerformance';
import VentureListing from './VentureListing';

interface PortfolioManagementProps {
  onSectionChange: (section: string) => void;
}

const PortfolioManagement: React.FC<PortfolioManagementProps> = ({ onSectionChange }) => {
  // Internal state for sub-sections of Portfolio Management
  const [activeSubSection, setActiveSubSection] = useState('portfolio-performance-dashboard'); // Default to Performance Dashboard

  // State for selected venture when drilling down
  const [selectedVentureId, setSelectedVentureId] = useState<number | undefined>(undefined);

  const subNavigationTabs = [
    { id: 'portfolio-performance-dashboard', label: 'Performance Dashboard', icon: BarChart3 },
    { id: 'venture-overview', label: 'Venture Overview', icon: Building2 },
    { id: 'venture-funding', label: 'Venture Funding', icon: DollarSign },
    { id: 'venture-performance', label: 'Venture Performance', icon: TrendingUp },
    { id: 'venture-listing', label: 'Venture Listing', icon: Target }
  ];

  // Mock data for portfolio summary
  const portfolioSummaryData = {
    totalInvested: '$2.5M',
    totalValue: '$3.8M',
    unrealizedGains: '$1.3M',
    realizedGains: '$450K',
    totalReturn: '52%',
    numberOfInvestments: 12,
    activeInvestments: 9,
    exitedInvestments: 3,
    averageInvestment: '$208K',
    topPerformer: 'AgriTech Innovations',
    topPerformerReturn: '180%',
    bottomPerformer: 'RetailTech Pro',
    bottomPerformerReturn: '-100%',
    overallPortfolioReturnIRR: '28.5%',
    overallPortfolioReturnMultiple: '1.52x',
    performanceVsBenchmarks: '+12.3% vs MENA Index',
    timeWeightedPerformanceTrends: '+15.2% YTD',
    cashVsInvestedCapital: {
      cash: '$500K',
      invested: '$2.5M',
      cashPercentage: 16.7,
      investedPercentage: 83.3
    },
    assetAllocation: {
      byStage: [
        { stage: 'Seed', count: 5, value: '$1.2M', percentage: 31.6 },
        { stage: 'Series A', count: 4, value: '$1.8M', percentage: 47.4 },
        { stage: 'Series B', count: 2, value: '$600K', percentage: 15.8 },
        { stage: 'Exited', count: 1, value: '$200K', percentage: 5.3 }
      ],
      bySector: [
        { sector: 'Fintech', count: 3, value: '$1.1M', percentage: 28.9 },
        { sector: 'HealthTech', count: 2, value: '$800K', percentage: 21.1 },
        { sector: 'AgriTech', count: 2, value: '$700K', percentage: 18.4 },
        { sector: 'EdTech', count: 2, value: '$600K', percentage: 15.8 },
        { sector: 'CleanTech', count: 2, value: '$500K', percentage: 13.2 },
        { sector: 'RetailTech', count: 1, value: '$100K', percentage: 2.6 }
      ],
      byGeography: [
        { country: 'UAE', count: 4, value: '$1.5M', percentage: 39.5 },
        { country: 'Saudi Arabia', count: 3, value: '$1.0M', percentage: 26.3 },
        { country: 'Egypt', count: 2, value: '$700K', percentage: 18.4 },
        { country: 'Qatar', count: 2, value: '$500K', percentage: 13.2 },
        { country: 'Kuwait', count: 1, value: '$100K', percentage: 2.6 }
      ]
    }
  };

  const renderSubSectionContent = () => {
    switch (activeSubSection) {
      case 'portfolio-performance-dashboard':
        return <PortfolioPerformanceDashboard onSectionChange={onSectionChange} />;
      case 'venture-overview':
        return (
          <VentureOverview 
            onSectionChange={(section) => {
              setActiveSubSection(section);
              onSectionChange(section);
            }} 
            selectedVentureId={selectedVentureId} 
            onVentureSelect={setSelectedVentureId} 
          />
        );
      case 'venture-funding':
        return (
          <VentureFunding 
            onSectionChange={(section) => {
              setActiveSubSection(section);
              onSectionChange(section);
            }}
            selectedVentureId={selectedVentureId} 
          />
        );
      case 'venture-performance':
        return (
          <VenturePerformance 
            onSectionChange={(section) => {
              setActiveSubSection(section);
              onSectionChange(section);
            }}
            selectedVentureId={selectedVentureId} 
          />
        );
      case 'venture-listing':
        return (
          <VentureListing 
            onSectionChange={(section) => {
              setActiveSubSection(section);
              onSectionChange(section);
            }}
            selectedVentureId={selectedVentureId} 
          />
        );
      default:
        return <PortfolioPerformanceDashboard onSectionChange={onSectionChange} />;
    }
  };

  const alerts = [
    {
      id: 1,
      title: 'AgriTech Innovations: 30% revenue decline',
      description: 'Quarterly revenue dropped significantly due to seasonal factors',
      severity: 'high',
      date: '2 hours ago'
    },
    {
      id: 2,
      title: 'EduSpark: 1 month delay in product release',
      description: 'Product launch postponed due to technical challenges',
      severity: 'medium',
      date: '1 day ago'
    },
    {
      id: 3,
      title: 'HealthFlow Solutions: New partnership announced',
      description: 'Strategic partnership with major healthcare provider',
      severity: 'low',
      date: '3 days ago'
    }
  ];

  const topPerformers = [
    {
      id: 1,
      name: 'AgriTech Innovations',
      logo: '🌱',
      growthRate: '+180%',
      currentValue: '$372K',
      industry: 'AgriTech'
    },
    {
      id: 2,
      name: 'HealthFlow Solutions',
      logo: '🏥',
      growthRate: '+120%',
      currentValue: '$180K',
      industry: 'HealthTech'
    },
    {
      id: 3,
      name: 'EduSpark',
      logo: '📚',
      growthRate: '+150%',
      currentValue: '$150K',
      industry: 'EdTech'
    },
    {
      id: 4,
      name: 'CleanEnergy MENA',
      logo: '☀️',
      growthRate: '+140%',
      currentValue: '$420K',
      industry: 'CleanTech'
    },
    {
      id: 5,
      name: 'LogiChain',
      logo: '🔗',
      growthRate: '+95%',
      currentValue: '$285K',
      industry: 'Logistics'
    }
  ];

  const marketUpdates = [
    {
      id: 1,
      title: 'MENA Fintech Investment Reaches Record High in Q4 2024',
      intro: 'Regional fintech startups raised $1.2B in the fourth quarter, marking a 45% increase from the previous year',
      date: '2 hours ago'
    },
    {
      id: 2,
      title: 'Saudi Arabia Launches $2B Innovation Fund',
      intro: 'New government initiative aims to support early-stage startups across technology sectors',
      date: '6 hours ago'
    },
    {
      id: 3,
      title: 'UAE Central Bank Updates Fintech Regulations',
      intro: 'New regulatory framework provides clearer guidelines for digital payment platforms',
      date: '1 day ago'
    },
    {
      id: 4,
      title: 'AgriTech Sector Shows Strong Growth Across MENA',
      intro: 'Agricultural technology investments up 60% as region focuses on food security',
      date: '2 days ago'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'medium':
        return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'low':
        return 'text-green-400 bg-green-500/20 border-green-500/30';
      default:
        return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Portfolio Management</h1>
        <p className="text-gray-300">Active investment monitoring and value-add management platform</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar for Portfolio Management sub-sections */}
        <div className="space-y-6">
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-4">
            <h3 className="text-lg font-bold text-white mb-4">Portfolio Management</h3>
            <nav className="space-y-2"> {/* Sub-navigation for Portfolio Management */}
              {subNavigationTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubSection(tab.id)} // Update internal state
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all ${
                    activeSubSection === tab.id
                      ? 'bg-linkedin text-white'
                      : 'text-gray-300 hover:text-white hover:bg-linkedin-card'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Alerts */}
          <div className="bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border p-4">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5" />
              <span>Alerts</span>
            </h3>
            
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div key={alert.id} className={`p-3 rounded-lg border ${getSeverityColor(alert.severity)}`}>
                  <h4 className="font-medium text-sm mb-1">{alert.title}</h4>
                  <p className="text-xs mb-2 opacity-80">{alert.description}</p>
                  <span className="text-xs opacity-60">{alert.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        {/* Main Content Area for Portfolio Management sub-sections */}
        <div className="lg:col-span-3 space-y-6">
          {renderSubSectionContent()}
        </div>
      </div>
    </div>
  );
};

export default PortfolioManagement;