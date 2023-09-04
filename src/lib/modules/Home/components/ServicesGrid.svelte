<script lang='ts'>
	import SectionGrid from '$lib/modules/Shared/components/containers/SectionGrid.svelte';
	import type { IService } from '$lib/modules/Home/types';
	import { selectedServicesCategoryStore, servicesStore } from '../../../../stores';
	import { onDestroy } from 'svelte';
	import SectionGridCard from '$lib/modules/Shared/components/SectionGridCard.svelte';

	let services: IService[] = [];
	let category = 'todos';
	selectedServicesCategoryStore.subscribe((value) => {
		category = value;
	});

	const unsubscribe = servicesStore.subscribe((value) => {
		services = value;
	});


	onDestroy(() => {
		unsubscribe();
	});
</script>

<SectionGrid>
	{#each services as service}
		<SectionGridCard
			title={`${category === 'todos' ? `${service.attributes.category} - ` : ''}${service.attributes.title}`}
			backgroundImageUrl={service.attributes.background.data.attributes.url}
		/>
	{/each}
</SectionGrid>
