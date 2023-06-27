import Footer from "@/components/footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Script from "next/script";

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

      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
