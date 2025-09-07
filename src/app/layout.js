import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
})

export const metadata = {
  title: {
    template: '%s | Home',
    default: 'Home'
  },
  description: "This is a web application where car fix booking are added by client users",
  keywords: ['fix car', 'car doctor', 'Next.js', 'React', 'JavaScript'],
  creator: 'Parvez Hossain Alif',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
