<script>
	import ServiceButton from '$lib/modules/Home/components/ServiceButton.svelte';

	export let categories;
	export let selectedCategory;
</script>

<div class="flex justify-start items-center gap-4 flex-wrap">
	{#each ['Todos', ...categories] as category}
		<ServiceButton
			{category}
			active={selectedCategory === category}
			on:click={() => {
				selectedCategory = category;
			}}
		/>
	{/each}
</div>
