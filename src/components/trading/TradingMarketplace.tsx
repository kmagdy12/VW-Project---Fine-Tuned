import React from 'react';

interface TradingMarketplaceProps {
  activeSection: string;
  onSectionChange: (section: string, tab?: string, data?: any) => void;
}

const TradingMarketplace: React.FC<TradingMarketplaceProps> = ({ activeSection, onSectionChange }) => {
  // This component is no longer used as its logic has been absorbed by MainPlatform.tsx
  return null;
};

export default TradingMarketplace;