import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Test from '@/components/test';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avete Pvt Ltd",
  description: "Website Development",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string
  };
}

export default  async function RootLayout({
  children,
  params: { locale }
}: Readonly<RootLayoutProps>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
      
        <NextIntlClientProvider messages={messages}>
        <Header />
        {children}
        <Footer /> 
        
        </NextIntlClientProvider>
       
      </body>
    </html>
  );
}
