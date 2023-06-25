import CustomerBenefits from "@/components/customer-benefits";
import CustomerExtraBenefits from "@/components/customer-extra-benefits";
import MainBanner, { MainBannerProps } from "@/components/main-banner";
import yieldProBanner from "@/images/yield-pro-banner.png";

const mainBanner = {
  title: {
    pre: "Try out",
    mid: "Yield Pro",
    post: "risk-free",
  },
  description: `Download our simulator app and try structured products without any risk`,
  image: {
    src: yieldProBanner,
    alt: "Yield Pro Page Banner",
  },
} as MainBannerProps;

const customerBenefits = [
  {
    id: 1,
    title: "Tailored to your needs",
    icon: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/strategy_icon_45ac9b4b56.svg",
      alt: "strategy-icon.svg",
    },
    description:
      "We are building out a suite of structured products based on the needs and expectations of our clients. We are always happy to hear your suggestions.",
  },
  {
    id: 2,
    title: "Multiple risk profiles",
    icon: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/exposure_icon_69b19682b8.svg",
      alt: "exposure-icon.svg",
    },
    description:
      "Depending on your personal risk tolerance, there are a variety of structured products that may suit your needs. The decision on the risk-reward profile is always in your hands.",
  },
  {
    id: 3,
    title: "Variable market environments",
    icon: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/market_env_icon_5da97fbdc4.svg",
      alt: "market-environment-icon.svg",
    },
    description:
      "While returns can potentially be enhanced during times of increased volatility, structured products can support enhanced yield generation in a variety of market conditions.",
  },
];

const customerExtraBenefits = [
  {
    id: 1,
    title: "Sell-high dual currency",
    description:
      "A sell high dual currency deposit is one of the most popular yield enhancement strategies. It involves two currencies - usually stablecoins and another digital asset like BTC or ETH.",
    img: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/Dual_currency_sell_high_c2a4d9efae.svg",
      alt: "Sell-high dual currency",
    },
  },
  {
    id: 2,
    title: "Buy-low dual currency",
    description:
      "A dual currency structured product is one of the most popular yield enhancement strategies. It involves two currencies - usually stablecoins and a cryptocurrency like BTC. At maturity, the principal investment may be converted to the crypto asset, depending on whether the final spot price is above or below strike.",
    img: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/Dual_currencyv3_81b56710df.svg",
      alt: "Buy-low dual currency",
    },
  },
  {
    id: 3,
    title: "Range",
    description:
      "A range product allows an investor to take the view that the price of a cryptocurrency will remain within a specified range during a specified time period. If the price remains within this range, the investor earns a bonus APY. However, if the price rises above the top of this range or falls below the bottom, the investor faces losses.",
    img: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/range_graph_d198637312.svg",
      alt: "Range",
    },
  },
  {
    id: 4,
    title: "Sharkfin",
    description:
      "Sharkfin is a type of structured product that allows an investor to express a moderately bullish view on the price of the underlying asset. The highest returns are achieved when the price of the underlying asset appreciates, but does not exceed a set level. The product pays a guaranteed minimum coupon.",
    img: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/shark_fin_graph_8afb05ed48.svg",
      alt: "Sharfin",
    },
  },
  {
    id: 5,
    title: "Target",
    description:
      "This type of structured product allows an investor to earn a higher yield if the price of a cryptocurrency remains above a predetermined level, until a target profit amount is reached. If this profit target is reached before the maturity date, the product is redeemed early. Meanwhile, if the spot price falls below the the pre-specified level, there is a certain amount of protection on the downside.",
    img: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/target_graph_9fb2bdf237.svg",
      alt: "Target",
    },
  },
];

function YieldPro() {
  return (
    <main className="mb-8">
      <MainBanner {...mainBanner} />
      <CustomerBenefits title="Why Yield Pro?" benefits={customerBenefits} />
      <CustomerExtraBenefits
        title="Enjoy competitive market rates and gain access to major asset pairs"
        extraBenefits={customerExtraBenefits}
      />
    </main>
  );
}

export default YieldPro;
