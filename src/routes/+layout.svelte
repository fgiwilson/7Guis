<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { page } from '$app/stores';
</script>

<div class="lg:w-6xl mx-auto mt-10 flex flex-col">
	<div class="flex border-b-2 border-lime-300">
		<h1 class="font-lexend text-3xl font-bold text-lime-300 ml-5">7 GUIs - Ian Wilson</h1>
	</div>
	<div class="flex flex-col items-start md:flex-row">
		<nav
			class="mt-5 flex md:text-left mx-auto md:mx-5 md:max-w-full min-w-72 flex-col md:justify-between rounded-lg bg-gray-700 p-4 font-semibold text-gray-100 shadow-lg transition-colors duration-300 md:w-1/5"
		>
			<div>
				<h3 class="mb-5 border-b-2 border-gray-500 pb-2 text-lg font-semibold">Navigation</h3>
			</div>
			<div class="flex md:items-start">
				<ul class="flex flex-col gap-5">
					<li>
						<a
							href="/"
							class="rounded-md px-6 py-2 transition-colors duration-300 hover:bg-gray-600 aria-[current=page]:bg-gray-600 aria-[current=page]:text-sky-300"
							aria-current={$page.url.pathname === '/' ? 'page' : undefined}>Home</a
						>
					</li>
					<li>
						<a
							href="/counter"
							class="w-full rounded-md px-6 py-2 transition-colors duration-300 hover:bg-gray-600 aria-[current=page]:bg-gray-600 aria-[current=page]:text-sky-300"
							aria-current={$page.url.pathname === '/counter' ? 'page' : undefined}>Counter</a
						>
					</li>
					<li>
						<a
							href="/tempConverter"
							class="w-full rounded-md px-6 py-2 transition-colors duration-300 hover:bg-gray-600 aria-[current=page]:bg-gray-600 aria-[current=page]:text-sky-300"
							aria-current={$page.url.pathname === '/tempConverter' ? 'page' : undefined}
							>Temp Converter</a
						>
					</li>
					<li>
						<a
							href="/flightBooker"
							class="w-full rounded-md px-6 py-2 transition-colors duration-300 hover:bg-gray-600 aria-[current=page]:bg-gray-600 aria-[current=page]:text-sky-300"
							aria-current={$page.url.pathname === '/flightBooker' ? 'page' : undefined}
							>Flight Booker</a
						>
					</li>
					<li>
						<a
							href="/timer"
							class="w-full rounded-md px-6 py-2 transition-colors duration-300 hover:bg-gray-600 aria-[current=page]:bg-gray-600 aria-[current=page]:text-sky-300"
							aria-current={$page.url.pathname === '/timer' ? 'page' : undefined}>Timer</a
						>
					</li>
					<li>
						<a
							href="/CRUD"
							class="w-full rounded-md px-6 py-2 transition-colors duration-300 hover:bg-gray-600 aria-[current=page]:bg-gray-600 aria-[current=page]:text-sky-300"
							aria-current={$page.url.pathname === '/CRUD' ? 'page' : undefined}>CRUD</a
						>
					</li>
					<li>
						<a
							href="/CircleDrawer"
							class="w-full rounded-md px-6 py-2 transition-colors duration-300 hover:bg-gray-600 aria-[current=page]:bg-gray-600 aria-[current=page]:text-sky-300"
							aria-current={$page.url.pathname === '/CircleDrawer' ? 'page' : undefined}
							>Circle Drawer</a
						>
					</li>
					<li>
						<a
							href="/Cells"
							class="w-full rounded-md px-6 py-2 transition-colors duration-300 hover:bg-gray-600 aria-[current=page]:bg-gray-600 aria-[current=page]:text-sky-300"
							aria-current={$page.url.pathname === '/Cells' ? 'page' : undefined}>Cells</a
						>
					</li>
				</ul>
			</div>
		</nav>
		<div
			class="mx-auto md:m-5 mt-5 flex max-w-full rounded-lg bg-gray-700 p-4 text-gray-100 shadow-lg md:w-4/5"
		>
			{@render children()}
		</div>
	</div>
</div>
