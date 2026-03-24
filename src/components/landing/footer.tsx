'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setYear(new Date().getFullYear());
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto py-6 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {year} HireGuard AI. Smarter hiring decisions.
        </p>
        <a
          href="mailto:developer@hireguard.online"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          developer@hireguard.online
        </a>
      </div>
    </footer>
  );
}
