/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'leagueSpartan': ['League Spartan', 'sans-serif'],
				'sanchez': ["Sanchez", "serif"]
			}
		},
		colors: {
			'cyan': '#59D3E8',
			'cyan-hover': '#59D3E8',
			'white': '#ffffff',
			transparent: 'transparent',
			'grey-dark': '#344157',
			'grey-dark-hover': '#353535',
			'grey-light': '#BBB'
		}
	},
	plugins: [addDynamicIconSelectors()],
}
