"use client";

import { Tab } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

export interface EarningData {
  id: number;
  title: string;
  description?: string;
  lockDuration: string;
  lockDurationDescription: string;
  cryptoEarnings: {
    id: number;
    icon: {
      url: string;
      alt: string;
    };
    description: string;
  }[];
}

interface EarningTabsProps {
  title: string;
  subtitle: string;
  earnings: EarningData[];
}

export default function EarningTabs({
  title,
  subtitle,
  earnings,
}: EarningTabsProps) {
  return (
    <div className="earning-tabs container mx-auto my-8 px-20">
      <section className="bg-blue-50 px-16 py-16 items-center rounded">
        <h4 className="text-3xl font-bold text-center">{title}</h4>
        <h5 className="text-gray-500 text-center mt-2">{subtitle}</h5>
        <Tab.Group>
          <Tab.List className="flex justify-center mt-8">
            <div className="flex shadow-lg rounded-xl">
              {earnings.map((earning, index) => (
                <Tab as={Fragment} key={earning.id}>
                  {({ selected }) => (
                    <button
                      className={`text-black-900 text-sm justify-between text-left font-extrabold py-6 px-12 border-gray-100 first-of-type:border-r last-of-type:border-l first-of-type:rounded-l-xl last-of-type:rounded-r-xl ${
                        selected ? "bg-primary text-white" : "bg-white"
                      } ${index % 2 !== 0 ? "text-primary" : ""}`}
                    >
                      {earning.title}
                    </button>
                  )}
                </Tab>
              ))}
            </div>
          </Tab.List>
          <Tab.Panels>
            {earnings.map((earning) => (
              <Tab.Panel className="mx-16 p-8" key={earning.id}>
                <h5 className="mt-4 text-center">
                  <span className="border-b-2 border-b-slate-400 text-sm font-extrabold">
                    {earning.lockDurationDescription}
                  </span>
                  <span className="pl-8 text-2xl font-bold">
                    {earning.lockDuration}
                  </span>
                </h5>
                <ul
                  id="crypto-earnings"
                  className="bg-slate-50 p-8 rounded-lg shadow-lg border border-slate-100 flex justify-center mt-10"
                >
                  {earning.cryptoEarnings.map((cryptoEarning) => (
                    <li
                      key={cryptoEarning.id}
                      className="py-4 px-8 flex flex-col items-center"
                    >
                      <Image
                        src={cryptoEarning.icon.url}
                        alt={cryptoEarning.icon.alt}
                        width={56}
                        height={56}
                      />
                      <span className="mt-4 text-sm font-bold">
                        {cryptoEarning.description}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-center text-slate-900 mt-8">
                  {earning.description}
                </p>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </section>
    </div>
  );
}
