import type { PageLoad } from '../../.svelte-kit/types/src/routes/$types';
import { getCarouselItems, getProjects, getServices } from '$lib/modules/Home/api';

export const load: PageLoad = async ({ parent, fetch }) => {
	const { queryClient } = await parent();

	await queryClient.prefetchQuery({
		queryKey: ['carouselItems'],
		queryFn: getCarouselItems(fetch)
	});

	await queryClient.prefetchQuery({
		queryKey: ['services'],
		queryFn: getServices(fetch)
	});

	await queryClient.prefetchQuery({
		queryKey: ['portfolio'],
		queryFn: getProjects(fetch)
	});
};
