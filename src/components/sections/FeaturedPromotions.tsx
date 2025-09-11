'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/LanguageProvider';
import Link from 'next/link';

export default function FeaturedPromotions() {
  const { language, isRTL } = useLanguage();

  const promotions = [
    {
      id: 'promo-1',
      title: language === 'ar' ? 'عرض خاص للأعضاء الجدد' : 'New Member Special',
      description: language === 'ar' 
        ? 'احصل على خصم 30% على أول شهر عضوية' 
        : 'Get 30% off your first month membership',
      code: 'WELCOME30',
      discount: '30%',
      validUntil: '2024-12-31',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/311c7c98-dc81-45a9-8dcc-172d430c7057.png',
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 'promo-2',
      title: language === 'ar' ? 'عروض غرف الاجتماعات' : 'Meeting Room Deals',
      description: language === 'ar' 
        ? 'خصم 20% على جميع حجوزات غرف الاجتماعات لهذا الأسبوع' 
        : '20% off all meeting room bookings this week',
      code: 'MEET20',
      discount: '20%',
      validUntil: '2024-11-30',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1878d2b9-51a1-4a00-b265-a3f774e80177.png',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'promo-3',
      title: language === 'ar' ? 'باقة المكاتب الخاصة' : 'Private Office Package',
      description: language === 'ar' 
        ? 'احجز مكتب خاص لـ 3 أشهر واحصل على شهر إضافي مجاناً' 
        : 'Book a private office for 3 months and get 1 month free',
      code: 'OFFICE3+1',
      discount: 'Free Month',
      validUntil: '2024-12-15',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/15bd718d-c349-4966-a395-c6597456fe22.png',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className={`${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-2">
          {language === 'ar' ? 'العروض المميزة' : 'Featured Promotions'}
        </h2>
        <p className="text-lg text-muted-foreground">
          {language === 'ar' ? 'استفد من عروضنا الحصرية لفترة محدودة' : 'Take advantage of our exclusive limited-time offers'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {promotions.map((promo) => (
          <Card key={promo.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
            {/* Promotion Image */}
            <div className="relative h-40 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-r ${promo.color} opacity-90`}></div>
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3">
                <Badge className="bg-white text-primary font-bold">
                  {promo.discount} OFF
                </Badge>
              </div>
            </div>

            <CardHeader className="pb-3">
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {promo.title}
              </CardTitle>
              <CardDescription className="text-sm">
                {promo.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Promo Code */}
              <div className="bg-muted rounded-lg p-3 text-center">
                <div className="text-xs text-muted-foreground mb-1">
                  {language === 'ar' ? 'كود الخصم:' : 'Promo Code:'}
                </div>
                <div className="text-lg font-bold text-primary font-mono">
                  {promo.code}
                </div>
              </div>

              {/* Validity */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  {language === 'ar' ? 'صالح حتى:' : 'Valid until:'}
                </span>
                <span className="font-medium">
                  {new Date(promo.validUntil).toLocaleDateString(
                    language === 'ar' ? 'ar-SA' : 'en-US'
                  )}
                </span>
              </div>

              {/* Action Button */}
              <Button asChild className="w-full group-hover:shadow-md transition-shadow">
                <Link href={`/promotions/${promo.id}`}>
                  {language === 'ar' ? 'استفد من العرض' : 'Claim Offer'}
                </Link>
              </Button>

              {/* Terms Link */}
              <div className="text-center">
                <Link 
                  href={`/promotions/${promo.id}/terms`}
                  className="text-xs text-muted-foreground hover:text-primary underline"
                >
                  {language === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-12">
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">
              {language === 'ar' ? 'لا تفوت عروضنا الحصرية' : "Don't Miss Our Exclusive Offers"}
            </CardTitle>
            <CardDescription>
              {language === 'ar' 
                ? 'اشترك في نشرتنا البريدية واحصل على إشعارات العروض الخاصة' 
                : 'Subscribe to our newsletter and get notified about special deals'}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Button asChild variant="default" className="flex-1">
                <Link href="/newsletter">
                  {language === 'ar' ? '📧 اشتراك' : '📧 Subscribe'}
                </Link>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <Link href="/promotions">
                  {language === 'ar' ? 'جميع العروض' : 'All Offers'}
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}