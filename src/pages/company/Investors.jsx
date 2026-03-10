import InfoPage from '../../components/common/InfoPage';
import { BarChart2, FileText, Calendar, Users, Globe, Mail } from 'lucide-react';

export default function Investors() {
  return (
    <InfoPage
      title="Investor Relations"
      subtitle="Financial information, SEC filings, and resources for Coinbase (COIN) shareholders and the investment community."
      sections={[
        {
          heading: 'Investor resources',
          items: [
            { icon: BarChart2, title: 'Financial results', desc: 'Quarterly and annual earnings releases, financial statements, and investor presentations.' },
            { icon: FileText, title: 'SEC filings', desc: 'Access 10-K, 10-Q, 8-K, and proxy filings on the SEC EDGAR database.' },
            { icon: Calendar, title: 'Events & presentations', desc: 'Upcoming earnings calls, investor days, and conference presentations.' },
            { icon: Users, title: 'Corporate governance', desc: 'Board composition, committee charters, code of ethics, and governance guidelines.' },
            { icon: Globe, title: 'Stock information', desc: 'COIN trades on the Nasdaq. View real-time stock data and historical performance.' },
            { icon: Mail, title: 'IR contact', desc: 'Reach our investor relations team directly for inquiries and additional information.' },
          ],
        },
        {
          heading: 'Key financial highlights',
          text: 'Coinbase is the leading publicly traded crypto exchange in the United States. We serve retail and institutional customers in over 100 countries. Our financial results are driven by transaction revenue, subscription and services revenue, and other revenue streams.',
        },
      ]}
      cta={{ heading: 'View latest earnings', sub: 'Access our most recent quarterly financial results.', href: '#', label: 'Q4 2025 results' }}
    />
  );
}
