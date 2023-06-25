import CustomerBenefits from "@/components/customer-benefits";
import CustomerExtraBenefits from "@/components/customer-extra-benefits";
import MainBanner, { MainBannerProps } from "@/components/main-banner";
import swapCryptoBanner from "@/images/swap-crypto-banner.png";

const mainBanner = {
  title: {
    pre: "",
    mid: "Instant swaps",
    post: "on crypto and fiat",
  },
  description: `Swap crypto assets and fiat currencies with ease`,
  image: {
    src: swapCryptoBanner,
    alt: "Swap Crypto Page Banner",
  },
} as MainBannerProps;

const customerBenefits = [
  {
    id: 1,
    title: "Up to $100k daily limit",
    icon: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/daily_limit_icon_7a0018bea0.svg",
      alt: "daily-limit-icon.svg",
    },
    description:
      "Yield App's large-scale asset swaps allow you to exchange up to $100,000 worth of crypto and fiat every day. You can do this without ever leaving the platform, making it easy to manage your crypto portfolio.",
  },
  {
    id: 2,
    title: "Zero fees",
    icon: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/zero_fee_icon_53bdb19091.svg",
      alt: "zero-fee-icon.svg",
    },
    description:
      "We deliver you real-time prices through our integrated API, so the quote you see is always the price you pay. With no hidden swap fees, you can be sure you are making the most of your crypto.",
  },
  {
    id: 3,
    title: "Instant and secure",
    icon: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/instant_icon_aa4a31cba3.svg",
      alt: "instant-icon.svg",
    },
    description:
      "Enjoy our easy-to-use interface and complete crypto-to-crypto and fiat-to-crypto swaps in seconds. Our state-of-the-art technology ensures that your assets always remain safe with us.",
  },
];

const customerExtraBenefits = [
  {
    id: 1,
    title: "Swap at real cost",
    description:
      "Swap between major assets at real prices. Never miss a beat and react to the market.",
    img: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/Q1_2023_updated_web_illus_5_swap_at_real_cost_1_04b1c73691.svg",
      alt: "Swap at real cost",
    },
  },
  {
    id: 2,
    title: "Swap between the biggest cryptos",
    description:
      "We support major cryptocurrencies including BTC, ETH, USDC and USDT, as well as fiat currencies EUR and GBP. Swap and earn interest on your crypto, all without ever leaving the platform.",
    img: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/Q1_2023_updated_web_illus_6_swap_big_crypto_1_f606ac3eb2.svg",
      alt: "Swap between the biggest cryptos",
    },
  },
  {
    id: 3,
    title: "Swap and earn",
    description:
      "Don't miss a beat - start earning on your crypto the moment you swap. You can choose to auto-deploy all new swaps into one of the Earn portfolios, ensuring that your swapped asset begins earning interest straight away.",
    img: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/Q1_2023_updated_web_illus_7_swap_and_earn_16a243ae44.svg",
      alt: "Swap and earn",
    },
  },
];

const howtos = [
  {
    id: 1,
    title: "Sign up for a Yield App account",
    icon: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/Frame_2047_d288857201.svg",
      alt: "step one",
    },
    description:
      "This will allow you to buy, sell, swap and earn on your crypto.",
  },
  {
    id: 2,
    title: "Log in to your Yield App account and select Swap",
    icon: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/Frame_2047_1_e8b34939a7.svg",
      alt: "step two",
    },
    description:
      "Here you can swap between cryptocurrencies, as well as from fiat to crypto and back, in real time.",
  },
  {
    id: 3,
    title: "Select your currency pair, click “Get quote”, and accept",
    icon: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/Frame_2047_2_1ce03f4f82.svg",
      alt: "step three",
    },
    description:
      "Your swap will be executed in seconds at the best market prices!",
  },
];

function SwapCrypto() {
  return (
    <main className="mb-8">
      <MainBanner {...mainBanner} />
      <CustomerBenefits
        title="Why swap crypto on Yield App"
        benefits={customerBenefits}
      />
      <CustomerExtraBenefits
        title="Enjoy competitive market rates and gain access to major asset pairs"
        extraBenefits={customerExtraBenefits}
      />
      <CustomerBenefits
        title="How the Yield App exchange works"
        subtitle="Our crypto exchange is easy to use, whether you are new to crypto or a pro."
        benefits={howtos}
      />
    </main>
  );
}

export default SwapCrypto;
