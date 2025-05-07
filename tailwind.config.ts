import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/view/components/*.{js,ts,jsx,tsx,mdx}',
    './src/view/sections/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        detail: 'var(--detail)',
        online: 'var(--online)',
      }
    },
  },
}

export default config;
