import { Link } from 'react-router-dom';
import { Mail, FileText, Image, Download } from 'lucide-react';

const pressReleases = [
  { date: 'Feb 2026', title: 'Coinbase Reports Fourth Quarter and Full Year 2025 Results', category: 'Financial Results' },
  { date: 'Jan 2026', title: 'Coinbase Expands Operations to 15 New Markets Across Southeast Asia', category: 'Expansion' },
  { date: 'Dec 2025', title: 'Coinbase and BlackRock Deepen Partnership for Institutional Bitcoin Custody', category: 'Partnership' },
  { date: 'Nov 2025', title: 'Coinbase Base Network Surpasses 10 Million Daily Active Users', category: 'Milestone' },
  { date: 'Oct 2025', title: 'Coinbase One Reaches 1 Million Subscribers Worldwide', category: 'Milestone' },
  { date: 'Sep 2025', title: 'Coinbase Launches Advanced AI-Powered Portfolio Analytics', category: 'Product' },
];

export default function Press() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#eef0f3] border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <h1 className="text-[40px] md:text-[52px] font-normal text-[#0a0b0d] leading-tight mb-4">Press</h1>
          <p className="text-lg text-[#5b616e] max-w-2xl">
            News, press releases, and media resources from Coinbase.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-14">
        {/* Media contacts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          <div className="border border-gray-200 rounded-2xl p-6">
            <div className="w-10 h-10 bg-[#0052ff]/10 rounded-xl flex items-center justify-center text-[#0052ff] mb-4">
              <Mail size={20} strokeWidth={1.5} />
            </div>
            <h3 className="text-[16px] font-semibold text-[#0a0b0d] mb-2">Press inquiries</h3>
            <p className="text-[13px] text-[#5b616e]">For media inquiries, interview requests, and press releases.</p>
            <a href="mailto:press@coinbase.com" className="inline-block mt-3 text-[13px] font-semibold text-[#0052ff]">press@coinbase.com</a>
          </div>
          <div className="border border-gray-200 rounded-2xl p-6">
            <div className="w-10 h-10 bg-[#0052ff]/10 rounded-xl flex items-center justify-center text-[#0052ff] mb-4">
              <Image size={20} strokeWidth={1.5} />
            </div>
            <h3 className="text-[16px] font-semibold text-[#0a0b0d] mb-2">Media kit</h3>
            <p className="text-[13px] text-[#5b616e]">Download logos, brand guidelines, and approved product screenshots.</p>
            <Link to="#" className="inline-block mt-3 text-[13px] font-semibold text-[#0052ff]">Download media kit</Link>
          </div>
          <div className="border border-gray-200 rounded-2xl p-6">
            <div className="w-10 h-10 bg-[#0052ff]/10 rounded-xl flex items-center justify-center text-[#0052ff] mb-4">
              <FileText size={20} strokeWidth={1.5} />
            </div>
            <h3 className="text-[16px] font-semibold text-[#0a0b0d] mb-2">Brand guidelines</h3>
            <p className="text-[13px] text-[#5b616e]">Learn how to properly use the Coinbase brand and visual identity.</p>
            <Link to="#" className="inline-block mt-3 text-[13px] font-semibold text-[#0052ff]">View guidelines</Link>
          </div>
        </div>

        {/* Press releases */}
        <h2 className="text-[28px] font-normal text-[#0a0b0d] mb-6">Recent press releases</h2>
        <div className="flex flex-col divide-y divide-gray-200">
          {pressReleases.map((item) => (
            <div key={item.title} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-5 group">
              <div>
                <span className="inline-block text-[11px] font-semibold text-[#0052ff] uppercase tracking-wider mb-1">{item.category}</span>
                <h3 className="text-[15px] font-medium text-[#0a0b0d] group-hover:text-[#0052ff] transition-colors cursor-pointer leading-snug">
                  {item.title}
                </h3>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <span className="text-[13px] text-[#5b616e]">{item.date}</span>
                <button className="flex items-center gap-1.5 text-[13px] text-[#0052ff] font-medium">
                  <Download size={14} />
                  PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
