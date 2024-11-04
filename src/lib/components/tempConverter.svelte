<script lang="ts">
	let { celsius, fahrenheit } = $state({ celsius: 0, fahrenheit: 0 });

	$effect(() => {
		fahrenheit = Math.round(celsius * 1.8 + 32);
	});

	$effect(() => {
		celsius = Math.round((fahrenheit - 32) / 1.8);
	});
</script>

<div class="mt-5 flex items-center rounded-lg bg-gray-200 p-5 shadow-lg">
	<input
		type="number"
		bind:value={celsius}
		id="celsius"
		class="form-input mr-2 w-20 rounded-md p-2 font-semibold text-gray-800"
		step="0.5"
	/>
	<label for="celsius" class="mr-2 font-quicksand text-lg font-semibold text-gray-700"
		>Degrees Celsius
	</label>
	<p class="mr-2 font-quicksand text-lg font-semibold text-gray-700">=</p>
	<input
		type="number"
		bind:value={fahrenheit}
		id="fahrenheit"
		class="form-input mr-2 w-20 rounded-md p-2 font-semibold text-gray-800"
		step="0.5"
	/>
	<label for="fahrenheit" class="font-quicksand text-lg font-semibold text-gray-700"
		>Degrees Fahrenheit
	</label>
</div>
