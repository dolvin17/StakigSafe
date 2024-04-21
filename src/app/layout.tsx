'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  arbitrum,
  arbitrumSepolia

} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";


const inter = Inter({ subsets: ["latin"] });

const config = getDefaultConfig({
	appName: "tip-me",
	projectId: "f5dc276367eb7e124550036ec4aab6df",
	chains: [ arbitrumSepolia, arbitrum],
	ssr: true, // If your dApp uses server side rendering (SSR)
  })
  const queryClient = new QueryClient()


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
		<WagmiProvider config={config}>
		<QueryClientProvider client={queryClient}>
			<RainbowKitProvider >

      <body className={inter.className}>
		<div suppressHydrationWarning className="bg-center bg-contain  bg-test-src">

		{children}
		</div>
		</body>
			</RainbowKitProvider>
		</QueryClientProvider>
		</WagmiProvider>
    </html>
  );
}
