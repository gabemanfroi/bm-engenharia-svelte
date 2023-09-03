import { getProjects } from '$lib/modules/Home/api';
import type { PageLoad } from '../../../.svelte-kit/types/src/routes/$types';

export const load: PageLoad = async ({ parent, fetch }) => {
	const { queryClient } = await parent();

	await queryClient.prefetchQuery({
		queryKey: ['portfolio'],
		queryFn: getProjects(fetch)
	});
};
