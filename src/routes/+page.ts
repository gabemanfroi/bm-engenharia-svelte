import type { PageLoad } from '../../.svelte-kit/types/src/routes/$types';
import { getCarouselItems } from '$lib/modules/Home/api';

export const load: PageLoad = async ({ parent, fetch }) => {
	const { queryClient } = await parent();

	await queryClient.prefetchQuery({
		queryKey: ['carouselItems'],
		queryFn: getCarouselItems(fetch)
	});
};
