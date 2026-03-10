import { Link } from 'react-router-dom';

const CB = '/coinbase-images/';

const posts = [
  {
    title: 'System Update: The future of finance is on Coinbase',
    date: 'Dec 17, 2025',
    category: 'Product',
    readTime: '5 min read',
    desc: 'Today, we launched several new products to usher in the future of finance on Coinbase.',
    img: CB + 'home_001_navigation-upsell.png.png',
    featured: true,
  },
  {
    title: 'Introducing Coinbase One: Zero Fees, Maximum Rewards',
    date: 'Jan 28, 2026',
    category: 'Product',
    readTime: '4 min read',
    desc: 'Our premium membership now includes zero trading fees, boosted staking, and up to $1M in account protection.',
    img: CB + 'home_014_zero_fees_us.png.png',
  },
  {
    title: 'Base Hits 10 Million Daily Active Users',
    date: 'Jan 15, 2026',
    category: 'Base',
    readTime: '3 min read',
    desc: 'The Base network continues its explosive growth, processing millions of transactions per day at near-zero cost.',
    img: CB + 'home_015_CB_LOLP__1_.png.png',
  },
  {
    title: 'Coinbase Receives MiCA License Across the EU',
    date: 'Dec 20, 2025',
    category: 'Regulation',
    readTime: '6 min read',
    desc: "We're excited to announce Coinbase is now fully licensed under MiCA to operate across the European Union.",
    img: CB + 'learn_011_Learn_Illustration_What_is_DeFi.jpg.jpg',
  },
  {
    title: 'How AI Is Transforming the Way We Trade Crypto',
    date: 'Dec 5, 2025',
    category: 'Technology',
    readTime: '5 min read',
    desc: "From smart order routing to AI-powered portfolio insights, we're using machine learning to help you trade smarter.",
    img: CB + 'home_013_Advanced.png.png',
  },
  {
    title: 'Our Commitment to Privacy and Data Security',
    date: 'Nov 18, 2025',
    category: 'Security',
    readTime: '7 min read',
    desc: 'A deep dive into how Coinbase protects your personal data and keeps your assets safe in an increasingly connected world.',
    img: CB + 'learn_008_Learn_Illustration_Ultimate_Guide_Bitcoin.webp.webp',
  },
];

const CATEGORIES = ['All', 'Product', 'Company', 'Policy', 'Engineering', 'International', 'Ventures'];

export default function Blog() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6">
          <h1 className="text-[22px] font-semibold text-[#0a0b0d]">Blog</h1>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Category filters */}
        <div className="flex gap-2 overflow-x-auto pb-1 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-[13px] font-medium transition-colors ${
                cat === 'All'
                  ? 'bg-[#0a0b0d] text-white'
                  : 'bg-[#eef0f3] text-[#5b616e] hover:bg-gray-200 hover:text-[#0a0b0d]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured post */}
        <Link
          to="#"
          className="group block mb-10 border border-gray-200 rounded-3xl overflow-hidden hover:border-[#0052ff]/30 hover:shadow-xl transition-all duration-300"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-[55%]">
              <img src={featured.img} alt={featured.title} className="w-full h-64 lg:h-full object-cover" />
            </div>
            <div className="lg:w-[45%] p-8 lg:p-10 flex flex-col justify-center">
              <span className="inline-block text-[11px] font-semibold text-[#0052ff] uppercase tracking-widest mb-3">{featured.category}</span>
              <h2 className="text-[24px] md:text-[30px] font-medium text-[#0a0b0d] leading-snug mb-4 group-hover:text-[#0052ff] transition-colors">
                {featured.title}
              </h2>
              <p className="text-[15px] text-[#5b616e] leading-relaxed mb-6">{featured.desc}</p>
              <div className="flex items-center gap-3 text-[13px] text-[#5b616e]">
                <span>{featured.date}</span>
                <span className="text-gray-300">·</span>
                <span>{featured.readTime}</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.title}
              to="#"
              className="group border border-gray-200 rounded-2xl overflow-hidden hover:border-[#0052ff]/30 hover:shadow-lg transition-all duration-200"
            >
              {post.img && (
                <div className="overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <span className="text-[11px] font-semibold text-[#0052ff] uppercase tracking-wider">{post.category}</span>
                <h3 className="text-[16px] font-medium text-[#0a0b0d] mt-2 mb-3 leading-snug group-hover:text-[#0052ff] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[13px] text-[#5b616e] leading-relaxed mb-4">{post.desc}</p>
                <div className="flex items-center gap-3 text-[12px] text-[#5b616e]">
                  <span>{post.date}</span>
                  <span className="text-gray-300">·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
