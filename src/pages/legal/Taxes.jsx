import InfoPage from '../../components/common/InfoPage';
import { FileText, Download, Calculator, BookOpen, Shield, HelpCircle } from 'lucide-react';

export default function Taxes() {
  return (
    <InfoPage
      title="Crypto Taxes"
      subtitle="Coinbase makes it easy to understand your crypto tax obligations and download the reports you need."
      sections={[
        {
          heading: 'Tax documents & reports',
          items: [
            { icon: Download, title: 'Download tax forms', desc: 'Access your 1099-B, 1099-MISC, and other required tax forms directly from your account.' },
            { icon: FileText, title: 'Transaction history', desc: 'Export a complete CSV of all your transactions, trades, and transfers for any tax year.' },
            { icon: Calculator, title: 'Gains & losses report', desc: 'See a summary of your realized gains and losses across all assets for the tax year.' },
          ],
        },
        {
          heading: 'Understanding crypto taxes',
          items: [
            { icon: BookOpen, title: 'Taxable events', desc: 'Selling crypto, trading one crypto for another, or using crypto to pay for goods are taxable events.' },
            { icon: Shield, title: 'Non-taxable events', desc: 'Simply buying and holding crypto, or transferring between your own wallets, is generally not taxable.' },
            { icon: HelpCircle, title: 'Tax-loss harvesting', desc: 'Learn how to strategically sell assets at a loss to offset gains and reduce your tax bill.' },
          ],
        },
        {
          heading: 'Tax resources',
          text: 'Coinbase partners with leading crypto tax software providers including CoinTracker, TurboTax, and TaxBit. These integrations make it easier to import your Coinbase data and file your taxes accurately. Note: Coinbase does not provide tax advice. Consult a qualified tax professional for guidance specific to your situation.',
        },
      ]}
      cta={{ heading: 'Access your tax documents', sub: 'Sign in to download your tax forms and transaction history.', href: '/signin', label: 'Sign in to view' }}
    />
  );
}
