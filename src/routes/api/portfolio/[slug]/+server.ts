import { PUBLIC_STRAPI_DOMAIN } from '$env/static/public';
import { STRAPI_TOKEN } from '$env/static/private';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
	const slug = params.slug;
	const filters = `filters[slug][$eq]=${slug}`;
	const queryParams = `${filters}&populate=*`;

	const response = await fetch(
		`${PUBLIC_STRAPI_DOMAIN}/api/bm-engenharia-projects?${queryParams}`,
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
