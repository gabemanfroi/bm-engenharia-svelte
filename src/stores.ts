import { writable } from 'svelte/store';
import type { IService } from '$lib/modules/Home/types';

export const servicesStore = writable<IService[]>([]);

export const carouselItemsStore = writable([]);

export const selectedCategoryStore = writable('todos');
