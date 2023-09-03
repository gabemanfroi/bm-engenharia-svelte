<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Device from 'svelte-device-info';

	const dispatch = createEventDispatcher();
	const onClick = () => {
		dispatch('click');
	};
</script>

{#if !Device.isMobile}
	<button
		class={`text-white ml-6 absolute z-10 top-1/2 translate-y-[-50%] ${$$restProps.class ?? ''}`}
		on:click={onClick}
		type="button"
	>
		<slot />
	</button>
{/if}
