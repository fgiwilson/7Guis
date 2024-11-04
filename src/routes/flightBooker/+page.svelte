<script lang="ts">
    import { fade } from 'svelte/transition'
    import FlightBooker from '$lib/components/flightBooker.svelte'
</script>

<div in:fade>
    <h1 class="text-2xl font-bold font-lexend">Flight Booker</h1>
    <FlightBooker />
</div>
