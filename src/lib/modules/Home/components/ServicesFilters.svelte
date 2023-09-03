<script lang="ts">
	import { selectedServicesCategoryStore, servicesStore } from '../../../../stores';
	import { onDestroy } from 'svelte';
	import SectionFilters from '$lib/modules/Shared/components/SectionFilters.svelte';

	let categories = [];
	let selectedCategory = 'todos';
	const handleClick = (category) => {
		selectedServicesCategoryStore.set(category);
		selectedCategory = category;
	};

	const unsubscribe = servicesStore.subscribe((value) => {
		categories =
			categories.length === 0
				? [...new Set(value.map((service) => service.attributes.category))]
				: categories;
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<SectionFilters {categories} on:click={(event) => handleClick(event.detail)} {selectedCategory} />
