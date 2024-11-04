<script lang="ts">
    import { fade } from 'svelte/transition'
    import Timer from '$lib/components/timer.svelte';
</script>

<div in:fade>
    <h1 class="text-2xl font-bold font-lexend">Timer</h1>
    <Timer />
</div>
