<script>
	import { createEventDispatcher } from 'svelte';
	import CarouselThumbnail from '$lib/modules/Portfolio/components/CarouselThumbnail.svelte';

	export let project;
	const dispatch = createEventDispatcher();
	export let currentPageIndex;
</script>

<div class="inline-grid grid-cols-6 gap-3 h-16 w-full px-[30px] mt-4">
	{#each project.attributes.images.data as image, index}
		<CarouselThumbnail
			on:click={() => dispatch('click', index)}
			{image}
			active={index === currentPageIndex}
		/>
	{/each}
</div>
