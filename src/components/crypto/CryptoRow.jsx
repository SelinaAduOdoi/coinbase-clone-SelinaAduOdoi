import { Link } from 'react-router-dom';

function formatPrice(price) {
  if (price >= 1000) return '$' + price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (price >= 1) return '$' + price.toFixed(4);
  return '$' + price.toFixed(6);
}

function formatLargeNumber(num) {
  if (num >= 1e12) return '$' + (num / 1e12).toFixed(2) + 'T';
  if (num >= 1e9) return '$' + (num / 1e9).toFixed(2) + 'B';
  if (num >= 1e6) return '$' + (num / 1e6).toFixed(2) + 'M';
  return '$' + num.toLocaleString();
}

// Generate a realistic-looking sparkline path from a seed + trend
function generateSparkline(seed, positive) {
  const points = [];
  let y = 20;
  for (let i = 0; i <= 10; i++) {
    const noise = ((seed * (i + 3) * 7919) % 100) / 100 * 10 - 5;
    const trend = positive ? -i * 1.2 : i * 1.2;
    y = Math.max(2, Math.min(38, 20 + trend + noise));
    points.push(`${i * 10},${y}`);
  }
  return points.join(' ');
}

export default function CryptoRow({ crypto, rank, compact }) {
  const isPositive = crypto.change >= 0;
  const seed = crypto.id.charCodeAt(0) + crypto.id.charCodeAt(1);
  const sparkPoints = generateSparkline(seed, isPositive);
  const color = isPositive ? '#098351' : '#cf202f';

  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer group">
      {rank !== undefined && (
        <td className="py-3.5 pl-5 pr-3 text-sm text-[#5b616e] w-10 tabular-nums">{rank}</td>
      )}
      <td className="py-3.5 pr-4 min-w-[160px]">
        <Link to={`/explore`} className="flex items-center gap-3">
          {crypto.img ? (
            <img
              src={crypto.img}
              alt={crypto.name}
              className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
            />
          ) : null}
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0"
            style={{ backgroundColor: crypto.color, display: crypto.img ? 'none' : 'flex' }}
          >
            {crypto.symbol.slice(0, 2)}
          </div>
          <div>
            <div className="text-[13px] font-semibold text-[#0a0b0d] leading-tight">{crypto.name}</div>
            <div className="text-[12px] text-[#5b616e]">{crypto.symbol}</div>
          </div>
        </Link>
      </td>
      <td className="py-3.5 pr-4 text-[13px] font-semibold text-[#0a0b0d] text-right tabular-nums">
        {formatPrice(crypto.price)}
      </td>
      <td className="py-3.5 pr-4 text-right">
        <span className={`text-[13px] font-medium tabular-nums ${isPositive ? 'text-[#098351]' : 'text-[#cf202f]'}`}>
          {isPositive ? '+' : ''}{crypto.change.toFixed(2)}%
        </span>
      </td>
      {/* Sparkline */}
      <td className="py-3.5 pr-4 hidden sm:table-cell">
        <svg viewBox="0 0 100 40" className="w-[72px] h-8" preserveAspectRatio="none">
          <polyline
            points={sparkPoints}
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </td>
      {!compact && crypto.marketCap && (
        <td className="py-3.5 pr-4 text-[13px] text-[#5b616e] text-right tabular-nums hidden md:table-cell">
          {formatLargeNumber(crypto.marketCap)}
        </td>
      )}
      {!compact && crypto.volume && (
        <td className="py-3.5 pr-4 text-[13px] text-[#5b616e] text-right tabular-nums hidden lg:table-cell">
          {formatLargeNumber(crypto.volume)}
        </td>
      )}
      <td className="py-3.5 pr-4 text-right">
        <Link
          to="/signup"
          className="text-[12px] font-semibold text-[#0052ff] border border-[#0052ff] rounded-full px-4 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#0052ff] hover:text-white whitespace-nowrap"
        >
          Trade
        </Link>
      </td>
    </tr>
  );
}
