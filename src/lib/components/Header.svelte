<script lang="ts">
	import { page } from '$app/stores';
	import MobileMenu from '$lib/components/MobileMenu.svelte';
	import DesktopMenu from '$lib/components/DesktopMenu.svelte';
	import MobileMenuButton from '$lib/components/MobileMenuButton.svelte';

	let path;
	let active = false;

	page.subscribe((value) => {
		path = value.url.pathname;
	});
</script>

<nav class="dark:bg-gray-800 absolute w-screen z-20">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<MobileMenuButton bind:active />
			<DesktopMenu />
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<MobileMenu {active} />
</nav>
