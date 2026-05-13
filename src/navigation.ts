import {createNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  localePrefix: 'as-needed',
  localeDetection: false // Disable automatic detection to avoid confusion during testing
});
 
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);

export const locales = routing.locales;
