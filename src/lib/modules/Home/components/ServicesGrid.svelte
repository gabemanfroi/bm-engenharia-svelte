<script lang="ts">
	import SectionGrid from '$lib/modules/Shared/components/containers/SectionGrid.svelte';
	import type { IService } from '$lib/modules/Home/types';
	import { servicesStore } from '../../../../stores';
	import { onDestroy } from 'svelte';
	import SectionGridCard from '$lib/modules/Shared/components/SectionGridCard.svelte';

	let services: IService[] = [];
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
			title={service.attributes.title}
			backgroundImageUrl={service.attributes.background.data.attributes.url}
		/>
	{/each}
</SectionGrid>
