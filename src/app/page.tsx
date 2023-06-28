import CustomerFeedbacks from "@/components/customer-feedbacks";
import BusinessMetrics from "@/components/business-metrics";
import CustomerBenefits from "@/components/customer-benefits";
import CustomerExtraBenefits from "@/components/customer-extra-benefits";
import MainBanner, { MainBannerProps } from "@/components/main-banner";

import axios from "axios";

import homePageBanner from "@/images/home-page-banner.png";

const mainBanner = {
  title: {
    pre: "Your digital",
    mid: "wealth partner",
    post: "",
  },
  description: `Yield App is a digital wealth platform that allows you to safely
  earn passive yield on your digital assets at the click of a
  button.`,
  links: [
    {
      id: 1,
      url: "/",
      text: "Get started",
      variant: "primary",
    },
    {
      id: 2,
      url: "/",
      text: "Learn more",
      variant: "secondary",
    },
  ],
  image: {
    src: homePageBanner,
    alt: "Home Page Banner",
  },
} as MainBannerProps;

const businessMetrics = [
  {
    id: 1,
    value: "90,000+",
    description: "Customers",
  },
  {
    id: 2,
    value: "140+",
    description: "Available jurisdictions",
  },
  {
    id: 3,
    value: "$2B+",
    description: "Processed in 2+ years",
  },
];

const customerFeedbacks = [
  {
    id: 1,
    icon: {
      alt: "reddit-icon.svg",
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/reddit_icon_671cc18147.svg",
    },
    text: "I'm very confident in the Yield App. They have a lot of material on their strategies, and they answer all questions asked on their Discord and Telegram channels. Only enter channels via the website. no concern at all at YIELD APP , even in this bear market , they are a solid project and they are here to stay",
    author: "HenryGlasou",
  },
  {
    id: 2,
    icon: {
      alt: "twitter-icon.svg",
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/twitter_icon_9f92be7dce.svg",
    },
    text: "I was digging DEEP on every crypto reddit thread I could find. And eventually stumbled upon a single reddit user who mentioned Yield, Jumped into a weeks worth of DD on Yield and the rest is history.",
    author: "PlaywinGirl1",
  },
  {
    id: 3,
    icon: {
      alt: "tp-icon.svg",
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/tp_icon_b467f7e613.svg",
    },
    text: "A great Platform in ''hard times''! Yield have always delivered on their promises, I look forward to them going from strength to strength over the coming years.",
    author: "Matt",
  },
  {
    id: 4,
    icon: {
      alt: "tp-icon.svg",
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/tp_icon_b467f7e613.svg",
    },
    text: "Seamless on and off ramp; great returns but with the security guarantee comparable to a traditional bank.",
    author: "Anonymous",
  },
  {
    id: 5,
    icon: {
      alt: "tp-icon.svg",
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/tp_icon_b467f7e613.svg",
    },
    text: "I've been using Yield App since Feb 2021 and I am a very happy customer. From my point of view it's the safest place to earn yield on your digital assets. I am using it for my BTC and stablecoins. Very professional team and a lot of innovation coming in the near future.",
    author: "Gradlon Jegouic",
  },
  {
    id: 6,
    icon: {
      alt: "reddit-icon.svg",
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/reddit_icon_671cc18147.svg",
    },
    text: "I'm very confident in the Yield App. They have a lot of material on their strategies, and they answer all questions asked on their Discord and Telegram channels. Only enter channels via the website. no concern at all at YIELD APP , even in this bear market , they are a solid project and they are here to stay",
    author: "HenryGlasou",
  },
  {
    id: 7,
    icon: {
      alt: "twitter-icon.svg",
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/twitter_icon_9f92be7dce.svg",
    },
    text: "I was digging DEEP on every crypto reddit thread I could find. And eventually stumbled upon a single reddit user who mentioned Yield, Jumped into a weeks worth of DD on Yield and the rest is history.",
    author: "PlaywinGirl1",
  },
  {
    id: 8,
    icon: {
      alt: "tp-icon.svg",
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/tp_icon_b467f7e613.svg",
    },
    text: "A great Platform in ''hard times''! Yield have always delivered on their promises, I look forward to them going from strength to strength over the coming years.",
    author: "Matt",
  },
  {
    id: 9,
    icon: {
      alt: "tp-icon.svg",
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/tp_icon_b467f7e613.svg",
    },
    text: "Seamless on and off ramp; great returns but with the security guarantee comparable to a traditional bank.",
    author: "Anonymous",
  },
  {
    id: 10,
    icon: {
      alt: "tp-icon.svg",
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/tp_icon_b467f7e613.svg",
    },
    text: "I've been using Yield App since Feb 2021 and I am a very happy customer. From my point of view it's the safest place to earn yield on your digital assets. I am using it for my BTC and stablecoins. Very professional team and a lot of innovation coming in the near future.",
    author: "Gradlon Jegouic",
  },
  {
    id: 11,
    icon: {
      alt: "reddit-icon.svg",
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/reddit_icon_671cc18147.svg",
    },
    text: "I'm very confident in the Yield App. They have a lot of material on their strategies, and they answer all questions asked on their Discord and Telegram channels. Only enter channels via the website. no concern at all at YIELD APP , even in this bear market , they are a solid project and they are here to stay",
    author: "HenryGlasou",
  },
  {
    id: 12,
    icon: {
      alt: "twitter-icon.svg",
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/twitter_icon_9f92be7dce.svg",
    },
    text: "I was digging DEEP on every crypto reddit thread I could find. And eventually stumbled upon a single reddit user who mentioned Yield, Jumped into a weeks worth of DD on Yield and the rest is history.",
    author: "PlaywinGirl1",
  },
  {
    id: 13,
    icon: {
      alt: "tp-icon.svg",
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/tp_icon_b467f7e613.svg",
    },
    text: "A great Platform in ''hard times''! Yield have always delivered on their promises, I look forward to them going from strength to strength over the coming years.",
    author: "Matt",
  },
];

const customerBenefits = [
  {
    id: 1,
    title: "No leverage",
    icon: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/no_leverage_1_123f051b80.svg",
      alt: "no leverage 1.svg",
    },
    description:
      "We minimize potential risks in our yield-generating strategies by prioritizing capital preservation. We never use leverage.",
  },
  {
    id: 2,
    title: "No lending",
    icon: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/nolending_icon_64b146bd1d.svg",
      alt: "nolending-icon.svg",
    },
    description:
      "Our approach generates alpha through market-neutral strategies and liquidity provision. We fully exclude yield generation through collateralized lending.",
  },
  {
    id: 3,
    title: "Risk-averse approach",
    icon: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/riskaverse_icon_fd331e2f3a.svg",
      alt: "riskaverse-icon.svg",
    },
    description:
      "All the strategies into which we deploy capital are run through enhanced due diligence processes or selected using our 135-point proprietary risk model.",
  },
];

const customerExtraBenefits = [
  {
    id: 1,
    title: "Protect your assets from volatility",
    description:
      "We focus on capital preservation via a diversified portfolio of DeFi and traditional investment strategies encompassing liquidity provision, market making, and systematic market-neutral strategies. All investments undergo rigorous due diligence before we deploy assets.",
    img: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/Protect_home_page_04abec1584.svg",
      alt: "Protect home page.svg",
    },
  },
  {
    id: 2,
    title: "Earn on your terms",
    description:
      "We empower you to choose the perfect way to earn on your digital assets. Level up your strategy to earn stable, daily interest on the world's leading crypto assets, paid directly into your account.",
    img: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/Q1_2023_updated_web_illus_3_flexible_and_earnplus_9b9770727a.svg",
      alt: "Q1 2023 updated web illus 3 flexible and earnplus.svg",
    },
    link: {
      url: "/",
      text: "Get started",
    },
  },
  {
    id: 3,
    title: "Yield Pro",
    description:
      "By utilizing crypto structured products, we harness the potential of investment products linked to underlying crypto assets. These products utilize one or more derivative instruments and are designed to provide attractive payoffs to investors, distinct from the return profile of the underlying crypto asset itself. Our approach leverages the benefits of these structured products to generate alpha, enabling us to tap into unique opportunities within the crypto market.",
    img: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/Artboard_1_b4b9d4f2a5.svg",
      alt: "Artboard 1.svg",
    },
  },
];

async function Home() {
  if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
    const { data: book } = await axios.get("https://my.backend/book");
    console.log(book);
  }

  return (
    <main>
      <MainBanner {...mainBanner} />
      <BusinessMetrics businessMetrics={businessMetrics} />
      <CustomerBenefits benefits={customerBenefits} />
      <CustomerExtraBenefits extraBenefits={customerExtraBenefits} />
      <CustomerFeedbacks feedbacks={customerFeedbacks} />
    </main>
  );
}

export default Home;
