<script>
	export let activeTab;
</script>

<aside class="max-h-full min-h-full col-span-2 flex flex-col menu-container rounded">
	<div class="flex flex-col">
		<button
			aria-selected={activeTab === 'details'}
			class="text-start py-2 px-4 text-sm rounded-t"
			on:click={() => {
				activeTab = 'details';
			}}
		>
			Detalhes
		</button>
		<button
			aria-selected={activeTab === 'gallery'}
			class="text-start py-2 px-4 text-sm"
			on:click={() => {
				activeTab = 'gallery';
			}}
		>
			Galeria
		</button>
	</div>
</aside>

<style lang="postcss">
	.menu-container {
		box-shadow:
			0 3px 4px 0 rgba(0, 0, 0, 0.14),
			0 3px 3px -2px rgba(0, 0, 0, 0.2),
			0 1px 8px 0 rgba(0, 0, 0, 0.12);
	}

	button[aria-selected='true'] {
		--tw-bg-opacity: 1;
		background-color: rgb(23 37 84 / var(--tw-bg-opacity));
		color: theme(colors.white);
	}

	button[aria-selected='true']:hover {
		--tw-bg-opacity: 1;
		background-color: rgb(23 37 84 / var(--tw-bg-opacity));
		color: theme(colors.white);
	}

	button:hover {
		--tw-bg-opacity: 1;
		background-color: rgb(23 37 84 / var(--tw-bg-opacity));
		color: theme(colors.white);
	}

	button {
		transition:
			background-color,
			ease-in-out 0.3s;
	}
</style>
