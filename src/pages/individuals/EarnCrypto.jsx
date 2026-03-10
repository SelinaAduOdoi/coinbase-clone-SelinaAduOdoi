import InfoPage from '../../components/common/InfoPage';
import { BookOpen, PenLine, Gift, Bitcoin, Coins, Zap, Link2, Star, DollarSign } from 'lucide-react';

export default function EarnCrypto() {
  return (
    <InfoPage
      title="Earn free crypto"
      subtitle="Learn about crypto and earn rewards — it's that simple. Complete short lessons and quizzes to earn crypto directly to your Coinbase account."
      sections={[
        {
          heading: 'How it works',
          items: [
            { icon: BookOpen, title: '1. Pick a lesson', desc: 'Choose from dozens of crypto courses covering Bitcoin, DeFi, NFTs, staking, and more.' },
            { icon: PenLine, title: '2. Complete the quiz', desc: 'Answer a few questions to prove you understand the topic.' },
            { icon: Gift, title: '3. Earn crypto', desc: 'Receive crypto rewards instantly deposited to your Coinbase wallet.' },
          ],
        },
        {
          heading: 'Available rewards',
          items: [
            { icon: Bitcoin, title: 'Bitcoin (BTC)', desc: 'Earn BTC by completing lessons about the original cryptocurrency.' },
            { icon: Coins, title: 'Ethereum (ETH)', desc: 'Learn about smart contracts and DeFi and earn ETH rewards.' },
            { icon: Zap, title: 'Solana (SOL)', desc: 'Discover the high-speed Solana blockchain and earn SOL.' },
            { icon: Link2, title: 'Chainlink (LINK)', desc: 'Learn how oracle networks work and earn LINK tokens.' },
            { icon: Star, title: 'Uniswap (UNI)', desc: 'Explore decentralized exchanges and earn UNI governance tokens.' },
            { icon: DollarSign, title: 'USDC', desc: 'Complete stablecoin lessons and earn USDC rewards.' },
          ],
        },
      ]}
      cta={{ heading: 'Start earning today', sub: 'Create a free account and start earning crypto in minutes.', href: '/signup', label: 'Sign up free' }}
    />
  );
}
