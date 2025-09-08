import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

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
        {/* nav bar */}
        <nav className="bg-primary">
          <NavBar></NavBar>
        </nav>
        <main>
          {/* page route */}
          {children}
        </main>
        {/* footer */}
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
