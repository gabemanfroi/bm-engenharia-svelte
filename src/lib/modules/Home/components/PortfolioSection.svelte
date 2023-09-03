<script lang="ts">
	import DefaultSection from '$lib/modules/Shared/components/containers/DefaultSection.svelte';
	import SectionCard from '$lib/modules/Shared/components/containers/SectionCard.svelte';
	import PortfolioFilters from '$lib/modules/Home/components/PortfolioFilters.svelte';
	import PortfolioGrid from '$lib/modules/Home/components/PortfolioGrid.svelte';
</script>

<DefaultSection subtitle="Confira alguns de nossos projetos" title="Portfólio">
	<SectionCard>
		<PortfolioFilters />
		<PortfolioGrid />
	</SectionCard>
</DefaultSection>
