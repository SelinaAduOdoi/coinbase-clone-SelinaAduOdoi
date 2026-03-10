import { Link } from 'react-router-dom';

export default function InfoPage({ title, subtitle, sections, cta }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero — gradient background */}
      <div style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #eef1f7 100%)' }} className="border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <h1 className="text-[32px] sm:text-[44px] md:text-[56px] font-normal text-[#0a0b0d] leading-tight mb-5">{title}</h1>
          {subtitle && <p className="text-[17px] text-[#5b616e] max-w-2xl leading-relaxed">{subtitle}</p>}
          {cta && (
            <Link
              to={cta.href}
              className="inline-flex items-center mt-8 bg-[#0052ff] text-white text-[14px] font-semibold px-7 py-3 rounded-full hover:bg-[#0039b3] transition-colors"
            >
              {cta.label}
            </Link>
          )}
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {sections && sections.map((section, i) => (
          <div key={i} className={`${i > 0 ? 'mt-16 pt-16 border-t border-gray-100' : ''}`}>
            {section.heading && (
              <div className="mb-8">
                <h2 className="text-[32px] md:text-[40px] font-normal text-[#0a0b0d] leading-tight">{section.heading}</h2>
              </div>
            )}
            {section.text && (
              <p className="text-[15px] text-[#5b616e] leading-relaxed mb-8 max-w-3xl">{section.text}</p>
            )}
            {section.items && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {section.items.map((item, j) => (
                  <div
                    key={j}
                    className="group border border-gray-200 rounded-2xl p-6 hover:border-[#0052ff]/30 hover:shadow-lg hover:shadow-[#0052ff]/5 transition-all duration-200"
                  >
                    {item.icon && (
                      <div className="w-11 h-11 bg-[#0052ff]/10 rounded-xl flex items-center justify-center text-[#0052ff] mb-4 group-hover:bg-[#0052ff]/15 transition-colors">
                        {typeof item.icon === 'string'
                          ? <span className="text-lg">{item.icon}</span>
                          : <item.icon size={21} strokeWidth={1.5} />
                        }
                      </div>
                    )}
                    <h3 className="text-[15px] font-semibold text-[#0a0b0d] mb-2 group-hover:text-[#0052ff] transition-colors">{item.title}</h3>
                    <p className="text-[13px] text-[#5b616e] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* CTA */}
        {cta && (
          <div className="mt-12 sm:mt-20 rounded-3xl bg-[#0052ff] p-8 sm:p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-[28px] md:text-[34px] font-normal text-white leading-tight">{cta.heading}</h3>
              {cta.sub && <p className="text-white/75 mt-2 text-[15px] leading-relaxed">{cta.sub}</p>}
            </div>
            <Link
              to={cta.href}
              className="flex-shrink-0 bg-white text-[#0052ff] text-[14px] font-semibold px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap"
            >
              {cta.label}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
