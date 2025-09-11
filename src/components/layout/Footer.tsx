'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { APP_CONFIG, BRANCHES } from '@/lib/constants';

export default function Footer() {
  const { language, isRTL } = useLanguage();

  const quickLinks = [
    { href: '/services', label: language === 'ar' ? 'الخدمات' : 'Services' },
    { href: '/branches', label: language === 'ar' ? 'الفروع' : 'Branches' },
    { href: '/membership', label: language === 'ar' ? 'العضوية' : 'Membership' },
    { href: '/about', label: language === 'ar' ? 'من نحن' : 'About Us' },
    { href: '/contact', label: language === 'ar' ? 'اتصل بنا' : 'Contact' },
    { href: '/careers', label: language === 'ar' ? 'الوظائف' : 'Careers' }
  ];

  const legalLinks = [
    { href: '/privacy', label: language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy' },
    { href: '/terms', label: language === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions' },
    { href: '/cookies', label: language === 'ar' ? 'سياسة الكوكيز' : 'Cookie Policy' },
    { href: '/refund', label: language === 'ar' ? 'سياسة الاسترداد' : 'Refund Policy' }
  ];

  const socialLinks = [
    { href: 'https://twitter.com/superoffice_ksa', label: 'Twitter', icon: '𝕏' },
    { href: 'https://instagram.com/superoffice_ksa', label: 'Instagram', icon: '📷' },
    { href: 'https://linkedin.com/company/superoffice-ksa', label: 'LinkedIn', icon: '💼' },
    { href: 'https://facebook.com/superoffice.ksa', label: 'Facebook', icon: '👥' }
  ];

  return (
    <footer className={`bg-muted/30 border-t ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold">
                SO
              </div>
              <div>
                <div className="font-bold text-lg">SuperOffice</div>
                <div className="text-sm text-muted-foreground">KSA</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              {language === 'ar' 
                ? 'حلول مساحات العمل المتميزة في المملكة العربية السعودية. نوفر بيئات عمل مرنة وحديثة لنجاح أعمالكم.'
                : 'Premium workspace solutions in Saudi Arabia. We provide flexible and modern work environments for your business success.'
              }
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span>📞</span>
                <a href={`tel:${APP_CONFIG.supportPhone}`} className="hover:text-primary">
                  {APP_CONFIG.supportPhone}
                </a>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span>📧</span>
                <a href={`mailto:${APP_CONFIG.supportEmail}`} className="hover:text-primary">
                  {APP_CONFIG.supportEmail}
                </a>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span>💬</span>
                <a 
                  href={`https://wa.me/${APP_CONFIG.supportWhatsApp.replace(/\s/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  {language === 'ar' ? 'واتساب' : 'WhatsApp'}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm">
              {language === 'ar' ? 'فروعنا' : 'Our Branches'}
            </h4>
            <ul className="space-y-3">
              {Object.values(BRANCHES).map((branchData) => {
                const branch = branchData as any;
                return (
                  <li key={branch.id} className="space-y-1">
                    <div className="text-sm font-medium">
                      {language === 'ar' ? branch.nameAr : branch.nameEn}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {branch.address.district}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {branch.contact.phone}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm">
              {language === 'ar' ? 'ابق على تواصل' : 'Stay Connected'}
            </h4>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                {language === 'ar' 
                  ? 'اشترك في نشرتنا البريدية للحصول على آخر العروض والأخبار'
                  : 'Subscribe to our newsletter for the latest offers and news'
                }
              </p>
              <Button asChild size="sm" className="w-full">
                <Link href="/newsletter">
                  {language === 'ar' ? 'اشتراك' : 'Subscribe'}
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="space-y-2">
              <div className="text-sm font-medium">
                {language === 'ar' ? 'تابعنا على:' : 'Follow us:'}
              </div>
              <div className="flex space-x-2 rtl:space-x-reverse">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-muted hover:bg-primary hover:text-white flex items-center justify-center transition-colors text-sm"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center lg:text-left">
            © {new Date().getFullYear()} SuperOffice KSA. {language === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center lg:justify-end items-center space-x-4 rtl:space-x-reverse text-sm">
            {legalLinks.map((link, index) => (
              <div key={link.href} className="flex items-center">
                <Link 
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
                {index < legalLinks.length - 1 && (
                  <Separator orientation="vertical" className="mx-2 h-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile App Badges */}
        <div className="mt-8 pt-8 border-t border-muted text-center">
          <div className="text-sm text-muted-foreground mb-4">
            {language === 'ar' ? 'حمل تطبيقنا المحمول' : 'Download our mobile app'}
          </div>
          <div className="flex justify-center space-x-4 rtl:space-x-reverse">
            <Button asChild variant="outline" size="sm">
              <Link href="/download/ios">
                🍎 {language === 'ar' ? 'آب ستور' : 'App Store'}
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/download/android">
                🤖 {language === 'ar' ? 'متجر جوجل' : 'Google Play'}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}