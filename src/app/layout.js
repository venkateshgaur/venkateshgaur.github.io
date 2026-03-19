import "./globals.css";

export const metadata = {
  title: "Venkatesh Gaur — Builder & Creator",
  description:
    "Personal portfolio of Venkatesh Gaur. Highlights, projects, writing, and more.",
  openGraph: {
    title: "Venkatesh Gaur — Builder & Creator",
    description:
      "Personal portfolio of Venkatesh Gaur. Highlights, projects, writing, and more.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
