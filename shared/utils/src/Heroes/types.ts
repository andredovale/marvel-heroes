type Item = {
	resourceURI: string;
	name: string;
};

type Collection = {
	available: number;
	collectionURI: string;
	items: Item[];
	returned: number;
};

export type Character = {
	id: number;
	name: string;
	description: string;
	modified: string;
	resourceURI: string;
	urls: {
		type: string;
		url: string;
	}[];
	thumbnail: {
		path: string;
		extension: string;
	};
	comics: Collection;
	stories: Collection & {
		items: (Item & {
			type: string;
		})[];
	};
	events: Collection;
	series: Collection;
};
