import { Link } from 'react-router-dom';
import { Snowflake, Lock, Smartphone, Building2, Search, FileCheck, UserCheck, Shield } from 'lucide-react';

const TRUST_ITEMS = [
  {
    title: "We're a public company, built in the USA",
    desc: "In April 2021, Coinbase became the largest public crypto company. That means we operate with more financial transparency: we publish financial statements quarterly and we're audited annually by an independent third-party as required by law.",
  },
  {
    title: "We hold our customers' assets 1:1",
    desc: "Your crypto is your crypto. It's that simple. Coinbase doesn't lend or take any action with your assets without your permission. Also, we offer the most secure and multifaceted risk management programs designed to protect our customers' assets.",
  },
  {
    title: "We respect your rights over your personal information",
    desc: "We only collect the necessary personal data in order to provide you with the best protection and services we can. We never sell your personal data to third parties.",
  },
  {
    title: "Our security team is constantly working to protect you",
    desc: "Our security team is constantly working to make sure you and your assets are protected from emerging threats. We use industry-leading security including AES-256 encryption and 98% cold storage.",
  },
];

const SECURITY_FEATURES = [
  { icon: Snowflake, title: '98% in cold storage', desc: 'The vast majority of customer crypto is held offline in geographically distributed cold storage vaults.' },
  { icon: Lock, title: 'AES-256 encryption', desc: 'All sensitive data is encrypted at rest and in transit using military-grade encryption standards.' },
  { icon: Smartphone, title: 'Two-factor authentication', desc: 'Secure your account with 2FA via authenticator app, SMS, or hardware security key.' },
  { icon: Building2, title: 'FDIC insured USD', desc: 'USD balances are held with FDIC-insured banks, protected up to $250,000 per customer.' },
  { icon: Search, title: 'Penetration testing', desc: 'Regular third-party security audits and a robust bug bounty program keep our defenses sharp.' },
  { icon: FileCheck, title: 'Compliance', desc: 'We comply with all applicable laws and regulations in every jurisdiction where we operate.' },
];

export default function Security() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sub-nav */}
      <div className="border-b border-gray-200 bg-white sticky top-[72px] z-30">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex gap-6 overflow-x-auto">
            {['Overview', 'Security Tips', 'Phishing Attacks', 'Login Security', 'Coinbase Wallet'].map((item) => (
              <a
                key={item}
                href="#"
                className="flex-shrink-0 py-4 text-[14px] font-medium text-[#5b616e] hover:text-[#0a0b0d] border-b-2 border-transparent hover:border-[#0a0b0d] transition-colors whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Hero — split layout */}
      <div className="bg-[#eef0f3]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <p className="text-[13px] font-semibold text-[#0052ff] uppercase tracking-wider mb-4">Security</p>
              <h1 className="text-[40px] sm:text-[52px] md:text-[60px] font-normal text-[#0a0b0d] leading-[1.05] mb-5">
                The most trusted crypto exchange
              </h1>
              <p className="text-[17px] text-[#5b616e] leading-relaxed mb-8">
                We're the most trusted place for people and businesses to buy, sell, and manage crypto.
              </p>
              <Link
                to="/signup"
                className="inline-flex items-center justify-center bg-[#0052ff] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full hover:bg-[#0039b3] transition-colors"
              >
                Sign up now
              </Link>
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div className="w-[280px] h-[280px] bg-white rounded-full flex items-center justify-center shadow-xl">
                <svg width="140" height="140" viewBox="0 0 30 30" fill="none">
                  <circle cx="15" cy="15" r="15" fill="#0052FF" />
                  <path d="M15 6.5C10.3056 6.5 6.5 10.3056 6.5 15C6.5 19.6944 10.3056 23.5 15 23.5C18.8456 23.5 22.1 21.0944 23.2444 17.6944H19.6C18.6444 19.2056 17.0111 20.2222 15.1556 20.2222C12.3 20.2222 10 17.8944 10 15C10 12.1056 12.3 9.77778 15.1556 9.77778C17.0111 9.77778 18.6444 10.7944 19.6 12.3056H23.2444C22.1 8.90556 18.8456 6.5 15 6.5Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The proof is in our platform */}
      <div className="bg-[#eef0f3] py-4 pb-16 sm:pb-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <h2 className="text-[40px] sm:text-[56px] font-normal text-[#0a0b0d] mb-4">The proof is in our platform.</h2>
          <p className="text-[17px] text-[#5b616e] mb-12">Here's why you can trust us:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TRUST_ITEMS.map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-[17px] font-semibold text-[#0a0b0d] mb-3 leading-snug">{title}</h3>
                <p className="text-[14px] text-[#5b616e] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security features */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="text-[32px] sm:text-[40px] font-normal text-[#0a0b0d] mb-10">How we protect you</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SECURITY_FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group border border-gray-200 rounded-2xl p-6 hover:border-[#0052ff]/30 hover:shadow-lg hover:shadow-[#0052ff]/5 transition-all">
              <div className="w-11 h-11 bg-[#0052ff]/10 rounded-xl flex items-center justify-center text-[#0052ff] mb-4">
                <Icon size={21} strokeWidth={1.5} />
              </div>
              <h3 className="text-[15px] font-semibold text-[#0a0b0d] mb-2">{title}</h3>
              <p className="text-[13px] text-[#5b616e] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bug bounty */}
      <div className="bg-[#eef0f3] py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <h2 className="text-[32px] sm:text-[40px] font-normal text-[#0a0b0d] mb-4">Bug bounty program</h2>
          <p className="text-[16px] text-[#5b616e] leading-relaxed max-w-2xl">
            We work with security researchers worldwide through our bug bounty program. If you discover a security vulnerability, please report it to{' '}
            <a href="mailto:security@coinbase.com" className="text-[#0052ff] hover:underline">security@coinbase.com</a>.
            Responsible disclosures may be eligible for rewards.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="rounded-3xl bg-[#0052ff] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-[28px] md:text-[34px] font-normal text-white">Start trading securely</h3>
            <p className="text-white/75 mt-2 text-[15px]">Join over 100 million users who trust Coinbase.</p>
          </div>
          <Link
            to="/signup"
            className="flex-shrink-0 bg-white text-[#0052ff] text-[14px] font-semibold px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
}
