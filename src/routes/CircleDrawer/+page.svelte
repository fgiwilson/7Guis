<script lang="ts">
    import { fade } from 'svelte/transition'
    import Circles from '$lib/components/circles.svelte';
</script>

<div in:fade>
    <h1 class="text-2xl font-bold font-lexend">Circle Drawer</h1>
    <Circles />
</div>
