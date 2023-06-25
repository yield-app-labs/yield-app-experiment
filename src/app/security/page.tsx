import CustomerExtraBenefits from "@/components/customer-extra-benefits";
import MainBanner, { MainBannerProps } from "@/components/main-banner";
import VerticalTabs from "@/components/vertical-tabs";
import securityPageBanner from "@/images/security-page-banner.png";

const mainBanner = {
  title: {
    pre: "",
    mid: "Institutional Grade Security",
    post: "for your digital assets",
  },
  description: `Yield App's market-neutral approach puts security first. Our multi-layered
  security infrastructure is designed to generate sustainable yield and protect your capital.`,
  image: {
    src: securityPageBanner,
    alt: "Security Page Banner",
  },
} as MainBannerProps;

const customerExtraBenefits = [
  {
    id: 1,
    title: "Internal controls",
    description:
      "Your personal information is contained behind numerous security layers and only accessible to a select few administrators. We have strict protocols with regards to staff information access and implement a two-man rule for sensitive operations.",
    img: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/Q1_2023_updated_web_illus_11_internal_control_c240b56af3.svg",
      alt: "Internal controls",
    },
  },
  {
    id: 2,
    title: "Account security",
    description:
      "We use state-of-the-art technology to prevent targeted DDoS attacks on our platform. Assets are stored under military-grade 256-bit encryption, with keys stored under internal physical control, and are subject to blockchain-based smart contract security.",
    img: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/Q1_2023_updated_web_illus_12_account_security_12d737420a.svg",
      alt: "Account security",
    },
  },
  {
    id: 1,
    title: "Asset security",
    description:
      "We use multi-party computation (MPC) in-house to protect your digital wealth. MPC is a cryptographic tool that allows multiple parties to make calculations using their combined data, without revealing their individual input.",
    img: {
      url: "https://yield2-website.s3.eu-central-1.amazonaws.com/Q1_2023_updated_web_illus_13_asset_security_c8069d5800.svg",
      alt: "Asset security",
    },
  },
];

function Security() {
  return (
    <main>
      <MainBanner {...mainBanner} />
      <VerticalTabs />
      <CustomerExtraBenefits
        title="Platform security"
        extraBenefits={customerExtraBenefits}
      />
    </main>
  );
}

export default Security;
