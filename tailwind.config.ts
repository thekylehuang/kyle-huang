import type { Config } from "tailwindcss";
import animate from 'tailwindcss-animate'

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  		},
  		spacing: {
  			'2px': '2px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
			},
			zIndex: {
				'60': '60',
				'70': '70',
				'80': '80',
				'90': '90',
				'100': '100',
			},
			fontSize: {
				'10xl': '10rem',
				'11xl': '12rem',
			},
			screens: {
				'xs': '30rem',
				'sm': '40rem',
				'md': '48rem',
				'lg': '64rem',
				'xl': '80rem',
				'2xl': '96rem',
			}
  	}
  },
  plugins: [animate],
  darkMode: 'class',
} satisfies Config;
