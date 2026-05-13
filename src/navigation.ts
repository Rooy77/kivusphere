import {createNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  localePrefix: 'as-needed',
  localeDetection: false,
  pathnames: {
    '/': '/',
    '/about': {
      fr: '/a-propos',
      en: '/about'
    },
    '/services': {
      fr: '/nos-services',
      en: '/services'
    },
    '/presse': {
      fr: '/presse',
      en: '/press'
    },
    '/blog': {
      fr: '/blog',
      en: '/blog'
    },
    '/gallery': {
      fr: '/galerie',
      en: '/gallery'
    },
    '/contact': {
      fr: '/contact',
      en: '/contact'
    },
    '/projects': {
      fr: '/projets',
      en: '/projects'
    },
    '/events': {
      fr: '/evenements',
      en: '/events'
    },
    '/portfolio': {
      fr: '/realisations',
      en: '/portfolio'
    }
  }
});
 
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);

export const locales = routing.locales;
