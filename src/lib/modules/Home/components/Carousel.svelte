<script lang='ts'>
	import { browser } from '$app/environment';
	import type { ICarouselItem } from '$lib/modules/Home/types';
	import CarouselItem from '$lib/modules/Home/components/CarouselItem.svelte';
	import Carousel from 'svelte-carousel';
	import { AngleLeftSolid, AngleRightSolid } from 'flowbite-svelte-icons';
	import CarouselButton from '$lib/modules/Home/components/CarouselButton.svelte';
	import { carouselItemsStore } from '../../../../stores';

	let isLoading = false;
	let error = null;
	let carouselItems: ICarouselItem[] = [];
	let carousel;

	const unsubscribe = carouselItemsStore.subscribe((value) => {
		carouselItems = value;
	});

	const handleNext = () => {
		carousel.goToNext();
	};

	const handlePrev = () => {
		carousel.goToPrev();
	};
</script>

{#if carouselItems[0]}
	{#if browser}
		<CarouselButton class='ml-6 left-0' on:click={handlePrev}>
			<AngleLeftSolid size='xl' />
		</CarouselButton>
		<Carousel dots={false} arrows={false} particlesToShow={1} bind:this={carousel} autoplay>
			<CarouselItem item={carouselItems[0]} />
			<CarouselItem item={carouselItems[0]} />
			<CarouselItem item={carouselItems[0]} />
		</Carousel>
		<CarouselButton class='mr-6 right-0' on:click={handleNext}>
			<AngleRightSolid size='xl' />
		</CarouselButton>
	{/if}
{/if}
