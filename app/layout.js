import "./globals.css";
import localFont from '@next/font/local'


export const metadata = {
  title: process.env.TITLE,
  description: process.env.DESCRIPTION,
};
const moonhouse = localFont({
  src: '../public/fonts/Moonhouse-yE5M.ttf', 
  variable: '--font-moonhouse'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${moonhouse.variable}`}>
      <head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
</head>
      <body>{children}</body>
    </html>
  );
}
