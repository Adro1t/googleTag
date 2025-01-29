import Script from "next/script";

// Update metadata
export const metadata = {
  title: "Google Tag Manager Demo",
  description: "Next.js application with Google Tag Manager integration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google Tag Manager --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MVC4G9ZN');
`,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body>
        {/* GTM noscript - placed at top of body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MVC4G9ZN"
            height={0}
            width={0}
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* Main content */}
        {children}
      </body>
    </html>
  );
}
