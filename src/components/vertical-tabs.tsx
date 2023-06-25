"use client";

import { Tab } from "@headlessui/react";
import { Fragment } from "react";

export default function VerticalTabs() {
  return (
    <div className="vertical-tabs-information bg-black-900 text-white">
      <section className="px-48 py-24 container mx-auto flex justify-center">
        <Tab.Group>
          <Tab.List className="flex flex-col basis-2/6">
            {[
              "Risk management",
              "Market-neutral strategies",
              "Diversification",
              "Due diligence",
            ].map((tab) => (
              <Tab as={Fragment} key={tab}>
                {({ selected }) => (
                  <button
                    className={`flex justify-between text-left font-bold p-6 border border-gray-500 rounded-lg my-4 ${
                      selected ? "bg-primary text-white" : ""
                    }`}
                  >
                    <span>{tab}</span>
                    {selected && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 text-slate-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    )}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="pl-24 basis-4/6">
            <Tab.Panel className="mx-4 p-8 shadow rounded-lg">
              <h5 className="text-white-900 font-sans font-bold text-3xl leading-8 inline-block align-baseline mb-4">
                Risk management
              </h5>
              <p className="font-light mt-4">
                Yield App’s investment strategy is focused on long-term capital
                preservation through a robust risk management framework. We
                allocate to decentralized finance (DeFi) pools and external
                alpha managers using an internal proprietary 135-point risk
                model.
              </p>
              <p className="font-light mt-4">
                In addition, our DeFi team is developing an in-house portfolio
                management system (PMS) specifically designed for a 360-degree
                view of yield farming analysis. By providing streams of curated
                data directly from the blockchain, the PMS enhances the ability
                of our portfolio and risk managers to adjust positions based on
                changing market conditions.
              </p>
            </Tab.Panel>
            <Tab.Panel className="mx-4 p-8 shadow rounded-lg">
              <h5 className="text-white-900 font-sans font-bold text-3xl leading-8 inline-block align-baseline mb-4">
                Market-neutral strategies
              </h5>
              <p className="font-light mt-4">
                Yield App runs a portfolio focused on capital preservation
                through allocations to market-neutral DeFi pools and strategies
                with external managers. These strategies are selected based on
                strongest internal thresholds, ensuring client asset security
                remains the number one priority. Yield App never resorts to
                lending out customers’ assets and has zero exposure to the risks
                associated with unsecured lending.
              </p>
            </Tab.Panel>
            <Tab.Panel className="mx-4 p-8 shadow rounded-lg">
              <h5 className="text-white-900 font-sans font-bold text-3xl leading-8 inline-block align-baseline mb-4">
                Diversification
              </h5>
              <p className="font-light mt-4">
                All our portfolios are diversified across base asset, manager,
                and return strategies. Diversification ensures we significantly
                reduce the risk associated with the overall portfolio.
                Diversifying the portfolio across DeFi pools and market-neutral
                external strategies allows us to generate higher risk-adjusted
                returns than allocating to one strategy alone. Our external
                manager allocation is heavily geared towards two strategy types:
                liquidity provision and systematic trading (including arbitrage
                strategies).
              </p>
            </Tab.Panel>
            <Tab.Panel className="mx-4 p-8 shadow rounded-lg">
              <h5 className="text-white-900 font-sans font-bold text-3xl leading-8 inline-block align-baseline mb-4">
                Diversification
              </h5>
              <p className="font-light mt-4">
                All protocols and external managers must demonstrate proven
                track records and pass our strict due diligence process. Only 6%
                of external managers we consider are selected for the portfolio
                following this risk assessment.
              </p>
              <p className="font-light mt-4">
                In addition, we engage third parties to enhance our due
                diligence framework. These third parties provide risk,
                governance and continuous monitoring services on our behalf. For
                more information on our due diligence head here.
              </p>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </section>
    </div>
  );
}
