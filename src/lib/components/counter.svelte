<script lang="ts">
    let count = $state(0);
</script>
<div class="flex flex-col items-left mt-5 p-5 bg-gray-300 rounded-lg shadow-lg min-w-72">
    <p class="text-lg font-quicksand mb-5 px-4 py-2 rounded-md bg-gray-400 text-gray-600 font-semibold">{count}</p>
    <button onclick={() => count++} class="bg-blue-500 text-white px-4 py-2 rounded-md">Count</button>
</div>