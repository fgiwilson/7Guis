<script lang="ts">
	import { fade } from 'svelte/transition';
	import FlightBooker from '$lib/components/flightBooker.svelte';
</script>

<div in:fade>
	<h1 class="font-lexend text-2xl font-bold">Flight Booker</h1>
	<FlightBooker />
</div>
