'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getRequestAccessGmailLink } from '@/lib/utils';

export default function Hero() {
  return (
    <section id="hero" className="w-full pt-28 md:pt-36 pb-12 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
              AI Resume Risk Analysis for Hiring Teams
            </h1>
            <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground md:text-xl">
              Identify interview risks, skill gaps, and verification points — directly from resumes.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="#demo">Watch 2-Minute Demo</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open(getRequestAccessGmailLink(), '_blank')}
            >
              Request Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
