export interface Project {
	title: string;
	client: string;
	description: string;
	publishDate: string;
	tags: string[];
	img: string;
}

export interface DetailsType {
	title:string;
	contents: Array<string | DetailsType>;
}