<script lang="ts">
	import type { IService } from '$lib/modules/Home/types';
	import { PUBLIC_STRAPI_DOMAIN } from '$env/static/public';

	export let service: IService;

	const getServiceBackgroundImage = (service) => {
		return `url('${PUBLIC_STRAPI_DOMAIN}${service.attributes.background.data.attributes.url}') center center / cover`;
	};
</script>

{#if service}
	<div
		style="background: {getServiceBackgroundImage(service)} "
		class="relative min-h-[10rem] rounded service-container"
	>
		<div class="absolute bottom-0 left-0 w-full rounded-b p-2 capitalize title-banner text-white">
			{service.attributes.title}
		</div>
	</div>
{/if}

<style lang="postcss">
	.service-container {
		box-shadow:
			0 3px 4px 0 rgba(0, 0, 0, 0.14),
			0 3px 3px -2px rgba(0, 0, 0, 0.2),
			0 1px 8px 0 rgba(0, 0, 0, 0.12);

		&:hover {
			&:before {
				background: rgba(0, 0, 0, 0.1);
			}
		}

		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.3);
			border-radius: 0.25rem;
			transition: all ease-in-out 0.2s;
		}
	}

	.title-banner {
		background: rgba(0, 0, 0, 0.3);
	}
</style>
