<script lang="ts">
    import { fade } from 'svelte/transition'
    import CRUD from '$lib/components/CRUD.svelte';
</script>

<div in:fade>
    <h1 class="text-2xl font-bold font-lexend">CRUD</h1>
    <CRUD />
</div>
