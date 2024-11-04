<script lang="ts">
	import { fade } from 'svelte/transition';
	import Counter from '$lib/components/counter.svelte';
</script>

<div in:fade>
	<h1 class="font-lexend text-2xl font-bold">Counter</h1>
	<Counter />
</div>
