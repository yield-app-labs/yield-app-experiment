import CustomerBenefits from "@/components/customer-benefits";
import CustomerExtraBenefits from "@/components/customer-extra-benefits";
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

function Earn() {
  return (
    <main>
      <MainBanner {...mainBanner} />
      <CustomerBenefits
        title="How we achieve our rates"
        benefits={customerBenefits}
      />
      <CustomerExtraBenefits extraBenefits={customerExtraBenefits} />
      <Faqs />
    </main>
  );
}

export default Earn;
