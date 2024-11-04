<script lang="ts">
	let { departureDate, returnDate, tripType } = $state({
		departureDate: new Date().toLocaleDateString(),
		returnDate: new Date().toLocaleDateString(),
		tripType: 'oneWay'
	});

	$effect(() => {
		if (returnDate < departureDate) {
			returnDate = departureDate;
		} else if (departureDate > returnDate) {
			departureDate = returnDate;
		}
	});

	function handleSubmit(e: Event) {
		e.preventDefault();
		if (tripType === 'oneWay') {
			alert(`Booking ${tripType} flight from ${departureDate}`);
		} else {
			alert(`Booking ${tripType} flight from ${departureDate} to ${returnDate}...`);
		}
	}
</script>

<div
	class="items-left my-5 flex min-w-72 flex-col justify-center rounded-lg bg-gray-200 p-5 shadow-lg"
>
	<form class="flex flex-col" onsubmit={handleSubmit}>
		<label for="tripType" class="mr-2 font-quicksand text-lg font-semibold text-gray-700"
			>Trip Type</label
		>
		<select id="tripType" bind:value={tripType} class="min-w-50 mr-2 rounded-md p-2 text-gray-800">
			<option value="oneWay">One Way</option>
			<option value="roundTrip">Round Trip</option>
		</select>

		<label for="departureDate" class="mr-2 mt-5 font-quicksand text-lg font-semibold text-gray-700"
			>Departure Date</label
		>
		<input
			type="date"
			bind:value={departureDate}
			class="min-w-50 mr-2 rounded-md p-2 text-gray-800"
		/>

		{#if tripType === 'roundTrip'}
			<label for="returnDate" class="mr-2 mt-5 font-quicksand text-lg font-semibold text-gray-700"
				>Return Date</label
			>
			<input
				type="date"
				bind:value={returnDate}
				class="min-w-50 mr-2 rounded-md p-2 text-gray-800"
			/>
		{/if}
		<button type="submit" class="mt-5 rounded-md bg-blue-500 p-2 text-gray-50 hover:bg-blue-300"
			>Book</button
		>
	</form>
</div>
