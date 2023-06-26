import Image from "next/image";
import YieldLogo from "./yield-logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-32 py-24">
        <div className="flex">
          <div className="flex flex-col basis-2/6">
            <a href="/" className="mb-8">
              <YieldLogo />
            </a>
            <p className="font-light text-sm w-80">
              Your digital wealth partner — Discover the easiest way to earn on
              your digital assets
            </p>
            <div className="flex flex-col mt-8">
              <h6 className="font-normal">Download the mobile app</h6>
              <div className="flex pt-4">
                <a
                  target="_blank"
                  href="https://apps.apple.com/app/yield-app/id1591189242"
                  rel="noreferrer"
                  className="mr-4"
                >
                  <Image
                    src="https://yield2-website.s3.eu-central-1.amazonaws.com/ios_badge_2d5a3c9638.svg"
                    alt="app-store-icon.svg"
                    loading="lazy"
                    width={120}
                    height={40}
                  />
                </a>
                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.yieldapp_mobile"
                  rel="noreferrer"
                >
                  <Image
                    src="https://yield2-website.s3.eu-central-1.amazonaws.com/playstore_badge_7a222147c6.svg"
                    alt="play-store-icon.svg"
                    loading="lazy"
                    width={135}
                    height={40}
                  />
                </a>
              </div>
            </div>
            {/* Trust Pilot Widget */}
          </div>
          <div className="flex justify-around basis-4/6">
            <div className="products flex flex-col">
              <h5 className="font-bold inline-block align-baseline mb-5">
                Products
              </h5>
              <ul className="flex flex-col">
                <li className="font-light text-sm my-3">
                  <Link href="/earn">Earn</Link>
                </li>
                <li className="font-light text-sm my-3">
                  <Link href="/swap-crypto">Exchange</Link>
                </li>
                <li className="font-light text-sm my-3">
                  <Link href="/">Haven1</Link>
                </li>
                <li className="font-light text-sm my-3">
                  <Link href="/yield-pro">Yield Pro</Link>
                </li>
                <li className="font-light text-sm my-3">
                  <a href="/">Yield App Labs</a>
                </li>
              </ul>
            </div>
            <div className="company flex flex-col">
              <h5 className="font-bold inline-block align-baseline mb-5">
                Company
              </h5>
              <ul className="flex flex-col">
                <li className="font-light text-sm my-3">
                  <Link href="/about-us">About us</Link>
                </li>
                <li className="font-light text-sm my-3">
                  <Link href="/security">Asset security</Link>
                </li>
                <li className="font-light text-sm my-3">
                  <Link href="/blog">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="legal flex flex-col">
              <h5 className="font-bold inline-block align-baseline mb-5">
                Legal
              </h5>
              <ul className="flex flex-col">
                <li className="font-light text-sm my-3">
                  <a href="/">Bug bounty policy</a>
                </li>
                <li className="font-light text-sm my-3">
                  <a href="/">Cookie policy</a>
                </li>
                <li className="font-light text-sm my-3">
                  <a href="/">Privacy policy</a>
                </li>
                <li className="font-light text-sm my-3">
                  <a href="/">Referral program policy</a>
                </li>
                <li className="font-light text-sm my-3">
                  <a href="/">Terms and conditions</a>
                </li>
              </ul>
            </div>
            <div className="help flex flex-col">
              <h5 className="font-bold inline-block align-baseline mb-5">
                Help
              </h5>
              <ul className="flex flex-col">
                <li className="font-light text-sm my-3">
                  <a href="/">Help center</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sign-up-updates follow-us flex mt-8">
          <div className="basis-8/12"></div>
          <div className="flex flex-col basis-4/12 pl-10">
            <h6 className="font-bold">Sign up for updates</h6>
            <input
              placeholder="example@email.com"
              className="mt-4 py-2 px-4 rounded-lg border border-slate-100 w-72"
            />
            <h6 className="font-bold mt-8">Follow us</h6>
            <div className="flex mt-4">
              <a
                href="https://twitter.com/yieldapp"
                target="_blank"
                rel="noreferrer"
                className="mr-8"
              >
                <Image
                  src="https://yield2-website.s3.eu-central-1.amazonaws.com/twitter_icon_8d1784a0b7.svg"
                  alt="twitter-icon.svg"
                  loading="lazy"
                  width={48}
                  height={48}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/yieldapp/"
                target="_blank"
                rel="noreferrer"
                className="mr-8"
              >
                <Image
                  src="https://yield2-website.s3.eu-central-1.amazonaws.com/linkedin_icon_538def56f8.svg"
                  alt="linkedin-icon.svg"
                  loading="lazy"
                  width={48}
                  height={48}
                />
              </a>
              <a
                href="https://t.me/yieldapp"
                target="_blank"
                rel="noreferrer"
                className="mr-8"
              >
                <Image
                  src="https://yield2-website.s3.eu-central-1.amazonaws.com/telegram_icon_77f9315abf.svg"
                  alt="telegram-icon.svg"
                  loading="lazy"
                  width={48}
                  height={48}
                />
              </a>
              <a
                href="https://discord.com/invite/crwD3JgMgn"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="https://yield2-website.s3.eu-central-1.amazonaws.com/discord_icon_01cab086a7.svg"
                  alt="discord-icon.svg"
                  loading="lazy"
                  width={48}
                  height={48}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright container mx-auto">
        <hr className="border border-slate-500" />
        <p className="text-center font-bold text-xs py-8">
          © 2022 - 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
