import { writable } from 'svelte/store';
import type { IProject, IService } from '$lib/modules/Home/types';

export const servicesStore = writable<IService[]>([]);

export const carouselItemsStore = writable([]);

export const selectedServicesCategoryStore = writable('todos');

export const projectsStore = writable<IProject[]>([]);

export const selectedProjectsCategoryStore = writable('todos');
