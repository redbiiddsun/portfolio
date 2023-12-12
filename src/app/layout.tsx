
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import './styles/globals.css'
import { Metadata } from "next/types";
import Favicon from "@/app/favicon.ico"


export const metadata: Metadata = {

  title: 'redbiiddsun portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className='white'>
      <head>
        <link rel="icon" href="/favicon.png" sizes="" />
      </head>
      <body>
        <Providers>
          <Navbar />
          <div className="mx-10 mb-6">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}