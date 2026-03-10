import { useParams, Link } from 'react-router-dom';
import { cryptos } from '../../data/cryptoData';

function formatPrice(price) {
  if (price >= 1000) return '$' + price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (price >= 1) return '$' + price.toFixed(4);
  return '$' + price.toFixed(6);
}

function formatLarge(num) {
  if (num >= 1e12) return '$' + (num / 1e12).toFixed(2) + 'T';
  if (num >= 1e9) return '$' + (num / 1e9).toFixed(2) + 'B';
  return '$' + num.toLocaleString();
}

function generateSparkline(seed, positive, width = 500, height = 120) {
  const points = [];
  let y = height / 2;
  for (let i = 0; i <= 20; i++) {
    const noise = ((seed * (i + 3) * 7919) % 100) / 100 * 30 - 15;
    const trend = positive ? -(i * (height / 40)) : (i * (height / 40));
    y = Math.max(5, Math.min(height - 5, height / 2 + trend + noise));
    points.push(`${(i / 20) * width},${y}`);
  }
  return { line: points.join(' '), fill: points.join(' ') + ` ${width},${height} 0,${height}` };
}

const TIME_FILTERS = ['1H', '1D', '1W', '1M', '3M', '1Y', 'ALL'];

export default function AssetPrice() {
  const { id } = useParams();
  const crypto = cryptos.find((c) => c.id === id) || cryptos[0];
  const isPositive = crypto.change >= 0;
  const seed = crypto.id.charCodeAt(0) + crypto.id.charCodeAt(1);
  const { line, fill } = generateSparkline(seed, isPositive);
  const color = isPositive ? '#098351' : '#cf202f';

  const stats = [
    { label: 'Market cap', value: formatLarge(crypto.marketCap) },
    { label: 'Volume (24h)', value: formatLarge(crypto.volume) },
    { label: 'Circulating supply', value: (crypto.marketCap / crypto.price).toLocaleString('en-US', { maximumFractionDigits: 0 }) + ' ' + crypto.symbol },
    { label: 'All-time high', value: formatPrice(crypto.price * 1.4) },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[#5b616e] mb-8">
          <Link to="/explore" className="hover:text-[#0052ff]">Cryptocurrencies</Link>
          <span>›</span>
          <span className="text-[#0a0b0d]">{crypto.name} price</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: chart + stats */}
          <div className="flex-1">
            {/* Asset header */}
            <div className="flex items-center gap-4 mb-6">
              {crypto.img
                ? <img src={crypto.img} alt={crypto.name} className="w-12 h-12 rounded-full object-cover" />
                : <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: crypto.color }}>{crypto.symbol.slice(0, 2)}</div>
              }
              <div>
                <h1 className="text-2xl font-semibold text-[#0a0b0d]">{crypto.name}</h1>
                <span className="text-sm text-[#5b616e]">{crypto.symbol} · Cryptocurrency</span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-2">
              <span className="text-[44px] font-semibold text-[#0a0b0d]">{formatPrice(crypto.price)}</span>
            </div>
            <div className={`text-base font-medium mb-6 ${isPositive ? 'text-[#098351]' : 'text-[#cf202f]'}`}>
              {isPositive ? '▲' : '▼'} {Math.abs(crypto.change).toFixed(2)}% today
            </div>

            {/* Time filters */}
            <div className="flex gap-1 mb-4">
              {TIME_FILTERS.map((t) => (
                <button
                  key={t}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${t === '1D' ? 'bg-[#0a0b0d] text-white' : 'text-[#5b616e] hover:bg-gray-100'}`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Chart */}
            <div className="border border-gray-200 rounded-2xl p-4 mb-8">
              <svg viewBox="0 0 500 120" className="w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id={`grad-${crypto.id}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.15" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polygon points={fill} fill={`url(#grad-${crypto.id})`} />
                <polyline points={line} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Stats */}
            <h2 className="text-lg font-semibold text-[#0a0b0d] mb-4">{crypto.name} stats</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((s) => (
                <div key={s.label} className="border border-gray-200 rounded-xl p-4">
                  <div className="text-xs text-[#5b616e] mb-1">{s.label}</div>
                  <div className="text-[15px] font-semibold text-[#0a0b0d]">{s.value}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <h2 className="text-lg font-semibold text-[#0a0b0d] mb-3">About {crypto.name}</h2>
            <p className="text-[#5b616e] leading-relaxed text-sm">{crypto.description}</p>
          </div>

          {/* Right: buy panel */}
          <div className="w-full lg:w-[320px]">
            <div className="border border-gray-200 rounded-2xl p-6 sticky top-20">
              <h3 className="text-base font-semibold text-[#0a0b0d] mb-5">Buy {crypto.name}</h3>
              <div className="mb-4">
                <label className="block text-xs font-medium text-[#5b616e] mb-1.5">Amount in USD</label>
                <input
                  type="number"
                  placeholder="$0.00"
                  defaultValue="100"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0052ff] focus:ring-2 focus:ring-[#0052ff]/20"
                />
              </div>
              <div className="flex justify-between text-xs text-[#5b616e] mb-5">
                <span>You'll receive approx.</span>
                <span className="font-medium text-[#0a0b0d]">
                  {(100 / crypto.price).toFixed(6)} {crypto.symbol}
                </span>
              </div>
              <Link
                to="/signup"
                className="block text-center bg-[#0052ff] text-white text-sm font-semibold py-3 rounded-full hover:bg-[#0039b3] transition-colors mb-3"
              >
                Buy {crypto.name}
              </Link>
              <p className="text-xs text-[#5b616e] text-center">Create a free account to get started</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
