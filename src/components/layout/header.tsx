'use client';

import Link from 'next/link';
import { NavLink } from './nav-link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Brain } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/resume', label: 'Resume' },
  { href: '/ml-portfolio', label: 'ML Portfolio' },
  { href: '/research-portfolio', label: 'Research Portfolio' },
  { href: '/research-papers', label: 'Research Papers' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  if (!isMounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-md h-16 sm:h-20 flex items-center">
        <div className="container-max flex items-center justify-between">
          <div className="w-1/3"></div> {/* Placeholder for logo */}
          <div className="w-1/3"></div> {/* Placeholder for name */}
          <div className="w-1/3"></div> {/* Placeholder for nav */}
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-lg backdrop-blur-md bg-opacity-90">
      <div className="container-max flex items-center justify-between h-16 sm:h-20">
        <Link href="/" className="flex items-center gap-2 text-xl sm:text-2xl font-bold hover:opacity-80 transition-opacity">
          <span className="font-headline text-4xl">Jesus Mancilla</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1 items-center">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-primary text-primary-foreground p-0">
              <div className="p-6">
                <Link href="/" className="flex items-center gap-2 text-xl font-bold mb-6" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="font-headline text-4xl">Jesus Mancilla</span>
                </Link>
                <nav className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.href}
                      href={item.href}
                      className="block text-base"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
