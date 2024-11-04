<script lang="ts">
import { fade } from 'svelte/transition';
import Counter from '$lib/components/counter.svelte';
</script>

<div in:fade>
    <h1 class="text-2xl font-bold font-lexend">Counter</h1>
    <Counter />
</div>
