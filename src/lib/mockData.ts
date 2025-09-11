// SuperOffice KSA - Mock Data for Development

import { 
  User, 
  Service, 
  Booking, 
  Branch, 
  Payment, 
  Invoice, 
  Notification, 
  Event, 
  DynamicContent,
  ServiceCategory,
  BookingStatus,
  PaymentStatus,
  UserRole
} from '@/types';
import { BRANCHES, AMENITIES } from './constants';

// Mock Users
export const mockUsers: User[] = [
  {
    id: 'user-1',
    email: 'ahmed.alqahtani@email.com',
    phone: '+966501234567',
    firstName: 'Ahmed',
    lastName: 'Al-Qahtani',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/06b86d87-8455-4320-9d82-e2761a62af52.png',
    role: 'customer' as UserRole,
    preferences: {
      language: 'ar',
      theme: 'light',
      fontSize: 'medium',
      highContrast: false,
      notifications: {
        push: true,
        email: true,
        sms: true,
        booking: true,
        promotions: true,
        reminders: true
      },
      accessibility: {
        screenReader: false,
        reducedMotion: false
      }
    },
    membershipType: 'smart',
    membershipExpiry: new Date('2024-12-31'),
    nfcCards: [],
    bookings: [],
    invoices: [],
    notifications: [],
    favorites: ['service-1', 'service-3'],
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-11-20'),
    isActive: true,
    lastLogin: new Date('2024-11-20T10:30:00Z')
  },
  {
    id: 'user-2',
    email: 'fatima.salem@email.com',
    phone: '+966507654321',
    firstName: 'Fatima',
    lastName: 'Salem',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c36a56dd-b79c-4042-892b-c6fb607d0b40.png',
    role: 'customer' as UserRole,
    preferences: {
      language: 'ar',
      theme: 'dark',
      fontSize: 'large',
      highContrast: true,
      notifications: {
        push: true,
        email: false,
        sms: true,
        booking: true,
        promotions: false,
        reminders: true
      },
      accessibility: {
        screenReader: true,
        reducedMotion: true
      }
    },
    membershipType: 'creative',
    membershipExpiry: new Date('2024-10-31'),
    nfcCards: [],
    bookings: [],
    invoices: [],
    notifications: [],
    favorites: ['service-2', 'service-4', 'service-5'],
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-11-19'),
    isActive: true,
    lastLogin: new Date('2024-11-19T14:20:00Z')
  },
  {
    id: 'admin-1',
    email: 'admin@superoffice.sa',
    phone: '+966501111111',
    firstName: 'Mohammed',
    lastName: 'Al-Rashid',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e21707f4-9f10-45e3-8370-652b65f9f159.png',
    role: 'admin' as UserRole,
    preferences: {
      language: 'en',
      theme: 'light',
      fontSize: 'medium',
      highContrast: false,
      notifications: {
        push: true,
        email: true,
        sms: false,
        booking: true,
        promotions: false,
        reminders: true
      },
      accessibility: {
        screenReader: false,
        reducedMotion: false
      }
    },
    nfcCards: [],
    bookings: [],
    invoices: [],
    notifications: [],
    favorites: [],
    createdAt: new Date('2023-12-01'),
    updatedAt: new Date('2024-11-20'),
    isActive: true,
    lastLogin: new Date('2024-11-20T09:00:00Z')
  }
];

// Mock Branches (using constants data)
export const mockBranches: Branch[] = Object.values(BRANCHES).map((branchData, index) => {
  const branch = branchData as any;
  return {
    id: branch.id,
    nameEn: branch.nameEn,
    nameAr: branch.nameAr,
    address: branch.address,
    contact: branch.contact,
    workingHours: branch.workingHours,
    images: [
      `https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a4f85ef3-4789-415d-a9f9-b9cdc1d60df7.png' Branch', '')}+workspace+exterior`,
      `https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/92214609-4b5d-4fcd-8560-9d1b410e65f0.png' Branch', '')}+interior+office+spaces`,
      `https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/75a32d47-db76-44b8-9cf5-958fe1b5bb3d.png' Branch', '')}+meeting+rooms+and+amenities`,
      `https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f1396768-ddf3-4a5e-b74d-62f1331d22cf.png' Branch', '')}+reception+and+common+areas`
    ],
    videos: [
      `https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fd3e80fb-0b03-4d4a-8345-98f0363e082d.png' Branch', '')}+facilities`
    ],
    amenities: Object.keys(AMENITIES).slice(0, 10),
    googleMapsUrl: `https://maps.google.com/maps?q=${branch.address.coordinates.latitude},${branch.address.coordinates.longitude}`,
    services: [`service-${index * 3 + 1}`, `service-${index * 3 + 2}`, `service-${index * 3 + 3}`],
    isActive: true,
    createdAt: new Date('2023-11-01'),
    updatedAt: new Date('2024-11-15')
  };
});

// Mock Services
export const mockServices: Service[] = [
  // Private Offices - Al Aarid
  {
    id: 'service-1',
    nameEn: 'Executive Private Office',
    nameAr: 'المكتب التنفيذي الخاص',
    descriptionEn: 'Spacious executive office with premium amenities, perfect for senior professionals and entrepreneurs.',
    descriptionAr: 'مكتب تنفيذي واسع مع وسائل الراحة المميزة، مثالي للمهنيين وأصحاب المشاريع.',
    category: 'private_office' as ServiceCategory,
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cae169bd-60f1-426e-b3f9-6e77bb22ec19.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/52121f6e-6024-495c-a019-fe5176de4d70.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d436664e-b66d-44a0-800f-10f3ae50ace7.png'
    ],
    amenities: ['wifi', 'ac', 'parking', 'coffee', 'printer', 'security', 'cleaning', 'phone'],
    capacity: 4,
    area: 25,
    pricing: [
      { duration: 'hourly', price: 120, currency: 'SAR' },
      { duration: 'daily', price: 800, currency: 'SAR', discountPercentage: 15 },
      { duration: 'monthly', price: 18000, currency: 'SAR', discountPercentage: 25 },
      { duration: 'yearly', price: 180000, currency: 'SAR', discountPercentage: 35 }
    ],
    availability: [],
    ratings: [],
    averageRating: 4.8,
    totalBookings: 342,
    isActive: true,
    isFeatured: true,
    tags: ['executive', 'premium', 'city-view', 'spacious'],
    branchId: 'al_aarid',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-11-15')
  },
  
  // Meeting Rooms - As Sulimaniyah
  {
    id: 'service-2',
    nameEn: 'Premium Meeting Room',
    nameAr: 'غرفة الاجتماعات المميزة',
    descriptionEn: 'State-of-the-art meeting room with advanced AV equipment and comfortable seating for up to 12 people.',
    descriptionAr: 'غرفة اجتماعات حديثة مع معدات صوتية ومرئية متطورة ومقاعد مريحة لـ 12 شخص.',
    category: 'meeting_room' as ServiceCategory,
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4796230b-2d1d-4699-a870-1b826b70fa5c.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0c3c3a41-3e06-4ef8-9a53-d88e6df91ebe.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7f5d8741-b9c2-4cc8-b6d8-1c9c0c8c8d4c.png'
    ],
    amenities: ['wifi', 'ac', 'projector', 'whiteboard', 'coffee', 'printer', 'security'],
    capacity: 12,
    area: 35,
    pricing: [
      { duration: 'hourly', price: 200, currency: 'SAR' },
      { duration: 'daily', price: 1200, currency: 'SAR', discountPercentage: 10 }
    ],
    availability: [],
    ratings: [],
    averageRating: 4.6,
    totalBookings: 189,
    isActive: true,
    isFeatured: true,
    tags: ['meeting', 'presentation', 'av-equipment', 'professional'],
    branchId: 'as_sulimaniyah',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-11-12')
  },

  // Creative Workspace - As Suwaidi
  {
    id: 'service-3',
    nameEn: 'Creative Studio Space',
    nameAr: 'استوديو الإبداع',
    descriptionEn: 'Open creative workspace designed for artists, designers, and creative professionals with natural lighting.',
    descriptionAr: 'مساحة إبداعية مفتوحة مصممة للفنانين والمصممين والمبدعين مع إضاءة طبيعية.',
    category: 'creative_membership' as ServiceCategory,
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/406dde70-45f0-42cf-bff9-04635a09cf32.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/53007726-7969-4731-a28c-2a26d29aaa83.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/48a78efb-db50-4e1e-8427-5e0e7e3ca005.png'
    ],
    amenities: ['wifi', 'ac', 'printer', 'whiteboard', 'coffee', 'lounge', 'storage'],
    capacity: 8,
    area: 45,
    pricing: [
      { duration: 'daily', price: 150, currency: 'SAR' },
      { duration: 'monthly', price: 3500, currency: 'SAR', discountPercentage: 20 }
    ],
    availability: [],
    ratings: [],
    averageRating: 4.7,
    totalBookings: 267,
    isActive: true,
    isFeatured: false,
    tags: ['creative', 'artistic', 'natural-light', 'flexible'],
    branchId: 'as_suwaidi',
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-11-10')
  },

  // Smart Office - Al Aarid
  {
    id: 'service-4',
    nameEn: 'Smart Tech Office',
    nameAr: 'المكتب التقني الذكي',
    descriptionEn: 'High-tech office space with smart automation, IoT devices, and cutting-edge technology infrastructure.',
    descriptionAr: 'مساحة مكتبية عالية التقنية مع أتمتة ذكية وأجهزة إنترنت الأشياء وبنية تحتية تكنولوجية متطورة.',
    category: 'smart_membership' as ServiceCategory,
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/09355bba-5ced-4388-91bc-fc35d3fd5d8e.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/24a4006b-a068-4ffb-a38b-b57188ac9ffe.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ee9c5e9e-f376-45c5-8bb3-f2d16d75a437.png'
    ],
    amenities: ['wifi', 'ac', 'printer', 'security', 'phone', 'storage', 'elevator'],
    capacity: 6,
    area: 30,
    pricing: [
      { duration: 'hourly', price: 150, currency: 'SAR' },
      { duration: 'daily', price: 1000, currency: 'SAR', discountPercentage: 12 },
      { duration: 'monthly', price: 22000, currency: 'SAR', discountPercentage: 30 }
    ],
    availability: [],
    ratings: [],
    averageRating: 4.9,
    totalBookings: 156,
    isActive: true,
    isFeatured: true,
    tags: ['smart', 'technology', 'iot', 'automation'],
    branchId: 'al_aarid',
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-11-08')
  },

  // Warehouse - As Suwaidi
  {
    id: 'service-5',
    nameEn: 'Storage Warehouse',
    nameAr: 'مستودع التخزين',
    descriptionEn: 'Secure storage warehouse facility with 24/7 access, perfect for inventory and logistics operations.',
    descriptionAr: 'مرفق مستودع تخزين آمن مع وصول على مدار الساعة، مثالي لعمليات الخزون واللوجستيات.',
    category: 'warehouse' as ServiceCategory,
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b8e3c22f-927f-4bed-bd21-d5ac1afe4aff.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/58c2e4ad-6981-4ec6-9f7a-a4fed97f018e.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7d4e3eee-9f45-45fc-a4de-e681c8dad5ef.png'
    ],
    amenities: ['security', 'parking', 'elevator', 'storage'],
    capacity: 50,
    area: 200,
    pricing: [
      { duration: 'monthly', price: 8000, currency: 'SAR' },
      { duration: 'yearly', price: 80000, currency: 'SAR', discountPercentage: 25 }
    ],
    availability: [],
    ratings: [],
    averageRating: 4.4,
    totalBookings: 67,
    isActive: true,
    isFeatured: false,
    tags: ['storage', 'logistics', 'secure', 'large'],
    branchId: 'as_suwaidi',
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-11-05')
  },

  // Retail Store - As Sulimaniyah
  {
    id: 'service-6',
    nameEn: 'Retail Store Space',
    nameAr: 'محل تجاري',
    descriptionEn: 'Prime retail location with high foot traffic, perfect for pop-up stores and retail businesses.',
    descriptionAr: 'موقع تجاري ممتاز مع حركة مرور كثيفة، مثالي للمتاجر المؤقتة والأعمال التجارية.',
    category: 'store' as ServiceCategory,
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/78b0e55e-9407-421e-83e4-84e1092827ff.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ae262343-e5ab-4094-b142-afe3b90cc271.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d59b3ff0-d320-4142-9f71-c274b22b80fb.png'
    ],
    amenities: ['wifi', 'ac', 'security', 'parking', 'storage', 'elevator'],
    capacity: 30,
    area: 60,
    pricing: [
      { duration: 'daily', price: 500, currency: 'SAR' },
      { duration: 'monthly', price: 12000, currency: 'SAR', discountPercentage: 15 },
      { duration: 'yearly', price: 120000, currency: 'SAR', discountPercentage: 20 }
    ],
    availability: [],
    ratings: [],
    averageRating: 4.3,
    totalBookings: 89,
    isActive: true,
    isFeatured: false,
    tags: ['retail', 'commercial', 'high-traffic', 'storefront'],
    branchId: 'as_sulimaniyah',
    createdAt: new Date('2024-03-15'),
    updatedAt: new Date('2024-11-03')
  },

  // Parking Spaces
  {
    id: 'service-7',
    nameEn: 'Premium Parking Space',
    nameAr: 'موقف سيارات مميز',
    descriptionEn: 'Covered parking space in prime location with 24/7 security and easy access.',
    descriptionAr: 'موقف سيارات مغطى في موقع ممتاز مع حراسة على مدار الساعة وسهولة الوصول.',
    category: 'parking' as ServiceCategory,
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3bda15e5-de3d-46e8-9655-3c8b18fb1b62.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1032edd3-8480-4c58-b601-dccd8f17b0e6.png'
    ],
    amenities: ['security', 'elevator'],
    capacity: 1,
    area: 15,
    pricing: [
      { duration: 'daily', price: 25, currency: 'SAR' },
      { duration: 'monthly', price: 400, currency: 'SAR', discountPercentage: 20 },
      { duration: 'yearly', price: 3600, currency: 'SAR', discountPercentage: 35 }
    ],
    availability: [],
    ratings: [],
    averageRating: 4.5,
    totalBookings: 234,
    isActive: true,
    isFeatured: false,
    tags: ['parking', 'covered', 'secure', 'convenient'],
    branchId: 'al_aarid',
    createdAt: new Date('2024-04-01'),
    updatedAt: new Date('2024-11-01')
  }
];

// Mock Bookings
export const mockBookings: Booking[] = [
  {
    id: 'booking-1',
    userId: 'user-1',
    serviceId: 'service-1',
    branchId: 'al_aarid',
    startDate: new Date('2024-11-25T09:00:00Z'),
    endDate: new Date('2024-11-25T17:00:00Z'),
    duration: 'daily',
    totalAmount: 680,
    currency: 'SAR',
    status: 'confirmed' as BookingStatus,
    paymentStatus: 'completed' as PaymentStatus,
    paymentId: 'payment-1',
    invoiceId: 'invoice-1',
    nfcAccessCode: 'NFC001-EXEC-2024',
    qrCode: 'QR001-BOOKING-EXEC',
    isRecurring: false,
    createdAt: new Date('2024-11-20T10:30:00Z'),
    updatedAt: new Date('2024-11-20T10:30:00Z')
  },
  {
    id: 'booking-2',
    userId: 'user-2',
    serviceId: 'service-2',
    branchId: 'as_sulimaniyah',
    startDate: new Date('2024-11-22T14:00:00Z'),
    endDate: new Date('2024-11-22T16:00:00Z'),
    duration: 'hourly',
    totalAmount: 400,
    currency: 'SAR',
    status: 'completed' as BookingStatus,
    paymentStatus: 'completed' as PaymentStatus,
    paymentId: 'payment-2',
    invoiceId: 'invoice-2',
    checkInTime: new Date('2024-11-22T14:05:00Z'),
    checkOutTime: new Date('2024-11-22T15:55:00Z'),
    isRecurring: false,
    createdAt: new Date('2024-11-18T11:15:00Z'),
    updatedAt: new Date('2024-11-22T16:00:00Z')
  }
];

// Mock Payments
export const mockPayments: Payment[] = [
  {
    id: 'payment-1',
    userId: 'user-1',
    bookingId: 'booking-1',
    amount: 680,
    currency: 'SAR',
    method: 'credit_card',
    provider: 'myfatoorah',
    transactionId: 'TXN-MF-001-2024',
    status: 'completed' as PaymentStatus,
    gatewayResponse: {
      paymentId: 'MF-12345',
      authCode: 'AUTH123',
      cardLast4: '1234'
    },
    createdAt: new Date('2024-11-20T10:32:00Z'),
    updatedAt: new Date('2024-11-20T10:33:00Z')
  },
  {
    id: 'payment-2',
    userId: 'user-2',
    bookingId: 'booking-2',
    amount: 400,
    currency: 'SAR',
    method: 'stc_pay',
    provider: 'stc_pay',
    transactionId: 'TXN-STC-002-2024',
    status: 'completed' as PaymentStatus,
    gatewayResponse: {
      paymentId: 'STC-67890',
      phoneNumber: '+966507654321'
    },
    createdAt: new Date('2024-11-18T11:17:00Z'),
    updatedAt: new Date('2024-11-18T11:18:00Z')
  }
];

// Mock Invoices
export const mockInvoices: Invoice[] = [
  {
    id: 'invoice-1',
    userId: 'user-1',
    bookingId: 'booking-1',
    paymentId: 'payment-1',
    invoiceNumber: 'INV-2024-001',
    amount: 680,
    currency: 'SAR',
    vatAmount: 102,
    vatPercentage: 15,
    items: [
      {
        description: 'Executive Private Office - Daily Rental',
        quantity: 1,
        unitPrice: 680,
        totalPrice: 680,
        vatRate: 15
      }
    ],
    status: 'paid',
    dueDate: new Date('2024-11-25T23:59:59Z'),
    paidDate: new Date('2024-11-20T10:33:00Z'),
    zatcaUuid: 'ZATCA-UUID-001-2024',
    qrCode: 'ZATCA-QR-001',
    pdfUrl: '/invoices/INV-2024-001.pdf',
    createdAt: new Date('2024-11-20T10:33:00Z'),
    updatedAt: new Date('2024-11-20T10:33:00Z')
  }
];

// Mock Notifications
export const mockNotifications: Notification[] = [
  {
    id: 'notif-1',
    userId: 'user-1',
    type: 'booking_confirmation',
    title: 'Booking Confirmed',
    message: 'Your booking for Executive Private Office has been confirmed for November 25, 2024.',
    titleAr: 'تأكيد الحجز',
    messageAr: 'تم تأكيد حجزك للمكتب التنفيذي الخاص ليوم 25 نوفمبر 2024.',
    data: { bookingId: 'booking-1' },
    isRead: true,
    isGlobal: false,
    sentAt: new Date('2024-11-20T10:33:00Z'),
    createdAt: new Date('2024-11-20T10:33:00Z'),
    updatedAt: new Date('2024-11-20T15:20:00Z')
  },
  {
    id: 'notif-2',
    userId: 'user-1',
    type: 'booking_reminder',
    title: 'Booking Reminder',
    message: 'Reminder: Your booking starts in 2 hours at Al Aarid Branch.',
    titleAr: 'تذكير الحجز',
    messageAr: 'تذكير: حجزك يبدأ خلال ساعتين في فرع العارض.',
    data: { bookingId: 'booking-1' },
    isRead: false,
    isGlobal: false,
    sentAt: new Date('2024-11-25T07:00:00Z'),
    createdAt: new Date('2024-11-25T07:00:00Z'),
    updatedAt: new Date('2024-11-25T07:00:00Z')
  },
  {
    id: 'notif-3',
    type: 'promotion',
    title: 'Special Offer: 20% Off Meeting Rooms',
    message: 'Book any meeting room this week and get 20% off! Use code MEET20.',
    titleAr: 'عرض خاص: خصم 20% على غرف الاجتماعات',
    messageAr: 'احجز أي غرفة اجتماعات هذا الأسبوع واحصل على خصم 20%! استخدم الكود MEET20.',
    data: { promoCode: 'MEET20', validUntil: '2024-11-30' },
    isRead: false,
    isGlobal: true,
    targetAudience: ['all'],
    sentAt: new Date('2024-11-21T09:00:00Z'),
    createdAt: new Date('2024-11-21T09:00:00Z'),
    updatedAt: new Date('2024-11-21T09:00:00Z')
  }
];

// Mock Events
export const mockEvents: Event[] = [
  {
    id: 'event-1',
    titleEn: 'Entrepreneurship Workshop',
    titleAr: 'ورشة ريادة الأعمال',
    descriptionEn: 'Learn the fundamentals of starting and growing your business in Saudi Arabia.',
    descriptionAr: 'تعلم أساسيات بدء وتنمية أعمالك في المملكة العربية السعودية.',
    startDate: new Date('2024-12-05T18:00:00Z'),
    endDate: new Date('2024-12-05T21:00:00Z'),
    location: 'Al Aarid Branch - Conference Hall',
    branchId: 'al_aarid',
    maxAttendees: 50,
    currentAttendees: 23,
    price: 100,
    currency: 'SAR',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3b46bae5-d639-45d2-91c7-557912596adf.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a203ed55-ede8-454e-bf8d-814bb75a4901.png'
    ],
    category: 'workshop',
    isActive: true,
    registrations: [],
    createdAt: new Date('2024-11-01T00:00:00Z'),
    updatedAt: new Date('2024-11-15T00:00:00Z')
  },
  {
    id: 'event-2',
    titleEn: 'Tech Innovation Seminar',
    titleAr: 'ندوة الابتكار التقني',
    descriptionEn: 'Explore the latest technology trends and innovations shaping the future of business.',
    descriptionAr: 'استكشف أحدث الاتجاهات التقنية والابتكارات التي تشكل مستقبل الأعمال.',
    startDate: new Date('2024-12-10T19:00:00Z'),
    endDate: new Date('2024-12-10T22:00:00Z'),
    location: 'As Sulimaniyah Branch - Auditorium',
    branchId: 'as_sulimaniyah',
    maxAttendees: 80,
    currentAttendees: 45,
    price: 150,
    currency: 'SAR',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/77377823-55e7-49fe-ab21-ea5aedf8ec73.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e0b9e903-fc38-4d84-915b-67f517d58dff.png'
    ],
    category: 'seminar',
    isActive: true,
    registrations: [],
    createdAt: new Date('2024-11-05T00:00:00Z'),
    updatedAt: new Date('2024-11-18T00:00:00Z')
  }
];

// Mock Dynamic Content
export const mockDynamicContent: DynamicContent[] = [
  {
    id: 'banner-1',
    key: 'home_hero_banner',
    type: 'banner',
    contentEn: {
      title: 'Welcome to SuperOffice KSA',
      subtitle: 'Premium Workspace Solutions',
      description: 'Discover flexible office spaces, meeting rooms, and creative environments designed for success.',
      imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9dd4b1bc-ae26-4d61-bdd7-2d2c636c448d.png',
      buttonText: 'Explore Spaces',
      buttonLink: '/services'
    },
    contentAr: {
      title: 'مرحباً بكم في سوبر أوفيس السعودية',
      subtitle: 'حلول مساحات العمل المتميزة',
      description: 'اكتشف مساحات العمل المرنة وغرف الاجتماعات والبيئات الإبداعية المصممة للنجاح.',
      imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/73730cea-cf29-4265-83d5-502116ed1ece.png',
      buttonText: 'استكشف المساحات',
      buttonLink: '/services'
    },
    isActive: true,
    sortOrder: 1,
    validFrom: new Date('2024-01-01'),
    validUntil: new Date('2024-12-31'),
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-11-15')
  },
  {
    id: 'promo-1',
    key: 'membership_promotion',
    type: 'promotion',
    contentEn: {
      title: 'Limited Time Offer',
      description: 'Get 30% off your first month membership',
      promoCode: 'WELCOME30',
      imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/83cf69ff-d13e-4720-93a5-00e66315ff7b.png',
      validUntil: '2024-12-31'
    },
    contentAr: {
      title: 'عرض لفترة محدودة',
      description: 'احصل على خصم 30% على أول شهر عضوية',
      promoCode: 'WELCOME30',
      imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7f837f53-65f0-4a48-9e17-9ccc760c33f6.png',
      validUntil: '2024-12-31'
    },
    isActive: true,
    sortOrder: 2,
    validFrom: new Date('2024-11-01'),
    validUntil: new Date('2024-12-31'),
    createdAt: new Date('2024-11-01'),
    updatedAt: new Date('2024-11-10')
  }
];

// Mock Analytics Data
export const mockAnalytics = {
  overview: {
    totalBookings: 1247,
    totalRevenue: 485600,
    totalUsers: 892,
    averageRating: 4.6,
    occupancyRate: 78
  },
  monthlyBookings: [
    { month: 'Jan', bookings: 89, revenue: 34500 },
    { month: 'Feb', bookings: 95, revenue: 38200 },
    { month: 'Mar', bookings: 112, revenue: 42800 },
    { month: 'Apr', bookings: 98, revenue: 39600 },
    { month: 'May', bookings: 125, revenue: 48200 },
    { month: 'Jun', bookings: 118, revenue: 45800 },
    { month: 'Jul', bookings: 134, revenue: 52100 },
    { month: 'Aug', bookings: 129, revenue: 49800 },
    { month: 'Sep', bookings: 115, revenue: 44600 },
    { month: 'Oct', bookings: 138, revenue: 53800 },
    { month: 'Nov', bookings: 142, revenue: 55200 }
  ],
  topServices: [
    { name: 'Executive Private Office', bookings: 342, revenue: 156800 },
    { name: 'Creative Studio Space', bookings: 267, revenue: 98400 },
    { name: 'Premium Parking Space', bookings: 234, revenue: 45600 },
    { name: 'Premium Meeting Room', bookings: 189, revenue: 89200 },
    { name: 'Smart Tech Office', bookings: 156, revenue: 78900 }
  ],
  branchPerformance: [
    { branch: 'Al Aarid', bookings: 456, revenue: 189600, occupancy: 82 },
    { branch: 'As Sulimaniyah', bookings: 398, revenue: 167800, occupancy: 75 },
    { branch: 'As Suwaidi', bookings: 393, revenue: 128200, occupancy: 71 }
  ]
};

// Export all mock data
export {
  mockUsers as users,
  mockBranches as branches,
  mockServices as services,
  mockBookings as bookings,
  mockPayments as payments,
  mockInvoices as invoices,
  mockNotifications as notifications,
  mockEvents as events,
  mockDynamicContent as dynamicContent,
  mockAnalytics as analytics
};

// Helper functions for mock data
export const getMockUserById = (id: string): User | undefined => {
  return mockUsers.find(user => user.id === id);
};

export const getMockServiceById = (id: string): Service | undefined => {
  return mockServices.find(service => service.id === id);
};

export const getMockBranchById = (id: string): Branch | undefined => {
  return mockBranches.find(branch => branch.id === id);
};

export const getMockBookingById = (id: string): Booking | undefined => {
  return mockBookings.find(booking => booking.id === id);
};

export const getServicesByBranch = (branchId: string): Service[] => {
  return mockServices.filter(service => service.branchId === branchId);
};

export const getServicesByCategory = (category: ServiceCategory): Service[] => {
  return mockServices.filter(service => service.category === category);
};

export const getUserBookings = (userId: string): Booking[] => {
  return mockBookings.filter(booking => booking.userId === userId);
};

export const getUserNotifications = (userId: string): Notification[] => {
  return mockNotifications.filter(notification => 
    notification.userId === userId || notification.isGlobal
  );
};

export const getActivePromotions = (): DynamicContent[] => {
  const now = new Date();
  return mockDynamicContent.filter(content => 
    content.type === 'promotion' && 
    content.isActive && 
    (!content.validUntil || new Date(content.validUntil) > now)
  );
};