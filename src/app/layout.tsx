import Footer from "@/components/footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Script from "next/script";

if (process.env.NEXT_PUBLIC_API_MOCKING) {
  require("../mocks");
}

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
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        type="text/partytown"
      />
      <Script id="google-analytics" type="text/partytown">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
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
