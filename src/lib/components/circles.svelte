<script lang="ts">
	interface Circle {
		x: number;
		y: number;
		radius: number;
		color: string;
	}

	let circles = $state([]) as Circle[];
	let undoneCircles = $state([]) as Circle[];
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let nRadius = $state(20);
	let nColor = $state('#000000');

	function initCanvas(canvas: HTMLCanvasElement) {
		ctx = canvas.getContext('2d')!;
		canvas.width = 500;
		canvas.height = 500;
	}

	function handleClick(event: MouseEvent) {
		//get the position of the click relative to the canvas
		const rect = canvas.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;
		const circle: Circle = {
			x,
			y,
			radius: nRadius,
			color: nColor
		};

		drawCircle(circle);
		circles.push(circle);
	}

	function drawCircle(circle: { x: number; y: number; radius: number; color: string }) {
		ctx.beginPath();
		ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
		ctx.fillStyle = circle.color;
		ctx.fill();
		ctx.closePath();

		return circle;
	}
	function undo() {
		let lastCircle: Circle | undefined = circles.pop();
		if (lastCircle) {
			ctx.clearRect(
				lastCircle.x - lastCircle.radius,
				lastCircle.y - lastCircle.radius,
				lastCircle.radius * 2,
				lastCircle.radius * 2
			);
			undoneCircles.push(lastCircle);
		}
	}

	function redo() {
		let lastCircle: Circle | undefined = undoneCircles.pop();
		if (lastCircle) {
			lastCircle = drawCircle(lastCircle);
			circles.push(lastCircle);
		}
	}

	function clear() {
		circles = [];
		undoneCircles = [];
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
</script>

<div>
	<button class="my-3 rounded-md bg-blue-500 px-3 py-1 text-white hover:bg-blue-700" onclick={undo}
		>Undo</button
	>
	<button class="my-3 rounded-md bg-blue-500 px-3 py-1 text-white hover:bg-blue-700" onclick={redo}
		>Redo</button
	>
	<button class="my-3 rounded-md bg-blue-500 px-3 py-1 text-white hover:bg-blue-700" onclick={clear}
		>Clear Canvas</button
	>
	<div class="mb-3 flex flex-row gap-3">
		<div class="flex flex-col">
			<label for="radius">Circle Radius</label>
			<input type="range" min="1" max="100" bind:value={nRadius} id="radius" />
		</div>
		<div class="flex flex-col">
			<label for="color">Circle Color</label>
			<input
				type="color"
				bind:value={nColor}
				id="color"
				class=" form-control-color m-1 h-10 w-10"
			/>
		</div>
	</div>

	<canvas
		bind:this={canvas}
		onclick={handleClick}
		use:initCanvas
		class="form-control h-full w-full rounded-md"
	>
	</canvas>
</div>

<style>
	canvas {
		border: 1px solid #ccc;
		border-radius: 10px;
		background-color: #f0f0f0;
	}
</style>
