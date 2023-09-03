<script lang="ts">
	import ServicesFilters from '$lib/modules/Home/components/ServicesFilters.svelte';
	import ServicesGrid from '$lib/modules/Home/components/ServicesGrid.svelte';
	import DefaultSection from '$lib/modules/Shared/components/containers/DefaultSection.svelte';
	import SectionCard from '$lib/modules/Shared/components/containers/SectionCard.svelte';
</script>

<DefaultSection subtitle="Confira Algumas das Áreas em que atuamos" title="Serviços">
	<SectionCard>
		<ServicesFilters />
		<ServicesGrid />
	</SectionCard>
</DefaultSection>
