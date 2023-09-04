<script>
	import { PUBLIC_STRAPI_DOMAIN } from '$env/static/public';

	const getCarouselItemImage = (item) => {
		return `url('${PUBLIC_STRAPI_DOMAIN}${item?.attributes.background.data.attributes.url}') center center / cover`;
	};

	export let item;
</script>

<div
	class="h-screen w-full bg-green-600 flex justify-around items-center carousel-item relative"
	style="
		 background: {getCarouselItemImage(item)};"
>
	<p class="z-50 sm:text-4xl text-2xl font-bold text-white ">
		{item.attributes.title}
	</p>
</div>

<style lang="postcss">
	.carousel-item {
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(31, 38, 63, 0.7);
			z-index: 10;
		}
	}
</style>
