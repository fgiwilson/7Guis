<script lang="ts">
    import { fade } from 'svelte/transition'
    import TempConverter from '$lib/components/tempConverter.svelte';
</script>

<div in:fade>
    <h1 class="text-2xl font-bold font-lexend">Temperature Converter</h1>
    <TempConverter />
</div>
