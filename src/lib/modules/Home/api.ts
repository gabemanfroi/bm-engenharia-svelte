import type { CarouselItemResponse, ServicesResponse } from '$lib/modules/Home/types';
import { selectedProjectsCategoryStore, selectedServicesCategoryStore } from '../../../stores';
import { get } from 'svelte/store';
import { PUBLIC_API_DOMAIN } from '$env/static/public';

export const getCarouselItems = (fetchFn: typeof fetch): (() => Promise<CarouselItemResponse>) => {
	return async function() {
		const response = await fetchFn(`${PUBLIC_API_DOMAIN}/api/carousel`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return response.json();
	};
};

export const getServices = (fetchFn: typeof fetch): (() => Promise<ServicesResponse>) => {
	return async function() {
		const category = get(selectedServicesCategoryStore);

		const response = await fetchFn(`${PUBLIC_API_DOMAIN}/api/services?category=${category}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return response.json();
	};
};

export const getProjects = (fetchFn: typeof fetch): (() => Promise<ServicesResponse>) => {
	return async function() {
		const category = get(selectedProjectsCategoryStore);

		const response = await fetchFn(`${PUBLIC_API_DOMAIN}/api/portfolio?category=${category}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return response.json();
	};
};

export const getProjectBySlug = (
	fetchFn: typeof fetch,
	slug: string
): (() => Promise<ServicesResponse>) => {

	return async function() {
		const response = await fetchFn(`${PUBLIC_API_DOMAIN}/api/portfolio/${slug}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return response.json();
	};
};
