import type { RequestHandler } from '@sveltejs/kit';
import { PUBLIC_STRAPI_DOMAIN } from '$env/static/public';
import { STRAPI_TOKEN } from '$env/static/private';

export const GET: RequestHandler = async () => {
	const response = await fetch(
		`${PUBLIC_STRAPI_DOMAIN}/api/bm-engenharia-carousel-items?populate=*`,
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
