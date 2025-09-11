'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/components/providers/LanguageProvider';
import Link from 'next/link';

export default function QuickActions() {
  const { language, t, isRTL } = useLanguage();

  const actions = [
    {
      title: language === 'ar' ? 'حجز سريع' : 'Quick Booking',
      description: language === 'ar' ? 'احجز مساحة عمل بسرعة' : 'Book a workspace quickly',
      href: '/bookings/new',
      icon: '⚡',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: language === 'ar' ? 'حجوزاتي' : 'My Bookings',
      description: language === 'ar' ? 'إدارة حجوزاتك الحالية' : 'Manage your current bookings',
      href: '/bookings',
      icon: '📅',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: language === 'ar' ? 'العضوية' : 'Membership',
      description: language === 'ar' ? 'إدارة عضويتك ومزاياها' : 'Manage your membership benefits',
      href: '/membership',
      icon: '👑',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: language === 'ar' ? 'الدعم' : 'Support',
      description: language === 'ar' ? 'احصل على مساعدة فورية' : 'Get instant help',
      href: '/support',
      icon: '🎧',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className={`${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight mb-2">
          {language === 'ar' ? 'الإجراءات السريعة' : 'Quick Actions'}
        </h2>
        <p className="text-muted-foreground">
          {language === 'ar' ? 'الوصول السريع للمهام الشائعة' : 'Quick access to common tasks'}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action) => (
          <Card key={action.href} className="hover:shadow-lg transition-all duration-300 group cursor-pointer">
            <Link href={action.href} className="block">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-transform`}>
                    {action.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                    <CardDescription className="text-sm">{action.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}