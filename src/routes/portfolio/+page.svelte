<script lang="ts">
	import { createQuery, useQueryClient } from '@tanstack/svelte-query';
	import { getProjects } from '$lib/modules/Home/api';
	import { projectsStore, selectedProjectsCategoryStore } from '../../stores';
	import PortfolioSection from '$lib/modules/Home/components/PortfolioSection.svelte';

	const queryClient = useQueryClient();

	let selectedCategory = 'todos';

	selectedProjectsCategoryStore.subscribe((value) => {
		selectedCategory = value;
		queryClient.refetchQueries(['projects']);
	});

	const projectsQuery = createQuery({
		queryKey: ['projects'],
		queryFn: getProjects(fetch)
	});

	projectsQuery.subscribe((response) => {
		projectsStore.set(response.data?.data ?? []);
	});
</script>

<main class="h-screen flex items-center">
	<PortfolioSection />
</main>
