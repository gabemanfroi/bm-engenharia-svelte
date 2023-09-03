import { PUBLIC_STRAPI_DOMAIN } from '$env/static/public';

export const getBackgroundImageFormattedUrl = (imageUrl: string) => {
	return `url('${PUBLIC_STRAPI_DOMAIN}${imageUrl}') center center / cover`;
};
