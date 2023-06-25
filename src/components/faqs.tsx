"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const faqs = [
  {
    id: 1,
    title: "What is the difference between Flexible, Earn+ and Earn+ 365?",
    description: `Flexible allows for redemption of ETH and stablecoins at any time, while Earn+ has a 30-day redemption period and higher rates. Earn+ 365 offer a one-year lock-up exclusive to Diamond Tiers for the highest rates.`,
  },
  {
    id: 2,
    title: "What crypto assets can I earn rewards on?",
    description: `USDT, USDC, DAI, ETH (Ethereum), BTC (Bitcoin) and YLD`,
  },
  {
    id: 3,
    title: "When will I start earning rewards, and how do I redeem them?",
    description: `We calculate and distribute rewards every 24 hours at approximately 00:00 UTC, as you'll see in the earnings ledger on the Transactions page.`,
  },
  {
    id: 4,
    title: "Are my daily rewards compounded automatically?",
    description: `Yes, all rewards automatically compound back into the same portfolio. You can redeem these any time from Flexible products, but Earn+ and Earn+ 365 products come with lockup periods. Any rewards earned on YLD are automatically staked.`,
  },
];

export default function Faqs() {
  return (
    <div className="faqs text-white">
      <section className="py-24 px-64 container mx-auto mb-16 bg-primary rounded-lg">
        <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
        {faqs.map((faq) => (
          <Disclosure key={faq.id}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex text-xl w-full justify-between rounded-lg py-2 text-left font-bold focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>{faq.title}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-slate-400`}
                  />
                </Disclosure.Button>
                {open && (
                  <Disclosure.Panel
                    className="px-4 pt-4 pb-2 font-light text-slate-200"
                    static
                  >
                    {faq.description}
                  </Disclosure.Panel>
                )}
              </>
            )}
          </Disclosure>
        ))}
      </section>
    </div>
  );
}
