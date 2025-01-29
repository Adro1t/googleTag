import Script from "next/script";

// Update metadata
export const metadata = {
  title: "Google Tag Manager Demo",
  description: "Next.js application with Google Tag Manager integration",
};

// GTM container ID - replace with your actual ID
const GTM_ID = "GTM-MVC4G9ZN"; // Replace with your valid GTM ID

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* GTM Script - placed at end of body */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
        {/* GTM noscript - placed at top of body */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Main content */}
        {children}
      </body>
    </html>
  );
}
