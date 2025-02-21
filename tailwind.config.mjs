/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#473EC3',
				secundary: '#9C9DEC',
				accent: '',
				dark: ''
			}
		},
	},
	plugins: [],
}
