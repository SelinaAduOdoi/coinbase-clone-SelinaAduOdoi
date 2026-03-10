import InfoPage from '../../components/common/InfoPage';
import { ArrowLeftRight, Globe, BarChart2, Shield, Waves, DollarSign, Gem, MapPin, HeadphonesIcon } from 'lucide-react';

export default function Institutions() {
  return (
    <InfoPage
      title="Coinbase Institutional"
      subtitle="The most trusted platform for institutions to access digital assets. From custody to trading to staking, we power institutional crypto."
      sections={[
        {
          heading: 'Products for institutions',
          items: [
            { icon: ArrowLeftRight, title: 'Exchange', desc: 'Access deep liquidity across hundreds of crypto markets with institutional-grade execution.' },
            { icon: Globe, title: 'International Exchange', desc: 'Trade on our global exchange with access to international markets and derivatives.' },
            { icon: BarChart2, title: 'Derivatives Exchange', desc: 'Trade crypto futures and options with advanced risk management tools.' },
            { icon: Shield, title: 'Custody', desc: 'Secure, SOC 2 certified custody for your digital assets with insurance coverage.' },
            { icon: Waves, title: 'Verified Pools', desc: 'Access institutional liquidity pools with KYC-verified counterparties only.' },
            { icon: DollarSign, title: 'Prime', desc: 'Full-service brokerage for sophisticated investors with 24/7 OTC trading desk.' },
          ],
        },
        {
          heading: 'Trusted by the world\'s leading institutions',
          text: 'Over 14,000 institutional clients including hedge funds, asset managers, corporations, and financial institutions trust Coinbase to manage their digital asset exposure.',
          items: [
            { icon: Gem, title: '$380B+ in assets', desc: 'We custody over $380 billion in digital assets on behalf of our institutional clients.' },
            { icon: MapPin, title: 'Global presence', desc: 'Licensed to operate in the U.S., EU, UK, Canada, Singapore, Australia, and more.' },
            { icon: HeadphonesIcon, title: '24/7 support', desc: 'Dedicated institutional support team available around the clock.' },
          ],
        },
      ]}
      cta={{ heading: 'Talk to our institutional team', sub: 'Discover how Coinbase can power your digital asset strategy.', href: '/signup', label: 'Get in touch' }}
    />
  );
}
