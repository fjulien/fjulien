export interface Article {
	title: string;
	client: string;
	description: string;
	publishDate: string;
	tags: string[];
	img: string;
}

interface Detail {
	title: string;
}

export interface DetailLink extends Detail {
	isNew?: boolean;
	url:string;
}

export interface DetailsType extends Detail {
	contents: Array<string | DetailsType | DetailLink>;
	isOpen?: boolean;
}

export interface RoleType {
	first:string;
	second:string;
}