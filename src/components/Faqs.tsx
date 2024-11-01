import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is InfraTransankt?',
      answer:
        'InfraTransakt is a trustless peer-to-peer payment protocol that enables secure, instant, and borderless transactions without intermediaries while leveraging Layer 2 blockchain networks for maximum efficiency',
    },
 
  
  ],
  [
    {
      question: 'How does InfraTransakt keep fees low?',
    answer: 'InfraTransakt utilizes Layer 2 blockchain technology to drastically reduce transaction costs compared to traditional remittance systems, making payments more affordable and accessible for everyone.',
    },
    {
      question: 'Is there a limit to how much I can send through InfraTransakt?',
      answer: 'No, InfraTransakt employs advanced liquidity aggregation that allows users to send any amount without artificial limits, providing unlimited transaction capacity for all users.'
    },

  ],
  [
    {
      question: 'How fast are InfraTransakt settlements?',
      answer: 'InfraTransakt offers instant settlement with real-time payouts directly to bank accounts or mobile money wallets, ensuring recipients get their funds in seconds rather than days.'
    },
    
    {
      question: 'Is InfraTransakt custodial?',
      answer: 'No, InfraTransakt is fully non-custodial, meaning users maintain complete control of their assets at all times. The protocol never takes custody of user funds at any point in the transaction process.'
    },
    {
      question: 'How does InfraTransakt promote financial inclusion?',
      answer: 'InfraTransakt bridges the gap between crypto and traditional finance through seamless crypto-fiat exchange, making fast and affordable payments accessible to underserved individuals and businesses worldwide.'
    }
  
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
           Benefits
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
          SWIFT rails are not swift enough. Bridging the gap of settlement in cross border ransactions in Africa and frontier markets 
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
