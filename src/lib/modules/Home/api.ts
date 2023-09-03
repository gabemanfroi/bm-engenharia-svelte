import { PUBLIC_STRAPI_DOMAIN, PUBLIC_STRAPI_TOKEN } from '$env/static/public';
import type { CarouselItemResponse, ServicesResponse } from '$lib/modules/Home/types';

export const getCarouselItems = async (): Promise<CarouselItemResponse> => {
	const response = await fetch(
		`${PUBLIC_STRAPI_DOMAIN}/api/bm-engenharia-carousel-items?populate=*`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${PUBLIC_STRAPI_TOKEN}`
			}
		}
	);
	return response.json();
};

export const getServices = async (category: string): Promise<ServicesResponse> => {
	const filters = category !== 'Todos' ? `filters[category][$eq]=${category}` : '';
	const response = await fetch(
		`${PUBLIC_STRAPI_DOMAIN}/api/bm-engenharia-services?populate=*&${filters}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${PUBLIC_STRAPI_TOKEN}`
			}
		}
	);
	return response.json();
};
