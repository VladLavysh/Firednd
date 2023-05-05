import Navbar from "./components/navbar/Navbar"
import "./globals.css"
import { Nunito } from "next/font/google"

// Font: Nunito
const globalFont = Nunito({
  subsets: ["latin"],
})

export const metadata = {
  title: "Firebnb",
  description: "Airbnb for campfires",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={globalFont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
