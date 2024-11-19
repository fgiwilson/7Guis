<script lang="ts">
	import { parse } from "svelte/compiler";

	let rows = 10;
	let cols = 26;

	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	const data = $state([
		[{ value: 'Item' }, { value: 'Price' }, { value: 'Amount' }, { value: 'Total' }],
		[{ value: 'Apple' }, { value: '1' }, { value: '1' }, { value: '=MULTIPLY(B2,C2)' }],
		[{ value: 'Banana' }, { value: '2' }, { value: '3' }, { value: '=MULTIPLY(B3,C3)' }],
		[{ value: 'Orange' }, { value: '3' }, { value: '4' }, { value: '=MULTIPLY(B4,C4)' }],
		[{ value: 'Total' }, { value: '' }, { value: '' }, { value: '=SUM(D2,D4)' }]
	]);

	let selectedCell = $state();
	let editingCell = $state();

	function parseValue(value: string): string | number {
		if (value.startsWith('=')) {
			const { operation, cells } = parseFormula(value);

			const values = cells.map(({ row, col }) => {
				const cell = data[row]?.[col];
				if (cell) {
					return +parseValue(cell.value);
				}
				return +value;
			});
			return values.reduce(
				(total, val) => {
					if (operation === 'SUM') {
						return total + val;
					} else if (operation === 'MULTIPLY') {
						return total * val;
					}
					return total;
				},
				operation === 'MULTIPLY' ? 1 : 0
			);
		}
		return value;
	}

	function parseFormula(value: string) {
		//=MULTIPLY(A1,B2)
		//a "=MULTIPLY"
		//b "A1,B2)"
		const [a, b] = value.split('(');
		//operation=MULTIPLY
		const operation = a.split('=')[1];
		let cells: string[] = [];
		//cells=["A1", "B2)"]
		if (b.includes(':')) {
			const [start, end] = b.replace(')', '').split(':');
            const startCell = cellNameToIndex(start);
            const endCell = cellNameToIndex(end);
            for (let i = startCell.row; i <= endCell.row; i++) {
                for (let j = startCell.col; j <= endCell.col; j++) {
                    cells.push(`${letters[j]}${i + 1}`);
                }
            }
		} else {
			cells = b.replace(')', '').split(',');
		}

		return { operation, cells: cells.map(cellNameToIndex) };
	}

	function cellNameToIndex(value: string) {
		const [col, ...row] = value.split('');
		return { row: +row.join('') - 1, col: letters.indexOf(col) };
	}
	function update(e: Event) {
		const { value, parentElement } = e.target as HTMLInputElement;
		const { row, col } = cellNameToIndex(parentElement!.dataset.cell!);

		if (data[row]) {
			if (data[row][col]) {
				data[row][col].value = value;
			} else {
				data[row][col] = { value };
			}
		} else {
			data[row] = [];
			data[row][col] = { value };
		}
	}
</script>

<div>
	<table class="rounded-md border border-gray-300">
		<thead class="rounded border">
			<tr class="rounded">
				<th class="bg-gray-500"></th>
				{#each Array(cols) as _, i}
					<th class="w-10 border bg-gray-500 p-1">{letters[i]}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each Array(rows) as _, i}
				<tr>
					<th class="h-5 border bg-gray-500 p-1">{i + 1}</th>
					{#each Array(cols) as _, j}
						{@const cell = `${letters[j]}${i + 1}`}
						{@const value = data[i]?.[j]?.value}
						{@const parsedValue = value ? parseValue(value) : ''}
						{@const selected = selectedCell === cell}
						{@const editing = editingCell === cell}
						<td
							class:selected
							class="border p-1 text-left"
							data-cell={cell}
							onclick={() => {
								if (selected) {
									return;
								}
								selectedCell = cell;
							}}
							ondblclick={() => {
								editingCell = cell;
							}}
						>
							{#if editing}
								<!-- svelte-ignore a11y_autofocus -->
								<input type="text" {value} oninput={update} autofocus />
							{:else}
								<span>{parsedValue}</span>
							{/if}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	table {
		border-collapse: collapse;
		border-spacing: 0;
		overflow: hidden;
	}
	td {
		&.selected {
			background: rgb(31, 41, 55);
			outline: 1px solid #888;
		}
	}

	input {
		width: 100%;
		height: 100%;
		border: none;
		padding: 0px;
		background: transparent;
		text-align: right;
		color: black;
	}
</style>
