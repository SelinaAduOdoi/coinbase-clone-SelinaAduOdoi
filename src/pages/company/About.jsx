import { Link } from 'react-router-dom';
import { Shield, Globe, FileText, Rocket, Brain, Heart } from 'lucide-react';

const STATS = [
  { value: '$1.2T', label: 'Annual trading volume', note: true },
  { value: '$376B', label: 'Assets on platform', note: true },
  { value: '100+', label: 'Countries' },
  { value: '4,700+', label: 'Employees' },
];

const VALUES = [
  { icon: Rocket, title: 'Act like an owner', desc: 'We take responsibility for outcomes, not just tasks.' },
  { icon: Brain, title: 'Top talent', desc: 'We attract and retain the best talent in the world.' },
  { icon: FileText, title: 'Clear communication', desc: 'We make our thinking and decisions transparent.' },
  { icon: Shield, title: 'Regulatory compliance', desc: 'We hold a high standard for what assets we list and what services we provide.' },
  { icon: Globe, title: 'Global reach', desc: '245,000 ecosystem partners in over 100 countries trust Coinbase.' },
  { icon: Heart, title: 'Positive energy', desc: 'We bring optimism and believe a better financial future is achievable.' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sub-nav */}
      <div className="border-b border-gray-200 bg-white sticky top-[72px] z-30">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex gap-6 overflow-x-auto">
            {['About', 'Careers', 'Mission', 'Press'].map((item) => (
              <Link
                key={item}
                to={item === 'About' ? '/about' : item === 'Careers' ? '/careers' : item === 'Press' ? '/press' : '/about'}
                className="flex-shrink-0 py-4 text-[14px] font-medium text-[#5b616e] hover:text-[#0a0b0d] border-b-2 border-transparent hover:border-[#0a0b0d] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-[#eef0f3]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <h1 className="text-[40px] sm:text-[56px] md:text-[72px] font-normal text-[#0a0b0d] leading-[1.05] mb-8 max-w-3xl">
            Coinbase powers<br className="hidden sm:block" /> the cryptoeconomy
          </h1>
          <p className="text-[17px] text-[#5b616e] leading-relaxed max-w-2xl mb-4">
            Customers around the world discover and begin their journeys with crypto through Coinbase.
          </p>
          <p className="text-[17px] text-[#5b616e] leading-relaxed max-w-2xl">
            245,000 ecosystem partners in over 100 countries trust Coinbase to easily and securely invest, spend, save, earn, and use crypto.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map(({ value, label, note }) => (
            <div key={label}>
              <div className="text-[40px] sm:text-[52px] font-normal text-[#0a0b0d] leading-none mb-2">
                {value}{note && <span className="text-[24px] align-super">*</span>}
              </div>
              <div className="text-[11px] font-semibold text-[#5b616e] uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
        <p className="text-[12px] text-[#5b616e] mt-6">* As of 12/31/25</p>
      </div>

      {/* Our Commitment */}
      <div className="border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <h2 className="text-[32px] sm:text-[44px] font-normal text-[#0a0b0d] mb-6">Our Commitment to Compliance</h2>
          <p className="text-[16px] text-[#5b616e] leading-relaxed max-w-2xl mb-4">
            We use sophisticated compliance technology to bring the crypto industry forward. We hold a high standard for what assets we list, what services we provide, and who has access to our products.
          </p>
          <p className="text-[16px] text-[#5b616e] leading-relaxed max-w-2xl mb-8">
            Check out the links below to learn more about our commitment to compliance and the technology we use to keep the crypto economy safe.
          </p>
          <ul className="flex flex-col gap-4">
            {['Know-your-customer (KYC) verification', 'Compliance Requirements', 'Scaled Compliance Solutions'].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#0a0b0d] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <a href="#" className="text-[15px] text-[#0a0b0d] hover:text-[#0052ff] underline transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Values */}
      <div className="bg-[#eef0f3]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <h2 className="text-[32px] sm:text-[44px] font-normal text-[#0a0b0d] mb-10">Our values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#0052ff]/30 hover:shadow-lg hover:shadow-[#0052ff]/5 transition-all">
                <div className="w-11 h-11 bg-[#0052ff]/10 rounded-xl flex items-center justify-center text-[#0052ff] mb-4">
                  <Icon size={21} strokeWidth={1.5} />
                </div>
                <h3 className="text-[15px] font-semibold text-[#0a0b0d] mb-2">{title}</h3>
                <p className="text-[13px] text-[#5b616e] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="rounded-3xl bg-[#0052ff] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-[28px] md:text-[34px] font-normal text-white leading-tight">Join us</h3>
            <p className="text-white/75 mt-2 text-[15px]">Help build the future of the global financial system.</p>
          </div>
          <Link
            to="/careers"
            className="flex-shrink-0 bg-white text-[#0052ff] text-[14px] font-semibold px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap"
          >
            View open roles
          </Link>
        </div>
      </div>
    </div>
  );
}
