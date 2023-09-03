<script>
	import MobileMenuLink from '$lib/modules/Shared/components/MenuLink.svelte';
</script>

<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
	<div class="hidden sm:ml-6 sm:block">
		<ul class="flex space-x-4">
			<MobileMenuLink href="/" text="Início" />
			<MobileMenuLink href="/portfolio" text="Portfólio" />
			<MobileMenuLink href="/contato" text="Contato" />
			<MobileMenuLink href="/noticias" text="Notícias" />
		</ul>
	</div>
</div>
