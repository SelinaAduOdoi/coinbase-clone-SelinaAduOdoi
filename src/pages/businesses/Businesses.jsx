import InfoPage from '../../components/common/InfoPage';
import { List, ShoppingBag, ArrowLeftRight, Plug, Coins, CheckCircle, Code2, TrendingUp } from 'lucide-react';

export default function Businesses() {
  return (
    <InfoPage
      title="Coinbase for Businesses"
      subtitle="Accept crypto payments, access liquidity, and build on crypto infrastructure trusted by the world's leading companies."
      sections={[
        {
          heading: 'Products for businesses',
          items: [
            { icon: List, title: 'Asset Listings', desc: 'List your token on Coinbase and reach millions of active crypto investors worldwide.' },
            { icon: ShoppingBag, title: 'Commerce', desc: 'Accept cryptocurrency payments in your business with simple plug-in integrations.' },
            { icon: ArrowLeftRight, title: 'Payments', desc: 'Send, receive, and manage crypto payments with enterprise-grade infrastructure.' },
            { icon: Plug, title: 'Onramp', desc: 'Let your users buy crypto with fiat currency directly within your app or platform.' },
            { icon: Coins, title: 'Token Manager', desc: "Issue, manage, and distribute your own token with Coinbase's token management platform." },
          ],
        },
        {
          heading: 'Why businesses choose Coinbase',
          text: 'Thousands of companies worldwide use Coinbase infrastructure to power their crypto operations. From startups to Fortune 500 companies, we provide the security, compliance, and reliability that businesses require.',
          items: [
            { icon: CheckCircle, title: 'Regulatory compliant', desc: 'Licensed in 40+ U.S. states and multiple global jurisdictions.' },
            { icon: Code2, title: 'Developer-friendly', desc: 'Powerful APIs with comprehensive documentation and dedicated support.' },
            { icon: TrendingUp, title: 'Proven at scale', desc: 'Processing billions in volume daily with 99.99% uptime.' },
          ],
        },
      ]}
      cta={{ heading: 'Get in touch', sub: 'Our business team is ready to help you get started.', href: '/signup', label: 'Contact sales' }}
    />
  );
}
