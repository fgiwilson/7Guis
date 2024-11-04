<script lang="ts">
	import { fade } from 'svelte/transition';
	import CRUD from '$lib/components/CRUD.svelte';
</script>

<div in:fade>
	<h1 class="font-lexend text-2xl font-bold">CRUD</h1>
	<CRUD />
</div>
