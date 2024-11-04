<script lang="ts">
	let {celsius, fahrenheit} = $state({celsius: 0, fahrenheit: 0});

    $effect(()=>
    {
        fahrenheit = Math.round(celsius * 1.8 + 32);
    })

    $effect(()=>
    {
        celsius = Math.round((fahrenheit - 32) / 1.8);
    })
</script>

<div class="items-center mt-5 flex p-5 bg-gray-200 rounded-lg shadow-lg">
    <input type="number" bind:value={celsius} id="celsius" class="font-semibold form-input w-20 mr-2 text-gray-800 rounded-md p-2" step="0.5" />
    <label for="celsius" class="text-lg font-quicksand mr-2 font-semibold text-gray-700">Degrees Celsius </label>
    <p class="text-lg font-quicksand font-semibold mr-2 text-gray-700">=</p>
    <input type="number" bind:value={fahrenheit} id="fahrenheit" class="form-input font-semibold w-20 mr-2 text-gray-800 rounded-md p-2" step="0.5"/>
    <label for="fahrenheit" class="text-lg font-quicksand font-semibold text-gray-700">Degrees Fahrenheit </label>
</div>
