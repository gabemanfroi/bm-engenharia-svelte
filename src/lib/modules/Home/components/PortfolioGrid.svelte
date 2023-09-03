<script lang="ts">
	import SectionGrid from '$lib/modules/Shared/components/containers/SectionGrid.svelte';
	import type { IProject } from '$lib/modules/Home/types';
	import { projectsStore } from '../../../../stores';
	import { onDestroy } from 'svelte';
	import SectionGridCard from '$lib/modules/Shared/components/SectionGridCard.svelte';

	let projects: IProject[];

	const unsubscribe = projectsStore.subscribe((value) => {
		projects = value;
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<SectionGrid>
	{#each projects as project}
		<SectionGridCard
			title={project.attributes.title}
			backgroundImageUrl={project.attributes.highlight.data.attributes.url}
		/>
	{/each}
</SectionGrid>
