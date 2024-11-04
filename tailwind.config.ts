import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				lexend: ['Lexend', 'sans-serif'],
				quicksand: ['Quicksand', 'sans-serif']
			}
		}
	},

	plugins: [typography, forms]
} as Config;
