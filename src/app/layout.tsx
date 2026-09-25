import type { Metadata } from "next";
import React, { ReactNode } from "react";
import "./globals.css";
import '../styles/navbar.css';
import '../styles/calculator.css';
import '../styles/result.css';

import '../styles/intro.css';
import '../styles/features.css';
import '../styles/faq.css';
import '../styles/footer.css';

export const metadata: Metadata = {
  title: "Manglik Dosha Calculator | Check Mangal Dosh Online - Astroved",
  description: "Check your Manglik Dosha online instantly. Enter your birth details to know if you are Manglik, read personalized predictions, and discover powerful remedies.",
  alternates: {
    canonical: "https://www.astroved.com/astrology/manglik-dosha-calculator",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Free Manglik Dosha Calculator | Check Mangal Dosh Online",
    description: "Find out if you have Mangal Dosh in your Kundli. Get expert astrological remedies to mitigate the effects of Mars in your birth chart.",
    url: "https://www.astroved.com/astrology/manglik-dosha-calculator",
    siteName: "Astroved",
    images: [
      {
        url: "https://www.astroved.com/astrology/manglik-dosha-calculator/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Manglik Dosha Calculator Interface",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Manglik Dosha Calculator",
    description: "Find out if you have Mangal Dosh in your Kundli and get expert astrological remedies.",
    images: ["https://www.astroved.com/astrology/manglik-dosha-calculator/twitter-image.jpg"],
  },
  verification: {
    yandex: "b278cbf15fec8032",
    other: {
      "facebook-domain-verification": "bzbnqt8qb4w54z3gzweotzhp9suhrc",
      "msvalidate.01": "E9F6803026417EC7E27A11463F3B5493",
      "fb:app_id": "201285856706759"
    }
  }
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Manglik Dosha Calculator",
  "description": "Free online Manglik Dosha calculator to check Mars affliction in your birth chart.",
  "url": "https://www.astroved.com/astrology/manglik-dosha-calculator",
  "applicationCategory": "LifestyleApplication",
  "operatingSystem": "All",
  "provider": {
    "@type": "Organization",
    "name": "Astroved",
    "url": "https://www.astroved.com"
  }
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <link rel="icon" type="image/png" href="/images/Fav-Icon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&family=Playfair+Display:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.location.search && window.location.search.length > 1) {
                var metaRobots = document.querySelector('meta[name="robots"]');
                if(metaRobots) metaRobots.setAttribute("content", "noindex, follow");
              }
            `,
          }}
        />


        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({
                  'gtm.start': new Date().getTime(),
                  event: 'gtm.js'
                });
                var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s),
                  dl = l !== 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
              })(window, document, 'script', 'dataLayer', 'GTM-TRS65PJ');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function getCookie(name) {
                var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
                return match ? match[2] : null;
              }

              var cId = getCookie("C_Id");
              var pageLanguage = "en-US";

              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: "page_view",
                page_name: document.title || "",
                page_url: window.location.href,
                user_id: cId || 0,
                language: pageLanguage
              });
            `,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TRS65PJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>


        <script
          src="https://code.jquery.com/jquery-3.7.1.min.js"
          integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
          crossOrigin="anonymous"
          defer
        ></script>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
