import CustomerBenefits from "@/components/customer-benefits";
import CustomerExtraBenefits from "@/components/customer-extra-benefits";
import MainBanner, { MainBannerProps } from "@/components/main-banner";
import buyCryptoBanner from "@/images/buy-crypto-banner.png";

const mainBanner = {
  title: {
    pre: "Instant",
    mid: "fiat deposits",
    post: "",
  },
  description: `Securely and instantly deposit fiat currencies and swap to crypto with confidence`,
  image: {
    src: buyCryptoBanner,
    alt: "Buy Crypto Banner",
  },
} as MainBannerProps;

const customerBenefits = [
  {
    id: 1,
    title: "Instant fiat on- and off-ramp",
    icon: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/direct_fiat_icon_187b23d9a5.svg",
      alt: "direct-fiat-icon.svg",
    },
    description:
      "Our unique direct fiat on- and off-ramp solution provides a seamless transfer experience with direct connection to the major banks.",
  },
  {
    id: 2,
    title: "Zero deposit fees",
    icon: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/zero_fee_icon_970c60c329.svg",
      alt: "zero-fee-icon.svg",
    },
    description:
      "Deposit EUR and GBP directly from your bank account with zero fees. Once your fiat is in your account swap directly to crypto and start.",
  },
  {
    id: 3,
    title: "Waste no time",
    icon: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/instant_icon_3fa5697bd2.svg",
      alt: "instant-icon.svg",
    },
    description:
      "Enjoy instant transfers with SEPA Instant and Faster Payments. Swap from fiat into crypto in two clicks.",
  },
];

const customerExtraBenefits = [
  {
    id: 1,
    title: "SEPA and Faster Payments",
    description:
      "We support all major fiat transfer providers, including SEPA and Faster Payments. Simply choose one of the available methods and follow the instructions to deposit EUR or GBP directly from your bank account. Your assets will be credited to your Yield App account within minutes, so you can start earning immediately.",
    img: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/Q1_2023_updated_web_illus_8_faster_payments_7943610164.svg",
      alt: "Q1_2023_updated_web_illus_8_faster_payments.svg",
    },
  },
  {
    id: 2,
    title: "Swap into and out of fiat",
    description:
      "Swap from fiat to crypto, and back to fiat, with zero fees at the click of a button. With a daily limit of $100,000 and access to the best market prices, there has never been a simpler solution for all your crypto needs.",
    img: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/Q1_2023_updated_web_illus_9_swap_in_and_out_fiat_f63e60b8c4.svg",
      alt: "Q1_2023_updated_web_illus_9_swap_in_and_out_fiat.svg",
    },
  },
  {
    id: 3,
    title: "Earning on your crypto has never been easier",
    description:
      "Buying crypto on Yield App using EUR or GBP bank account is quick and simple. Simply swap your EUR or GBP into crypto and select one of our portfolios to start earning interest.",
    img: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/Q1_2023_updated_web_illus_10_earn_crypto_easy_fd86001fdd.svg",
      alt: "Q1_2023_updated_web_illus_10_earn_crypto_easy.svg",
    },
  },
];

const gettingStarted = [
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
    title: "Log in select EUR or GBP from the deposit tab",
    icon: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/Frame_2047_1_e8b34939a7.svg",
      alt: "step two",
    },
    description:
      "You will be required to complete a short questionnaire on your cryptocurrency knowledge.",
  },
  {
    id: 3,
    title: "Swap into crypto and start earning",
    icon: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/Frame_2047_2_1ce03f4f82.svg",
      alt: "step three",
    },
    description:
      "Once your fiat is in your wallet simply swap it into crypto and choose one of the available portfolios to start earning up to 9% p.a.",
  },
];

function BuyCrypto() {
  return (
    <main className="mb-8">
      <MainBanner {...mainBanner} />
      <CustomerBenefits
        title="Why deposit fiat on Yield App?"
        benefits={customerBenefits}
      />
      <CustomerExtraBenefits extraBenefits={customerExtraBenefits} />
      <CustomerBenefits
        title="Get started"
        subtitle="Simply sign up for an account and start transferring your EUR and GBP in just a few simple steps."
        benefits={gettingStarted}
      />
    </main>
  );
}

export default BuyCrypto;
