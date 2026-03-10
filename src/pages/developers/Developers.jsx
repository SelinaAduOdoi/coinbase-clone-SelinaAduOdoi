import InfoPage from '../../components/common/InfoPage';
import {
  Building2, Circle, Server, Link2, Sparkles, ArrowLeftRight,
  Radio, Fuel, Bot, BarChart2, CheckCircle, Globe, BookOpen, FlaskConical, MessageCircle
} from 'lucide-react';

export default function Developers() {
  return (
    <InfoPage
      title="Build on Coinbase"
      subtitle="World-class APIs, SDKs, and infrastructure for developers building the next generation of crypto applications."
      sections={[
        {
          heading: 'Developer products',
          items: [
            { icon: Building2, title: 'Coinbase Platform', desc: 'APIs for trading, payments, data, and account management. Start building in minutes.' },
            { icon: Circle, title: 'Base', desc: 'An Ethereum L2 designed for the next billion users. Secure, low-cost, and developer-friendly.' },
            { icon: Server, title: 'Server Wallets', desc: 'Create and manage wallets programmatically with our server-side wallet infrastructure.' },
            { icon: Link2, title: 'Embedded Wallets', desc: 'Add a non-custodial wallet to any app in minutes with our drop-in wallet solution.' },
            { icon: Sparkles, title: 'Smart Wallets', desc: 'Account abstraction wallets with gas sponsorship, batched transactions, and passkey auth.' },
            { icon: ArrowLeftRight, title: 'Onramp & Offramp', desc: 'Let users buy and sell crypto within your app without leaving your experience.' },
            { icon: Radio, title: 'Trade API', desc: 'High-performance trading API with WebSocket streams, REST endpoints, and FIX protocol.' },
            { icon: Fuel, title: 'Paymaster', desc: 'Sponsor gas fees for your users and enable gasless transactions on Base.' },
            { icon: Bot, title: 'AgentKit', desc: 'Build AI agents that can hold and transact crypto. The fastest way to add Web3 to your AI.' },
            { icon: BarChart2, title: 'Data API', desc: 'Access comprehensive historical and real-time market data for all assets on Coinbase.' },
            { icon: CheckCircle, title: 'Verifications', desc: "Verify user identity, country, and other attestations using Coinbase's verification system." },
            { icon: Globe, title: 'Node', desc: 'Access fully-managed blockchain nodes across Ethereum, Base, and other networks.' },
          ],
        },
        {
          heading: 'Resources for developers',
          items: [
            { icon: BookOpen, title: 'Documentation', desc: 'Comprehensive guides, API references, and tutorials to get you started quickly.' },
            { icon: FlaskConical, title: 'Testnet & Faucet', desc: 'Test your integrations on Base Sepolia with free testnet ETH from our faucet.' },
            { icon: MessageCircle, title: 'Developer community', desc: 'Join thousands of developers in our Discord, forums, and GitHub repositories.' },
          ],
        },
      ]}
      cta={{ heading: 'Start building today', sub: 'Get your API keys and start building in minutes.', href: '/signup', label: 'Get API access' }}
    />
  );
}
