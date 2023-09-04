<script lang='ts'>
	import MobileMenuLink from '$lib/modules/Shared/components/MenuLink.svelte';

	export let active: boolean;
</script>

{#if active}
	<div class='sm:hidden text-right' id='mobile-menu'>
		<div class='space-y-1 px-2 pb-3 pt-2'>
			<MobileMenuLink href='/' text='Início' />
			<MobileMenuLink href='/portfolio' text='Portfólio' />
		</div>
	</div>
{/if}
