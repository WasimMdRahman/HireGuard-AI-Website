'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getRequestAccessGmailLink } from '@/lib/utils';
import { Shield } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Shield className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl text-primary">HireGuard AI</span>
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" asChild>
            <Link href="#demo">Demo</Link>
          </Button>
          <Button
            onClick={() => window.open(getRequestAccessGmailLink(), '_blank')}
          >
            Request Access
          </Button>
        </nav>
        <div className="md:hidden">
          <Button
            onClick={() => window.open(getRequestAccessGmailLink(), '_blank')}
          >
            Request Access
          </Button>
        </div>
      </div>
    </header>
  );
}
