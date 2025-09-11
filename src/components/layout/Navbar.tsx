'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Switch } from '@/components/ui/switch';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { useAuth } from '@/components/providers/AuthProvider';
// import { useTheme } from 'next-themes';
import { THEME_COLORS, SERVICE_CATEGORIES, BRANCHES } from '@/lib/constants';

export default function Navbar() {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const { isAuthenticated, user, logout } = useAuth();
  const [theme, setThemeState] = useState<'light' | 'dark'>('light');
  const setTheme = (newTheme: 'light' | 'dark') => { setThemeState(newTheme); };
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: THEME_COLORS.primary }}
            >
              SO
            </div>
            <div className="hidden md:flex flex-col">
              <span className="font-bold text-sm leading-none">
                SuperOffice
              </span>
              <span className="text-xs text-muted-foreground leading-none">
                KSA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 rtl:space-x-reverse">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Services Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">
                    {t('nav.services')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                      {Object.values(SERVICE_CATEGORIES).map((categoryData) => {
                        const category = categoryData as any;
                        return (
                          <NavigationMenuLink key={category.id} asChild>
                            <Link
                              href={`/services?category=${category.id}`}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-lg">{category.icon}</span>
                                <div className="text-sm font-medium leading-none">
                                  {language === 'ar' ? category.nameAr : category.nameEn}
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Branches Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">
                    {t('nav.branches')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4">
                      {Object.values(BRANCHES).map((branchData) => {
                        const branch = branchData as any;
                        return (
                          <NavigationMenuLink key={branch.id} asChild>
                            <Link
                              href={`/branches/${branch.id}`}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                {language === 'ar' ? branch.nameAr : branch.nameEn}
                              </div>
                              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                {branch.address.district}, {branch.address.city}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Direct Links */}
                {isAuthenticated && (
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/bookings" className="text-sm font-medium">
                        {t('nav.bookings')}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-xs font-medium"
            >
              {language === 'en' ? '🇸🇦 AR' : '🇺🇸 EN'}
            </Button>

            {/* Theme Toggle */}
            <div className="hidden md:flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-xs">🌙</span>
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
              />
            </div>

            {/* Authentication */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user?.avatar} alt={user?.firstName} />
                      <AvatarFallback className="text-xs">
                        {user?.firstName?.[0]}{user?.lastName?.[0]}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align={isRTL ? 'start' : 'end'}>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user?.firstName} {user?.lastName}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user?.email}
                      </p>
                      {user?.membershipType && (
                        <Badge variant="secondary" className="w-fit text-xs mt-1">
                          {user.membershipType}
                        </Badge>
                      )}
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile">{t('nav.profile')}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/bookings">{t('nav.bookings')}</Link>
                  </DropdownMenuItem>
                  {(user?.role === 'admin' || user?.role === 'super_admin') && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href="/admin">{t('nav.admin')}</Link>
                      </DropdownMenuItem>
                    </>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    {t('nav.logout')}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Button asChild variant="ghost" size="sm">
                  <Link href="/auth/login">{t('nav.login')}</Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="/auth/register">{t('nav.register')}</Link>
                </Button>
              </div>
            )}

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2">
                    <div className="w-4 h-4 flex flex-col justify-center space-y-1">
                      <div className="w-full h-0.5 bg-current"></div>
                      <div className="w-full h-0.5 bg-current"></div>
                      <div className="w-full h-0.5 bg-current"></div>
                    </div>
                  </Button>
                </SheetTrigger>
                <SheetContent side={isRTL ? 'left' : 'right'} className="w-80">
                  <SheetHeader>
                    <SheetTitle>SuperOffice KSA</SheetTitle>
                  </SheetHeader>
                  
                  <div className="mt-8 space-y-4">
                    {/* Mobile Services */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm text-muted-foreground">
                        {t('nav.services')}
                      </h4>
                      {Object.values(SERVICE_CATEGORIES).map((categoryData) => {
                        const category = categoryData as any;
                        return (
                          <Link
                            key={category.id}
                            href={`/services?category=${category.id}`}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center space-x-3 rtl:space-x-reverse p-2 rounded-md hover:bg-accent"
                          >
                            <span>{category.icon}</span>
                            <span className="text-sm">
                              {language === 'ar' ? category.nameAr : category.nameEn}
                            </span>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Mobile Branches */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm text-muted-foreground">
                        {t('nav.branches')}
                      </h4>
                      {Object.values(BRANCHES).map((branchData) => {
                        const branch = branchData as any;
                        return (
                          <Link
                            key={branch.id}
                            href={`/branches/${branch.id}`}
                            onClick={() => setIsOpen(false)}
                            className="block p-2 rounded-md hover:bg-accent"
                          >
                            <div className="text-sm font-medium">
                              {language === 'ar' ? branch.nameAr : branch.nameEn}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {branch.address.district}
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Theme Toggle */}
                     <div className="flex items-center justify-between p-2">
                      <span className="text-sm">
                        {language === 'ar' ? 'الوضع الليلي' : 'Dark Mode'}
                      </span>
                      <Switch
                        checked={theme === 'dark'}
                        onCheckedChange={toggleTheme}
                      />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}