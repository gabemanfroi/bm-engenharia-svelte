<script lang="ts">
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import CarouselThumbnails from '$lib/modules/Portfolio/components/CarouselThumbnails.svelte';
	import { getBackgroundImageFormattedUrl } from '$lib/modules/Shared/utils/functions';

	let carousel;
	let currentPageIndex = 0;

	const handleClick = ({ detail: index }: { detail: number }) => {
		carousel.goTo(index);
	};

	export let project;
</script>

<div class="h-full w-full gap-2">
	{#if browser}
		<Carousel
			bind:this={carousel}
			autoplay
			on:pageChange={({ detail: currentPage }) => {
				currentPageIndex = currentPage;
			}}
		>
			{#each project.attributes.images.data as image}
				<div
					class="h-full w-full rounded"
					style="background: {getBackgroundImageFormattedUrl(image.attributes.url)}"
				/>
			{/each}
			<CarouselThumbnails {project} slot="dots" on:click={handleClick} {currentPageIndex} />
		</Carousel>
	{/if}
</div>

<style lang="postcss">
	:global(.sc-carousel__carousel-container, .sc-carousel__content-container) {
		height: 100%;
		border-radius: 0.25rem;
	}
	:global(.sc-carousel__pages-container) {
		border-radius: 0.25rem;
	}
</style>
