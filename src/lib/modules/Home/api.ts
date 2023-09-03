import type { CarouselItemResponse, ServicesResponse } from '$lib/modules/Home/types';
import { selectedCategoryStore } from '../../../stores';

export const getCarouselItems = (fetchFn: typeof fetch): (() => Promise<CarouselItemResponse>) => {
	return async function () {
		const response = await fetchFn(`api/carousel`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return response.json();
	};
};

export const getServices = (fetchFn: typeof fetch): (() => Promise<ServicesResponse>) => {
	return async function () {
		let category;
		selectedCategoryStore.subscribe((value) => {
			category = value;
		});
		const response = await fetchFn(`api/services?category=${category}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return response.json();
	};
};
