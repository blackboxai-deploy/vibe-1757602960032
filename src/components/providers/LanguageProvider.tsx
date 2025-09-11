'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { LANGUAGES } from '@/lib/constants';

type Language = 'en' | 'ar';
type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
}

// Basic translations for the application
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.branches': 'Branches',
    'nav.bookings': 'Bookings',
    'nav.profile': 'Profile',
    'nav.admin': 'Admin',
    'nav.login': 'Login',
    'nav.register': 'Register',
    'nav.logout': 'Logout',

    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.cancel': 'Cancel',
    'common.confirm': 'Confirm',
    'common.save': 'Save',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.view': 'View',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.sort': 'Sort',
    'common.clear': 'Clear',
    'common.apply': 'Apply',
    'common.close': 'Close',
    'common.open': 'Open',
    'common.submit': 'Submit',
    'common.reset': 'Reset',

    // Auth
    'auth.login.title': 'Sign In',
    'auth.login.subtitle': 'Welcome back to SuperOffice KSA',
    'auth.register.title': 'Create Account',
    'auth.register.subtitle': 'Join SuperOffice KSA today',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.confirmPassword': 'Confirm Password',
    'auth.firstName': 'First Name',
    'auth.lastName': 'Last Name',
    'auth.phone': 'Phone Number',
    'auth.rememberMe': 'Remember me',
    'auth.forgotPassword': 'Forgot password?',
    'auth.createAccount': 'Create account',
    'auth.haveAccount': 'Already have an account?',
    'auth.noAccount': "Don't have an account?",

    // Home
    'home.welcome': 'Welcome to SuperOffice KSA',
    'home.subtitle': 'Premium Workspace Solutions',
    'home.description': 'Discover flexible office spaces, meeting rooms, and creative environments designed for success.',
    'home.exploreSpaces': 'Explore Spaces',
    'home.bookNow': 'Book Now',
    'home.learnMore': 'Learn More',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Find the perfect workspace for your needs',
    'services.privateOffices': 'Private Offices',
    'services.meetingRooms': 'Meeting Rooms',
    'services.creativeMembership': 'Creative Membership',
    'services.smartMembership': 'Smart Membership',
    'services.warehouses': 'Warehouses',
    'services.stores': 'Retail Stores',
    'services.parking': 'Parking Spaces',

    // Booking
    'booking.title': 'Book Your Space',
    'booking.selectService': 'Select Service',
    'booking.selectBranch': 'Select Branch',
    'booking.selectDate': 'Select Date',
    'booking.selectTime': 'Select Time',
    'booking.duration': 'Duration',
    'booking.summary': 'Booking Summary',
    'booking.total': 'Total',
    'booking.confirm': 'Confirm Booking',
    'booking.payment': 'Payment',

    // Profile
    'profile.title': 'Profile',
    'profile.personalInfo': 'Personal Information',
    'profile.preferences': 'Preferences',
    'profile.notifications': 'Notifications',
    'profile.membership': 'Membership',
    'profile.bookings': 'My Bookings',
    'profile.payments': 'Payment History',

    // Admin
    'admin.dashboard': 'Dashboard',
    'admin.users': 'Users',
    'admin.services': 'Services',
    'admin.branches': 'Branches',
    'admin.bookings': 'Bookings',
    'admin.analytics': 'Analytics',
    'admin.content': 'Content Management',
    'admin.settings': 'Settings'
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.branches': 'الفروع',
    'nav.bookings': 'الحجوزات',
    'nav.profile': 'الملف الشخصي',
    'nav.admin': 'الإدارة',
    'nav.login': 'تسجيل الدخول',
    'nav.register': 'إنشاء حساب',
    'nav.logout': 'تسجيل الخروج',

    // Common
    'common.loading': 'جاري التحميل...',
    'common.error': 'خطأ',
    'common.success': 'نجح',
    'common.cancel': 'إلغاء',
    'common.confirm': 'تأكيد',
    'common.save': 'حفظ',
    'common.edit': 'تعديل',
    'common.delete': 'حذف',
    'common.view': 'عرض',
    'common.back': 'رجوع',
    'common.next': 'التالي',
    'common.previous': 'السابق',
    'common.search': 'بحث',
    'common.filter': 'تصفية',
    'common.sort': 'ترتيب',
    'common.clear': 'مسح',
    'common.apply': 'تطبيق',
    'common.close': 'إغلاق',
    'common.open': 'فتح',
    'common.submit': 'إرسال',
    'common.reset': 'إعادة تعيين',

    // Auth
    'auth.login.title': 'تسجيل الدخول',
    'auth.login.subtitle': 'مرحباً بك في سوبر أوفيس السعودية',
    'auth.register.title': 'إنشاء حساب',
    'auth.register.subtitle': 'انضم إلى سوبر أوفيس السعودية اليوم',
    'auth.email': 'البريد الإلكتروني',
    'auth.password': 'كلمة المرور',
    'auth.confirmPassword': 'تأكيد كلمة المرور',
    'auth.firstName': 'الاسم الأول',
    'auth.lastName': 'اسم العائلة',
    'auth.phone': 'رقم الهاتف',
    'auth.rememberMe': 'تذكرني',
    'auth.forgotPassword': 'نسيت كلمة المرور؟',
    'auth.createAccount': 'إنشاء حساب',
    'auth.haveAccount': 'لديك حساب بالفعل؟',
    'auth.noAccount': 'ليس لديك حساب؟',

    // Home
    'home.welcome': 'مرحباً بكم في سوبر أوفيس السعودية',
    'home.subtitle': 'حلول مساحات العمل المتميزة',
    'home.description': 'اكتشف مساحات العمل المرنة وغرف الاجتماعات والبيئات الإبداعية المصممة للنجاح.',
    'home.exploreSpaces': 'استكشف المساحات',
    'home.bookNow': 'احجز الآن',
    'home.learnMore': 'اعرف المزيد',

    // Services
    'services.title': 'خدماتنا',
    'services.subtitle': 'اعثر على مساحة العمل المثالية لاحتياجاتك',
    'services.privateOffices': 'المكاتب الخاصة',
    'services.meetingRooms': 'غرف الاجتماعات',
    'services.creativeMembership': 'العضوية الإبداعية',
    'services.smartMembership': 'العضوية الذكية',
    'services.warehouses': 'المستودعات',
    'services.stores': 'المتاجر',
    'services.parking': 'مواقف السيارات',

    // Booking
    'booking.title': 'احجز مساحتك',
    'booking.selectService': 'اختر الخدمة',
    'booking.selectBranch': 'اختر الفرع',
    'booking.selectDate': 'اختر التاريخ',
    'booking.selectTime': 'اختر الوقت',
    'booking.duration': 'المدة',
    'booking.summary': 'ملخص الحجز',
    'booking.total': 'المجموع',
    'booking.confirm': 'تأكيد الحجز',
    'booking.payment': 'الدفع',

    // Profile
    'profile.title': 'الملف الشخصي',
    'profile.personalInfo': 'المعلومات الشخصية',
    'profile.preferences': 'التفضيلات',
    'profile.notifications': 'الإشعارات',
    'profile.membership': 'العضوية',
    'profile.bookings': 'حجوزاتي',
    'profile.payments': 'سجل المدفوعات',

    // Admin
    'admin.dashboard': 'لوحة التحكم',
    'admin.users': 'المستخدمون',
    'admin.services': 'الخدمات',
    'admin.branches': 'الفروع',
    'admin.bookings': 'الحجوزات',
    'admin.analytics': 'التحليلات',
    'admin.content': 'إدارة المحتوى',
    'admin.settings': 'الإعدادات'
  }
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('en');
  const [direction, setDirection] = useState<Direction>('ltr');

  useEffect(() => {
    // Initialize language from localStorage or browser preference
    const initializeLanguage = () => {
      let savedLanguage: Language = 'en';
      
      if (typeof window !== 'undefined') {
        // Check localStorage first
        const stored = localStorage.getItem('superoffice_language') as Language;
        if (stored && (stored === 'en' || stored === 'ar')) {
          savedLanguage = stored;
        } else {
          // Detect browser language
          const browserLang = navigator.language.toLowerCase();
          if (browserLang.startsWith('ar')) {
            savedLanguage = 'ar';
          }
        }
      }
      
      setLanguage(savedLanguage);
    };

    initializeLanguage();
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    const dir = LANGUAGES[lang].direction as Direction;
    setDirection(dir);
    
    // Update document attributes
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
      document.documentElement.className = document.documentElement.className
        .replace(/\b(lang-en|lang-ar)\b/g, '')
        .concat(` lang-${lang}`);
    }
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('superoffice_language', lang);
    }
  };

  const t = (key: string, fallback?: string): string => {
    const translation = translations[language]?.[key as keyof typeof translations[Language]] || 
                      translations.en[key as keyof typeof translations.en] || 
                      fallback || 
                      key;
    return translation;
  };

  useEffect(() => {
    // Set initial direction
    const dir = LANGUAGES[language].direction as Direction;
    setDirection(dir);
    
    // Update document attributes
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = dir;
      document.documentElement.className = document.documentElement.className
        .replace(/\b(lang-en|lang-ar)\b/g, '')
        .concat(` lang-${language}`);
    }
  }, [language]);

  const value: LanguageContextType = {
    language,
    direction,
    setLanguage,
    t,
    isRTL: direction === 'rtl'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageProvider;