<script lang="ts">
	let count = $state(0);
</script>

<div class="items-left mt-5 flex min-w-72 flex-col rounded-lg bg-gray-300 p-5 shadow-lg">
	<p
		class="mb-5 rounded-md bg-gray-400 px-4 py-2 font-quicksand text-lg font-semibold text-gray-600"
	>
		{count}
	</p>
	<button onclick={() => count++} class="rounded-md bg-blue-500 px-4 py-2 text-white">Count</button>
</div>
