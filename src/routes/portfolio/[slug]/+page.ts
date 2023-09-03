import { getProjectBySlug } from '$lib/modules/Home/api';
import type { PageLoad } from '../../../../.svelte-kit/types/src/routes/$types';

export const load: PageLoad = async ({ params, parent, fetch }) => {
	const { queryClient } = await parent();

	await queryClient.prefetchQuery({
		queryKey: [`project-${params.slug}`],
		queryFn: getProjectBySlug(fetch, params.slug)
	});
};
