import './globals.css';
import type { Metadata } from 'next';
import { Inter, Tajawal } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/components/providers/AuthProvider';
import { LanguageProvider } from '@/components/providers/LanguageProvider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const tajawal = Tajawal({ 
  subsets: ['arabic'],
  weight: ['200', '300', '400', '500', '700', '800', '900'],
  variable: '--font-tajawal',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'SuperOffice KSA - Premium Workspace Solutions',
  description: 'Discover flexible office spaces, meeting rooms, and creative environments designed for success in Saudi Arabia.',
  keywords: 'office space, coworking, meeting rooms, workspace, Saudi Arabia, Riyadh, business center',
  authors: [{ name: 'SuperOffice KSA' }],
  creator: 'SuperOffice KSA',
  publisher: 'SuperOffice KSA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'SuperOffice KSA - Premium Workspace Solutions',
    description: 'Discover flexible office spaces, meeting rooms, and creative environments designed for success in Saudi Arabia.',
    url: 'https://superoffice.sa',
    siteName: 'SuperOffice KSA',
    images: [
      {
        url: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b594b855-41cb-41df-989d-65cb9a9addcf.png',
        width: 1200,
        height: 630,
        alt: 'SuperOffice KSA - Premium Workspace Solutions',
      },
    ],
    locale: 'en_US',
    alternateLocale: ['ar_SA'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SuperOffice KSA - Premium Workspace Solutions',
    description: 'Discover flexible office spaces, meeting rooms, and creative environments designed for success in Saudi Arabia.',
    images: ['https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/28f37f9c-aa6a-4524-aa34-b9b502d1b175.png'],
    creator: '@SuperOfficeKSA',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'SuperOffice KSA',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* PWA Meta Tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SuperOffice KSA" />
        
        {/* Theme Colors */}
        <meta name="theme-color" content="#145E63" />
        <meta name="msapplication-TileColor" content="#145E63" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Prevent automatic phone number detection */}
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body 
        className={`${inter.variable} ${tajawal.variable} font-sans antialiased min-h-screen bg-background`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            <AuthProvider>
              <div id="root" className="relative flex min-h-screen flex-col">
                <div className="flex-1">
                  {children}
                </div>
              </div>
              
              {/* Toast Notifications */}
              <Toaster 
                position="top-right"
                expand={true}
                richColors={true}
                closeButton={true}
                duration={5000}
              />
              
              {/* Service Worker Registration */}
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    if ('serviceWorker' in navigator) {
                      window.addEventListener('load', function() {
                        navigator.serviceWorker.register('/sw.js')
                          .then(function(registration) {
                            console.log('SW registered: ', registration);
                          })
                          .catch(function(registrationError) {
                            console.log('SW registration failed: ', registrationError);
                          });
                      });
                    }
                  `,
                }}
              />
            </AuthProvider>
          </LanguageProvider>
        </ThemeProvider>
        
        {/* Development Tools */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.__SUPEROFFICE_DEV__ = true;
                console.log('SuperOffice KSA - Application Loaded');
              }
            `,
          }}
        />
      </body>
    </html>
  );
}