<script>
	import ServiceButton from '$lib/modules/Shared/components/SectionFilterButton.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let categories = [];
	export let selectedCategory = 'todos';
</script>

<div class="flex justify-start items-center gap-4 flex-wrap">
	{#each ['todos', ...categories] as category}
		<ServiceButton
			{category}
			active={selectedCategory === category}
			on:click={() => {
				dispatch('click', category);
			}}
		/>
	{/each}
</div>
