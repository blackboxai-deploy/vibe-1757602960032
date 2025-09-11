// SuperOffice KSA - Application Constants

export const APP_CONFIG = {
  name: 'SuperOffice KSA',
  version: '1.0.0',
  description: 'Premium Workspace Solutions',
  supportEmail: 'support@superoffice.sa',
  supportPhone: '+966 11 123 4567',
  supportWhatsApp: '+966 50 123 4567',
  website: 'https://superoffice.sa',
  apiUrl: typeof window !== 'undefined' ? (window as any).env?.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api' : 'http://localhost:3001/api',
  socketUrl: typeof window !== 'undefined' ? (window as any).env?.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3001' : 'http://localhost:3001',
};

export const THEME_COLORS = {
  primary: '#145E63',      // Teal
  secondary: '#F29899',    // Light Coral Pink
  accent: '#E8554A',       // Coral Red (Error)
  background: '#FFFFFF',   // White
  surface: '#AF8678',      // Brown surface
  textPrimary: '#1A1A1A',  // Dark text
  textSecondary: '#4F4F4F', // Gray text
  success: '#10B981',      // Green
  warning: '#F59E0B',      // Amber
  info: '#3B82F6',         // Blue
};

export const BRANCHES = {
  al_aarid: {
    id: 'al_aarid',
    nameEn: 'Al Aarid Branch',
    nameAr: 'فرع العارض',
    address: {
      street: 'King Fahd Road',
      district: 'Al Aarid',
      city: 'Riyadh',
      country: 'Saudi Arabia',
      postalCode: '13241',
      coordinates: { latitude: 24.7136, longitude: 46.6753 }
    },
    contact: {
      phone: '+966 11 456 7890',
      whatsapp: '+966 50 456 7890',
      email: 'alaarid@superoffice.sa'
    },
    workingHours: {
      sunday: { open: '07:00', close: '23:00', isOpen: true },
      monday: { open: '07:00', close: '23:00', isOpen: true },
      tuesday: { open: '07:00', close: '23:00', isOpen: true },
      wednesday: { open: '07:00', close: '23:00', isOpen: true },
      thursday: { open: '07:00', close: '23:00', isOpen: true },
      friday: { open: '14:00', close: '23:00', isOpen: true },
      saturday: { open: '07:00', close: '23:00', isOpen: true }
    }
  },
  as_sulimaniyah: {
    id: 'as_sulimaniyah',
    nameEn: 'As Sulimaniyah Branch',
    nameAr: 'فرع السليمانية',
    address: {
      street: 'Olaya Street',
      district: 'As Sulimaniyah',
      city: 'Riyadh',
      country: 'Saudi Arabia',
      postalCode: '12241',
      coordinates: { latitude: 24.6877, longitude: 46.7219 }
    },
    contact: {
      phone: '+966 11 456 7891',
      whatsapp: '+966 50 456 7891',
      email: 'sulimaniyah@superoffice.sa'
    },
    workingHours: {
      sunday: { open: '06:00', close: '24:00', isOpen: true },
      monday: { open: '06:00', close: '24:00', isOpen: true },
      tuesday: { open: '06:00', close: '24:00', isOpen: true },
      wednesday: { open: '06:00', close: '24:00', isOpen: true },
      thursday: { open: '06:00', close: '24:00', isOpen: true },
      friday: { open: '14:00', close: '24:00', isOpen: true },
      saturday: { open: '06:00', close: '24:00', isOpen: true }
    }
  },
  as_suwaidi: {
    id: 'as_suwaidi',
    nameEn: 'As Suwaidi Branch',
    nameAr: 'فرع السويدي',
    address: {
      street: 'Exit 9, Riyadh-Dammam Highway',
      district: 'As Suwaidi',
      city: 'Riyadh',
      country: 'Saudi Arabia',
      postalCode: '14323',
      coordinates: { latitude: 24.6408, longitude: 46.7728 }
    },
    contact: {
      phone: '+966 11 456 7892',
      whatsapp: '+966 50 456 7892',
      email: 'suwaidi@superoffice.sa'
    },
    workingHours: {
      sunday: { open: '08:00', close: '22:00', isOpen: true },
      monday: { open: '08:00', close: '22:00', isOpen: true },
      tuesday: { open: '08:00', close: '22:00', isOpen: true },
      wednesday: { open: '08:00', close: '22:00', isOpen: true },
      thursday: { open: '08:00', close: '22:00', isOpen: true },
      friday: { open: '14:00', close: '22:00', isOpen: true },
      saturday: { open: '08:00', close: '22:00', isOpen: true }
    }
  }
} as const;

export const SERVICE_CATEGORIES = {
  private_office: {
    id: 'private_office',
    nameEn: 'Private Offices',
    nameAr: 'المكاتب الخاصة',
    icon: '🏢',
    color: THEME_COLORS.primary
  },
  meeting_room: {
    id: 'meeting_room',
    nameEn: 'Meeting Rooms',
    nameAr: 'غرف الاجتماعات',
    icon: '👥',
    color: THEME_COLORS.secondary
  },
  creative_membership: {
    id: 'creative_membership',
    nameEn: 'Creative Membership',
    nameAr: 'العضوية الإبداعية',
    icon: '🎨',
    color: THEME_COLORS.accent
  },
  smart_membership: {
    id: 'smart_membership',
    nameEn: 'Smart Membership',
    nameAr: 'العضوية الذكية',
    icon: '🚀',
    color: THEME_COLORS.info
  },
  warehouse: {
    id: 'warehouse',
    nameEn: 'Warehouses',
    nameAr: 'المستودعات',
    icon: '📦',
    color: THEME_COLORS.warning
  },
  store: {
    id: 'store',
    nameEn: 'Retail Stores',
    nameAr: 'المتاجر',
    icon: '🏪',
    color: THEME_COLORS.success
  },
  parking: {
    id: 'parking',
    nameEn: 'Parking Spaces',
    nameAr: 'مواقف السيارات',
    icon: '🚗',
    color: THEME_COLORS.surface
  }
} as const;

export const AMENITIES = {
  wifi: { nameEn: 'High-Speed WiFi', nameAr: 'واي فاي عالي السرعة', icon: '📶' },
  ac: { nameEn: 'Air Conditioning', nameAr: 'تكييف الهواء', icon: '❄️' },
  parking: { nameEn: 'Free Parking', nameAr: 'موقف مجاني', icon: '🚗' },
  coffee: { nameEn: 'Coffee & Tea', nameAr: 'قهوة وشاي', icon: '☕' },
  printer: { nameEn: 'Printer & Scanner', nameAr: 'طابعة وماسح ضوئي', icon: '🖨️' },
  projector: { nameEn: 'Projector', nameAr: 'جهاز عرض', icon: '📽️' },
  whiteboard: { nameEn: 'Whiteboard', nameAr: 'سبورة بيضاء', icon: '🖼️' },
  security: { nameEn: '24/7 Security', nameAr: 'حراسة 24/7', icon: '🔒' },
  cleaning: { nameEn: 'Daily Cleaning', nameAr: 'تنظيف يومي', icon: '🧹' },
  reception: { nameEn: 'Reception Service', nameAr: 'خدمة الاستقبال', icon: '💁' },
  kitchen: { nameEn: 'Kitchenette', nameAr: 'مطبخ صغير', icon: '🍽️' },
  lounge: { nameEn: 'Lounge Area', nameAr: 'منطقة الاستراحة', icon: '🛋️' },
  phone: { nameEn: 'Phone Booth', nameAr: 'كابينة هاتف', icon: '📞' },
  storage: { nameEn: 'Storage Space', nameAr: 'مساحة تخزين', icon: '📋' },
  elevator: { nameEn: 'Elevator Access', nameAr: 'مصعد', icon: '🏗️' }
} as const;

export const MEMBERSHIP_TYPES = {
  creative: {
    id: 'creative',
    nameEn: 'Creative Membership',
    nameAr: 'العضوية الإبداعية',
    benefits: [
      'Access to all branches',
      'Meeting room discounts',
      'Event registration priority',
      'Printing credits',
      'Networking events'
    ],
    monthlyPrice: 299,
    yearlyPrice: 2990,
    color: THEME_COLORS.secondary
  },
  smart: {
    id: 'smart',
    nameEn: 'Smart Membership',
    nameAr: 'العضوية الذكية',
    benefits: [
      'All Creative benefits',
      'Private office hours',
      'Advanced booking',
      'VIP support',
      'Business services'
    ],
    monthlyPrice: 499,
    yearlyPrice: 4990,
    color: THEME_COLORS.primary
  },
  premium: {
    id: 'premium',
    nameEn: 'Premium Membership',
    nameAr: 'العضوية المميزة',
    benefits: [
      'All Smart benefits',
      'Dedicated office space',
      'Personal assistant',
      'Unlimited amenities',
      'Priority everything'
    ],
    monthlyPrice: 999,
    yearlyPrice: 9990,
    color: THEME_COLORS.accent
  },
  enterprise: {
    id: 'enterprise',
    nameEn: 'Enterprise Membership',
    nameAr: 'العضوية المؤسسية',
    benefits: [
      'Custom solutions',
      'Multiple locations',
      'Dedicated support',
      'Corporate rates',
      'Team management'
    ],
    monthlyPrice: 1999,
    yearlyPrice: 19990,
    color: THEME_COLORS.warning
  }
} as const;

export const BOOKING_DURATIONS = {
  hourly: { id: 'hourly', nameEn: 'Hourly', nameAr: 'ساعي', multiplier: 1 },
  daily: { id: 'daily', nameEn: 'Daily', nameAr: 'يومي', multiplier: 24 },
  weekly: { id: 'weekly', nameEn: 'Weekly', nameAr: 'أسبوعي', multiplier: 168 },
  monthly: { id: 'monthly', nameEn: 'Monthly', nameAr: 'شهري', multiplier: 720 },
  yearly: { id: 'yearly', nameEn: 'Yearly', nameAr: 'سنوي', multiplier: 8760 }
} as const;

export const PAYMENT_METHODS = {
  credit_card: { 
    id: 'credit_card', 
    nameEn: 'Credit Card', 
    nameAr: 'بطاقة ائتمان',
    providers: ['visa', 'mastercard'],
    icon: '💳'
  },
  stc_pay: { 
    id: 'stc_pay', 
    nameEn: 'STC Pay', 
    nameAr: 'دفع الاتصالات',
    providers: ['stc_pay'],
    icon: '📱'
  },
  mada: { 
    id: 'mada', 
    nameEn: 'Mada', 
    nameAr: 'مدى',
    providers: ['mada'],
    icon: '💳'
  },
  apple_pay: { 
    id: 'apple_pay', 
    nameEn: 'Apple Pay', 
    nameAr: 'آبل باي',
    providers: ['apple_pay'],
    icon: '📱'
  },
  bank_transfer: { 
    id: 'bank_transfer', 
    nameEn: 'Bank Transfer', 
    nameAr: 'تحويل بنكي',
    providers: ['local_banks'],
    icon: '🏦'
  }
} as const;

export const NOTIFICATION_TYPES = {
  booking_confirmation: {
    id: 'booking_confirmation',
    nameEn: 'Booking Confirmation',
    nameAr: 'تأكيد الحجز',
    priority: 'high'
  },
  booking_reminder: {
    id: 'booking_reminder',
    nameEn: 'Booking Reminder',
    nameAr: 'تذكير الحجز',
    priority: 'medium'
  },
  payment_success: {
    id: 'payment_success',
    nameEn: 'Payment Success',
    nameAr: 'نجح الدفع',
    priority: 'high'
  },
  payment_failed: {
    id: 'payment_failed',
    nameEn: 'Payment Failed',
    nameAr: 'فشل الدفع',
    priority: 'high'
  },
  membership_expiry: {
    id: 'membership_expiry',
    nameEn: 'Membership Expiry',
    nameAr: 'انتهاء العضوية',
    priority: 'high'
  },
  promotion: {
    id: 'promotion',
    nameEn: 'Special Promotion',
    nameAr: 'عرض خاص',
    priority: 'low'
  },
  announcement: {
    id: 'announcement',
    nameEn: 'Announcement',
    nameAr: 'إعلان',
    priority: 'medium'
  },
  system_update: {
    id: 'system_update',
    nameEn: 'System Update',
    nameAr: 'تحديث النظام',
    priority: 'medium'
  }
} as const;

export const LANGUAGES = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    direction: 'ltr',
    flag: '🇺🇸'
  },
  ar: {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    direction: 'rtl',
    flag: '🇸🇦'
  }
} as const;

export const TIME_SLOTS = [
  '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
  '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
  '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
] as const;

export const RATING_CATEGORIES = {
  cleanliness: { nameEn: 'Cleanliness', nameAr: 'النظافة' },
  comfort: { nameEn: 'Comfort', nameAr: 'الراحة' },
  location: { nameEn: 'Location', nameAr: 'الموقع' },
  value: { nameEn: 'Value for Money', nameAr: 'القيمة مقابل المال' },
  service: { nameEn: 'Service Quality', nameAr: 'جودة الخدمة' }
} as const;

export const EVENT_CATEGORIES = {
  workshop: { nameEn: 'Workshop', nameAr: 'ورشة عمل', color: THEME_COLORS.primary },
  networking: { nameEn: 'Networking', nameAr: 'التواصل', color: THEME_COLORS.secondary },
  seminar: { nameEn: 'Seminar', nameAr: 'ندوة', color: THEME_COLORS.accent },
  social: { nameEn: 'Social Event', nameAr: 'حدث اجتماعي', color: THEME_COLORS.success }
} as const;

export const LOYALTY_TIERS = {
  bronze: {
    id: 'bronze',
    nameEn: 'Bronze',
    nameAr: 'برونزي',
    minPoints: 0,
    benefits: ['Basic rewards', '5% discount'],
    color: '#CD7F32'
  },
  silver: {
    id: 'silver',
    nameEn: 'Silver',
    nameAr: 'فضي',
    minPoints: 1000,
    benefits: ['Enhanced rewards', '10% discount', 'Priority booking'],
    color: '#C0C0C0'
  },
  gold: {
    id: 'gold',
    nameEn: 'Gold',
    nameAr: 'ذهبي',
    minPoints: 5000,
    benefits: ['Premium rewards', '15% discount', 'Free upgrades'],
    color: '#FFD700'
  },
  platinum: {
    id: 'platinum',
    nameEn: 'Platinum',
    nameAr: 'بلاتيني',
    minPoints: 10000,
    benefits: ['Exclusive rewards', '20% discount', 'VIP treatment'],
    color: '#E5E4E2'
  }
} as const;

export const API_ENDPOINTS = {
  // Authentication
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  REFRESH_TOKEN: '/auth/refresh',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',
  VERIFY_OTP: '/auth/verify-otp',
  SOCIAL_LOGIN: '/auth/social',

  // Users
  PROFILE: '/users/profile',
  UPDATE_PROFILE: '/users/profile',
  UPLOAD_AVATAR: '/users/avatar',
  USER_PREFERENCES: '/users/preferences',
  DELETE_ACCOUNT: '/users/delete',

  // Services
  SERVICES: '/services',
  SERVICE_DETAIL: '/services/:id',
  SERVICE_AVAILABILITY: '/services/:id/availability',
  SERVICE_REVIEWS: '/services/:id/reviews',
  SEARCH_SERVICES: '/services/search',

  // Branches
  BRANCHES: '/branches',
  BRANCH_DETAIL: '/branches/:id',
  BRANCH_SERVICES: '/branches/:id/services',

  // Bookings
  BOOKINGS: '/bookings',
  CREATE_BOOKING: '/bookings',
  BOOKING_DETAIL: '/bookings/:id',
  CANCEL_BOOKING: '/bookings/:id/cancel',
  BOOKING_HISTORY: '/bookings/history',
  CHECK_AVAILABILITY: '/bookings/availability',

  // Payments
  PAYMENTS: '/payments',
  PROCESS_PAYMENT: '/payments/process',
  PAYMENT_STATUS: '/payments/:id/status',
  PAYMENT_HISTORY: '/payments/history',
  REFUND_PAYMENT: '/payments/:id/refund',

  // Invoices
  INVOICES: '/invoices',
  INVOICE_DETAIL: '/invoices/:id',
  DOWNLOAD_INVOICE: '/invoices/:id/download',

  // Memberships
  MEMBERSHIPS: '/memberships',
  PURCHASE_MEMBERSHIP: '/memberships/purchase',
  RENEW_MEMBERSHIP: '/memberships/renew',
  MEMBERSHIP_BENEFITS: '/memberships/benefits',

  // NFC & Access
  NFC_CARDS: '/nfc/cards',
  ISSUE_NFC_CARD: '/nfc/issue',
  REVOKE_NFC_CARD: '/nfc/revoke',
  ACCESS_LOGS: '/nfc/logs',
  VALIDATE_ACCESS: '/nfc/validate',

  // Notifications
  NOTIFICATIONS: '/notifications',
  MARK_READ: '/notifications/:id/read',
  NOTIFICATION_PREFERENCES: '/notifications/preferences',
  SEND_NOTIFICATION: '/notifications/send',

  // Support
  CHAT_SESSIONS: '/support/chat',
  CREATE_CHAT: '/support/chat/create',
  SEND_MESSAGE: '/support/chat/:id/message',
  FAQ: '/support/faq',
  CONTACT: '/support/contact',

  // Events
  EVENTS: '/events',
  EVENT_DETAIL: '/events/:id',
  REGISTER_EVENT: '/events/:id/register',
  EVENT_REGISTRATIONS: '/events/:id/registrations',

  // Loyalty
  LOYALTY: '/loyalty',
  LOYALTY_POINTS: '/loyalty/points',
  REDEEM_REWARD: '/loyalty/redeem',
  REFERRAL_CODE: '/loyalty/referral',

  // Analytics (Admin)
  ANALYTICS_DASHBOARD: '/analytics/dashboard',
  BOOKING_ANALYTICS: '/analytics/bookings',
  REVENUE_ANALYTICS: '/analytics/revenue',
  USER_ANALYTICS: '/analytics/users',

  // Admin
  ADMIN_USERS: '/admin/users',
  ADMIN_SERVICES: '/admin/services',
  ADMIN_BRANCHES: '/admin/branches',
  ADMIN_BOOKINGS: '/admin/bookings',
  ADMIN_PAYMENTS: '/admin/payments',
  ADMIN_CONTENT: '/admin/content',
  ADMIN_ANALYTICS: '/admin/analytics',

  // Dynamic Content
  DYNAMIC_CONTENT: '/content',
  UPDATE_CONTENT: '/content/:key',
  BANNERS: '/content/banners',
  PROMOTIONS: '/content/promotions'
} as const;

export const VALIDATION_RULES = {
  password: {
    minLength: 8,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecialChars: true
  },
  phone: {
    pattern: /^(\+966|966|0)?[5][0-9]{8}$/,
    format: '+966 XX XXX XXXX'
  },
  email: {
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  },
  name: {
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\u0600-\u06FF\s]+$/
  }
} as const;

export const FILE_UPLOAD = {
  maxSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: {
    images: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
    documents: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    videos: ['video/mp4', 'video/mpeg', 'video/quicktime']
  },
  avatarSize: { width: 200, height: 200 },
  bannerSize: { width: 1200, height: 400 }
} as const;

export const CACHE_KEYS = {
  USER_PROFILE: 'user_profile',
  SERVICES: 'services',
  BRANCHES: 'branches',
  BOOKINGS: 'user_bookings',
  NOTIFICATIONS: 'user_notifications',
  AVAILABILITY: 'service_availability',
  DYNAMIC_CONTENT: 'dynamic_content'
} as const;

export const SOCKET_EVENTS = {
  CONNECTION: 'connection',
  DISCONNECT: 'disconnect',
  JOIN_ROOM: 'join_room',
  LEAVE_ROOM: 'leave_room',
  NEW_MESSAGE: 'new_message',
  BOOKING_UPDATE: 'booking_update',
  PAYMENT_STATUS: 'payment_status',
  NOTIFICATION: 'notification',
  AVAILABILITY_UPDATE: 'availability_update',
  USER_ONLINE: 'user_online',
  USER_OFFLINE: 'user_offline'
} as const;

export const ERROR_MESSAGES = {
  GENERIC: 'Something went wrong. Please try again.',
  NETWORK: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  VALIDATION: 'Please check your input and try again.',
  NOT_FOUND: 'The requested resource was not found.',
  SERVER_ERROR: 'Server error. Please try again later.',
  PAYMENT_FAILED: 'Payment failed. Please try a different payment method.',
  BOOKING_UNAVAILABLE: 'This time slot is no longer available.',
  SESSION_EXPIRED: 'Your session has expired. Please login again.'
} as const;

export const SUCCESS_MESSAGES = {
  PROFILE_UPDATED: 'Profile updated successfully!',
  BOOKING_CONFIRMED: 'Booking confirmed successfully!',
  PAYMENT_SUCCESSFUL: 'Payment completed successfully!',
  MESSAGE_SENT: 'Message sent successfully!',
  SETTINGS_SAVED: 'Settings saved successfully!',
  ACCOUNT_CREATED: 'Account created successfully!',
  PASSWORD_RESET: 'Password reset successfully!'
} as const;

// Regular expressions for various validations
export const REGEX_PATTERNS = {
  SAUDI_PHONE: /^(\+966|966|0)?[5][0-9]{8}$/,
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
  ARABIC_TEXT: /[\u0600-\u06FF]/,
  ENGLISH_TEXT: /^[A-Za-z\s]+$/,
  NUMBERS_ONLY: /^\d+$/,
  ALPHANUMERIC: /^[a-zA-Z0-9]+$/,
  URL: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
  POSTAL_CODE: /^\d{5}$/
} as const;