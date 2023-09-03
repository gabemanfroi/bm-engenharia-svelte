<script lang="ts">
	import SectionGrid from '$lib/modules/Shared/components/containers/SectionGrid.svelte';
	import type { IProject } from '$lib/modules/Home/types';
	import { projectsStore } from '../../../../stores';
	import { onDestroy } from 'svelte';
	import SectionGridCard from '$lib/modules/Shared/components/SectionGridCard.svelte';
	import { goto } from '$app/navigation';

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
			clickable
			title={project.attributes.title}
			backgroundImageUrl={project.attributes.highlight.data.attributes.url}
			on:click={() => {
				console.log('clicked');
				goto(`/portfolio/${project.attributes.slug}`);
			}}
		/>
	{/each}
</SectionGrid>
