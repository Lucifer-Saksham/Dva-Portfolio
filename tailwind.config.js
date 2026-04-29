/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        panel: '#0F1014',
        glass: 'rgba(255,255,255,0.06)',
        'glass-strong': 'rgba(255,255,255,0.10)',
        cyan: {
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
        },
        purple: {
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#A855F7',
        },
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        glowCyan: '0 0 0 1px rgba(34,211,238,0.25), 0 0 48px rgba(34,211,238,0.12)',
        glowPurple: '0 0 0 1px rgba(192,132,252,0.25), 0 0 48px rgba(192,132,252,0.12)',
        glass: '0 1px 0 rgba(255,255,255,0.06), 0 24px 64px rgba(0,0,0,0.55)',
      },
      backgroundImage: {
        'radial-fade':
          'radial-gradient(900px circle at var(--x,30%) var(--y,20%), rgba(34,211,238,0.18), transparent 55%), radial-gradient(800px circle at var(--x2,70%) var(--y2,40%), rgba(192,132,252,0.14), transparent 55%)',
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
    },
  },
  plugins: [],
}

