<script lang='ts'>
	import { page } from '$app/stores';
	import MobileMenu from '$lib/modules/Shared/components/MobileMenu.svelte';
	import DesktopMenu from '$lib/modules/Shared/components/DesktopMenu.svelte';
	import MobileMenuButton from '$lib/modules/Shared/components/MobileMenuButton.svelte';

	let path;
	let active = false;

	page.subscribe((value) => {
		path = value.url.pathname;
	});
</script>

<nav class='bg-white fixed w-screen z-20 shadow-lg'>
	<div class='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
		<div class='relative flex h-16 items-center justify-between'>
			<MobileMenuButton bind:active />
			<a class='justify-self-center'>
				<img alt='logo' class='h-12' src='logo-bm.png' />
			</a>
			<DesktopMenu />
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<MobileMenu {active} />
</nav>
