<script lang="ts">
	type Person = {
		firstName: string;
		surName: string;
	};

	let people = $state<Person[]>([
		{ firstName: 'Ian', surName: 'Bevan' },
		{ firstName: 'John', surName: 'Smith' },
		{ firstName: 'Jane', surName: 'Doe' }
	]);

	let selected = $state<Person>();
	let person = $state({ firstName: '', surName: '' });

	let search = $state<string>('');

	const filteredPeople = $derived(
		search ? people.filter((p) => p.surName.toLowerCase().startsWith(search)) : people
	);

	function create() {
		people.push(person);
		clear();
	}

	function update() {
		if (selected) {
			people[people.indexOf(selected)] = { firstName: person.firstName, surName: person.surName };
		}
	}

	function remove() {
		people.splice(people.indexOf(selected!), 1);
		clear();
	}

	$effect(() => {
		if (selected) {
			person = {
				firstName: selected?.firstName ?? '',
				surName: selected?.surName ?? ''
			};
		}
	});

	function clear() {
		person = { firstName: '', surName: '' };
	}
</script>

<div class="flex flex-col rounded-lg bg-gray-300 p-5 shadow-lg">
	<div class="flex flex-row">
		<label for="search" class="mr-2 font-quicksand text-lg font-semibold text-gray-700"
			>Filter by surname:</label
		>
		<input
			type="text"
			bind:value={search}
			class="form-input w-20 rounded-md p-2 font-semibold text-gray-800"
		/>
	</div>
	<div class="items-left mt-5 flex min-w-72 flex-row">
		<div class="flex flex-col">
			<select
				name="selected"
				bind:value={selected}
				size="5"
				class="form-select mr-2 min-w-60 rounded-md p-3 font-semibold text-gray-800"
			>
				{#each filteredPeople as person}
					<option value={person}>{person.surName}, {person.firstName}</option>
				{/each}
			</select>
		</div>

		<div class="flex flex-col">
			<form class="flex flex-col items-end justify-center">
				<div class="my-2 flex flex-row">
					<label for="firstName" class=" mr-2 font-quicksand text-lg font-semibold text-gray-700"
						>Name:
					</label>
					<input
						type="text"
						bind:value={person.firstName}
						id="firstName"
						class="form-input w-20 rounded-md p-2 font-semibold text-gray-800"
					/>
				</div>
				<div class="my-2 flex flex-row">
					<label for="surName" class="mr-2 font-quicksand text-lg font-semibold text-gray-700"
						>Surname:
					</label>
					<input
						type="text"
						bind:value={person.surName}
						id="surName"
						class="form-input w-20 rounded-md p-2 font-semibold text-gray-800"
					/>
				</div>
			</form>
		</div>
	</div>
	<div class="mt-5 flex flex-row gap-2">
		<button
			class="rounded-md bg-green-500 p-2 font-semibold text-white hover:bg-green-600"
			onclick={create}>Create</button
		>
		<button
			class="rounded-md bg-blue-500 p-2 font-semibold text-white hover:bg-blue-600"
			onclick={update}>Update</button
		>
		<button
			class="rounded-md bg-red-500 p-2 font-semibold text-white hover:bg-red-600"
			onclick={remove}>Delete</button
		>
	</div>
</div>
