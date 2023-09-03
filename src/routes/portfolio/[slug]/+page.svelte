<script lang="ts">
	import DefaultSection from '$lib/modules/Shared/components/containers/DefaultSection.svelte';
	import { page } from '$app/stores';
	import { createQuery } from '@tanstack/svelte-query';
	import { getProjectBySlug } from '$lib/modules/Home/api';
	import ProjectDescription from '$lib/modules/Portfolio/components/ProjectDescription.svelte';
	import ProjectGallery from '$lib/modules/Portfolio/components/ProjectGallery.svelte';
	import ProjectSideMenu from '$lib/modules/Portfolio/components/ProjectSideMenu.svelte';
	import SectionCard from '$lib/modules/Shared/components/containers/SectionCard.svelte';

	const projectBySlugQuery = createQuery({
		queryKey: [`project-${$page.params.slug}`],
		queryFn: getProjectBySlug(fetch, $page.params.slug)
	});

	let project;

	projectBySlugQuery.subscribe(({ data }) => {
		project = data.data[0];
	});

	let activeTab = 'gallery';

	const ComponentByTab = {
		details: ProjectDescription,
		gallery: ProjectGallery
	};
</script>

{#if project}
	<main class="h-screen">
		<DefaultSection title={project.attributes.title}>
			<SectionCard class="flex-1 overflow-hidden">
				<div class="p-6 inline-grid flex-1 grid-cols-12 overflow-hidden gap-4 project-container">
					<div class="col-span-10 overflow-scroll h-full">
						<svelte:component this={ComponentByTab[activeTab]} {project} />
					</div>
					<ProjectSideMenu bind:activeTab />
				</div>
			</SectionCard>
		</DefaultSection>
	</main>
{/if}
