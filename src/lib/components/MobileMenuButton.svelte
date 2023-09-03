<script lang="ts">
	import ToggleIcon from '$lib/components/ToggleIcon.svelte';

	export let active;

	const toggleActive = () => {
		active = !active;
	};
</script>

<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
	<button
		aria-controls="mobile-menu"
		aria-expanded="false"
		class={`relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${
			active && 'bg-gray-900'
		}`}
		on:click={toggleActive}
		type="button"
	>
		<ToggleIcon />
	</button>
</div>
