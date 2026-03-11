import React, { useState, useEffect, useCallback } from 'react';
import { 
  Shield, Brain, Users, Link, Coins, Scale, AlertTriangle, CheckCircle, 
  XCircle, Clock, Upload, FileText, User, Activity, Database, Globe, 
  Zap, Eye, Lock, TrendingUp, BarChart3, PieChart, ArrowRight, ChevronRight, 
  Loader2, Fingerprint, Wifi, Server, Award, AlertCircle, CreditCard,
  Building2, Phone, Mail, MapPin, Briefcase, Heart, Car, Home, Smartphone,
  Calendar, DollarSign, FileCheck, Radio, Signal, Cpu, Network, Layers,
  Play, Pause, RotateCcw, ChevronDown, ExternalLink, Info, Sparkles
} from 'lucide-react';

// ============================================
// SPECTER PROTOCOL - PROFESSIONAL MVP
// Life Signal Oracle Demonstration
// ============================================

export default function SpecterMVP() {
  const [activeTab, setActiveTab] = useState('oracle');
  const [verificationState, setVerificationState] = useState('idle');
  const [oracleData, setOracleData] = useState(null);
  const [selectedApplicant, setSelectedApplicant] = useState('synthetic');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800 tracking-tight">
                  SPECTER<span className="text-emerald-500">.</span>
                </h1>
                <p className="text-xs text-slate-500">Synthetic Identity Detection Protocol</p>
              </div>
            </div>
            
            <nav className="flex gap-1 bg-slate-100 p-1 rounded-xl">
              {[
                { id: 'oracle', label: 'Life Signal Oracle', icon: Radio },
                { id: 'verify', label: 'Verification', icon: Fingerprint },
                { id: 'ensemble', label: 'AI Ensemble', icon: Brain },
                { id: 'jury', label: 'Jury Network', icon: Users },
                { id: 'blockchain', label: 'Blockchain', icon: Link },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    activeTab === tab.id 
                      ? 'bg-white text-emerald-600 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </nav>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-xs font-medium text-emerald-700">Network Active</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'oracle' && (
          <LifeSignalOracle 
            selectedApplicant={selectedApplicant}
            setSelectedApplicant={setSelectedApplicant}
          />
        )}
        {activeTab === 'verify' && (
          <VerificationFlow 
            selectedApplicant={selectedApplicant}
          />
        )}
        {activeTab === 'ensemble' && <AIEnsembleView />}
        {activeTab === 'jury' && <JuryNetworkView />}
        {activeTab === 'blockchain' && <BlockchainView />}
      </main>
    </div>
  );
}

// ============================================
// LIFE SIGNAL ORACLE - THE UNIQUE DIFFERENTIATOR
// ============================================
function LifeSignalOracle({ selectedApplicant, setSelectedApplicant }) {
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamedSignals, setStreamedSignals] = useState([]);
  const [lcsScore, setLcsScore] = useState(0);
  const [signalStats, setSignalStats] = useState({
    freshness: 0,
    diversity: 0,
    history: 0,
    consistency: 0,
    density: 0
  });

  // Simulated API Data Sources
  const apiSources = [
    { id: 'equifax', name: 'Equifax Credit Bureau', icon: CreditCard, category: 'Financial', latency: '45ms' },
    { id: 'experian', name: 'Experian Credit Data', icon: Database, category: 'Financial', latency: '52ms' },
    { id: 'plaid', name: 'Plaid Banking API', icon: Building2, category: 'Financial', latency: '120ms' },
    { id: 'truework', name: 'Truework Employment', icon: Briefcase, category: 'Employment', latency: '230ms' },
    { id: 'twilio', name: 'Twilio Phone Verify', icon: Phone, category: 'Digital', latency: '85ms' },
    { id: 'melissa', name: 'Melissa Address API', icon: MapPin, category: 'Physical', latency: '67ms' },
    { id: 'lexisnexis', name: 'LexisNexis Identity', icon: FileCheck, category: 'Civic', latency: '145ms' },
    { id: 'devicefp', name: 'Device Fingerprint', icon: Smartphone, category: 'IoT', latency: '12ms' },
  ];

  // Real Person Signals (Rich, Continuous)
  const realPersonSignals = [
    { source: 'Equifax Credit Bureau', signal: 'Credit file opened: March 2008', age: '16 years', status: 'verified', strength: 95, category: 'Financial' },
    { source: 'Equifax Credit Bureau', signal: 'Active accounts: 7 (3 credit cards, 2 loans, 2 utilities)', age: 'Current', status: 'verified', strength: 92, category: 'Financial' },
    { source: 'Experian Credit Data', signal: 'Payment history: 98.5% on-time over 192 months', age: '16 years', status: 'verified', strength: 97, category: 'Financial' },
    { source: 'Plaid Banking API', signal: 'Primary checking account active since 2012', age: '12 years', status: 'verified', strength: 90, category: 'Financial' },
    { source: 'Plaid Banking API', signal: 'Monthly direct deposits from verified employer', age: '4 years', status: 'verified', strength: 94, category: 'Financial' },
    { source: 'Plaid Banking API', signal: 'Recurring bills: Netflix, Spotify, Gym, Insurance', age: '3+ years', status: 'verified', strength: 88, category: 'Financial' },
    { source: 'Truework Employment', signal: 'Employed at TechCorp Inc. - verified via payroll API', age: '4 years', status: 'verified', strength: 96, category: 'Employment' },
    { source: 'Truework Employment', signal: 'Previous employer: StartupXYZ (2018-2020)', age: '6 years', status: 'verified', strength: 85, category: 'Employment' },
    { source: 'Twilio Phone Verify', signal: 'Mobile number active since 2015', age: '9 years', status: 'verified', strength: 91, category: 'Digital' },
    { source: 'Twilio Phone Verify', signal: 'Carrier: Verizon postpaid (identity verified)', age: '9 years', status: 'verified', strength: 93, category: 'Digital' },
    { source: 'Melissa Address API', signal: 'Current address: 4+ years residency', age: '4 years', status: 'verified', strength: 89, category: 'Physical' },
    { source: 'Melissa Address API', signal: 'Previous addresses: 3 (all verified, logical progression)', age: '12 years', status: 'verified', strength: 87, category: 'Physical' },
    { source: 'LexisNexis Identity', signal: 'Voter registration: Active since 2010', age: '14 years', status: 'verified', strength: 94, category: 'Civic' },
    { source: 'LexisNexis Identity', signal: 'Vehicle registration: 2 vehicles in name', age: '8 years', status: 'verified', strength: 86, category: 'Civic' },
    { source: 'LexisNexis Identity', signal: 'Professional license: State of California', age: '6 years', status: 'verified', strength: 92, category: 'Civic' },
    { source: 'Device Fingerprint', signal: 'Primary device used for 3+ years', age: '3 years', status: 'verified', strength: 84, category: 'IoT' },
    { source: 'Device Fingerprint', signal: 'Device location consistent with claimed residence', age: 'Current', status: 'verified', strength: 88, category: 'IoT' },
  ];

  // Synthetic Person Signals (Sparse, Artificial)
  const syntheticPersonSignals = [
    { source: 'Equifax Credit Bureau', signal: 'Credit file opened: November 2023', age: '14 months', status: 'warning', strength: 25, category: 'Financial' },
    { source: 'Equifax Credit Bureau', signal: 'Active accounts: 2 (1 secured card, 1 store card)', age: '14 months', status: 'warning', strength: 30, category: 'Financial' },
    { source: 'Experian Credit Data', signal: 'Payment history: 100% on-time (suspiciously perfect)', age: '14 months', status: 'suspicious', strength: 35, category: 'Financial' },
    { source: 'Plaid Banking API', signal: 'Bank account opened: October 2023', age: '15 months', status: 'warning', strength: 28, category: 'Financial' },
    { source: 'Plaid Banking API', signal: 'No recurring bill payments detected', age: 'N/A', status: 'missing', strength: 15, category: 'Financial' },
    { source: 'Truework Employment', signal: 'Employer "Southwest Logistics LLC" - cannot verify', age: 'N/A', status: 'failed', strength: 10, category: 'Employment' },
    { source: 'Truework Employment', signal: 'Company incorporated: 4 months ago', age: '4 months', status: 'suspicious', strength: 12, category: 'Employment' },
    { source: 'Twilio Phone Verify', signal: 'VoIP number detected (Google Voice)', age: '3 weeks', status: 'failed', strength: 8, category: 'Digital' },
    { source: 'Twilio Phone Verify', signal: 'Phone number not tied to identity', age: 'N/A', status: 'failed', strength: 5, category: 'Digital' },
    { source: 'Melissa Address API', signal: 'Address is UPS Store mailbox', age: 'N/A', status: 'failed', strength: 10, category: 'Physical' },
    { source: 'Melissa Address API', signal: 'No utility history at address', age: 'N/A', status: 'missing', strength: 12, category: 'Physical' },
    { source: 'LexisNexis Identity', signal: 'No voter registration found', age: 'N/A', status: 'missing', strength: 0, category: 'Civic' },
    { source: 'LexisNexis Identity', signal: 'No vehicle registration found', age: 'N/A', status: 'missing', strength: 0, category: 'Civic' },
    { source: 'LexisNexis Identity', signal: 'SSN issued 2019, claimed age 38 - MISMATCH', age: 'N/A', status: 'failed', strength: 5, category: 'Civic' },
    { source: 'Device Fingerprint', signal: 'Device seen in 47 other applications this month', age: 'N/A', status: 'failed', strength: 3, category: 'IoT' },
    { source: 'Device Fingerprint', signal: 'VPN/Proxy detected - true location hidden', age: 'N/A', status: 'failed', strength: 5, category: 'IoT' },
  ];

  const currentSignals = selectedApplicant === 'real' ? realPersonSignals : syntheticPersonSignals;

  // Stream signals with realistic timing
  const startStreaming = useCallback(() => {
    setIsStreaming(true);
    setStreamedSignals([]);
    setLcsScore(0);
    setSignalStats({ freshness: 0, diversity: 0, history: 0, consistency: 0, density: 0 });

    let index = 0;
    const streamInterval = setInterval(() => {
      if (index < currentSignals.length) {
        setStreamedSignals(prev => [...prev, currentSignals[index]]);
        
        // Calculate running LCS score
        const signals = currentSignals.slice(0, index + 1);
        const avgStrength = signals.reduce((a, b) => a + b.strength, 0) / signals.length;
        setLcsScore(Math.round(avgStrength));
        
        // Update signal stats
        const categories = [...new Set(signals.map(s => s.category))];
        const verifiedCount = signals.filter(s => s.status === 'verified').length;
        
        setSignalStats({
          freshness: Math.min(100, Math.round((signals.filter(s => s.age !== 'N/A').length / signals.length) * 100)),
          diversity: Math.round((categories.length / 6) * 100),
          history: selectedApplicant === 'real' ? Math.min(100, index * 6) : Math.min(30, index * 2),
          consistency: Math.round((verifiedCount / signals.length) * 100),
          density: Math.min(100, Math.round((signals.length / 17) * 100))
        });
        
        index++;
      } else {
        clearInterval(streamInterval);
        setIsStreaming(false);
      }
    }, 400);

    return () => clearInterval(streamInterval);
  }, [currentSignals, selectedApplicant]);

  const resetStream = () => {
    setStreamedSignals([]);
    setLcsScore(0);
    setSignalStats({ freshness: 0, diversity: 0, history: 0, consistency: 0, density: 0 });
    setIsStreaming(false);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'verified': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'warning': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'suspicious': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'failed': return 'bg-red-100 text-red-700 border-red-200';
      case 'missing': return 'bg-slate-100 text-slate-500 border-slate-200';
      default: return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Financial': return CreditCard;
      case 'Employment': return Briefcase;
      case 'Digital': return Smartphone;
      case 'Physical': return Home;
      case 'Civic': return FileCheck;
      case 'IoT': return Cpu;
      default: return Database;
    }
  };

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white shadow-xl shadow-emerald-500/20">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Radio className="w-6 h-6" />
              <span className="text-emerald-100 text-sm font-medium">CORE INNOVATION</span>
            </div>
            <h2 className="text-3xl font-bold mb-2">Life Signal Oracle</h2>
            <p className="text-emerald-100 max-w-xl">
              Real people emit continuous "life signals" — they pay bills, vote, use phones, have employment history. 
              Synthetic identities have sparse, artificial patterns. Our oracle aggregates signals from 8+ authoritative 
              sources in real-time to calculate a Life Continuity Score (LCS).
            </p>
          </div>
          <div className="text-right">
            <div className="text-6xl font-bold">{lcsScore}</div>
            <div className="text-emerald-100">Life Continuity Score</div>
          </div>
        </div>
      </div>

      {/* Applicant Selector */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <User className="w-5 h-5 text-emerald-500" />
          Select Test Applicant
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => { setSelectedApplicant('real'); resetStream(); }}
            className={`p-6 rounded-xl border-2 transition-all text-left ${
              selectedApplicant === 'real' 
                ? 'border-emerald-500 bg-emerald-50' 
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Sarah M. Thompson</h4>
                <p className="text-sm text-slate-500">Real Identity</p>
              </div>
            </div>
            <p className="text-sm text-slate-600">38 years old, employed at TechCorp Inc., 16 years of credit history, homeowner in California.</p>
          </button>
          
          <button
            onClick={() => { setSelectedApplicant('synthetic'); resetStream(); }}
            className={`p-6 rounded-xl border-2 transition-all text-left ${
              selectedApplicant === 'synthetic' 
                ? 'border-red-500 bg-red-50' 
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Michael R. Johnson</h4>
                <p className="text-sm text-slate-500">Synthetic Identity</p>
              </div>
            </div>
            <p className="text-sm text-slate-600">Claims 38 years old, 14-month credit file, unverifiable employer, VoIP phone, mailbox address.</p>
          </button>
        </div>
      </div>

      {/* API Sources */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <Network className="w-5 h-5 text-emerald-500" />
          Connected Data Sources (8 APIs)
        </h3>
        <div className="grid grid-cols-4 gap-3">
          {apiSources.map((api, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                <api.icon className="w-5 h-5 text-slate-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-700 truncate">{api.name}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">{api.category}</span>
                  <span className="text-xs text-emerald-600">{api.latency}</span>
                </div>
              </div>
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Oracle Interface */}
      <div className="grid grid-cols-3 gap-6">
        {/* Signal Stream */}
        <div className="col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-semibold text-slate-800 flex items-center gap-2">
              <Activity className="w-5 h-5 text-emerald-500" />
              Live Signal Stream
            </h3>
            <div className="flex items-center gap-2">
              {!isStreaming ? (
                <button
                  onClick={startStreaming}
                  className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-medium text-sm"
                >
                  <Play className="w-4 h-4" />
                  Start Oracle Query
                </button>
              ) : (
                <div className="flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-lg font-medium text-sm">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Streaming...
                </div>
              )}
              <button
                onClick={resetStream}
                className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="p-4 h-[500px] overflow-y-auto space-y-2 bg-slate-50">
            {streamedSignals.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-slate-400">
                <Radio className="w-12 h-12 mb-3 opacity-50" />
                <p>Click "Start Oracle Query" to begin streaming life signals</p>
              </div>
            ) : (
              streamedSignals.map((signal, i) => {
                const Icon = getCategoryIcon(signal.category);
                return (
                  <div 
                    key={i} 
                    className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm animate-fadeIn"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        signal.status === 'verified' ? 'bg-emerald-100' :
                        signal.status === 'warning' ? 'bg-amber-100' :
                        signal.status === 'suspicious' ? 'bg-orange-100' :
                        'bg-red-100'
                      }`}>
                        <Icon className={`w-5 h-5 ${
                          signal.status === 'verified' ? 'text-emerald-600' :
                          signal.status === 'warning' ? 'text-amber-600' :
                          signal.status === 'suspicious' ? 'text-orange-600' :
                          'text-red-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-medium text-slate-500">{signal.source}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full border ${getStatusColor(signal.status)}`}>
                            {signal.status.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-sm text-slate-800 font-medium">{signal.signal}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-xs text-slate-400">History: {signal.age}</span>
                          <div className="flex items-center gap-1">
                            <span className="text-xs text-slate-400">Strength:</span>
                            <div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full ${
                                  signal.strength > 70 ? 'bg-emerald-500' :
                                  signal.strength > 40 ? 'bg-amber-500' :
                                  'bg-red-500'
                                }`}
                                style={{ width: `${signal.strength}%` }}
                              ></div>
                            </div>
                            <span className="text-xs font-medium text-slate-600">{signal.strength}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* LCS Calculation Panel */}
        <div className="space-y-4">
          {/* Live Score */}
          <div className={`rounded-xl p-6 shadow-sm border ${
            lcsScore > 70 ? 'bg-emerald-50 border-emerald-200' :
            lcsScore > 40 ? 'bg-amber-50 border-amber-200' :
            lcsScore > 0 ? 'bg-red-50 border-red-200' :
            'bg-white border-slate-200'
          }`}>
            <h4 className="text-sm font-medium text-slate-600 mb-3">Life Continuity Score</h4>
            <div className="text-center">
              <div className={`text-6xl font-bold ${
                lcsScore > 70 ? 'text-emerald-600' :
                lcsScore > 40 ? 'text-amber-600' :
                lcsScore > 0 ? 'text-red-600' :
                'text-slate-300'
              }`}>{lcsScore}</div>
              <p className={`text-sm font-medium mt-2 ${
                lcsScore > 70 ? 'text-emerald-600' :
                lcsScore > 40 ? 'text-amber-600' :
                lcsScore > 0 ? 'text-red-600' :
                'text-slate-400'
              }`}>
                {lcsScore > 80 ? '✓ REAL IDENTITY' :
                 lcsScore > 60 ? '⚠ NEEDS REVIEW' :
                 lcsScore > 0 ? '✗ SYNTHETIC DETECTED' :
                 'Awaiting data...'}
              </p>
            </div>
          </div>

          {/* Score Components */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h4 className="text-sm font-medium text-slate-600 mb-4">Score Components</h4>
            <div className="space-y-4">
              {[
                { label: 'Signal Freshness', value: signalStats.freshness, weight: '20%' },
                { label: 'Signal Diversity', value: signalStats.diversity, weight: '20%' },
                { label: 'Signal History', value: signalStats.history, weight: '25%' },
                { label: 'Signal Consistency', value: signalStats.consistency, weight: '20%' },
                { label: 'Signal Density', value: signalStats.density, weight: '15%' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">{stat.label}</span>
                    <span className="text-slate-400 text-xs">×{stat.weight}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          stat.value > 70 ? 'bg-emerald-500' :
                          stat.value > 40 ? 'bg-amber-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${stat.value}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-slate-700 w-8">{stat.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Signal Summary */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h4 className="text-sm font-medium text-slate-600 mb-4">Signal Summary</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 bg-emerald-50 rounded-lg">
                <div className="text-2xl font-bold text-emerald-600">
                  {streamedSignals.filter(s => s.status === 'verified').length}
                </div>
                <div className="text-xs text-emerald-600">Verified</div>
              </div>
              <div className="text-center p-3 bg-amber-50 rounded-lg">
                <div className="text-2xl font-bold text-amber-600">
                  {streamedSignals.filter(s => s.status === 'warning' || s.status === 'suspicious').length}
                </div>
                <div className="text-xs text-amber-600">Warning</div>
              </div>
              <div className="text-center p-3 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600">
                  {streamedSignals.filter(s => s.status === 'failed').length}
                </div>
                <div className="text-xs text-red-600">Failed</div>
              </div>
              <div className="text-center p-3 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-slate-600">
                  {streamedSignals.filter(s => s.status === 'missing').length}
                </div>
                <div className="text-xs text-slate-500">Missing</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      {streamedSignals.length > 0 && (
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-500" />
            Why This Matters for Credit Risk
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div className={`p-6 rounded-xl ${selectedApplicant === 'real' ? 'bg-emerald-50 border-2 border-emerald-200' : 'bg-slate-50 border border-slate-200'}`}>
              <h4 className="font-semibold text-emerald-700 mb-3">✓ Real Identity Pattern</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• <strong>16 years</strong> of continuous credit history</li>
                <li>• <strong>7 active accounts</strong> across multiple categories</li>
                <li>• <strong>Verified employment</strong> via direct payroll API</li>
                <li>• <strong>9-year phone history</strong> with postpaid carrier</li>
                <li>• <strong>4-year address</strong> with utility records</li>
                <li>• <strong>Civic footprint:</strong> voter registration, vehicles, licenses</li>
              </ul>
            </div>
            <div className={`p-6 rounded-xl ${selectedApplicant === 'synthetic' ? 'bg-red-50 border-2 border-red-200' : 'bg-slate-50 border border-slate-200'}`}>
              <h4 className="font-semibold text-red-700 mb-3">✗ Synthetic Identity Pattern</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• <strong>14-month</strong> credit file (claims to be 38 years old)</li>
                <li>• <strong>Perfect payment history</strong> (suspiciously perfect)</li>
                <li>• <strong>Employer cannot be verified</strong> (shell company?)</li>
                <li>• <strong>VoIP phone</strong> created 3 weeks ago</li>
                <li>• <strong>Commercial mailbox</strong> as residential address</li>
                <li>• <strong>No civic footprint:</strong> no voting, no vehicles, SSN mismatch</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

// ============================================
// VERIFICATION FLOW
// ============================================
function VerificationFlow({ selectedApplicant }) {
  const [step, setStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState(null);

  const steps = [
    { name: 'Life Signal Oracle', icon: Radio, description: 'Querying 8 data sources...', duration: 2000 },
    { name: 'AI Ensemble', icon: Brain, description: 'Running 7 detection models...', duration: 2500 },
    { name: 'Federated Network', icon: Globe, description: 'Checking consortium signals...', duration: 1500 },
    { name: 'Risk Scoring', icon: BarChart3, description: 'Calculating final score...', duration: 1000 },
  ];

  const runVerification = () => {
    setIsRunning(true);
    setStep(0);
    setResult(null);

    let currentStep = 0;
    const runStep = () => {
      if (currentStep < steps.length) {
        setStep(currentStep + 1);
        currentStep++;
        setTimeout(runStep, steps[currentStep - 1]?.duration || 1000);
      } else {
        // Generate result based on selected applicant
        const isSynthetic = selectedApplicant === 'synthetic';
        setResult({
          decision: isSynthetic ? 'REJECT' : 'APPROVE',
          specterScore: isSynthetic ? 23 : 94,
          lcsScore: isSynthetic ? 18 : 91,
          aiSyntheticProb: isSynthetic ? 87 : 8,
          confidence: isSynthetic ? 94 : 97,
          redFlags: isSynthetic ? [
            'Credit file age mismatch (14 months vs 38 years claimed)',
            'VoIP phone number detected',
            'Employer verification failed',
            'Commercial mailbox as residence',
            'Device seen in 47 other applications',
            'SSN issuance date mismatch'
          ] : [],
          processingTime: '7.2s',
          blockchainTx: '0x7f3a' + Math.random().toString(16).slice(2, 10),
        });
        setIsRunning(false);
      }
    };
    runStep();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Identity Verification</h2>
            <p className="text-slate-500">End-to-end verification flow using all Specter layers</p>
          </div>
          <button
            onClick={runVerification}
            disabled={isRunning}
            className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors font-semibold disabled:opacity-50"
          >
            {isRunning ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                Run Verification
              </>
            )}
          </button>
        </div>
      </div>

      {/* Applicant Info */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h3 className="font-semibold text-slate-800 mb-4">Current Applicant</h3>
        <div className={`p-4 rounded-lg border-2 ${
          selectedApplicant === 'synthetic' ? 'border-red-200 bg-red-50' : 'border-emerald-200 bg-emerald-50'
        }`}>
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
              selectedApplicant === 'synthetic' ? 'bg-red-100' : 'bg-emerald-100'
            }`}>
              <User className={`w-7 h-7 ${selectedApplicant === 'synthetic' ? 'text-red-600' : 'text-emerald-600'}`} />
            </div>
            <div>
              <h4 className="font-semibold text-slate-800">
                {selectedApplicant === 'synthetic' ? 'Michael R. Johnson' : 'Sarah M. Thompson'}
              </h4>
              <p className="text-sm text-slate-500">
                {selectedApplicant === 'synthetic' ? 'Synthetic Identity Test Case' : 'Real Identity Test Case'}
              </p>
            </div>
            <div className="ml-auto text-right">
              <p className="text-sm text-slate-500">Switch in Life Signal Oracle tab</p>
            </div>
          </div>
        </div>
      </div>

      {/* Processing Pipeline */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h3 className="font-semibold text-slate-800 mb-6">Verification Pipeline</h3>
        <div className="flex items-center justify-between">
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <div className={`flex flex-col items-center ${step > i ? 'opacity-100' : 'opacity-40'}`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-3 transition-all ${
                  step > i ? 'bg-emerald-100 border-2 border-emerald-500' :
                  step === i && isRunning ? 'bg-amber-100 border-2 border-amber-500' :
                  'bg-slate-100 border-2 border-slate-200'
                }`}>
                  {step > i ? (
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  ) : step === i && isRunning ? (
                    <Loader2 className="w-8 h-8 text-amber-600 animate-spin" />
                  ) : (
                    <s.icon className="w-8 h-8 text-slate-400" />
                  )}
                </div>
                <p className="font-medium text-sm text-slate-700">{s.name}</p>
                <p className="text-xs text-slate-400 text-center max-w-[120px]">
                  {step === i && isRunning ? s.description : ''}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-1 mx-4 rounded-full ${step > i ? 'bg-emerald-500' : 'bg-slate-200'}`}></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Result */}
      {result && (
        <div className={`rounded-xl p-8 border-2 ${
          result.decision === 'APPROVE' 
            ? 'bg-emerald-50 border-emerald-200' 
            : 'bg-red-50 border-red-200'
        }`}>
          <div className="grid grid-cols-4 gap-8">
            {/* Decision */}
            <div className="text-center">
              <div className={`w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center ${
                result.decision === 'APPROVE' ? 'bg-emerald-100' : 'bg-red-100'
              }`}>
                {result.decision === 'APPROVE' ? (
                  <CheckCircle className="w-12 h-12 text-emerald-600" />
                ) : (
                  <XCircle className="w-12 h-12 text-red-600" />
                )}
              </div>
              <p className={`text-3xl font-bold ${
                result.decision === 'APPROVE' ? 'text-emerald-600' : 'text-red-600'
              }`}>{result.decision}</p>
              <p className="text-slate-500 mt-1">
                {result.decision === 'APPROVE' ? 'Identity Verified' : 'Synthetic Detected'}
              </p>
            </div>

            {/* Scores */}
            <div>
              <h4 className="font-semibold text-slate-700 mb-4">Scores</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Specter Score</span>
                    <span className="font-bold">{result.specterScore}/100</span>
                  </div>
                  <div className="h-2 bg-white rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${result.specterScore > 70 ? 'bg-emerald-500' : 'bg-red-500'}`}
                      style={{ width: `${result.specterScore}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Life Continuity</span>
                    <span className="font-bold">{result.lcsScore}/100</span>
                  </div>
                  <div className="h-2 bg-white rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${result.lcsScore > 70 ? 'bg-emerald-500' : 'bg-red-500'}`}
                      style={{ width: `${result.lcsScore}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>AI Synthetic Prob.</span>
                    <span className="font-bold">{result.aiSyntheticProb}%</span>
                  </div>
                  <div className="h-2 bg-white rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${result.aiSyntheticProb < 30 ? 'bg-emerald-500' : 'bg-red-500'}`}
                      style={{ width: `${result.aiSyntheticProb}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Red Flags */}
            <div>
              <h4 className="font-semibold text-slate-700 mb-4">Red Flags</h4>
              {result.redFlags.length > 0 ? (
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {result.redFlags.map((flag, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-red-700">{flag}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center gap-2 text-emerald-600">
                  <CheckCircle className="w-5 h-5" />
                  <span>No red flags detected</span>
                </div>
              )}
            </div>

            {/* Audit */}
            <div>
              <h4 className="font-semibold text-slate-700 mb-4">Audit Trail</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-slate-400 text-xs">Confidence</p>
                  <p className="font-bold text-slate-800">{result.confidence}%</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-slate-400 text-xs">Processing Time</p>
                  <p className="font-bold text-slate-800">{result.processingTime}</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-slate-400 text-xs">Blockchain TX</p>
                  <p className="font-mono text-xs text-emerald-600">{result.blockchainTx}...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================
// AI ENSEMBLE VIEW
// ============================================
function AIEnsembleView() {
  const models = [
    { name: 'SynthFace', purpose: 'AI-generated face detection', accuracy: 94.2, status: 'active', icon: '🎭' },
    { name: 'DocForge', purpose: 'Document authenticity analysis', accuracy: 91.8, status: 'active', icon: '📄' },
    { name: 'VoiceGhost', purpose: 'Voice clone detection', accuracy: 89.5, status: 'active', icon: '🎤' },
    { name: 'DeepVideo', purpose: 'Deepfake video detection', accuracy: 92.1, status: 'active', icon: '🎬' },
    { name: 'BehaviorPrint', purpose: 'Behavioral biometrics', accuracy: 87.3, status: 'active', icon: '⌨️' },
    { name: 'AnomalyHunter', purpose: 'Pattern anomaly detection', accuracy: 93.7, status: 'active', icon: '📈' },
    { name: 'TextGen', purpose: 'AI text detection', accuracy: 88.9, status: 'active', icon: '📝' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">AI Detection Ensemble</h2>
        <p className="text-slate-500">7 specialized models working together to detect synthetic content</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {models.map((model, i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-2xl">
                {model.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-slate-800">{model.name}</h3>
                  <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full font-medium">
                    {model.status}
                  </span>
                </div>
                <p className="text-sm text-slate-500 mb-3">{model.purpose}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Accuracy:</span>
                  <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: `${model.accuracy}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-emerald-600">{model.accuracy}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-6">
        <h3 className="font-semibold text-emerald-800 mb-3 flex items-center gap-2">
          <Info className="w-5 h-5" />
          Ensemble Voting Mechanism
        </h3>
        <p className="text-emerald-700 text-sm">
          Each model votes with a confidence score. Better-performing models receive higher weight in the final decision. 
          When models significantly disagree, the case is automatically routed to the Human Jury Network for review.
          This approach eliminates the 62% blind spot that single-model systems suffer from.
        </p>
      </div>
    </div>
  );
}

// ============================================
// JURY NETWORK VIEW
// ============================================
function JuryNetworkView() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [userVote, setUserVote] = useState(null);

  const cases = [
    { id: 'CASE-4521', lcs: 52, aiProb: 61, flags: 3, priority: 'high', time: '5 min ago' },
    { id: 'CASE-4520', lcs: 58, aiProb: 55, flags: 2, priority: 'medium', time: '12 min ago' },
    { id: 'CASE-4519', lcs: 45, aiProb: 72, flags: 4, priority: 'high', time: '18 min ago' },
  ];

  const submitVote = (verdict) => {
    setUserVote(verdict);
    setTimeout(() => setUserVote(null), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Human Jury Network</h2>
        <p className="text-slate-500">Trained reviewers validate edge cases and resolve disputes</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Pending Cases */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100">
            <h3 className="font-semibold text-slate-800">Pending Cases</h3>
          </div>
          <div className="p-4 space-y-3">
            {cases.map((c, i) => (
              <button
                key={i}
                onClick={() => setSelectedCase(c)}
                className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                  selectedCase?.id === c.id 
                    ? 'border-emerald-500 bg-emerald-50' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-slate-800">{c.id}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    c.priority === 'high' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                  }`}>{c.priority}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div><span className="text-slate-400">LCS:</span> <span className="text-amber-600 font-medium">{c.lcs}</span></div>
                  <div><span className="text-slate-400">AI:</span> <span className="text-amber-600 font-medium">{c.aiProb}%</span></div>
                  <div><span className="text-slate-400">Flags:</span> <span className="text-red-600 font-medium">{c.flags}</span></div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Case Review */}
        <div className="col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100">
            <h3 className="font-semibold text-slate-800">Case Review</h3>
          </div>
          {selectedCase ? (
            <div className="p-6">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-3xl font-bold text-amber-600">{selectedCase.lcs}</div>
                  <div className="text-xs text-amber-600">Life Continuity</div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-3xl font-bold text-amber-600">{selectedCase.aiProb}%</div>
                  <div className="text-xs text-amber-600">AI Synthetic</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-3xl font-bold text-red-600">{selectedCase.flags}</div>
                  <div className="text-xs text-red-600">Red Flags</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <button
                  onClick={() => submitVote('SYNTHETIC')}
                  className="p-4 bg-red-50 border-2 border-red-200 rounded-xl text-center hover:border-red-400 transition-colors"
                >
                  <XCircle className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <span className="font-semibold text-red-700">SYNTHETIC</span>
                </button>
                <button
                  onClick={() => submitVote('REAL')}
                  className="p-4 bg-emerald-50 border-2 border-emerald-200 rounded-xl text-center hover:border-emerald-400 transition-colors"
                >
                  <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                  <span className="font-semibold text-emerald-700">REAL</span>
                </button>
                <button
                  onClick={() => submitVote('UNCERTAIN')}
                  className="p-4 bg-amber-50 border-2 border-amber-200 rounded-xl text-center hover:border-amber-400 transition-colors"
                >
                  <AlertCircle className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                  <span className="font-semibold text-amber-700">UNCERTAIN</span>
                </button>
              </div>

              {userVote && (
                <div className="p-4 bg-emerald-100 border border-emerald-200 rounded-lg text-center">
                  <p className="text-emerald-700 font-medium">
                    ✓ Vote submitted: {userVote} | +10 $SPEC earned | Recorded on blockchain
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="p-12 text-center text-slate-400">
              <Users className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Select a case to review</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================
// BLOCKCHAIN VIEW
// ============================================
function BlockchainView() {
  const transactions = [
    { hash: '0x7f3a8c2b...', type: 'IdentityAttestation', block: 18234567, time: '2 min ago' },
    { hash: '0x9e4d1f7a...', type: 'JuryVote', block: 18234566, time: '5 min ago' },
    { hash: '0x2b8c3e5f...', type: 'FraudRegistry', block: 18234565, time: '8 min ago' },
    { hash: '0x6a9f2d4c...', type: 'RewardDistribution', block: 18234564, time: '12 min ago' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Blockchain Audit Trail</h2>
        <p className="text-slate-500">All decisions recorded immutably on Polygon L2</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Total Attestations', value: '2.4M', icon: Shield },
          { label: 'Fraud Records', value: '156K', icon: AlertTriangle },
          { label: 'Jury Votes', value: '847K', icon: Users },
          { label: '$SPEC Distributed', value: '12.5M', icon: Coins },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-slate-500 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100">
          <h3 className="font-semibold text-slate-800">Recent Transactions</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {transactions.map((tx, i) => (
            <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <Link className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-mono text-sm text-emerald-600">{tx.hash}</p>
                  <p className="text-xs text-slate-400">{tx.type} • Block #{tx.block}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-400">{tx.time}</span>
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
