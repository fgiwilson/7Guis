<script lang="ts">
	import { fade } from 'svelte/transition';
	import TempConverter from '$lib/components/tempConverter.svelte';
</script>

<div in:fade>
	<h1 class="font-lexend text-2xl font-bold">Temperature Converter</h1>
	<TempConverter />
</div>
