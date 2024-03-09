// -*- mode: typescript; -*-
import { defineConfig } from 'vitepress';
import socialLinks from './social';
import appHead from './head';

export default defineConfig({
  title: 'ALYS',
  description: 'Chanteuse Virtuelle Francophone',
  head: appHead,
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern: 'https://labs.phundrak.com/ALYS/alys.phundrak.com/src/branch/main/docs/:path',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'À Propos', link: '/about' },
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
});
