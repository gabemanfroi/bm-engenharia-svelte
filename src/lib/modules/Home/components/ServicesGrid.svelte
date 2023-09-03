<script>
	import Service from '$lib/modules/Home/components/Service.svelte';

	export let services = [];
</script>

<div class="inline-grid grid-cols-3 gap-4">
	{#each services as service}
		<Service {service} />
	{/each}
</div>
