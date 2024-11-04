<script lang="ts">
	let { elapsedTime, duration } = $state({ elapsedTime: 0, duration: 0 });
	let intervalId: number;
	let percentComplete = $derived.by(() => {
		if (duration > 0) {
			return (elapsedTime / duration) * 100;
		}
		return 0;
	});
	function resetTimer() {
		clearInterval(intervalId);
		elapsedTime = 0;
		duration = 0;
	}
	$effect(() => {
		// Clear the interval if it exists
		clearInterval(intervalId);

		if (duration > 0 && elapsedTime < duration) {
			intervalId = setInterval(() => {
				if (elapsedTime < duration) {
					elapsedTime++;
				} else {
					clearInterval(intervalId);
				}
			}, 1000);
		}
	});
</script>

<div
	class="items-left justify-left my-5 flex min-w-72 flex-col rounded-lg bg-gray-200 p-5 shadow-lg"
>
	<label for="progress" class="font-quicksand text-lg font-semibold text-gray-700">Progress</label>
	<progress id="progress" value={percentComplete} max="100" class="mb-3 w-full"
		>{percentComplete}%</progress
	>
	<input type="range" bind:value={duration} class="form-range w-full" min="0" max="100" />
	<hr class="my-3" />
	<p class="mx-2 px-2 font-quicksand text-lg font-semibold text-gray-700">
		Duration: {duration} seconds
	</p>
	<p class="mx-2 px-2 font-quicksand text-lg font-semibold text-gray-700">
		Elapsed Time: {elapsedTime} seconds
	</p>
	<button
		onclick={() => resetTimer()}
		class="mt-3 rounded-md bg-blue-500 px-3 py-1 text-white hover:bg-blue-700">Reset Timer</button
	>
</div>

<style>
	progress[value]::-webkit-progress-bar {
		width: 100%;
		height: 10px;
		border-radius: 1rem;
		background-color: #eee;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
		color: darkgray;
	}
	progress[value]::-webkit-progress-value {
		border-radius: 1rem;
		background-color: #3b82f6;
	}
</style>
