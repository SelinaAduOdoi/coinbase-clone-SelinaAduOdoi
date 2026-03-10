import { Link } from 'react-router-dom';
import { KeyRound, CreditCard, BadgeCheck, ArrowUpDown, RefreshCw, BarChart2, Shield, Coins, Smartphone, MessageCircle } from 'lucide-react';

const topics = [
  { Icon: KeyRound, title: 'Account access', desc: 'Trouble signing in, 2FA issues, or locked accounts.', href: '#' },
  { Icon: CreditCard, title: 'Payment methods', desc: 'Add or remove bank accounts, debit cards, and PayPal.', href: '#' },
  { Icon: BadgeCheck, title: 'ID verification', desc: 'Complete identity verification to unlock all features.', href: '#' },
  { Icon: ArrowUpDown, title: 'Send & receive', desc: 'Help with sending, receiving, or missing transactions.', href: '#' },
  { Icon: RefreshCw, title: 'Buy & sell', desc: 'Questions about buying, selling, or converting crypto.', href: '#' },
  { Icon: BarChart2, title: 'Taxes & reports', desc: 'Download tax reports and understand your tax obligations.', href: '#' },
  { Icon: Shield, title: 'Security', desc: 'Protect your account and report suspicious activity.', href: '#' },
  { Icon: Coins, title: 'Staking', desc: 'Earn rewards by staking your crypto assets.', href: '#' },
  { Icon: Smartphone, title: 'Coinbase app', desc: 'Help with the Coinbase mobile app for iOS and Android.', href: '#' },
];

export default function Support() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-gray-200" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #eef1f7 100%)' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <h1 className="text-[32px] sm:text-[44px] md:text-[56px] font-normal text-[#0a0b0d] mb-3">Help Center</h1>
          <p className="text-[15px] sm:text-[17px] text-[#5b616e] mb-8">How can we help you today?</p>
          <div className="flex gap-2 max-w-lg">
            <input
              type="text"
              placeholder="Search for help articles..."
              className="flex-1 border border-gray-300 rounded-full px-5 py-3 text-[14px] focus:outline-none focus:border-[#0052ff] focus:ring-2 focus:ring-[#0052ff]/20 bg-white"
            />
            <button className="bg-[#0052ff] text-white text-[14px] font-semibold px-7 py-3 rounded-full hover:bg-[#0039b3] transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <h2 className="text-[22px] font-semibold text-[#0a0b0d] mb-6">Browse by topic</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {topics.map((topic) => (
            <Link
              key={topic.title}
              to={topic.href}
              className="flex items-start gap-4 border border-gray-200 rounded-2xl p-6 hover:border-[#0052ff]/30 hover:shadow-lg hover:shadow-[#0052ff]/5 transition-all group"
            >
              <div className="w-11 h-11 bg-[#0052ff]/10 rounded-xl flex items-center justify-center text-[#0052ff] flex-shrink-0 group-hover:bg-[#0052ff]/15 transition-colors">
                <topic.Icon size={21} strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-[15px] font-semibold text-[#0a0b0d] group-hover:text-[#0052ff] transition-colors">{topic.title}</div>
                <div className="text-[13px] text-[#5b616e] mt-1 leading-snug">{topic.desc}</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="border border-gray-200 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="w-12 h-12 bg-[#0052ff]/10 rounded-xl flex items-center justify-center text-[#0052ff] flex-shrink-0">
            <MessageCircle size={24} strokeWidth={1.5} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[#0a0b0d] mb-1">Still need help?</h3>
            <p className="text-sm text-[#5b616e]">Our support team is available 24/7 to assist you with any questions.</p>
          </div>
          <Link to="/signup" className="bg-[#0052ff] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#0039b3] transition-colors whitespace-nowrap">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
