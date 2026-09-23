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
  title: "Manglik",
  description: "Manglik Analysis",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/Fav-Icon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&family=Playfair+Display:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
