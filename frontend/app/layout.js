import "./globals.css";

export const metadata = {
  title: "QIE Pay",
  description: "Mobile-first QIE crypto point-of-sale app for business owners.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
