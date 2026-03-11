import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, Brain, Users, Link, Coins, Scale, AlertTriangle, CheckCircle,
  XCircle, Clock, Upload, FileText, User, Activity, Database, Globe,
  Zap, Eye, Lock, TrendingUp, BarChart3, PieChart, ArrowRight, ChevronRight,
  Loader2, Fingerprint, Wifi, Server, Award, AlertCircle, CreditCard,
  Building2, Phone, Mail, MapPin, Briefcase, Heart, Car, Home, Smartphone,
  Calendar, DollarSign, FileCheck, Radio, Signal, Cpu, Network, Layers,
  Play, Pause, RotateCcw, ChevronDown, ExternalLink, Info, Sparkles, Landmark,
  Navigation, Terminal
} from 'lucide-react';

// ============================================
// HELPER COMPONENTS
// ============================================

function ProgressBar({ currentStage }) {
  const stages = [
    { id: 'intro', label: 'Persona' },
    { id: 'application', label: 'Apply' },
    { id: 'oracle', label: 'Data' },
    { id: 'ai', label: 'AI' },
    { id: 'jury', label: 'Jury' },
    { id: 'consensus', label: 'Chain' },
    { id: 'result', label: 'Outcome' }
  ];

  const currentIndex = stages.findIndex(s => s.id === currentStage);

  return (
    <div className="flex items-center gap-2">
      {stages.map((stage, i) => {
        const isPast = i < currentIndex;
        const isCurrent = i === currentIndex;
        return (
          <React.Fragment key={stage.id}>
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-500 ${isPast ? 'bg-emerald-500 text-white' :
                isCurrent ? 'bg-emerald-600 text-white ring-4 ring-emerald-100' :
                  'bg-slate-100 text-slate-400'
                }`}>
                {isPast ? <CheckCircle className="w-4 h-4" /> : i + 1}
              </div>
              <span className={`text-[10px] mt-1 font-bold uppercase tracking-tighter ${isCurrent ? 'text-emerald-600' : 'text-slate-400'}`}>
                {stage.label}
              </span>
            </div>
            {i < stages.length - 1 && (
              <div className={`h-0.5 w-6 rounded-full mb-4 ${i < currentIndex ? 'bg-emerald-500' : 'bg-slate-100'}`} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function MintingSplash({ tx, onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-50 bg-emerald-600/95 flex flex-col items-center justify-center text-white backdrop-blur-md rounded-3xl"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="mb-6"
      >
        <Layers className="w-20 h-20" />
      </motion.div>
      <h3 className="text-3xl font-bold mb-2">Minting Identity Evidence...</h3>
      <p className="text-emerald-100 font-mono text-sm opacity-80">PROVING CONTINUITY AT LAYER {tx?.layer || 'X'}</p>
      <p className="mt-4 text-emerald-200 font-mono text-xs bg-black/20 px-4 py-2 rounded-full border border-white/10">
        TX Hash: 0x{Math.random().toString(16).slice(2, 10)}...{Math.random().toString(16).slice(2, 6)}
      </p>

      <div className="mt-12 flex gap-3">
        {[1, 2, 3].map(i => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            className="w-4 h-4 bg-white rounded-full"
          />
        ))}
      </div>
    </motion.div>
  );
}

function ProtocolSentinel({ appStage, selectedApplicant, logs }) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const logContainerRef = useRef(null);

  const getStageInsights = (stage) => {
    switch (stage) {
      case 'intro':
        return "MASTER ORCHESTRATOR ONLINE. I am the Specter Sentinel. I am currently monitoring persona selection to initialize the cryptographic session intent. Ready to deploy autonomous scouts.";
      case 'application':
        return "ORCHESTRATION ACTIVE: Supervising application telemetry. Analyzing keystroke latency and 'Cognitive Jitter' to establish a baseline for human-like linguistic nuances.";
      case 'oracle':
        return "SCOUT MESH DEPLOYED. I am now managing 8 Scout Agents across global data layers. Watch the Equifax and Plaid streams—I am prepared to re-route signals if injection points are detected.";
      case 'ai':
        return "EXECUTING CROSS-MODEL VERIFICATION. I am correlating high-entropy outputs from the CNN-ResNet50 (Vision) and Transformer (Behavioral) layers to find hidden contradictions.";
      case 'jury':
        return "TECHNICAL CASE CLERK ACTIVE. I have distilled 500+ raw telemetry signals into an evidence packet. Presenting findings to the Human Jury for final adjudication. Staking $SPEC rewards now.";
      case 'consensus':
        return "FINANCIAL INTEGRITY ENFORCED. The network has reached consensus. I am now authorizing the minting of the Identity Evidence on-chain via the Smart Contract layer.";
      case 'result':
        return "ORCHESTRATION COMPLETE. The Identity Audit Trail is sealed and verified. Releasing ZK-Proofs to authorized consortium partners (J.P. Morgan, HSBC).";
      default:
        return "System Sentinel standing by for protocol initialization.";
    }
  };

  useEffect(() => {
    setIsTyping(true);
    const text = getStageInsights(appStage);
    let i = 0;
    setMessage('');
    const interval = setInterval(() => {
      setMessage(text.slice(0, i));
      i++;
      if (i > text.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 15);
    return () => clearInterval(interval);
  }, [appStage]);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-80 bg-slate-900 border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.1)] rounded-3xl overflow-hidden relative"
          >
            {/* Master Header */}
            <div className="bg-emerald-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-white animate-pulse" />
                <h4 className="font-black text-white text-xs tracking-widest uppercase">Master Orchestrator</h4>
              </div>
              <div className="px-2 py-0.5 bg-black/20 rounded text-[9px] font-bold text-white uppercase tracking-tighter">
                Logic v4.2
              </div>
            </div>

            <div className="p-6">
              {/* Active Command */}
              <div className="mb-6 p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Active Analysis</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed font-medium min-h-[60px]">
                  {message}
                  {isTyping && <span className="inline-block w-1.5 h-4 bg-emerald-500 ml-1 animate-pulse align-middle"></span>}
                </p>
              </div>

              {/* Master Command Log */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3 h-3 text-slate-500" />
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Autonomous Command Stream</span>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-500/50">LIVE_TELEMETRY</span>
                </div>
                <div 
                  ref={logContainerRef}
                  className="h-32 bg-black/40 rounded-xl p-3 font-mono text-[9px] overflow-y-auto scrollbar-hide border border-white/5"
                >
                  {logs.map((log, i) => (
                    <div key={i} className="mb-1.5 flex gap-2">
                      <span className="text-emerald-500 font-bold opacity-50 shrink-0">[{log.time}]</span>
                      <span className={`${log.type === 'cmd' ? 'text-white' : 'text-slate-400 italic'}`}>
                        {log.msg}
                      </span>
                    </div>
                  ))}
                  {logs.length === 0 && <div className="text-slate-600 italic">Initializing command stream...</div>}
                </div>
              </div>

              {/* System Status */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[8px] text-slate-500 font-bold uppercase tracking-widest mb-1">Authorization</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    <span className="text-[10px] text-slate-200 font-bold uppercase">Root_Sentinel</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                   <span className="text-[8px] text-slate-500 font-bold uppercase tracking-widest mb-1">Sub_Agents</span>
                   <span className="text-[10px] text-emerald-500 font-mono">08_CONNECTED</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 transition-all duration-300 ${
          isOpen ? 'bg-slate-900 border-emerald-500 rotate-90' : 'bg-emerald-600 border-emerald-400/30'
        }`}
      >
        {isOpen ? (
          <RotateCcw className="w-7 h-7 text-white" />
        ) : (
          <div className="relative">
            <Cpu className="w-8 h-8 text-white animate-pulse" />
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-emerald-400 rounded-full blur-md"
            ></motion.div>
          </div>
        )}
      </motion.button>
    </div>
  );
}

export default function SpecterMVP() {
  const [appStage, setAppStage] = useState('intro'); // intro, application, oracle, ai, jury, consensus, result
  const [selectedApplicant, setSelectedApplicant] = useState('real');
  const [blockchainTx, setBlockchainTx] = useState(null);
  const [sentinelLogs, setSentinelLogs] = useState([
    { time: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }), msg: 'SYSTEM BOOT: SPECTER_ROOT v4.2', type: 'info' },
    { time: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }), msg: 'ORCHESTRATOR STATUS: ONLINE', type: 'cmd' }
  ]);

  const addSentinelLog = (msg, type = 'cmd') => {
    setSentinelLogs(prev => [...prev.slice(-19), {
      time: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      msg,
      type
    }]);
  };

  useEffect(() => {
    const stageCommands = {
      intro: 'INITIALIZING PERSONA_INTENT_HASH...',
      application: 'DEPLOYING TELEMETRY_SNIFFER.ANALYZER...',
      oracle: 'COMMISSIONING SCOUT_MESH_GRID...',
      ai: 'EXECUTING PARALLEL_ENSEMBLE.DEDUCER...',
      jury: 'DEDUCTING CASE_EVIDENCE.DISTILLER...',
      consensus: 'COMMANDING CHAIN_STAMP.ANCHOR...',
      result: 'GENERATING AUDIT_VERIFICATION.RELAY...'
    };
    if (stageCommands[appStage]) {
      addSentinelLog(stageCommands[appStage]);
      if (appStage === 'oracle') {
        setTimeout(() => addSentinelLog('CONNECTING_SCOUTS: 08/08 VERIFIED'), 800);
      }
      if (appStage === 'ai') {
        setTimeout(() => addSentinelLog('RESOLVING_CROSS_MODEL_BIAS: 0.00%'), 1200);
      }
    }
  }, [appStage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <ProtocolSentinel appStage={appStage} selectedApplicant={selectedApplicant} logs={sentinelLogs} />

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

            <div className="hidden md:block">
              <ProgressBar currentStage={appStage} />
            </div>

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
      <main className="max-w-7xl mx-auto px-6 py-8 relative">
        <AnimatePresence mode="wait">
          {appStage === 'intro' && (
            <IntroStage
              setSelectedApplicant={setSelectedApplicant}
              onNext={() => setAppStage('application')}
              addSentinelLog={addSentinelLog}
            />
          )}
          {appStage === 'application' && (
            <ApplicationStage
              selectedApplicant={selectedApplicant}
              onNext={() => setAppStage('oracle')}
              addSentinelLog={addSentinelLog}
            />
          )}
          {appStage === 'oracle' && (
            <LifeSignalOracle
              selectedApplicant={selectedApplicant}
              onNext={() => setAppStage('ai')}
              addSentinelLog={addSentinelLog}
            />
          )}
          {appStage === 'ai' && (
            <AIEnsembleStage
              selectedApplicant={selectedApplicant}
              onNext={() => {
                if (selectedApplicant === 'real') {
                  setAppStage('consensus');
                } else {
                  setAppStage('jury');
                }
              }}
              addSentinelLog={addSentinelLog}
            />
          )}
          {appStage === 'jury' && (
            <JuryNetworkStage
              onNext={() => setAppStage('consensus')}
              addSentinelLog={addSentinelLog}
            />
          )}
          {appStage === 'consensus' && (
            <BlockchainStage
              onNext={(tx) => {
                setBlockchainTx(tx);
                setAppStage('result');
              }}
              addSentinelLog={addSentinelLog}
            />
          )}
          {appStage === 'result' && (
            <ResultStage
              selectedApplicant={selectedApplicant}
              blockchainTx={blockchainTx}
              onRestart={() => setAppStage('intro')}
              addSentinelLog={addSentinelLog}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

// ============================================
// STAGE 1: INTRO (PERSONA SELECTION)
// ============================================
function IntroStage({ setSelectedApplicant, onNext, addSentinelLog }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto space-y-12 py-12"
    >
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-black text-slate-900 leading-tight">
          Select Your <span className="text-emerald-600">Persona</span>
        </h2>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          Experience the Specter Protocol from two different perspectives: a legitimate user and a synthetic identity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            id: 'real',
            name: 'Sarah Smith',
            type: 'Real Identity',
            desc: 'A legitimate applicant with 16 years of credit history, a stable job, and consistent digital patterns.',
            icon: Sparkles,
            color: 'emerald',
            traits: ['Legacy Credit History', 'Verified Employer', 'Active Device FP']
          },
          {
            id: 'synthetic',
            name: 'Michael Smith',
            type: 'Synthetic Identity',
            desc: 'A sophisticated deep-layer fake. SSN age mismatch, VoIP phone, and AI-generated biometric markers.',
            icon: User,
            color: 'red',
            traits: ['SSN Age Mismatch', 'VoIP Detected', 'AI Biometrics']
          }
        ].map((persona) => (
          <button
            key={persona.id}
            onClick={() => {
              setSelectedApplicant(persona.id);
              addSentinelLog(`PERSONA_LOCKED: ${persona.name.toUpperCase()}`);
              onNext();
            }}
            className="group relative bg-white rounded-3xl border border-slate-200 p-8 text-left transition-all hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-500/10 active:scale-[0.98]"
          >
            <div className={`w-16 h-16 rounded-2xl bg-${persona.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <persona.icon className={`w-8 h-8 text-${persona.color}-600`} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">{persona.name}</h3>
            <p className={`text-sm font-black uppercase tracking-widest text-${persona.color}-600 mb-4`}>{persona.type}</p>
            <p className="text-slate-500 mb-6 leading-relaxed">{persona.desc}</p>

            <div className="flex flex-wrap gap-2">
              {persona.traits.map(trait => (
                <span key={trait} className="text-[10px] font-bold px-2 py-1 bg-slate-50 text-slate-500 rounded-full border border-slate-100 uppercase tracking-tighter">
                  {trait}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
}

// ============================================
// STAGE 2: APPLICATION FORM
// ============================================
function ApplicationStage({ selectedApplicant, onNext, addSentinelLog }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(onNext, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden"
    >
      <div className="p-8 border-b border-slate-100 bg-slate-50/50">
        <h2 className="text-2xl font-bold text-slate-900">Application Submission</h2>
        <p className="text-slate-500">Applicant is submitting their personal details for verification.</p>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">First Name</label>
            <input
              readOnly
              value={selectedApplicant === 'real' ? 'Sarah' : 'Michael'}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Last Name</label>
            <input
              readOnly
              value={selectedApplicant === 'real' ? 'Smith' : 'Johnson'}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Mailing Address</label>
          <input
            readOnly
            value={selectedApplicant === 'real' ? '452 Marine Drive, Santa Monica, CA' : '122 West 27th St, UPS Mailbox 402, NY'}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
            <input
              readOnly
              value={selectedApplicant === 'real' ? '+1 (310) 555-0192' : '+1 (646) 555-8821'}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Social Security</label>
            <input
              readOnly
              value="***-**-4482"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium"
            />
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-emerald-600/20 active:scale-95 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Encrypting & Sending...
              </>
            ) : (
              <>
                <Shield className="w-5 h-5" />
                Submit Application
              </>
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
}

// ============================================
// LIFE SIGNAL ORACLE - THE UNIQUE DIFFERENTIATOR
// ============================================
function LifeSignalOracle({ selectedApplicant, onNext, addSentinelLog }) {
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamedSignals, setStreamedSignals] = useState([]);
  const [lcsScore, setLcsScore] = useState(0);
  const [showMinting, setShowMinting] = useState(false);
  const [signalStats, setSignalStats] = useState({
    freshness: 0,
    diversity: 0,
    history: 0,
    consistency: 0,
    density: 0
  });

  // Autonomous Scout Agents
  const scoutAgents = [
    { id: 'equifax', name: 'Financial Intelligence Scout', icon: CreditCard, category: 'Financial', task: 'Credit DNA Scan', intel: 98 },
    { id: 'experian', name: 'Credit History Scout', icon: Database, category: 'Financial', task: 'Trend Analysis', intel: 94 },
    { id: 'plaid', name: 'Asset & Ownership Scout', icon: Building2, category: 'Financial', task: 'Liquidity Verify', intel: 89 },
    { id: 'truework', name: 'Payroll & Employment Scout', icon: Briefcase, category: 'Employment', task: 'Income Attestation', intel: 92 },
    { id: 'twilio', name: 'Digital & Behavioral Scout', icon: Phone, category: 'Digital', task: 'SIM Swap Detection', intel: 96 },
    { id: 'melissa', name: 'Address Scout', icon: MapPin, category: 'Physical', task: 'Geo-spatial Lock', intel: 85 },
    { id: 'lexisnexis', name: 'Civic & Public Records Scout', icon: FileCheck, category: 'Civic', task: 'Record Matching', intel: 97 },
    { id: 'devicefp', name: 'Device & Mobility Scout', icon: Smartphone, category: 'IoT', task: 'Hardware ID Verify', intel: 91 },
  ];

  // ============================================
  // Oracle Data Definitions (Outside component to prevent re-renders)
  // ============================================

  const realPersonSignals = [
    { source: 'Equifax Credit Bureau', signal: 'Credit file opened: March 2008', age: '16 years', status: 'verified', strength: 95, category: 'Financial' },
    { source: 'Equifax Credit Bureau', signal: 'Active accounts: 7 (3 credit cards, 2 loans, 2 utilities)', age: 'Current', status: 'verified', strength: 92, category: 'Financial' },
    { source: 'Experian Credit Data', signal: 'Payment history: 98.5% on-time over 192 months', age: '16 years', status: 'verified', strength: 97, category: 'Financial' },
    { source: 'Plaid Banking API', signal: 'Primary checking account active since 2012', age: '12 years', status: 'verified', strength: 90, category: 'Financial' },
    { source: 'Truework Employment', signal: 'Employed at TechCorp Inc. - verified via payroll API', age: '4 years', status: 'verified', strength: 96, category: 'Employment' },
    { source: 'Spain Property Registry', signal: 'Property Registry verification confirmed', age: '12 years', status: 'verified', strength: 94, category: 'Asset' },
    { source: 'Asset Ownership', signal: 'Asset ownership validation: High Confidence', age: '12 years', status: 'verified', strength: 91, category: 'Asset' },
    { source: 'Twilio Phone Verify', signal: 'Mobile number active since 2015', age: '9 years', status: 'verified', strength: 93, category: 'Digital' },
    { source: 'Social Analysis', signal: 'Social media footprint analysis: Consistent', age: '4 years', status: 'verified', strength: 92, category: 'Digital' },
    { source: 'Connected Device', signal: 'Connected device mapping (with consent)', age: '4 years', status: 'verified', strength: 95, category: 'Device' },
    { source: 'IoT Behavioral', signal: 'IoT behavioral signals verified', age: '6 years', status: 'verified', strength: 88, category: 'Device' },
    { source: 'LexisNexis Identity', signal: 'Sanctions & PEP screening: Clear', age: 'Current', status: 'verified', strength: 98, category: 'Compliance' },
    { source: 'Credential API', signal: 'Education & credential verification confirmed', age: '8 years', status: 'verified', strength: 94, category: 'Compliance' },
  ];

  const syntheticPersonSignals = [
    { source: 'Equifax Credit Bureau', signal: 'Credit file opened: November 2023', age: '14 months', status: 'warning', strength: 25, category: 'Financial' },
    { source: 'Plaid Banking API', signal: 'Bank account opened: October 2023', age: '15 months', status: 'warning', strength: 28, category: 'Financial' },
    { source: 'Truework Employment', signal: 'Employer "Southwest Logistics LLC" - cannot verify', age: 'N/A', status: 'failed', strength: 10, category: 'Employment' },
    { source: 'Property Registry', signal: 'Liens & encumbrance detection triggered', age: '14 months', status: 'suspicious', strength: 35, category: 'Asset' },
    { source: 'Social Analysis', signal: 'Reputation & sentiment scoring - High Risk', age: 'N/A', status: 'missing', strength: 15, category: 'Digital' },
    { source: 'Twilio Phone Verify', signal: 'VoIP number detected (Google Voice)', age: '3 weeks', status: 'failed', strength: 8, category: 'Digital' },
    { source: 'Connected Device', signal: 'Connected device mapping - Proxy/VPN', age: '4 months', status: 'suspicious', strength: 12, category: 'Device' },
    { source: 'IoT Behavioral', signal: 'Geographical consistency checks - Failed', age: '3 weeks', status: 'failed', strength: 8, category: 'Device' },
    { source: 'LexisNexis Identity', signal: 'Sanctions flags found in corporate network', age: 'N/A', status: 'failed', strength: 5, category: 'Compliance' },
    { source: 'Credential API', signal: 'Education credentials could not be validated', age: 'N/A', status: 'failed', strength: 10, category: 'Compliance' },
  ];

  const signalCategoriesData = [
    { id: 'financial', name: 'Financial', desc: 'Bank transaction analysis, payroll & cash flow', icon: Coins, weight: '20%' },
    { id: 'employment', name: 'Employment', desc: 'Payroll records, employment verification', icon: Briefcase, weight: '15%' },
    { id: 'asset', name: 'Asset', desc: 'Spain Property Registry, Ownership Validation', icon: Home, weight: '15%' },
    { id: 'digital', name: 'Digital', desc: 'Twilio phone history, Digital footprint analysis', icon: Smartphone, weight: '15%' },
    { id: 'compliance', name: 'Compliance', desc: 'LexisNexis screening, Sanctions & Credential verify', icon: Shield, weight: '15%' },
    { id: 'device', name: 'Device', desc: 'Connected device mapping, IoT behavioral signals', icon: Cpu, weight: '10%' },
    { id: 'iot', name: 'IoT', desc: 'Hardware fingerpting, Network consistency', icon: Network, weight: '10%' },
  ];


  const [connectingStates, setConnectingStates] = useState({});
  const [isConnecting, setIsConnecting] = useState(false);
  const [adversarialEvent, setAdversarialEvent] = useState(null);
  const [consensusLog, setConsensusLog] = useState("Awaiting scout reports...");

  const currentSignals = selectedApplicant === 'real' ? realPersonSignals : syntheticPersonSignals;

  // Stream signals with realistic timing
  useEffect(() => {
    let interval;
    if (isStreaming) {
      let index = 0;
      interval = setInterval(() => {
        if (index < currentSignals.length) {
          const signal = currentSignals[index];
          setStreamedSignals(prev => [...prev, signal]);

          // Flash the corresponding category
          const catId = signal.category.toLowerCase();
          setConnectingStates(prev => ({ ...prev, [catId]: true }));
          setTimeout(() => setConnectingStates(prev => ({ ...prev, [catId]: false })), 600);

          // Calculate running LCS score
          setLcsScore(prev => {
            const signalsCount = index + 1;
            const currentTotal = prev * index;
            return Math.round((currentTotal + signal.strength) / signalsCount);
          });

          // Update signal stats
          setSignalStats(prev => {
            const signals = currentSignals.slice(0, index + 1);
            const categories = [...new Set(signals.map(s => s.category))];
            const verifiedCount = signals.filter(s => s.status === 'verified').length;

            return {
              freshness: Math.min(100, Math.round((signals.filter(s => s.age !== 'N/A').length / signals.length) * 100)),
              diversity: Math.round((categories.length / 6) * 100),
              history: selectedApplicant === 'real' ? Math.min(100, index * 6) : Math.min(30, index * 2),
              consistency: Math.round((verifiedCount / signals.length) * 100),
              density: Math.min(100, Math.round((signals.length / 17) * 100))
            };
          });

          // Simulate Adversarial Attack for Synthetic Persona
          if (selectedApplicant === 'synthetic' && index === 4) {
            setAdversarialEvent({
              type: 'Signal Injection',
              severity: 'CRITICAL',
              desc: 'Adversarial Agent attempting to spoof legacy credit history...'
            });
          }
          if (selectedApplicant === 'synthetic' && index === 8) {
            setAdversarialEvent({
              type: 'Deepfake Biometrics',
              severity: 'HIGH',
              desc: 'Attempting to bypass IoT hardware ID via emulator...'
            });
          }
          if (selectedApplicant === 'synthetic' && index === 12) {
            setAdversarialEvent({
              type: 'Consensus Poisoning',
              severity: 'MEDIUM',
              desc: 'Injecting false "Verified" signals into the mesh...'
            });
            setTimeout(() => setAdversarialEvent(null), 3000);
          }

          // Update Consensus Reasoning
          if (index % 3 === 0) {
            const messages = [
              "Consensus Agent: Cross-referencing financial scouts...",
              "Consensus Agent: Validating digital vs physical alignment...",
              "Consensus Agent: Detecting adversarial patterns in IoT stream...",
              "Consensus Agent: Finalizing multi-scout attestation..."
            ];
            setConsensusLog(messages[Math.min(messages.length - 1, Math.floor(index / 4))]);
          }

          index++;
        } else {
          clearInterval(interval);
          setIsStreaming(false);
          setIsConnecting(false);
          setAdversarialEvent(null);
          setConsensusLog(selectedApplicant === 'real' ? "Consensus Reached: High Identity Continuity Verified." : "Consensus Reached: Synthetic Identity Patterns Confirmed.");
        }
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isStreaming, selectedApplicant]); // Optimized dependencies

  const startStreaming = () => {
    setIsConnecting(true);
    setStreamedSignals([]);
    setLcsScore(0);
    setSignalStats({ freshness: 0, diversity: 0, history: 0, consistency: 0, density: 0 });

    // Initial "Connecting" animation
    let count = 0;
    const connInterval = setInterval(() => {
      if (count < 8) {
        const agent = scoutAgents[count];
        setConnectingStates(prev => ({ ...prev, [agent.id.toLowerCase()]: true }));
        count++;
      } else {
        clearInterval(connInterval);
        setIsConnecting(false);
        setIsStreaming(true);
      }
    }, 150);
  };

  const resetStream = () => {
    setStreamedSignals([]);
    setLcsScore(0);
    setSignalStats({ freshness: 0, diversity: 0, history: 0, consistency: 0, density: 0 });
    setIsStreaming(false);
    setIsConnecting(false);
    setConnectingStates({});
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'verified': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'warning': return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'suspicious': return 'bg-orange-50 text-orange-600 border-orange-100';
      case 'failed': return 'bg-red-50 text-red-600 border-red-100';
      default: return 'bg-slate-50 text-slate-500 border-slate-100';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Financial': return Coins;
      case 'Employment': return Briefcase;
      case 'Asset': return Home;
      case 'Digital': return Smartphone;
      case 'Physical': return MapPin;
      case 'Civic': return Landmark;
      case 'IoT': return Network;
      case 'Compliance': return Shield;
      default: return Database;
    }
  };

  return (
    <div className="space-y-8 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl overflow-hidden relative">
      {/* Background Glows (Subtler for Light Mode) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Header Section */}
      <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-600/20">
            <Radio className="w-10 h-10 text-white animate-pulse" />
          </div>
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-2 flex items-center gap-3">
              Data Layer: <span className="text-emerald-600">Autonomous Scout Network</span>
            </h2>
            <p className="text-slate-500 text-lg">
              8 specialized scout agents intercepting and verifying continuous life signals
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {!isStreaming && !isConnecting ? (
            <button
              onClick={startStreaming}
              className="group relative px-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all flex items-center gap-3 overflow-hidden shadow-lg shadow-emerald-600/20"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
              <Play className="w-5 h-5 fill-current" />
              Deploy Scout Agents
            </button>
          ) : (
            <div className="flex items-center gap-4 px-8 py-4 bg-slate-50 text-emerald-600 rounded-2xl font-bold border border-emerald-100">
              <Loader2 className="w-5 h-5 animate-spin" />
              {isConnecting ? 'Authenticating Scout Mesh...' : 'Active Scouting in Progress...'}
            </div>
          )}
          <button
            onClick={resetStream}
            className="p-4 text-slate-400 hover:text-slate-600 transition-colors bg-slate-50 rounded-2xl border border-slate-200"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showMinting && (
          <MintingSplash
            tx={{ layer: 'DATA' }}
            onComplete={() => {
              setShowMinting(false);
              onNext();
            }}
          />
        )}
      </AnimatePresence>

      {/* Main Grid Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">

        {/* Left Column: 7 Signal Categories */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between mb-2 px-2">
            <h3 className="text-emerald-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              Active Scout Agents (Multi-Modal)
            </h3>
            <span className="text-slate-500 text-xs font-mono">ENCRYPTED STREAM</span>
          </div>

          <div className="grid gap-3">
            {scoutAgents.map((agent) => {
              const isQuerying = connectingStates[agent.id.toLowerCase()];
              return (
                <div
                  key={agent.id}
                  className={`group flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 ${isQuerying ? 'bg-emerald-50 border-emerald-200 translate-x-2' : 'bg-white border-slate-100 hover:border-slate-300 shadow-sm'
                    }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isQuerying ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 rotate-12 scale-110' : 'bg-slate-50 text-slate-400'
                    }`}>
                    <agent.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className={`font-bold text-lg ${isQuerying ? 'text-emerald-700' : 'text-slate-700'}`}>{agent.name}</h4>
                      <span className="text-[10px] text-slate-400 font-mono tracking-tighter">INTEL: {agent.intel}%</span>
                    </div>
                    <p className="text-sm text-slate-500 truncate">{isQuerying ? agent.task : agent.category}</p>
                  </div>
                  {isQuerying && (
                    <div className="flex gap-1">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-1 h-1 rounded-full bg-emerald-600 animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}></div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Scoring & Stream */}
        <div className="lg:col-span-6 space-y-6">

          {/* Scoring Formula & LCS Section */}
          <div className="bg-slate-50/50 rounded-3xl border border-slate-200 p-8 shadow-inner relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 p-4">
              <Radio className={`w-8 h-8 ${isStreaming ? 'text-emerald-600 animate-pulse' : 'text-slate-200'}`} />
            </div>

            <div className="grid grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-6">
                  Life Continuity Score (LCS)
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-4 text-emerald-600">
                      <Brain className="w-4 h-4" />
                      <span className="text-xs font-black uppercase tracking-widest">Consensus Agent</span>
                    </div>
                    <div className="p-4 bg-slate-900 rounded-xl font-mono text-[10px] text-emerald-400 border border-emerald-500/30">
                      <div className="flex gap-2">
                        <span className="text-emerald-600">{">>"}</span>
                        <p>{consensusLog}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="relative inline-block">
                  <svg className="w-48 h-48 transform -rotate-90">
                    <circle cx="96" cy="96" r="88" className="stroke-slate-100 fill-none" strokeWidth="12" />
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      className={`transition-all duration-1000 ease-out fill-none ${lcsScore > 79 ? 'stroke-emerald-500' :
                        lcsScore > 39 ? 'stroke-amber-500' :
                          'stroke-red-500'
                        }`}
                      strokeWidth="12"
                      strokeDasharray={552}
                      strokeDashoffset={552 - (552 * lcsScore) / 100}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={`text-6xl font-black leading-none ${lcsScore > 79 ? 'text-emerald-600' :
                      lcsScore > 39 ? 'text-amber-600' :
                        lcsScore > 0 ? 'text-red-600' :
                          'text-slate-900'
                      }`}>{lcsScore}</span>
                    <span className="text-xs font-bold text-slate-400 tracking-widest uppercase mt-2">LCS INDEX</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-col items-center gap-2">
                  <div className={`px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-[2px] border ${lcsScore > 79 ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                    lcsScore > 39 ? 'bg-amber-50 text-amber-600 border-amber-200' :
                      lcsScore > 0 ? 'bg-red-50 text-red-600 border-red-200' :
                        'bg-slate-100 text-slate-400 border-slate-200'
                    }`}>
                    {lcsScore > 79 ? '✓ Real Person — Approved for AI Layer' :
                      lcsScore > 39 ? '⚠ Uncertain — Escalating' :
                        lcsScore > 0 ? '✗ Ghost — Flagged for AI Layer' :
                          isConnecting || isStreaming ? 'CALCULATING...' : 'READY FOR QUERY'}
                  </div>

                  {lcsScore > 0 && !isStreaming && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      onClick={() => setShowMinting(true)}
                      className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700 transition-all shadow-lg flex items-center gap-2 mx-auto"
                    >
                      Process & Move to AI Layer <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Connected Data Sources - Mini View */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <p className="text-xs text-slate-500 font-bold uppercase mb-4 tracking-widest flex items-center gap-2">
              <Network className="w-4 h-4 text-emerald-600" />
              Authenticated Data Feeds (8)
            </p>
            <div className="flex flex-wrap gap-2">
              {scoutAgents.map((agent, i) => {
                const isConn = connectingStates[agent.id.toLowerCase()] || isStreaming;
                return (
                  <div key={agent.id} className={`px-3 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-2 transition-all duration-500 ${isConn ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-slate-50 text-slate-400 border-slate-100'
                    }`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${isConn ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]' : 'bg-slate-200'}`}></div>
                    {agent.id.toUpperCase()} SCOUT
                  </div>
                );
              })}
            </div>
          </div>

          {/* Live Stream Panel */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 h-[280px] flex flex-col overflow-hidden shadow-inner relative">
            {/* Adversarial Alert Overlay */}
            <AnimatePresence>
              {adversarialEvent && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  className="absolute inset-0 z-20 bg-red-600/90 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-white text-center"
                >
                  <AlertTriangle className="w-16 h-16 mb-4 animate-bounce" />
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">Adversarial Attack Detected</h3>
                  <div className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold mb-4 border border-white/30">
                    TYPE: {adversarialEvent.type} | SEVERITY: {adversarialEvent.severity}
                  </div>
                  <p className="text-sm text-red-100 font-medium max-w-sm">
                    {adversarialEvent.desc}
                  </p>
                  <div className="mt-6 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-red-200">Scout Network Counter-Intercepting...</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="p-3 border-b border-slate-200 bg-white flex items-center justify-between">
              <span className="text-[10px] font-black text-emerald-600 tracking-widest uppercase">Live Signal Log</span>
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-100 border border-red-200"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-amber-100 border border-amber-200"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-100 border border-emerald-200"></div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 font-mono">
              {streamedSignals.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-300">
                  <Activity className="w-8 h-8 mb-2 opacity-20" />
                  <p className="text-xs">Waiting for data synchronization...</p>
                </div>
              ) : (
                [...streamedSignals].reverse().map((signal, i) => {
                  const Icon = getCategoryIcon(signal.category);
                  return (
                    <div
                      key={i}
                      className="bg-white rounded-xl border border-slate-100 p-4 animate-fadeIn relative overflow-hidden group shadow-sm hover:border-emerald-200 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${signal.status === 'verified' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                          }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-[10px] font-bold text-slate-500">{signal.source}</span>
                            <span className={`text-[9px] px-1.5 py-0.5 rounded border ${getStatusColor(signal.status)}`}>
                              {signal.status.toUpperCase()}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 font-medium leading-relaxed">{signal.signal}</p>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        ::-webkit-scrollbar {
          width: 4px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.1);
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(51, 65, 85, 0.5);
          border-radius: 10px;
        }
      `}</style>
    </div >
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

  const timerRef = React.useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const runVerification = () => {
    setIsRunning(true);
    setStep(0);
    setResult(null);

    let currentStep = 0;
    const runStep = () => {
      if (currentStep < steps.length) {
        setStep(currentStep + 1);
        currentStep++;
        timerRef.current = setTimeout(runStep, steps[currentStep - 1]?.duration || 1000);
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
        <div className={`p-4 rounded-lg border-2 ${selectedApplicant === 'synthetic' ? 'border-red-200 bg-red-50' : 'border-emerald-200 bg-emerald-50'
          }`}>
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center ${selectedApplicant === 'synthetic' ? 'bg-red-100' : 'bg-emerald-100'
              }`}>
              <User className={`w-7 h-7 ${selectedApplicant === 'synthetic' ? 'text-red-600' : 'text-emerald-600'}`} />
            </div>
            <div>
              <h4 className="font-semibold text-slate-800">
                {selectedApplicant === 'synthetic' ? 'Michael R. Smith' : 'Sarah M. Smith'}
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
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-3 transition-all ${step > i ? 'bg-emerald-100 border-2 border-emerald-500' :
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
        <div className={`rounded-xl p-8 border-2 ${result.decision === 'APPROVE'
          ? 'bg-emerald-50 border-emerald-200'
          : 'bg-red-50 border-red-200'
          }`}>
          <div className="grid grid-cols-4 gap-8">
            {/* Decision */}
            <div className="text-center">
              <div className={`w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center ${result.decision === 'APPROVE' ? 'bg-emerald-100' : 'bg-red-100'
                }`}>
                {result.decision === 'APPROVE' ? (
                  <CheckCircle className="w-12 h-12 text-emerald-600" />
                ) : (
                  <XCircle className="w-12 h-12 text-red-600" />
                )}
              </div>
              <p className={`text-3xl font-bold ${result.decision === 'APPROVE' ? 'text-emerald-600' : 'text-red-600'
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
    { name: 'SynthFace', purpose: 'CNN (ResNet-50) for deepfake detection', accuracy: 94.2, status: 'active', icon: '🎭' },
    { name: 'DocForge', purpose: 'Multi-layer CNN for document forensics', accuracy: 91.8, status: 'active', icon: '📄' },
    { name: 'VoiceGhost', purpose: 'RNN-based voice clone detection', accuracy: 89.5, status: 'active', icon: '🎤' },
    { name: 'DeepVideo', purpose: '3D-CNN for deepfake video detection', accuracy: 92.1, status: 'active', icon: '🎬' },
    { name: 'BehaviorPrint', purpose: 'Sequence-aware Transformer biometrics', accuracy: 87.3, status: 'active', icon: '⌨️' },
    { name: 'AnomalyHunter', purpose: 'Vision Transformer (ViT) for patterns', accuracy: 93.7, status: 'active', icon: '📈' },
    { name: 'TextGen', purpose: 'LLm-based AI text detection', accuracy: 88.9, status: 'active', icon: '📝' },
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
                className={`w-full p-4 rounded-lg border-2 text-left transition-all ${selectedCase?.id === c.id
                  ? 'border-emerald-500 bg-emerald-50'
                  : 'border-slate-200 hover:border-slate-300'
                  }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-slate-800">{c.id}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${c.priority === 'high' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                    }`}>{c.priority}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div><span className="text-slate-400">LCS:</span> <span className={`${c.lcs > 70 ? 'text-emerald-600' : c.lcs > 40 ? 'text-amber-600' : 'text-red-600'} font-medium`}>{c.lcs}</span></div>
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
                <div className={`text-center p-4 rounded-lg ${selectedCase.lcs > 70 ? 'bg-emerald-50 text-emerald-600' : selectedCase.lcs > 40 ? 'bg-amber-50 text-amber-600' : 'bg-red-50 text-red-600'}`}>
                  <div className="text-3xl font-bold">{selectedCase.lcs}</div>
                  <div className="text-xs">Life Continuity</div>
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
                  onClick={() => {
                    setUserVote('synthetic');
                    addSentinelLog('MASTER_LOGIC: OVERRIDING_ADJUDICATION(SYNTHETIC)', 'info');
                  }}
                  className="p-4 bg-red-50 border-2 border-red-200 rounded-xl text-center hover:border-red-400 transition-colors"
                >
                  <XCircle className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <span className="text-sm font-bold text-red-700">Flag Synthetic</span>
                </button>
                <button
                  onClick={() => {
                    setUserVote('real');
                    addSentinelLog('MASTER_LOGIC: VALIDATING_IDENTITY(LEGITIMATE)', 'info');
                  }}
                  className="p-4 bg-emerald-50 border-2 border-emerald-200 rounded-xl text-center hover:border-emerald-400 transition-colors"
                >
                  <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                  <span className="text-sm font-bold text-emerald-700">Verify Real</span>
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
// ============================================
// STAGE 4: AI ENSEMBLE
// ============================================
function AIEnsembleStage({ selectedApplicant, onNext, addSentinelLog }) {
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [showMinting, setShowMinting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnalyzing(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const models = [
    { name: 'SynthFace', purpose: 'CNN (ResNet-50) for deepfake detection', accuracy: 94.2, result: selectedApplicant === 'real' ? 'Clean' : '94% Synthetic' },
    { name: 'DocForge', purpose: 'Multi-layer CNN for document forensics', accuracy: 91.8, result: selectedApplicant === 'real' ? 'Verified' : 'Tampered' },
    { name: 'BehaviorPrint', purpose: 'Sequence-aware Transformer biometrics', accuracy: 87.3, result: selectedApplicant === 'real' ? 'Matched' : 'Inconsistent' },
    { name: 'AnomalyHunter', purpose: 'Vision Transformer (ViT) for patterns', accuracy: 93.7, result: selectedApplicant === 'real' ? 'Normal' : 'Anomalous' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-6 relative"
    >
      <AnimatePresence>
        {showMinting && (
          <MintingSplash
            tx={{ layer: 'AI_ENSEMBLE' }}
            onComplete={onNext}
          />
        )}
      </AnimatePresence>

      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">AI Detection <span className="text-blue-600">Ensemble</span></h2>
            <p className="text-slate-500 text-lg">Cross-referencing signals through 7 specialized neural networks.</p>
          </div>
          {isAnalyzing ? (
            <div className="flex items-center gap-3 px-6 py-3 bg-blue-50 text-blue-600 rounded-2xl font-bold border border-blue-100">
              <Loader2 className="w-5 h-5 animate-spin" />
              Running Neural Checks...
            </div>
          ) : (
            <button
              onClick={() => setShowMinting(true)}
              className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all flex items-center gap-3 shadow-lg"
            >
              Finalize AI Audit <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {models.map((model, i) => (
            <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-800">{model.name}</h3>
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${isAnalyzing ? 'bg-slate-200 text-slate-400' :
                  model.result === 'Clean' || model.result === 'Verified' || model.result === 'Matched' || model.result === 'Normal'
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-red-100 text-red-700'
                  }`}>
                  {isAnalyzing ? 'Processing' : model.result}
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-4">{model.purpose}</p>
              <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: isAnalyzing ? '100%' : `${model.accuracy}%` }}
                  transition={{ duration: 3 }}
                  className="h-full bg-blue-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ============================================
// STAGE 5: JURY NETWORK (CONDITIONAL)
// ============================================
function JuryNetworkStage({ onNext, addSentinelLog }) {
  const [isVoting, setIsVoting] = useState(false);
  const [showMinting, setShowMinting] = useState(false);
  const [executionStep, setExecutionStep] = useState(null); // null, 'SUBMIT', 'SEAL', 'DONE'

  const handleVote = (verdict) => {
    setIsVoting(true);
    setExecutionStep('SUBMIT');

    setTimeout(() => {
      setExecutionStep('SEAL');
    }, 1500);

    setTimeout(() => {
      setExecutionStep('DONE');
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      className="max-w-4xl mx-auto space-y-6 relative"
    >
      <AnimatePresence>
        {showMinting && (
          <MintingSplash
            tx={{ layer: 'JURY_NETWORK' }}
            onComplete={onNext}
          />
        )}
      </AnimatePresence>

      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600">
            <Users className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Human <span className="text-purple-600">Jury Network</span></h2>
            <p className="text-slate-500">AI consensus failed. Escalated to decentralized expert jury for final verdict.</p>
          </div>
        </div>

        <div className="bg-red-50 rounded-2xl border border-red-100 p-8 mb-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-red-600 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-red-900 mb-2">Escalation Triggered</h3>
              <p className="text-red-700 mb-6">3 AI models reported "High Risk". Manual review required to confirm synthetic identity traits detected in biometric stream.</p>

              <div className="flex gap-4">
                <button
                  onClick={() => handleVote('REJECT')}
                  className="px-8 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-all flex items-center gap-2"
                >
                  Confirm Fraud (Reject)
                </button>
                <button
                  onClick={() => handleVote('UNCERTAIN')}
                  className="px-8 py-3 bg-white border border-red-200 text-red-600 rounded-xl font-bold hover:bg-red-50 transition-all"
                >
                  Uncertain Case
                </button>
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isVoting && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 bg-slate-900 rounded-3xl p-8 border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 flex flex-col items-end">
                <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">EVM Mainnet Simulation</span>
                </div>
                <p className="text-[8px] font-mono text-slate-500 mt-2">tx_gasLimit: 384,120 | block: 18234567</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <Cpu className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">Smart Contract Execution</h3>
                      <p className="text-xs text-slate-400 font-mono">ConsensusLayer/JuryConsensus.sol</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${executionStep === 'SUBMIT' || executionStep === 'SEAL' || executionStep === 'DONE' ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-500'}`}>1</div>
                      <span className={executionStep === 'SUBMIT' ? 'text-blue-400 font-bold' : 'text-slate-500'}>Calling submitVerdict(verdict, proofs)</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${executionStep === 'SEAL' || executionStep === 'DONE' ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-500'}`}>2</div>
                      <span className={executionStep === 'SEAL' ? 'text-blue-400 font-bold' : 'text-slate-500'}>Aggregating Multi-Sig Attestations...</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${executionStep === 'DONE' ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-500'}`}>3</div>
                      <span className={executionStep === 'DONE' ? 'text-emerald-400 font-bold' : 'text-slate-500'}>Verdict Recorded Immuttably</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/40 rounded-2xl p-6 border border-white/5 font-mono text-[10px] leading-relaxed relative">
                  <div className="absolute top-2 right-4 text-[9px] text-slate-600 font-sans font-bold uppercase tracking-wider">Solidity 0.8.19</div>
                  <div className="space-y-1 text-slate-400">
                    <p><span className="text-purple-400">function</span> <span className="text-blue-400">recordVerdict</span>(uint256 <span className="text-orange-400">caseId</span>) <span className="text-purple-400">external</span> {"{"}</p>
                    <p className="pl-4 text-slate-500">// Check juror stake and consensus rules</p>
                    <p className="pl-4"><span className="text-purple-400">require</span>(stakes[msg.sender] {">"} minStake, <span className="text-emerald-400">"Insufficient Stake"</span>);</p>
                    <p className="pl-4 text-slate-500">// Update multi-dimensional evidence hash</p>
                    <p className="pl-4">evidenceMap[caseId].hash = <span className="text-blue-400">keccak256</span>(<span className="text-blue-400">abi.encode</span>(signals));</p>
                    <p className="pl-4"><span className="text-purple-400">emit</span> <span className="text-blue-400">VerdictSealed</span>(caseId, <span className="text-blue-400">block.timestamp</span>);</p>
                    <p>{"}"}</p>
                  </div>
                  {executionStep === 'SEAL' && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
                    />
                  )}
                  {executionStep === 'DONE' && (
                    <motion.div
                      className="absolute inset-0 bg-emerald-500/10 rounded-2xl flex flex-col items-center justify-center backdrop-blur-[1px] border-2 border-emerald-500/30"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex items-center gap-2 px-4 py-2 bg-emerald-500 rounded-full text-white font-bold shadow-lg shadow-emerald-500/20 mb-4"
                      >
                        <FileCheck className="w-4 h-4" />
                        TRANSACTION SEALED
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col items-center gap-2"
                      >
                        <div className="flex items-center gap-2 text-emerald-400 font-black text-lg">
                          <Coins className="w-5 h-5" />
                          <span>+50 $SPEC REWARD CLAIMED</span>
                        </div>
                        <button
                          onClick={() => setShowMinting(true)}
                          className="mt-4 px-8 py-3 bg-white text-slate-900 rounded-xl font-black text-sm hover:bg-slate-100 transition-all shadow-xl flex items-center gap-2 group"
                        >
                          Continue to Final Report <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ============================================
// STAGE 6: CONSENSUS / BLOCKCHAIN
// ============================================
function BlockchainStage({ onNext, addSentinelLog }) {
  const [isMinting, setIsMinting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsMinting(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-4xl mx-auto space-y-6"
    >
      <div className="bg-slate-900 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 text-center space-y-8">
          <div className="w-24 h-24 bg-emerald-500/20 rounded-3xl flex items-center justify-center mx-auto border border-emerald-500/30">
            <Link className="w-12 h-12 text-emerald-400" />
          </div>

          <div className="space-y-2">
            <h2 className="text-4xl font-extrabold tracking-tight">Consensus & <span className="text-emerald-400">Anchoring</span></h2>
            <p className="text-slate-400 text-lg">Committing all evidentiary signals to the immutable audit trail.</p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left">
              <p className="text-slate-500 text-xs font-bold uppercase mb-1">State</p>
              <p className="text-emerald-400 font-mono font-bold">{isMinting ? 'SYNCING' : 'RECORDED'}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left">
              <p className="text-slate-500 text-xs font-bold uppercase mb-1">Network</p>
              <p className="text-slate-200 font-mono font-bold">Polygon L2</p>
            </div>
          </div>

          {!isMinting && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => onNext('0x' + Math.random().toString(16).slice(2, 10))}
              className="px-12 py-5 bg-emerald-500 text-white rounded-2xl font-black text-xl hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-4 mx-auto"
            >
              GENERATE FINAL REPORT <ArrowRight className="w-6 h-6" />
            </motion.button>
          )}

          {isMinting && (
            <div className="flex flex-col items-center gap-4 py-8">
              <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
              <p className="text-emerald-500 font-mono text-sm animate-pulse tracking-widest">MINING BLOCK #18,234,567...</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ============================================
// STAGE 7: FINAL RESULT
// ============================================
function ResultStage({ selectedApplicant, blockchainTx, onRestart, addSentinelLog }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto space-y-8"
    >
      <div className={`rounded-3xl p-12 border-2 ${selectedApplicant === 'real' ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'} shadow-2xl relative overflow-hidden text-center`}>
        <div className={`w-32 h-32 rounded-full mx-auto mb-8 flex items-center justify-center ${selectedApplicant === 'real' ? 'bg-emerald-100' : 'bg-red-100'}`}>
          {selectedApplicant === 'real' ? <CheckCircle className="w-20 h-20 text-emerald-600" /> : <XCircle className="w-20 h-20 text-red-600" />}
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className={`text-5xl font-black ${selectedApplicant === 'real' ? 'text-emerald-900' : 'text-red-900'}`}>
            {selectedApplicant === 'real' ? 'Identity Approved' : 'Synthetic Identity Blocked'}
          </h2>
          <p className={`text-xl ${selectedApplicant === 'real' ? 'text-emerald-700' : 'text-red-700'}`}>
            {selectedApplicant === 'real'
              ? 'Specter has confirmed Sarah Smith as a legitimate human user with high continuity.'
              : 'Specter has successfully identified Michael Smith as a synthetic identity generated via deep-AI models.'}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-400 text-xs font-bold uppercase mb-2">Specter Score</p>
            <p className={`text-4xl font-black ${selectedApplicant === 'real' ? 'text-emerald-600' : 'text-red-600'}`}>{selectedApplicant === 'real' ? '97' : '14'}/100</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-400 text-xs font-bold uppercase mb-2">LCS Index</p>
            <p className={`text-4xl font-black ${selectedApplicant === 'real' ? 'text-emerald-600' : 'text-red-600'}`}>{selectedApplicant === 'real' ? '91' : '08'}/100</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-400 text-xs font-bold uppercase mb-2">Audit Hash</p>
            <p className="text-emerald-600 font-mono text-xs font-bold truncate mt-2">{blockchainTx}</p>
          </div>
        </div>

        {/* Consortium Verification Hub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 shadow-inner"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-bold text-slate-900">Consortium Verification Hub</h3>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">Cross-Institutional Audit Mesh</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest">Sharing Protocol Active</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { name: 'J.P. Morgan', status: 'VERIFIED' },
              { name: 'HSBC Digital', status: 'VERIFIED' },
              { name: 'Barclays Int.', status: 'VERIFIED' },
              { name: 'Goldman Sachs', status: 'VERIFIED' }
            ].map((bank, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + (i * 0.2) }}
                className="bg-white p-4 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-3">
                  <Building2 className="w-5 h-5 text-slate-400" />
                </div>
                <p className="text-xs font-bold text-slate-800 mb-1">{bank.name}</p>
                <div className="flex items-center gap-1.5 text-[9px] font-black text-emerald-600 uppercase tracking-tighter bg-emerald-50 px-2 py-0.5 rounded-full">
                  <CheckCircle className="w-3 h-3" />
                  {bank.status}
                </div>
                <p className="text-[8px] text-slate-400 font-mono mt-2">HASH MATCHED</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
              <Link className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold text-slate-800 mb-1">Decentralized Data Mash</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Institutions can verify the identity audit trail using the underlying blockchain anchor without actually sharing sensitive raw data.
                Specter eliminates identity silos through cross-institutional proof-of-verification, creating a unified shield against synthetic fraud.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-12">
          <button
            onClick={onRestart}
            className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center gap-3 mx-auto shadow-lg active:scale-95"
          >
            <RotateCcw className="w-5 h-5" />
            Restart Master Demo
          </button>
        </div>
      </div>
    </motion.div>
  );
}
