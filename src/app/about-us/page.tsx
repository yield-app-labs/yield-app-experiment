import BusinessMetrics from "@/components/business-metrics";
import CustomerBenefits from "@/components/customer-benefits";
import MainBanner, { MainBannerProps } from "@/components/main-banner";
import aboutUsBanner from "@/images/about-us-banner.png";

const mainBanner = {
  title: {
    pre: "About",
    mid: "Yield App",
    post: "",
  },
  description: `Yield App is a digital wealth platform that serves as a digital wealth partner to its customers.`,
  image: {
    src: aboutUsBanner,
    alt: "Yield Pro Page Banner",
  },
} as MainBannerProps;

const businessMetrics = [
  {
    id: 1,
    value: "90,000+",
    description: "Users worldwide",
  },
  {
    id: 2,
    value: "6+",
    description: "Supported cryptocurrencies",
  },
  {
    id: 3,
    value: "140+",
    description: "Available jurisdictions",
  },
  {
    id: 4,
    value: "100K+",
    description: "Social media community",
  },
];

const customerBenefits = [
  {
    id: 1,
    title: "Mission",
    icon: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/mission_876c686bdd.svg",
      alt: "mission icon",
    },
    description:
      "Our mission is to provide our customers with access to market-leading crypto products, carefully curated by our investment team, helping them preserve and grow their digital wealth over the long term.",
  },
  {
    id: 2,
    title: "Vision",
    icon: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/vision_e9566aa140.svg",
      alt: "vision icon",
    },
    description:
      "We believe everyone should have access to the best yield-generating opportunities available in the crypto market, regardless of their level of financial knowledge and expertise.",
  },
  {
    id: 3,
    title: "Values",
    icon: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/values_0d2b171057.svg",
      alt: "values icon",
    },
    description:
      "Due diligence, risk management and security are at the heart of everything we do at Yield App, ensuring our customers can sleep soundly at night knowing their digital assets are safe with us.",
  },
];

function AboutUs() {
  return (
    <main className="mb-8">
      <MainBanner {...mainBanner} />
      <BusinessMetrics businessMetrics={businessMetrics} />
      <CustomerBenefits
        title="Mission and values"
        benefits={customerBenefits}
      />
    </main>
  );
}

export default AboutUs;
