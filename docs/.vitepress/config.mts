// -*- mode: typescript; -*-
import { defineConfig } from 'vitepress';
import socialLinks from './social';
import appHead from './head';

export default defineConfig({
  title: 'ALYS',
  description: 'Chanteuse Virtuelle Francophone',
  head: appHead,
  cleanUrls: true,
  locales: {
    root: {
      label: 'Français',
      lang: 'fr',
      themeConfig: {
        editLink: {
          pattern: 'https://labs.phundrak.com/ALYS/alys.phundrak.com/src/branch/main/docs/:path',
        },
        nav: [
          { text: 'Accueil', link: '/' },
          { text: 'À Propos', link: '/about' },
          { text: 'English', link: '/en/' },
        ],
        sidebar: [
          {
            text: 'Pages principales',
            items: [
              { text: 'Téléchargements', link: '/download' },
              { text: 'FAQ', link: '/faq' },
              { text: 'Communauté', link: '/community' },
              { text: 'À propos', link: '/about' },
            ],
          },
        ],
        socialLinks: socialLinks,
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        editLink: {
          pattern: 'https://labs.phundrak.com/ALYS/alys.phundrak.com/src/branch/main/docs/:path',
        },
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'About', link: '/en/about' },
          { text: 'Français', link: '/' },
        ],
        sidebar: [
          {
            text: 'Main Pages',
            items: [
              { text: 'Download', link: '/en/download' },
              { text: 'FAQ', link: '/en/faq' },
              { text: 'Community', link: '/en/community' },
              { text: 'About', link: '/en/about' },
            ],
          },
        ],
        socialLinks: socialLinks,
      },
    },
  },
});
