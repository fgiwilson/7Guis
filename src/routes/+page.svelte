<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div in:fade class="prose w-full">
	<h1 class="font-lexend text-2xl font-bold text-gray-50">Home</h1>
	<p class="text-gray-50 prose-p:m-0">
		<span class="text-xl font-semibold">Hello and Welcome</span> to the home page of this simple
		SvelteKit app. This is a simple app that allows you to convert temperatures, set a timer, and
		more, and is my implementation of the
		<a
			class="font-semibold text-sky-500 hover:text-sky-600"
			href="https://eugenkiss.github.io/7guis/" target="_blank">7 GUIs example</a
		>. This project is my personal intro to Svelte 5 and its new runes system.<br>
        <span class="font-semibold text-lime-300">-Ian</span>
	</p>
</div>
