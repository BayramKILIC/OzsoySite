/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
    colors: {
     primary: {
       50: '#fff1f2',
      100: '#ffe4e6',
      500: '#FF0018',  // ← Votre rouge principal
      600: '#DC0015',  // ← Version légèrement plus foncée pour hover
      700: '#8E0003',  // ← Votre rouge secondaire
      },
  accent: {
    500: '#FF0018',  // ← Même rouge pour accents
    600: '#8E0003',  // ← Rouge foncé
  }
},
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
