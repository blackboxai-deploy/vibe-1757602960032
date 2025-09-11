'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { useAuth } from '@/components/providers/AuthProvider';
import Link from 'next/link';

export default function Hero() {
  const { language, t, isRTL } = useLanguage();
  const { isAuthenticated } = useAuth();

  return (
    <section className={`relative min-h-[80vh] flex items-center justify-center px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="flex justify-center">
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            {language === 'ar' ? '🇸🇦 حلول مساحات العمل المتميزة' : '🇸🇦 Premium Workspace Solutions'}
          </Badge>
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t('home.welcome')}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {t('home.description')}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/services">
              {t('home.exploreSpaces')}
            </Link>
          </Button>
          
          {isAuthenticated ? (
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link href="/bookings/new">
                {t('home.bookNow')}
              </Link>
            </Button>
          ) : (
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link href="/auth/register">
                {language === 'ar' ? 'انضم إلينا' : 'Join Us'}
              </Link>
            </Button>
          )}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-muted-foreground/20">
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">3</div>
            <div className="text-sm text-muted-foreground">
              {language === 'ar' ? 'فروع' : 'Branches'}
            </div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">
              {language === 'ar' ? 'مساحة عمل' : 'Workspaces'}
            </div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">1000+</div>
            <div className="text-sm text-muted-foreground">
              {language === 'ar' ? 'عميل راضي' : 'Happy Clients'}
            </div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">
              {language === 'ar' ? 'دعم' : 'Support'}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground/30 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-accent/10 rounded-full blur-lg"></div>
    </section>
  );
}