<script lang="ts">
	import { fade } from 'svelte/transition';
	import CellsSheet from '$lib/components/CellsSheet.svelte';
</script>

<div in:fade>
	<h1 class="font-lexend text-2xl font-bold">Cells</h1>
	<CellsSheet />
</div>
