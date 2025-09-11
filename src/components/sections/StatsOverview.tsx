'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { mockAnalytics } from '@/lib/mockData';

export default function StatsOverview() {
  const { language, isRTL } = useLanguage();

  const stats = [
    {
      title: language === 'ar' ? 'إجمالي الحجوزات' : 'Total Bookings',
      value: mockAnalytics.overview.totalBookings.toLocaleString(),
      icon: '📊',
      change: '+12%',
      changeType: 'positive' as const
    },
    {
      title: language === 'ar' ? 'الإيرادات' : 'Revenue',
      value: `${mockAnalytics.overview.totalRevenue.toLocaleString()} SAR`,
      icon: '💰',
      change: '+18%',
      changeType: 'positive' as const
    },
    {
      title: language === 'ar' ? 'العملاء' : 'Clients',
      value: mockAnalytics.overview.totalUsers.toLocaleString(),
      icon: '👥',
      change: '+8%',
      changeType: 'positive' as const
    },
    {
      title: language === 'ar' ? 'معدل الإشغال' : 'Occupancy Rate',
      value: `${mockAnalytics.overview.occupancyRate}%`,
      icon: '🏢',
      change: '+5%',
      changeType: 'positive' as const
    }
  ];

  return (
    <div className={`${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-2">
          {language === 'ar' ? 'نظرة عامة على الأداء' : 'Performance Overview'}
        </h2>
        <p className="text-lg text-muted-foreground">
          {language === 'ar' ? 'إحصائيات مساحات العمل المتميزة' : 'Premium workspace statistics'}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className="text-2xl">{stat.icon}</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className={`text-xs ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change} {language === 'ar' ? 'من الشهر الماضي' : 'from last month'}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}