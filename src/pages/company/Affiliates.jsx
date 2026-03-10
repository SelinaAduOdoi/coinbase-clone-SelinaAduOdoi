import InfoPage from '../../components/common/InfoPage';
import { DollarSign, BarChart2, Headphones, Users, Megaphone, Gift, Globe, Award, Link2 } from 'lucide-react';

export default function Affiliates() {
  return (
    <InfoPage
      title="Affiliate Program"
      subtitle="Earn crypto by referring new users to Coinbase. Join one of the world's most trusted crypto affiliate programs."
      sections={[
        {
          heading: 'Why join the Coinbase Affiliate Program?',
          items: [
            { icon: DollarSign, title: 'Competitive commissions', desc: 'Earn up to 50% of trading fees from users you refer for their first 3 months.' },
            { icon: BarChart2, title: 'Real-time dashboard', desc: 'Track your referrals, conversions, and earnings with our live reporting dashboard.' },
            { icon: Headphones, title: 'Dedicated support', desc: 'Get a dedicated affiliate manager and priority support to help maximize your earnings.' },
            { icon: Users, title: 'Large audience potential', desc: 'Coinbase has over 100 million verified users — a huge base of trusted brand recognition.' },
            { icon: Megaphone, title: 'Marketing resources', desc: 'Access a full library of banners, landing pages, and copy to promote Coinbase effectively.' },
            { icon: Gift, title: 'Bonus incentives', desc: 'Unlock performance bonuses and tiered rewards when you hit monthly referral milestones.' },
          ],
        },
        {
          heading: 'How it works',
          items: [
            { icon: Link2, title: '1. Apply and get approved', desc: 'Fill out a short application. Approval typically takes 1–3 business days.' },
            { icon: Globe, title: '2. Share your unique link', desc: 'Promote Coinbase on your website, blog, YouTube channel, or social media.' },
            { icon: Award, title: '3. Earn commissions', desc: 'Get paid automatically when referred users sign up and trade on Coinbase.' },
          ],
        },
      ]}
      cta={{ heading: 'Start earning today', sub: 'Apply to the Coinbase Affiliate Program in minutes.', href: '/signup', label: 'Apply now' }}
    />
  );
}
