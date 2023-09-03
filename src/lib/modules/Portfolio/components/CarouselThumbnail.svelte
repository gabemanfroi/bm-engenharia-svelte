<script lang="ts">
	import { getBackgroundImageFormattedUrl } from '$lib/modules/Shared/utils/functions';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	const handleClick = () => {
		dispatch('click');
	};
	export let image;
	export let active = false;
</script>

<div
	aria-selected={active}
	class="carousel-thumbnail rounded shadow-2xl"
	style="background: {getBackgroundImageFormattedUrl(image.attributes.formats.thumbnail.url)}"
	on:click={handleClick}
/>

<style lang="postcss">
	.carousel-thumbnail {
		position: relative;
		&:hover {
			cursor: pointer;

			&:before {
				background: transparent;
			}
		}

		&:before {
			border-radius: 0.25rem;
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.4);
			transition: all ease-in-out 0.2s;
		}
	}

	.carousel-thumbnail[aria-selected='true'] {
		&:before {
			background: transparent;
		}
	}
</style>
