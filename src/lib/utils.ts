import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRequestAccessGmailLink() {
  const to = 'developer@hireguard.online';
  const subject = 'Requesting access to HireGuard AI';
  const body = [
    'Hi HireGuard Team,',
    '',
    'I’d like to request access to HireGuard AI.',
    '',
    'Company Name:',
    'Industry:',
    'Hiring volume (approx per month):',
    'Primary roles hired for:',
    'Work email:',
    'Any specific requirements or questions:',
    '',
    'Thanks,',
  ].join('\n');

  const gmailUrl = new URL('https://mail.google.com/mail/');
  gmailUrl.searchParams.set('view', 'cm');
  gmailUrl.searchParams.set('fs', '1');
  gmailUrl.searchParams.set('to', to);
  gmailUrl.searchParams.set('su', subject);
  gmailUrl.searchParams.set('body', body);

  return gmailUrl.toString();
}
