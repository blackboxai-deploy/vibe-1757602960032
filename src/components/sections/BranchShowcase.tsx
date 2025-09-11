'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { mockBranches } from '@/lib/mockData';
import Link from 'next/link';

export default function BranchShowcase() {
  const { language, isRTL } = useLanguage();

  return (
    <div className={`${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-2">
          {language === 'ar' ? 'فروعنا في الرياض' : 'Our Riyadh Branches'}
        </h2>
        <p className="text-lg text-muted-foreground">
          {language === 'ar' ? 'مواقع استراتيجية في أهم أحياء الرياض' : 'Strategic locations in key Riyadh districts'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockBranches.map((branch) => (
          <Card key={branch.id} className="hover:shadow-lg transition-shadow overflow-hidden">
            {/* Branch Image */}
            <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20">
              {branch.images && branch.images.length > 0 && (
                <img
                  src={branch.images[0]}
                  alt={language === 'ar' ? branch.nameAr : branch.nameEn}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )}
              <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3">
                <Badge variant="secondary" className="bg-white/90 text-primary">
                  {language === 'ar' ? 'متاح' : 'Available'}
                </Badge>
              </div>
            </div>

            <CardHeader className="pb-3">
              <CardTitle className="text-xl">
                {language === 'ar' ? branch.nameAr : branch.nameEn}
              </CardTitle>
              <CardDescription>
                {branch.address.district}, {branch.address.city}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm">
                  <span>📞</span>
                  <span>{branch.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm">
                  <span>📧</span>
                  <span>{branch.contact.email}</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm">
                  <span>📍</span>
                  <span className="text-muted-foreground">
                    {branch.address.street}
                  </span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="space-y-2">
                <div className="text-sm font-medium">
                  {language === 'ar' ? 'ساعات العمل:' : 'Working Hours:'}
                </div>
                <div className="text-sm text-muted-foreground">
                  {language === 'ar' 
                    ? `الأحد - الخميس: ${branch.workingHours.sunday.open} - ${branch.workingHours.sunday.close}`
                    : `Sun - Thu: ${branch.workingHours.sunday.open} - ${branch.workingHours.sunday.close}`
                  }
                </div>
                <div className="text-sm text-muted-foreground">
                  {language === 'ar' 
                    ? `الجمعة: ${branch.workingHours.friday.open} - ${branch.workingHours.friday.close}`
                    : `Fri: ${branch.workingHours.friday.open} - ${branch.workingHours.friday.close}`
                  }
                </div>
              </div>

              {/* Services Count */}
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  {branch.services.length} {language === 'ar' ? 'خدمة متاحة' : 'services available'}
                </div>
                <div className="text-sm text-muted-foreground">
                  {branch.amenities.length} {language === 'ar' ? 'مرفق' : 'amenities'}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2 rtl:space-x-reverse pt-2">
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <Link href={`/branches/${branch.id}`}>
                    {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                  </Link>
                </Button>
                <Button asChild size="sm" className="flex-1">
                  <Link href={`/bookings/new?branch=${branch.id}`}>
                    {language === 'ar' ? 'احجز الآن' : 'Book Now'}
                  </Link>
                </Button>
              </div>

              {/* Virtual Tour Link */}
              <div className="pt-2">
                <Button asChild variant="ghost" size="sm" className="w-full text-primary hover:text-primary">
                  <Link href={`/branches/${branch.id}/tour`}>
                    🎥 {language === 'ar' ? 'جولة افتراضية' : 'Virtual Tour'}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Map Section */}
      <div className="mt-12 text-center">
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardHeader>
            <CardTitle className="text-xl">
              {language === 'ar' ? 'ابحث عن أقرب فرع' : 'Find the Nearest Branch'}
            </CardTitle>
            <CardDescription>
              {language === 'ar' 
                ? 'استخدم خريطتنا التفاعلية لتحديد الموقع الأنسب لك' 
                : 'Use our interactive map to find the most convenient location for you'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="lg">
              <Link href="/branches/map">
                {language === 'ar' ? '📍 عرض الخريطة' : '📍 View Map'}
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}