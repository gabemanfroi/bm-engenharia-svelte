<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let currentPath;

	onMount(() => {
		currentPath = window.location.pathname;
	});

	page.subscribe(({ route: { id } }) => {
		if (id) {
			currentPath = id;
		}
	});

	export let href;
	export let text;
</script>

<li>
	<a
		class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base sm:text-sm font-medium"
		aria-current={currentPath === href ? 'page' : undefined}
		{href}>{text}</a
	>
</li>

<style lang="postcss">
	a[aria-current='page'] {
		background-color: theme(colors.gray.900);
	}

	li {
		list-style-type: none;
	}
</style>
