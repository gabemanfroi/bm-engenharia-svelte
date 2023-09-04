<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let category;
	export let active = false;
</script>

<button
	aria-selected={active}
	class=" bg-red-500 py-1 px-3 rounded text-white capitalize sm:flex-initial
	  inline-grid place-items-center"
	on:click={() => {
		dispatch('click');
	}}>{category}</button
>

<style lang="postcss">
	button {
		box-shadow:
			0 3px 4px 0 rgba(0, 0, 0, 0.14),
			0 3px 3px -2px rgba(0, 0, 0, 0.2),
			0 1px 8px 0 rgba(0, 0, 0, 0.12);
	}
	button[aria-selected='true'] {
		background: theme(colors.blue.600);
	}
</style>
