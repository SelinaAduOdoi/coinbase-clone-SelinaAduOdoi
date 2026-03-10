import { Link } from 'react-router-dom';
import { Code2, BarChart2, Megaphone, Scale, Briefcase, Shield, Globe, DollarSign, Heart } from 'lucide-react';

const DEPARTMENTS = [
  { icon: Code2, title: 'Engineering', desc: 'Backend, frontend, mobile, infrastructure, security, and blockchain engineering roles.' },
  { icon: BarChart2, title: 'Product', desc: 'Product management, design, and research roles shaping the future of crypto.' },
  { icon: Megaphone, title: 'Marketing', desc: 'Growth, brand, content, and communications roles building the Coinbase brand.' },
  { icon: Scale, title: 'Legal & Compliance', desc: 'Legal, compliance, and regulatory affairs across global markets.' },
  { icon: Briefcase, title: 'Business', desc: 'Finance, operations, HR, and business development roles.' },
  { icon: Shield, title: 'Security', desc: 'Cybersecurity, fraud, and trust & safety roles protecting our customers.' },
];

const PERKS = [
  { icon: Globe, title: 'Remote-first', desc: 'Work from anywhere in the world on a flexible schedule.' },
  { icon: DollarSign, title: 'Competitive pay', desc: 'Top-of-market salaries plus equity in one of the most valuable crypto companies.' },
  { icon: Heart, title: 'Great benefits', desc: 'Health, dental, vision, 401k matching, and generous parental leave.' },
];

export default function Careers() {
  return (
    <div className="min-h-screen">
      {/* Sub-nav */}
      <div className="border-b border-gray-200 bg-white sticky top-[72px] z-30">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex gap-6 overflow-x-auto">
            {['Overview', 'Mission & Culture', 'Product Groups', 'Internships', 'How to Interview', 'Extraordinary Ability'].map((item) => (
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

      {/* Dark hero */}
      <div className="bg-[#0a0b0d] text-white py-24 sm:py-32 px-4">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="text-[40px] sm:text-[56px] md:text-[72px] font-normal leading-[1.05] mb-8">
            Working at Coinbase isn't for the faint of heart.
          </h1>
          <p className="text-[17px] text-white/70 leading-relaxed max-w-2xl mx-auto mb-10">
            You will be pushed beyond what you think you're capable of. You will be surrounded by others who excel in their disciplines and expect the same from you. But for those who embrace the challenge, it can be the most impactful work of your career.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center bg-[#0052ff] text-white text-[16px] font-semibold px-8 py-4 rounded-full hover:bg-[#0039b3] transition-colors"
          >
            View open roles
          </a>
        </div>
      </div>

      {/* Who we are */}
      <div className="bg-[#eef0f3] py-20 px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-[40px] sm:text-[52px] font-normal text-[#0a0b0d] mb-6">Who we are</h2>
          <p className="text-[17px] text-[#5b616e] leading-relaxed mb-4">
            We are <span className="underline">builders</span> and <span className="underline">techno-optimists</span>. We believe crypto is the most important technology to create more <span className="underline">economic freedom</span> in the world.
          </p>
          <p className="text-[17px] text-[#5b616e] leading-relaxed mb-4">
            We believe in sound money, property rights, free trade, decentralization, and putting power back in the hands of the individual.
          </p>
          <p className="text-[17px] text-[#5b616e] leading-relaxed">
            Let's help 1 billion people access an open financial system.
          </p>
        </div>
      </div>

      {/* Open roles */}
      <div className="bg-white py-16 sm:py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[32px] sm:text-[40px] font-normal text-[#0a0b0d] mb-10">Open roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DEPARTMENTS.map(({ icon: Icon, title, desc }) => (
              <a
                key={title}
                href="#"
                className="group border border-gray-200 rounded-2xl p-6 hover:border-[#0052ff]/30 hover:shadow-lg hover:shadow-[#0052ff]/5 transition-all"
              >
                <div className="w-11 h-11 bg-[#0052ff]/10 rounded-xl flex items-center justify-center text-[#0052ff] mb-4 group-hover:bg-[#0052ff]/15 transition-colors">
                  <Icon size={21} strokeWidth={1.5} />
                </div>
                <h3 className="text-[15px] font-semibold text-[#0a0b0d] mb-2 group-hover:text-[#0052ff] transition-colors">{title}</h3>
                <p className="text-[13px] text-[#5b616e] leading-relaxed">{desc}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Perks */}
      <div className="bg-[#eef0f3] py-16 sm:py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[32px] sm:text-[40px] font-normal text-[#0a0b0d] mb-6">Why Coinbase</h2>
          <p className="text-[16px] text-[#5b616e] leading-relaxed max-w-2xl mb-10">
            We offer competitive compensation, comprehensive benefits, and the opportunity to work on problems that matter at global scale. As a remote-first company, we hire top talent regardless of location.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PERKS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-gray-200">
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
            <h3 className="text-[28px] md:text-[34px] font-normal text-white">Ready to join?</h3>
            <p className="text-white/75 mt-2 text-[15px]">Explore all open positions at Coinbase.</p>
          </div>
          <a
            href="#"
            className="flex-shrink-0 bg-white text-[#0052ff] text-[14px] font-semibold px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap"
          >
            Browse jobs
          </a>
        </div>
      </div>
    </div>
  );
}
