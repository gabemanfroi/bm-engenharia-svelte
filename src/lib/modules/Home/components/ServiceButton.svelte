<script>
	import { createEventDispatcher } from 'svelte';
	import { useQueryClient } from '@tanstack/svelte-query';

	const queryClient = useQueryClient();

	const dispatch = createEventDispatcher();

	export let category;
	export let active = false;
</script>

{#if category}
	<button
		class="bg-red-500 py-1 px-3 rounded text-white"
		on:click={() => {
			dispatch('click');
			queryClient.refetchQueries(['services']);
		}}>{category}</button
	>
{/if}

<style lang="postcss">
	button {
		box-shadow:
			0 3px 4px 0 rgba(0, 0, 0, 0.14),
			0 3px 3px -2px rgba(0, 0, 0, 0.2),
			0 1px 8px 0 rgba(0, 0, 0, 0.12);
	}
</style>
