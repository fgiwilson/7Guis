<script lang="ts">
	import { fade } from 'svelte/transition';
	import Circles from '$lib/components/circles.svelte';
</script>

<div in:fade>
	<h1 class="font-lexend text-2xl font-bold">Circle Drawer</h1>
	<Circles />
</div>
