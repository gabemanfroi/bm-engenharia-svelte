<script lang="ts">
	import type { IService } from '$lib/modules/Home/types';
	import ServicesFilters from '$lib/modules/Home/components/ServicesFilters.svelte';
	import ServicesGrid from '$lib/modules/Home/components/ServicesGrid.svelte';
	import { servicesStore } from '../../../../stores';
	import { onDestroy } from 'svelte';

	let services: IService[] = [];
	let categories = [];

	const unsubscribe = servicesStore.subscribe((value) => {
		services = value;
		categories =
			categories.length === 0
				? [...new Set(value.map((service) => service.attributes.category))]
				: categories;
	});

	onDestroy(unsubscribe);

	let selectedCategory = 'Todos';
</script>

<section class="w-screen min-h-[50vh] p-24 bg-gray-100 drop-shadow-2xl">
	<div class="text-center">
		<h2 class="text-2xl uppercase">Serviços</h2>
		<h3 class="uppercase">Confira Algumas das Áreas em que atuamos</h3>
	</div>
	<div class="px-3 bg-white w-full rounded p-4 mt-6 services-container flex flex-col gap-6">
		<ServicesFilters bind:selectedCategory {categories} />
		<ServicesGrid {services} />
	</div>
</section>

<style lang="postcss">
	section,
	.services-container {
		box-shadow:
			0 3px 4px 0 rgba(0, 0, 0, 0.14),
			0 3px 3px -2px rgba(0, 0, 0, 0.2),
			0 1px 8px 0 rgba(0, 0, 0, 0.12);
	}
</style>
