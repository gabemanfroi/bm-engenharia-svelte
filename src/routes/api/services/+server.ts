import type { RequestHandler } from '@sveltejs/kit';
import { STRAPI_TOKEN } from '$env/static/private';
import { PUBLIC_STRAPI_DOMAIN } from '$env/static/public';

export const GET: RequestHandler = async (event) => {
	const category = event.url.searchParams.get('category') ?? 'todos';

	const filters = category !== 'todos' ? `filters[category][$eq]=${category}` : '';

	const response = await fetch(
		`${PUBLIC_STRAPI_DOMAIN}/api/bm-engenharia-services?populate=*&${filters}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${STRAPI_TOKEN}`
			}
		}
	);
	return new Response(JSON.stringify(await response.json()));
};
