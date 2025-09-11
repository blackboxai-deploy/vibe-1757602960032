'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { useAuth } from '@/components/providers/AuthProvider';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import ServiceGrid from '@/components/sections/ServiceGrid';
import BranchShowcase from '@/components/sections/BranchShowcase';
import FeaturedPromotions from '@/components/sections/FeaturedPromotions';
import QuickActions from '@/components/sections/QuickActions';
import StatsOverview from '@/components/sections/StatsOverview';
import Footer from '@/components/layout/Footer';
import { mockServices } from '@/lib/mockData';
import { SERVICE_CATEGORIES } from '@/lib/constants';

export default function HomePage() {
  const { t, language, isRTL } = useLanguage();
  const { isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
          <p className="text-lg text-muted-foreground">{t('common.loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-background ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />
        
        {/* Quick Actions for Authenticated Users */}
        {isAuthenticated && (
          <section className="py-8 px-4 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <QuickActions />
            </div>
          </section>
        )}
        
        {/* Stats Overview */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <StatsOverview />
          </div>
        </section>
        
        {/* Featured Promotions */}
        <section className="py-12 px-4 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <FeaturedPromotions />
          </div>
        </section>
        
        {/* Main Content Tabs */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-2">
                {t('services.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('services.subtitle')}
              </p>
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
                <TabsTrigger value="overview" className="text-sm">
                  {language === 'ar' ? 'نظرة عامة' : 'Overview'}
                </TabsTrigger>
                <TabsTrigger value="services" className="text-sm">
                  {t('nav.services')}
                </TabsTrigger>
                <TabsTrigger value="branches" className="text-sm">
                  {t('nav.branches')}
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-12">
                {/* Service Categories Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.values(SERVICE_CATEGORIES).map((categoryData) => {
                    const category = categoryData as any;
                    const servicesInCategory = mockServices.filter(
                      service => service.category === category.id
                    );
                    
                    return (
                      <Card key={category.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <div 
                              className="w-12 h-12 rounded-lg flex items-center justify-center text-xl"
                              style={{ backgroundColor: `${category.color}20`, color: category.color }}
                            >
                              {category.icon}
                            </div>
                            <div>
                              <CardTitle className="text-lg">
                                {language === 'ar' ? category.nameAr : category.nameEn}
                              </CardTitle>
                              <CardDescription>
                                {servicesInCategory.length} {language === 'ar' ? 'خدمة متاحة' : 'Available'}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {servicesInCategory.slice(0, 2).map((service) => (
                              <Badge key={service.id} variant="secondary" className="text-xs">
                                {language === 'ar' ? service.nameAr : service.nameEn}
                              </Badge>
                            ))}
                            {servicesInCategory.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{servicesInCategory.length - 2} more
                              </Badge>
                            )}
                          </div>
                          <Button variant="outline" size="sm" className="w-full">
                            {t('common.view')}
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
                
                {/* Quick Booking Section */}
                <Card className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {language === 'ar' ? 'احجز مساحتك الآن' : 'Book Your Space Now'}
                    </CardTitle>
                    <CardDescription>
                      {language === 'ar' 
                        ? 'اختر من مجموعة متنوعة من مساحات العمل المرنة' 
                        : 'Choose from a variety of flexible workspace solutions'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="flex-1">
                        {language === 'ar' ? 'تصفح جميع الخدمات' : 'Browse All Services'}
                      </Button>
                      <Button variant="outline" size="lg" className="flex-1">
                        {language === 'ar' ? 'احجز استشارة' : 'Book Consultation'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="services">
                <ServiceGrid />
              </TabsContent>
              
              <TabsContent value="branches">
                <BranchShowcase />
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Membership Section */}
        <section className="py-12 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              {language === 'ar' ? 'اكتشف خطط العضوية' : 'Discover Membership Plans'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {language === 'ar' 
                ? 'انضم إلى مجتمع المحترفين واستمتع بمزايا حصرية' 
                : 'Join our community of professionals and enjoy exclusive benefits'}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.values({
                creative: { name: 'Creative', nameAr: 'إبداعية', price: 299, popular: false },
                smart: { name: 'Smart', nameAr: 'ذكية', price: 499, popular: true },
                premium: { name: 'Premium', nameAr: 'مميزة', price: 999, popular: false },
                enterprise: { name: 'Enterprise', nameAr: 'مؤسسية', price: 1999, popular: false }
              }).map((plan) => (
                <Card key={plan.name} className={`relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="px-3 py-1">
                        {language === 'ar' ? 'الأكثر شعبية' : 'Most Popular'}
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {language === 'ar' ? plan.nameAr : plan.name}
                    </CardTitle>
                    <div className="text-3xl font-bold">
                      {plan.price} <span className="text-sm font-normal text-muted-foreground">SAR/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant={plan.popular ? 'default' : 'outline'} className="w-full">
                      {t('common.view')}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter/Contact Section */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              {language === 'ar' ? 'ابق على اطلاع' : 'Stay Connected'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {language === 'ar' 
                ? 'احصل على آخر العروض والأخبار من سوبر أوفيس السعودية' 
                : 'Get the latest offers and updates from SuperOffice KSA'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Button size="lg" className="flex-1">
                {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                {language === 'ar' ? 'احجز جولة' : 'Book Tour'}
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}