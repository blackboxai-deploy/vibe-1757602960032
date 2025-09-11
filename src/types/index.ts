// SuperOffice KSA - Core Type Definitions

export interface User {
  id: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: UserRole;
  preferences: UserPreferences;
  membershipType?: MembershipType;
  membershipExpiry?: Date;
  nfcCards: NFCCard[];
  bookings: Booking[];
  invoices: Invoice[];
  notifications: Notification[];
  favorites: string[]; // service IDs
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  lastLogin?: Date;
}

export interface UserPreferences {
  language: 'en' | 'ar';
  theme: 'light' | 'dark';
  fontSize: 'small' | 'medium' | 'large';
  highContrast: boolean;
  notifications: {
    push: boolean;
    email: boolean;
    sms: boolean;
    booking: boolean;
    promotions: boolean;
    reminders: boolean;
  };
  accessibility: {
    screenReader: boolean;
    reducedMotion: boolean;
  };
}

export type UserRole = 'customer' | 'csr' | 'admin' | 'super_admin';

export type MembershipType = 'creative' | 'smart' | 'premium' | 'enterprise';

export interface Branch {
  id: string;
  nameEn: string;
  nameAr: string;
  address: Address;
  contact: ContactInfo;
  images: string[];
  videos: string[];
  amenities: string[];
  workingHours: WorkingHours;
  googleMapsUrl: string;
  services: string[]; // service IDs
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  street: string;
  district: string;
  city: string;
  country: string;
  postalCode: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
}

export interface WorkingHours {
  [key: string]: {
    open: string;
    close: string;
    isOpen: boolean;
  };
}

export interface Service {
  id: string;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  category: ServiceCategory;
  images: string[];
  amenities: string[];
  capacity: number;
  area?: number; // in sqm
  pricing: ServicePricing[];
  availability: ServiceAvailability[];
  ratings: Rating[];
  averageRating: number;
  totalBookings: number;
  isActive: boolean;
  isFeatured: boolean;
  tags: string[];
  branchId: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ServiceCategory = 
  | 'private_office' 
  | 'meeting_room' 
  | 'creative_membership' 
  | 'smart_membership' 
  | 'warehouse' 
  | 'store' 
  | 'parking';

export interface ServicePricing {
  duration: 'hourly' | 'daily' | 'monthly' | 'yearly';
  price: number;
  currency: string;
  discountPercentage?: number;
  validUntil?: Date;
}

export interface ServiceAvailability {
  date: Date;
  slots: TimeSlot[];
  isFullyBooked: boolean;
  maintenanceMode: boolean;
}

export interface TimeSlot {
  startTime: string;
  endTime: string;
  isAvailable: boolean;
  bookingId?: string;
}

export interface Booking {
  id: string;
  userId: string;
  serviceId: string;
  branchId: string;
  startDate: Date;
  endDate: Date;
  duration: string;
  totalAmount: number;
  currency: string;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  paymentId?: string;
  invoiceId?: string;
  nfcAccessCode?: string;
  qrCode?: string;
  checkInTime?: Date;
  checkOutTime?: Date;
  rating?: Rating;
  notes?: string;
  isRecurring: boolean;
  recurringPattern?: RecurringPattern;
  groupBooking?: GroupBooking;
  createdAt: Date;
  updatedAt: Date;
}

export type BookingStatus = 
  | 'pending' 
  | 'confirmed' 
  | 'checked_in' 
  | 'checked_out' 
  | 'cancelled' 
  | 'completed' 
  | 'no_show';

export type PaymentStatus = 
  | 'pending' 
  | 'processing' 
  | 'completed' 
  | 'failed' 
  | 'refunded' 
  | 'cancelled';

export interface RecurringPattern {
  frequency: 'daily' | 'weekly' | 'monthly';
  interval: number;
  endDate?: Date;
  occurrences?: number;
}

export interface GroupBooking {
  groupSize: number;
  contactPerson: string;
  specialRequirements?: string;
}

export interface Payment {
  id: string;
  userId: string;
  bookingId?: string;
  membershipId?: string;
  amount: number;
  currency: string;
  method: PaymentMethod;
  provider: 'myfatoorah' | 'stc_pay' | 'mada' | 'visa' | 'mastercard' | 'apple_pay';
  transactionId: string;
  status: PaymentStatus;
  gatewayResponse?: any;
  refundAmount?: number;
  refundReason?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type PaymentMethod = 
  | 'credit_card' 
  | 'debit_card' 
  | 'stc_pay' 
  | 'mada' 
  | 'apple_pay' 
  | 'bank_transfer';

export interface Invoice {
  id: string;
  userId: string;
  bookingId?: string;
  paymentId?: string;
  invoiceNumber: string;
  amount: number;
  currency: string;
  vatAmount: number;
  vatPercentage: number;
  items: InvoiceItem[];
  status: 'draft' | 'sent' | 'paid' | 'cancelled';
  dueDate: Date;
  paidDate?: Date;
  zatcaUuid?: string; // ZATCA e-invoice UUID
  qrCode: string; // ZATCA QR code
  pdfUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface InvoiceItem {
  description: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  vatRate: number;
}

export interface NFCCard {
  id: string;
  userId: string;
  cardId: string;
  cardType: 'physical' | 'virtual';
  accessLevel: 'basic' | 'premium' | 'admin';
  validFrom: Date;
  validUntil: Date;
  isActive: boolean;
  accessLogs: AccessLog[];
  permissions: NFCPermission[];
  createdAt: Date;
  updatedAt: Date;
}

export interface AccessLog {
  id: string;
  nfcCardId: string;
  location: string;
  accessTime: Date;
  accessType: 'entry' | 'exit';
  success: boolean;
  deviceId?: string;
  ipAddress?: string;
}

export interface NFCPermission {
  serviceId: string;
  branchId: string;
  accessType: 'full' | 'time_limited' | 'booking_only';
  timeRestrictions?: {
    startTime: string;
    endTime: string;
    days: string[];
  };
}

export interface Notification {
  id: string;
  userId?: string;
  type: NotificationType;
  title: string;
  message: string;
  titleAr?: string;
  messageAr?: string;
  data?: any;
  isRead: boolean;
  isGlobal: boolean;
  targetAudience?: string[];
  scheduledFor?: Date;
  sentAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type NotificationType = 
  | 'booking_confirmation' 
  | 'booking_reminder' 
  | 'payment_success' 
  | 'payment_failed' 
  | 'membership_expiry' 
  | 'promotion' 
  | 'announcement' 
  | 'system_update';

export interface Rating {
  id: string;
  userId: string;
  serviceId: string;
  bookingId: string;
  rating: number; // 1-5
  review?: string;
  categories: {
    cleanliness: number;
    comfort: number;
    location: number;
    value: number;
    service: number;
  };
  isVerified: boolean;
  helpfulCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Event {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  startDate: Date;
  endDate: Date;
  location: string;
  branchId?: string;
  maxAttendees: number;
  currentAttendees: number;
  price: number;
  currency: string;
  images: string[];
  category: 'workshop' | 'networking' | 'seminar' | 'social';
  isActive: boolean;
  registrations: EventRegistration[];
  createdAt: Date;
  updatedAt: Date;
}

export interface EventRegistration {
  id: string;
  userId: string;
  eventId: string;
  status: 'registered' | 'attended' | 'cancelled';
  paymentStatus: PaymentStatus;
  registrationDate: Date;
  attendanceDate?: Date;
}

export interface Loyalty {
  id: string;
  userId: string;
  points: number;
  tier: 'bronze' | 'silver' | 'gold' | 'platinum';
  referralCount: number;
  referralCode: string;
  rewards: Reward[];
  transactions: LoyaltyTransaction[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  pointsRequired: number;
  type: 'discount' | 'free_service' | 'upgrade' | 'merchandise';
  isActive: boolean;
  validUntil?: Date;
}

export interface LoyaltyTransaction {
  id: string;
  loyaltyId: string;
  points: number;
  type: 'earned' | 'redeemed' | 'expired';
  description: string;
  relatedId?: string; // booking ID, referral ID, etc.
  createdAt: Date;
}

export interface ChatSession {
  id: string;
  userId: string;
  csrId?: string;
  status: 'waiting' | 'active' | 'closed';
  messages: ChatMessage[];
  startedAt: Date;
  endedAt?: Date;
  rating?: number;
  feedback?: string;
}

export interface ChatMessage {
  id: string;
  sessionId: string;
  senderId: string;
  senderType: 'user' | 'csr' | 'system';
  message: string;
  messageType: 'text' | 'image' | 'file' | 'system';
  attachments?: string[];
  isRead: boolean;
  sentAt: Date;
}

export interface DynamicContent {
  id: string;
  key: string;
  type: 'banner' | 'text' | 'image' | 'video' | 'promotion';
  contentEn: any;
  contentAr: any;
  isActive: boolean;
  sortOrder: number;
  targetAudience?: string[];
  validFrom?: Date;
  validUntil?: Date;
  branchId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Analytics {
  id: string;
  type: 'booking' | 'payment' | 'user' | 'service' | 'branch';
  metric: string;
  value: number;
  metadata: any;
  timestamp: Date;
  branchId?: string;
  serviceId?: string;
  userId?: string;
}

// API Response Types
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  errors?: Record<string, string[]>;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Filter and Search Types
export interface ServiceFilters {
  branchId?: string;
  category?: ServiceCategory;
  minPrice?: number;
  maxPrice?: number;
  date?: Date;
  capacity?: number;
  amenities?: string[];
  rating?: number;
  availability?: boolean;
  search?: string;
}

export interface BookingFilters {
  userId?: string;
  branchId?: string;
  serviceId?: string;
  status?: BookingStatus;
  dateFrom?: Date;
  dateTo?: Date;
  search?: string;
}

// Form Types
export interface LoginForm {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

export interface BookingForm {
  serviceId: string;
  branchId: string;
  startDate: Date;
  endDate: Date;
  duration: string;
  notes?: string;
  isRecurring?: boolean;
  recurringPattern?: RecurringPattern;
  groupBooking?: GroupBooking;
}

export interface ProfileUpdateForm {
  firstName: string;
  lastName: string;
  phone: string;
  avatar?: File;
  preferences: UserPreferences;
}

// Socket.io Event Types
export interface SocketEvents {
  // Client to Server
  join_room: { userId: string; userType: string };
  send_message: { sessionId: string; message: string };
  booking_update: { bookingId: string; status: BookingStatus };
  
  // Server to Client
  booking_confirmed: Booking;
  payment_status: { paymentId: string; status: PaymentStatus };
  new_message: ChatMessage;
  notification: Notification;
  availability_update: { serviceId: string; date: Date };
}

// Theme and UI Types
export interface Theme {
  primary: string;
  secondary: string;
  accent: string;
  error: string;
  background: string;
  surface: string;
  textPrimary: string;
  textSecondary: string;
}

export interface UIState {
  isLoading: boolean;
  error: string | null;
  language: 'en' | 'ar';
  theme: 'light' | 'dark';
  sidebar: {
    isOpen: boolean;
    activeSection: string;
  };
  modals: {
    [key: string]: boolean;
  };
}

// Validation Schemas (for Zod)
export interface ValidationErrors {
  [field: string]: string[];
}

// Constants
export const BRANCHES = {
  AL_AARID: 'al_aarid',
  AS_SULIMANIYAH: 'as_sulimaniyah',
  AS_SUWAIDI: 'as_suwaidi'
} as const;

export const SERVICE_CATEGORIES = {
  PRIVATE_OFFICE: 'private_office',
  MEETING_ROOM: 'meeting_room',
  CREATIVE_MEMBERSHIP: 'creative_membership',
  SMART_MEMBERSHIP: 'smart_membership',
  WAREHOUSE: 'warehouse',
  STORE: 'store',
  PARKING: 'parking'
} as const;

export const USER_ROLES = {
  CUSTOMER: 'customer',
  CSR: 'csr',
  ADMIN: 'admin',
  SUPER_ADMIN: 'super_admin'
} as const;

export const BOOKING_STATUSES = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  CHECKED_IN: 'checked_in',
  CHECKED_OUT: 'checked_out',
  CANCELLED: 'cancelled',
  COMPLETED: 'completed',
  NO_SHOW: 'no_show'
} as const;

export const PAYMENT_STATUSES = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  COMPLETED: 'completed',
  FAILED: 'failed',
  REFUNDED: 'refunded',
  CANCELLED: 'cancelled'
} as const;