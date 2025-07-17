```diff
--- a/src/components/investments/InvestmentSidebar.tsx
+++ b/src/components/investments/InvestmentSidebar.tsx
@@ -1,10 +1,10 @@
 import React from 'react';
 import { 
-  DollarSign, 
-  Briefcase, 
-  Users, 
-  BarChart3,
-  TrendingUp,
-  Bookmark,
-  Target,
-  MapPin
+  DollarSign,
+  Briefcase,
+  Users,
+  BarChart3,
+  TrendingUp,
+  Bookmark,
+  Target,
+  MapPin
 } from 'lucide-react';
 
 interface InvestmentSidebarProps {
@@ -15,13 +15,10 @@
 const InvestmentSidebar: React.FC<InvestmentSidebarProps> = ({ 
   activeSection, 
   onSectionChange, 
-  isCollapsed = false 
+  isCollapsed = false
 }) => {
   const navigationTabs = [
-    { id: 'trading-dashboard', label: 'Trading Market Dashboard', icon: BarChart3 },
-    { id: 'opportunity-marketplace', label: 'Trading Opportunities Dashboard', icon: TrendingUp },
-    { id: 'saved-opportunities', label: 'My Saved Opportunities', icon: Bookmark },
     { id: 'investment-pipeline', label: 'Investment Pipeline', icon: Briefcase },
     { id: 'portfolio-summary', label: 'Portfolio Summary Dashboard', icon: BarChart3 },
     { id: 'explore-portfolio', label: 'Explore Portfolio', icon: Target },
     { id: 'saved-investment-opportunities', label: 'Saved Investment Opportunities', icon: Bookmark }
@@ -37,7 +34,7 @@
   return (
     <div className="space-y-6">
       {/* Profile Information (Placeholder - consistent with other sidebars) */}
-      <div className={\`bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border ${isCollapsed ? 'p-3' : 'p-6'}`}>
+      <div className={\`bg-linkedin-card backdrop-blur-lg rounded-xl border border-linkedin-border ${isCollapsed ? 'p-3' : 'p-6'}`}> {/* This component is no longer used as its logic has been absorbed by TradingSidebar.tsx */}
         <div className={isCollapsed ? 'flex flex-col items-center' : 'text-center'}>
           <div className="relative inline-block mb-4">
             <img 
```