<script lang="ts">
	import HomeSection from '$lib/modules/Home/components/HeroSection.svelte';
	import ServicesSection from '$lib/modules/Home/components/ServicesSection.svelte';
	import PortfolioSection from '$lib/modules/Home/components/PortfolioSection.svelte';
	import NewsSection from '$lib/modules/Home/components/NewsSection.svelte';
	import { createQuery, useQueryClient } from '@tanstack/svelte-query';
	import { getCarouselItems, getServices } from '$lib/modules/Home/api';
	import { carouselItemsStore, selectedCategoryStore, servicesStore } from '../stores';

	const queryClient = useQueryClient();

	let selectedCategory = 'todos';

	const carouselItemsQuery = createQuery({
		queryKey: ['carouselItems'],
		queryFn: getCarouselItems(fetch)
	});

	carouselItemsQuery.subscribe((response) => {
		carouselItemsStore.set(response.data?.data ?? []);
	});

	selectedCategoryStore.subscribe((value) => {
		selectedCategory = value;
		queryClient.refetchQueries(['services']);
	});

	const servicesQuery = createQuery({
		queryKey: ['services'],
		queryFn: getServices(fetch)
	});

	servicesQuery.subscribe((response) => {
		servicesStore.set(response.data?.data ?? []);
	});
</script>

<HomeSection />
<ServicesSection {servicesStore} />
<PortfolioSection />
<NewsSection />
