import { useState } from 'react';

const DOCS = [
  {
    id: 'privacy',
    label: 'Privacy Policy',
    lastUpdated: 'January 15, 2026',
    content: `Coinbase ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, share, and protect personal information about you when you use our services.

**Information We Collect**
We collect information you provide directly to us, including your name, email address, phone number, government-issued ID, financial account information, and any other information you choose to provide.

**How We Use Your Information**
We use your information to provide and improve our services, verify your identity, process transactions, communicate with you, comply with legal obligations, and prevent fraud and abuse.

**Information Sharing**
We do not sell your personal information. We may share your information with service providers, business partners, and as required by law.

**Your Rights**
Depending on your location, you may have the right to access, correct, or delete your personal information. Contact us at privacy@coinbase.com to exercise your rights.`,
  },
  {
    id: 'terms',
    label: 'Terms & Conditions',
    lastUpdated: 'January 15, 2026',
    content: `These Terms of Service ("Terms") govern your use of the products and services provided by Coinbase, Inc. and its affiliates.

**Eligibility**
You must be at least 18 years of age and legally capable of entering into a binding contract to use our services. Our services are not available in all jurisdictions.

**Account Registration**
You agree to provide accurate and complete information when creating an account and to keep your account credentials secure. You are responsible for all activity that occurs under your account.

**Prohibited Activities**
You may not use our services for illegal purposes, to manipulate markets, to transmit malicious code, or to engage in any activity that violates these Terms or applicable law.

**Fees**
We charge fees for certain services. Our current fee schedule is available on our website. We may change fees with notice to you.

**Limitation of Liability**
To the fullest extent permitted by law, Coinbase shall not be liable for any indirect, incidental, special, consequential, or punitive damages.`,
  },
  {
    id: 'cookie',
    label: 'Cookie Policy',
    lastUpdated: 'December 1, 2025',
    content: `This Cookie Policy explains how Coinbase uses cookies and similar tracking technologies when you visit our websites and use our services.

**What Are Cookies?**
Cookies are small text files placed on your device when you visit a website. They help us provide a better experience by remembering your preferences and improving site performance.

**Types of Cookies We Use**
- Essential cookies: Required for our services to function properly
- Analytics cookies: Help us understand how you use our services
- Marketing cookies: Allow us to show you relevant advertising
- Preference cookies: Remember your settings and preferences

**Managing Cookies**
You can control cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our services.

**Third-Party Cookies**
We use cookies from trusted third-party providers such as Google Analytics to help us analyze usage data.`,
  },
  {
    id: 'disclosures',
    label: 'Digital Asset Disclosures',
    lastUpdated: 'December 1, 2025',
    content: `Important disclosures regarding digital assets and crypto-related services offered by Coinbase.

**Risk Disclosure**
Digital asset investments are highly speculative and involve substantial risk of loss. The value of digital assets can go to zero. Past performance is not indicative of future results.

**Not Investment Advice**
Nothing on our platform constitutes investment advice. You should consult with a qualified financial advisor before making any investment decisions.

**Regulatory Status**
Coinbase operates under various regulatory frameworks depending on jurisdiction. We hold licenses in the United States, European Union, United Kingdom, and other jurisdictions where required.

**Asset Availability**
Not all digital assets are available in all jurisdictions. Asset availability is subject to regulatory requirements and may change at any time.

**Staking Risks**
Staking involves locking up your assets and carries risks including slashing penalties, smart contract vulnerabilities, and liquidity risk.`,
  },
];

export default function Legal() {
  const [active, setActive] = useState('privacy');
  const doc = DOCS.find((d) => d.id === active);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#eef0f3] border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <h1 className="text-[40px] md:text-[52px] font-normal text-[#0a0b0d] leading-tight mb-4">Legal</h1>
          <p className="text-lg text-[#5b616e]">Our policies, terms, and legal disclosures.</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-14">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <nav className="flex flex-row lg:flex-col gap-1">
              {DOCS.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setActive(d.id)}
                  className={`text-left px-4 py-2.5 rounded-xl text-[14px] font-medium transition-colors ${
                    active === d.id
                      ? 'bg-[#0052ff]/10 text-[#0052ff]'
                      : 'text-[#5b616e] hover:bg-gray-100 hover:text-[#0a0b0d]'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[28px] font-normal text-[#0a0b0d]">{doc.label}</h2>
              <span className="text-[12px] text-[#5b616e]">Last updated: {doc.lastUpdated}</span>
            </div>
            <div className="prose max-w-none">
              {doc.content.split('\n\n').map((para, i) => {
                if (para.startsWith('**') && para.endsWith('**')) {
                  return <h3 key={i} className="text-[16px] font-semibold text-[#0a0b0d] mt-6 mb-2">{para.replace(/\*\*/g, '')}</h3>;
                }
                if (para.startsWith('- ')) {
                  return (
                    <ul key={i} className="list-disc list-inside mb-4 space-y-1">
                      {para.split('\n').map((line, j) => (
                        <li key={j} className="text-[14px] text-[#5b616e] leading-relaxed">{line.replace(/^- /, '')}</li>
                      ))}
                    </ul>
                  );
                }
                return <p key={i} className="text-[14px] text-[#5b616e] leading-relaxed mb-4">{para.replace(/\*\*(.*?)\*\*/g, '$1')}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
