<script>
	export let title;
	export let subtitle;
</script>

<section
	class='w-screen max-h-full min-h-full flex flex-col gap-4 sm:p-24 p-4 pb-12 bg-gray-100 drop-shadow-2xl'
>
	<div class='text-center'>
		<h2 class='text-2xl uppercase'>{title}</h2>
		{#if subtitle}<h3 class='uppercase'>{subtitle}</h3>{/if}
	</div>
	<slot />
</section>

<style>
    section {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
        0 3px 3px -2px rgba(0, 0, 0, 0.2),
        0 1px 8px 0 rgba(0, 0, 0, 0.12);
    }
</style>
