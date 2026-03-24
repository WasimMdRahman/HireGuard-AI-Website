'use client';

import { Button } from '@/components/ui/button';
import { getRequestAccessGmailLink } from '@/lib/utils';

export default function FinalCta() {
  return (
    <section id="request-access" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
            Interested in a private demo?
          </h2>
          <p className="text-lg text-muted-foreground">
            Get access to HireGuard AI and start making more confident hiring decisions.
          </p>
          <Button
            size="lg"
            onClick={() => window.open(getRequestAccessGmailLink(), '_blank')}
          >
            Request Access
          </Button>
        </div>
      </div>
    </section>
  );
}
