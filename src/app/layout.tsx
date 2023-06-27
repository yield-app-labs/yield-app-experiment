import Footer from "@/components/footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

if (process.env.NEXT_PUBLIC_API_MOCKING) {
  require("../mocks");
}

const CRISP_WEBSITE_ID = process.env.CRISP_WEBSITE_ID;
const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yield App",
  description: "Yield App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Script id="crisp-chat" strategy="lazyOnload">
        {`
        window.$crisp=[];window.CRISP_WEBSITE_ID="${CRISP_WEBSITE_ID}";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
        `}
      </Script>
      <Script id="crisp-chat" strategy="lazyOnload">
        {`
        <!-- Hotjar Tracking Code for https://yield-app-experiment.vercel.app/ -->
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3551172,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>

      <body className={inter.className}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
