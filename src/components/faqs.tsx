"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

interface Faq {
  id: number;
  title: string;
  description: string;
}

interface FaqsProps {
  faqs: Faq[];
}

export default function Faqs({ faqs }: FaqsProps) {
  return (
    <div className="faqs text-white mt-16">
      <section className="py-24 px-64 container mx-auto mb-16 bg-primary rounded-lg">
        <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
        {faqs.map((faq) => (
          <Disclosure key={faq.id}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex text-xl w-full justify-between rounded-lg py-2 text-left font-bold focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
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
