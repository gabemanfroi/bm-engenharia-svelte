<script>
	import ServiceButton from '$lib/modules/Home/components/ServiceButton.svelte';
	import { selectedCategoryStore } from '../../../../stores';

	export let categories;
	export let selectedCategory;

	const handleClick = (category) => {
		selectedCategoryStore.set(category);
	};
</script>

<div class="flex justify-start items-center gap-4 flex-wrap">
	{#each ['todos', ...categories] as category}
		<ServiceButton
			{category}
			active={selectedCategory === category}
			on:click={() => {
				handleClick(category);
			}}
		/>
	{/each}
</div>
