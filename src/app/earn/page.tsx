import CustomerBenefits from "@/components/customer-benefits";
import CustomerExtraBenefits from "@/components/customer-extra-benefits";
import DataTable from "@/components/data-table";
import EarningTabs, { EarningData } from "@/components/earning-tabs";
import Faqs from "@/components/faqs";
import MainBanner, { MainBannerProps } from "@/components/main-banner";
import earnPageBanner from "@/images/earn-page-banner.png";

const mainBanner = {
  title: {
    pre: "Earn",
    mid: "up to 11%",
    post: "APR on your crypto",
  },
  description: `Make your digital assets work for you with Yield App. Top up and start earning
  daily interest on supported cryptocurrencies.`,
  links: [
    {
      id: 1,
      url: "/",
      text: "Start Earning",
      variant: "primary",
    },
  ],
  image: {
    src: earnPageBanner,
    alt: "Earn Page Banner",
  },
} as MainBannerProps;

const customerBenefits = [
  {
    id: 1,
    title: "Market neutral strategy",
    icon: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/strategy_icon_416ce71a94.svg",
      alt: "strategy-icon.svg",
    },
    description:
      "Our entire investment strategy follows a market neutral approach to ensure we preserve client capital and generate alpha in all market conditions.",
  },
  {
    id: 2,
    title: "DeFi exposure",
    icon: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/exposure_icon_69b19682b8.svg",
      alt: "exposure-icon.svg",
    },
    description:
      "Our in-house DeFi team seeks out opportunities in the Web3 space and conducts thorough due diligence using a proprietary risk model.",
  },
  {
    id: 3,
    title: "Arbitrage trading",
    icon: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/arbitrage_icon_e6e4b7ca2d.svg",
      alt: "arbitrage-icon.svg",
    },
    description:
      "We invest in a variety of crypto arbitrage strategies with the world's top specialist managers to deliver strong risk-adjusted returns.",
  },
];

const customerExtraBenefits = [
  {
    id: 1,
    title: "YLD token",
    description:
      "According to the founding tokenomics of our YLD token, a maximum supply of 300 million YLD can ever be created. The Yield App Tier Rewards program was designed to ensure that this supply is distributed fairly and sustainably up to 2025, when the maximum supply of 300 million YLD will be reached. As planned, our YLD Tier Bonus rewards pool for base assets has now come to an end. YLD on YLD rewards will continue to be paid indefinitely, in line with our long-term plans to ensure steady and sustainable YLD emissions.",
    img: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/Artboard_1_41bad7617b.svg",
      alt: "yld-token.svg",
    },
  },
];

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

const earningsData: EarningData[] = [
  {
    id: 1,
    title: "Earn+ 365",
    description: "Lock YLD for 12 month and receive 12% p.a.",
    lockDuration: "365 days",
    lockDurationDescription: "Min. lock duration",
    cryptoEarnings: [
      {
        id: 1,
        icon: {
          url: "https://yield2-website.s3.eu-central-1.amazonaws.com/btc_2d67c0aae2.svg",
          alt: "btc-icon.svg",
        },
        description: "up to 7% p.a.",
      },
      {
        id: 2,
        icon: {
          url: "https://yield2-website.s3.eu-central-1.amazonaws.com/eth_d181ce880c.svg",
          alt: "eth-icon.svg",
        },
        description: "up to 7.5% p.a.",
      },
      {
        id: 3,
        icon: {
          url: "https://yield2-website.s3.eu-central-1.amazonaws.com/usdc_059b089bbe.svg",
          alt: "usdc-icon.svg",
        },
        description: "up to 11% p.a.",
      },
      {
        id: 4,
        icon: {
          url: "https://yield2-website.s3.eu-central-1.amazonaws.com/usdt_ab57ebe9c2.svg",
          alt: "usdt-icon.svg",
        },
        description: "up to 11% p.a.",
      },
      {
        id: 5,
        icon: {
          url: "https://yield2-website.s3.eu-central-1.amazonaws.com/dai_e5e47ca70a.svg",
          alt: "dai-icon.svg",
        },
        description: "up to 11% p.a.",
      },
      {
        id: 6,
        icon: {
          url: "https://yield2-website.s3.eu-central-1.amazonaws.com/tusd_fda5faf78c.svg",
          alt: "dai-icon.svg",
        },
        description: "up to 11% p.a.",
      },
    ],
  },
  {
    id: 1,
    title: "Earn+",
    description: "Lock YLD for 12 month and receive 12% p.a.",
    lockDuration: "30 days",
    lockDurationDescription: "Min. lock duration",
    cryptoEarnings: [
      {
        id: 1,
        icon: {
          url: "https://yield2-website.s3.eu-central-1.amazonaws.com/btc_2d67c0aae2.svg",
          alt: "btc-icon.svg",
        },
        description: "up to 5% p.a.",
      },
      {
        id: 2,
        icon: {
          url: "https://yield2-website.s3.eu-central-1.amazonaws.com/eth_d181ce880c.svg",
          alt: "eth-icon.svg",
        },
        description: "up to 5.5% p.a.",
      },
      {
        id: 3,
        icon: {
          url: "https://yield2-website.s3.eu-central-1.amazonaws.com/tusd_fda5faf78c.svg",
          alt: "dai-icon.svg",
        },
        description: "up to 9% p.a.",
      },
      {
        id: 4,
        icon: {
          url: "https://yield2-website.s3.eu-central-1.amazonaws.com/usdc_059b089bbe.svg",
          alt: "usdc-icon.svg",
        },
        description: "up to 9% p.a.",
      },
      {
        id: 5,
        icon: {
          url: "https://yield2-website.s3.eu-central-1.amazonaws.com/usdt_ab57ebe9c2.svg",
          alt: "usdt-icon.svg",
        },
        description: "up to 9% p.a.",
      },
      {
        id: 6,
        icon: {
          url: "https://yield2-website.s3.eu-central-1.amazonaws.com/dai_e5e47ca70a.svg",
          alt: "dai-icon.svg",
        },
        description: "up to 9% p.a.",
      },
    ],
  },
  {
    id: 1,
    title: "Flexible",
    lockDuration: "Flexible Redemption",
    lockDurationDescription: "Min. lock duration",
    cryptoEarnings: [
      {
        id: 1,
        icon: {
          url: "https://yield2-website.s3.eu-central-1.amazonaws.com/eth_d181ce880c.svg",
          alt: "eth-icon.svg",
        },
        description: "up to 3.5% p.a.",
      },
      {
        id: 2,
        icon: {
          url: "https://yield2-website.s3.eu-central-1.amazonaws.com/tusd_fda5faf78c.svg",
          alt: "dai-icon.svg",
        },
        description: "up to 7% p.a.",
      },
      {
        id: 3,
        icon: {
          url: "https://yield2-website.s3.eu-central-1.amazonaws.com/usdc_059b089bbe.svg",
          alt: "usdc-icon.svg",
        },
        description: "up to 7% p.a.",
      },
      {
        id: 4,
        icon: {
          url: "https://yield2-website.s3.eu-central-1.amazonaws.com/usdt_ab57ebe9c2.svg",
          alt: "usdt-icon.svg",
        },
        description: "up to 7% p.a.",
      },
      {
        id: 5,
        icon: {
          url: "https://yield2-website.s3.eu-central-1.amazonaws.com/dai_e5e47ca70a.svg",
          alt: "dai-icon.svg",
        },
        description: "up to 7% p.a.",
      },
    ],
  },
];

const tableHeaders = [
  {
    key: "membershipTier",
    value: "Membership tier",
  },
  {
    key: "yldStaked",
    value: "YLD staked",
  },
  {
    key: "freeWithdrawals",
    value: "Free withdrawals",
  },
  {
    key: "vipChat",
    value: "VIP chat",
  },
  {
    key: "rates",
    value: "Rates",
  },
  {
    key: "yldLock",
    value: "YLD lock*",
  },
];

const loyaltyTiers = [
  {
    id: 1,
    tier: "Bronze",
    yldStaked: "0-999 YLD",
    freeWithdrawals: false,
    vipChat: false,
    rates: "up to 7% p.a.",
    yldLock: "0% p.a.",
  },
  {
    id: 2,
    tier: "Silver",
    yldStaked: "1,000-9,999 YLD",
    freeWithdrawals: false,
    vipChat: false,
    rates: "up to 8% p.a.",
    yldLock: "12% p.a.",
  },
  {
    id: 3,
    tier: "Gold",
    yldStaked: "10,000-19,999 YLD",
    freeWithdrawals: false,
    vipChat: false,
    rates: "up to 9% p.a.",
    yldLock: "12% p.a.",
  },
  {
    id: 4,
    tier: "Diamond",
    yldStaked: "20,000 YLD +",
    freeWithdrawals: "3 crypto & 1 EUR, GBP per month",
    vipChat: true,
    rates: "up to 11% p.a.",
    yldLock: "12% p.a.",
  },
];

function Earn() {
  return (
    <main>
      <MainBanner {...mainBanner} />
      <CustomerBenefits
        title="How we achieve our rates"
        benefits={customerBenefits}
      />
      <EarningTabs
        title="Ways to start earning"
        subtitle="Minimum lock-up period applies"
        earnings={earningsData}
      />
      <CustomerExtraBenefits extraBenefits={customerExtraBenefits} />
      <DataTable
        title="Loyalty tiers"
        subtitle="Our membership tiers are powered by our native token YLD. Stake YLD to
          earn the highest rates."
        headers={tableHeaders}
        data={loyaltyTiers}
      />
      <Faqs faqs={faqs} />
    </main>
  );
}

export default Earn;
