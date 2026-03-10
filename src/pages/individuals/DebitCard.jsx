import InfoPage from '../../components/common/InfoPage';
import { CreditCard, Gift, Zap, Smartphone, Globe, Lock, Bitcoin, DollarSign, Coins } from 'lucide-react';

export default function DebitCard() {
  return (
    <InfoPage
      title="Coinbase Card"
      subtitle="Spend your crypto anywhere Visa is accepted and earn crypto rewards on every purchase — automatically."
      sections={[
        {
          heading: 'Card features',
          items: [
            { icon: CreditCard, title: 'Spend anywhere Visa is accepted', desc: 'Use your Coinbase Card at millions of merchants online and in-store worldwide.' },
            { icon: Gift, title: 'Earn crypto rewards', desc: 'Get up to 4% back in crypto on every purchase — choose from BTC, ETH, XLM, and more.' },
            { icon: Zap, title: 'Instant conversion', desc: 'Your crypto is converted to spend currency instantly at the point of sale.' },
            { icon: Smartphone, title: 'Mobile app control', desc: 'Freeze/unfreeze your card, view spending, and manage rewards in the Coinbase app.' },
            { icon: Globe, title: 'No foreign transaction fees', desc: 'Travel and spend abroad without extra fees on international transactions.' },
            { icon: Lock, title: 'Secure & insured', desc: "Protected by Visa's Zero Liability Policy and Coinbase's industry-leading security." },
          ],
        },
        {
          heading: 'Choose your rewards',
          text: 'Select which crypto you want to earn on your purchases. Switch between assets anytime in the app.',
          items: [
            { icon: Coins, title: '4% back in XLM', desc: 'Earn Stellar Lumens on every purchase.' },
            { icon: DollarSign, title: '4% back in USDC', desc: 'Earn the stable digital dollar on every purchase.' },
            { icon: Coins, title: '1% back in ETH', desc: 'Earn Ethereum on every purchase.' },
            { icon: Bitcoin, title: '1% back in BTC', desc: 'Earn Bitcoin on every purchase.' },
          ],
        },
      ]}
      cta={{ heading: 'Apply for your Coinbase Card', sub: 'Available to verified Coinbase users in eligible regions.', href: '/signup', label: 'Get the card' }}
    />
  );
}
