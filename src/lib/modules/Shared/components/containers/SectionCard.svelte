<div
	class="px-3 bg-white w-full h-full rounded p-4 mt-6 section-card-container flex flex-col gap-6 {$$restProps.class ??
		''} "
>
	<slot />
</div>

<style lang="postcss">
	.section-card-container {
		box-shadow:
			0 3px 4px 0 rgba(0, 0, 0, 0.14),
			0 3px 3px -2px rgba(0, 0, 0, 0.2),
			0 1px 8px 0 rgba(0, 0, 0, 0.12);
	}
</style>
