import { Link } from 'react-router-dom';

const tiers = [
  {
    name: 'Basic',
    price: 'Free',
    features: ['Buy & sell crypto', 'Coinbase Wallet', 'Standard trading fees', 'Basic customer support', 'Educational content'],
    cta: 'Get started',
    href: '/signup',
    highlight: false,
  },
  {
    name: 'Coinbase One',
    price: '$29.99/mo',
    priceAlt: 'or $299.99/yr',
    features: [
      'Zero trading fees',
      'Boosted staking rewards',
      'Priority 24/7 customer support',
      'Up to $1M account protection',
      'Advanced portfolio tools',
      'Early access to new features',
      'Exclusive member perks',
    ],
    cta: 'Start free trial',
    href: '/signup',
    highlight: true,
  },
];

export default function CoinbaseOne() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#0052ff]">
        <div className="max-w-[1200px] mx-auto px-6 py-20 text-center">
          <div className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-4">Coinbase One</div>
          <h1 className="text-[44px] md:text-[60px] font-normal text-white leading-tight mb-4">
            Zero fees.<br />More rewards.
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Upgrade to Coinbase One and get the most out of your crypto. Start with a 30-day free trial.
          </p>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 border-2 ${tier.highlight ? 'border-[#0052ff] bg-[#0052ff]/5' : 'border-gray-200 bg-white'}`}
            >
              <div className="text-sm font-semibold text-[#5b616e] mb-1">{tier.name}</div>
              <div className="text-3xl font-semibold text-[#0a0b0d] mb-0.5">{tier.price}</div>
              {tier.priceAlt && <div className="text-xs text-[#5b616e] mb-6">{tier.priceAlt}</div>}
              {!tier.priceAlt && <div className="mb-6" />}
              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#0a0b0d]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                      <circle cx="8" cy="8" r="8" fill={tier.highlight ? '#0052ff' : '#098351'} />
                      <path d="M4 8l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to={tier.href}
                className={`block text-center text-sm font-semibold py-3 rounded-full transition-colors ${tier.highlight ? 'bg-[#0052ff] text-white hover:bg-[#0039b3]' : 'border border-gray-300 text-[#0a0b0d] hover:border-gray-400'}`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
