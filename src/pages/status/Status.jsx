import { CheckCircle, AlertCircle, Clock } from 'lucide-react';

const systems = [
  { name: 'Trading (Buy/Sell)', status: 'operational' },
  { name: 'Account Access & Sign In', status: 'operational' },
  { name: 'Deposits (Bank Transfer)', status: 'operational' },
  { name: 'Withdrawals', status: 'operational' },
  { name: 'Coinbase One', status: 'operational' },
  { name: 'Advanced Trade', status: 'operational' },
  { name: 'Staking & Rewards', status: 'operational' },
  { name: 'Send & Receive (Crypto)', status: 'operational' },
  { name: 'Coinbase Card', status: 'operational' },
  { name: 'API & Developer Platform', status: 'operational' },
  { name: 'Mobile App (iOS)', status: 'operational' },
  { name: 'Mobile App (Android)', status: 'operational' },
  { name: 'Identity Verification', status: 'operational' },
  { name: 'Base Network', status: 'operational' },
];

const history = [
  { date: 'Feb 14, 2026', title: 'Scheduled maintenance completed', status: 'resolved', duration: '45 min', desc: 'Routine database maintenance was completed successfully. No user impact.' },
  { date: 'Jan 28, 2026', title: 'Elevated API latency', status: 'resolved', duration: '22 min', desc: 'Some users experienced slower API response times. The issue was resolved.' },
  { date: 'Dec 9, 2025', title: 'Deposit processing delays', status: 'resolved', duration: '1h 15min', desc: 'Bank transfer deposits experienced delays. All transactions were processed.' },
];

function StatusBadge({ status }) {
  if (status === 'operational') {
    return (
      <span className="flex items-center gap-1.5 text-[13px] font-medium text-[#098351]">
        <CheckCircle size={15} />
        Operational
      </span>
    );
  }
  if (status === 'degraded') {
    return (
      <span className="flex items-center gap-1.5 text-[13px] font-medium text-[#b45309]">
        <AlertCircle size={15} />
        Degraded performance
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1.5 text-[13px] font-medium text-[#0052ff]">
      <Clock size={15} />
      Investigating
    </span>
  );
}

const allOperational = systems.every((s) => s.status === 'operational');

export default function Status() {
  return (
    <div className="min-h-screen bg-white">
      <div className={`border-b border-gray-200 ${allOperational ? 'bg-[#f0faf5]' : 'bg-[#fef3c7]'}`}>
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-4 h-4 rounded-full ${allOperational ? 'bg-[#098351]' : 'bg-[#d97706]'}`} />
            <h1 className="text-[40px] md:text-[52px] font-normal text-[#0a0b0d] leading-tight">
              {allOperational ? 'All systems operational' : 'Partial service disruption'}
            </h1>
          </div>
          <p className="text-lg text-[#5b616e]">
            {allOperational
              ? 'No incidents reported. All Coinbase services are running normally.'
              : 'Some services are experiencing issues. Our team is working to resolve them.'}
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-14">
        {/* Current status */}
        <h2 className="text-[22px] font-semibold text-[#0a0b0d] mb-5">Current status</h2>
        <div className="border border-gray-200 rounded-2xl overflow-hidden mb-14">
          {systems.map((system, i) => (
            <div
              key={system.name}
              className={`flex items-center justify-between px-6 py-4 ${i < systems.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <span className="text-[14px] font-medium text-[#0a0b0d]">{system.name}</span>
              <StatusBadge status={system.status} />
            </div>
          ))}
        </div>

        {/* Incident history */}
        <h2 className="text-[22px] font-semibold text-[#0a0b0d] mb-5">Past incidents</h2>
        <div className="flex flex-col gap-4">
          {history.map((incident) => (
            <div key={incident.title} className="border border-gray-200 rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-[15px] font-semibold text-[#0a0b0d]">{incident.title}</h3>
                <div className="flex items-center gap-3">
                  <span className="text-[12px] text-[#5b616e]">Duration: {incident.duration}</span>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#f0faf5] text-[#098351]">Resolved</span>
                </div>
              </div>
              <p className="text-[13px] text-[#5b616e]">{incident.desc}</p>
              <p className="text-[12px] text-[#8a8d96] mt-2">{incident.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
