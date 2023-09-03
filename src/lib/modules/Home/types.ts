interface StrapiImage {
	data: {
		attributes: {
			url: string;
		};
	};
}

export interface IProject {
	attributes: {
		title: string;
		category: string;
		highlight: StrapiImage;
		images: StrapiImage[];
		description: string;
		slug: string;
	};
}

export interface ProjectsResponse {
	data: IProject[];
}

export interface ICarouselItem {
	attributes: {
		title: string;
		background: StrapiImage;
	};
}

export interface CarouselItemResponse {
	data: ICarouselItem[];
}

export interface IService {
	attributes: {
		title: string;
		category: string;
		background: StrapiImage;
	};
}

export interface ServicesResponse {
	data: IService[];
}
