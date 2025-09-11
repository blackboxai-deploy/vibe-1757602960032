'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { mockServices } from '@/lib/mockData';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import Link from 'next/link';

export default function ServiceGrid() {
  const { language, t, isRTL } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredServices = selectedCategory
    ? mockServices.filter(service => service.category === selectedCategory)
    : mockServices;

  return (
    <div className={`${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          <Button
            variant={selectedCategory === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(null)}
          >
            {language === 'ar' ? 'الكل' : 'All'}
          </Button>
          {Object.values(SERVICE_CATEGORIES).map((categoryData) => {
            const category = categoryData as any;
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2 rtl:space-x-reverse"
              >
                <span>{category.icon}</span>
                <span>{language === 'ar' ? category.nameAr : category.nameEn}</span>
              </Button>
            );
          })}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <Card key={service.id} className="hover:shadow-lg transition-shadow overflow-hidden">
            {/* Service Image */}
            <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20">
              {service.images && service.images.length > 0 && (
                <img
                  src={service.images[0]}
                  alt={language === 'ar' ? service.nameAr : service.nameEn}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )}
              {service.isFeatured && (
                <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3">
                  <Badge className="bg-accent text-white">
                    {language === 'ar' ? 'مميز' : 'Featured'}
                  </Badge>
                </div>
              )}
            </div>

            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-1">
                    {language === 'ar' ? service.nameAr : service.nameEn}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {language === 'ar' ? service.descriptionAr : service.descriptionEn}
                  </CardDescription>
                </div>
                <div className="text-right rtl:text-left ml-4 rtl:ml-0 rtl:mr-4">
                  <div className="text-lg font-bold text-primary">
                    {service.pricing[0]?.price} SAR
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {language === 'ar' ? 
                      (service.pricing[0]?.duration === 'hourly' ? '/ساعة' : 
                       service.pricing[0]?.duration === 'daily' ? '/يوم' : '/شهر') :
                      `/${service.pricing[0]?.duration || 'hour'}`
                    }
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Service Info */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span>👥</span>
                  <span>{service.capacity} {language === 'ar' ? 'شخص' : 'people'}</span>
                </div>
                {service.area && (
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span>📐</span>
                    <span>{service.area}m²</span>
                  </div>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`text-sm ${
                        star <= Math.round(service.averageRating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    >
                      ⭐
                    </span>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {service.averageRating.toFixed(1)} ({service.totalBookings} {language === 'ar' ? 'حجز' : 'bookings'})
                </span>
              </div>

              {/* Amenities */}
              <div className="flex flex-wrap gap-1">
                {service.amenities.slice(0, 3).map((amenity) => (
                  <Badge key={amenity} variant="secondary" className="text-xs">
                    {amenity}
                  </Badge>
                ))}
                {service.amenities.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{service.amenities.length - 3}
                  </Badge>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2 rtl:space-x-reverse">
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <Link href={`/services/${service.id}`}>
                    {t('common.view')}
                  </Link>
                </Button>
                <Button asChild size="sm" className="flex-1">
                  <Link href={`/bookings/new?service=${service.id}`}>
                    {language === 'ar' ? 'احجز' : 'Book'}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-lg font-medium mb-2">
            {language === 'ar' ? 'لا توجد خدمات' : 'No services found'}
          </h3>
          <p className="text-muted-foreground">
            {language === 'ar' ? 'جرب تصفية مختلفة' : 'Try a different filter'}
          </p>
        </div>
      )}
    </div>
  );
}