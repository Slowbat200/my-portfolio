import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import BackgroundPlayer from '@/components/audio-player';
import { ConvexClientProvider } from '@/components/convex-provider';
import { ConvexAuthNextjsServerProvider } from '@convex-dev/auth/nextjs/server';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Slowbat',
  description: 'Personal Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={inter.className}>
          <ConvexClientProvider>
            <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
              {children}
            </ThemeProvider>
          </ConvexClientProvider>
          <div>
            <BackgroundPlayer />
          </div>
          <p></p>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
