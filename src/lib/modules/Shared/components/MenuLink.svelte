<script lang='ts'>
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
		aria-current={currentPath === href ? 'page' : undefined}
		class=' hover:text-red-700 block rounded-md px-3 py-2 drop-shadow-md sm:text-md font-medium relative before:hidden sm:before:block'
		{href}>{text}</a
	>
</li>

<style lang='postcss'>
    a[aria-current='page'] {
        color: theme('colors.red.700');

        &:before {
            visibility: visible;
            transform: scaleX(1);
            position: absolute;
            content: '';
            width: 100%;
            height: 3px;
            background: theme('colors.red.700');
            bottom: 4px;
            left: 0;
        }
    }

    a {
        &:before {
            position: absolute;
            content: '';
            visibility: hidden;
            height: 3px;
            background: theme('colors.red.700');
            bottom: 4px;
            left: 0;
            transform: scaleX(0);
            transition: all ease-in-out 0.4s;
            width: 100%;
        }

        color: rgb(42, 14, 115);;
    }

    a:hover {
        &:before {
            transform: scaleX(1);
            visibility: visible;
        }

    }

    li {
        list-style-type: none;
    }
</style>
