import type { FC } from 'react';

interface SearchParams {
	searchParams: {
		query: string;
	};
}

const SearchPage: FC<SearchParams> = async ({ searchParams }): Promise<JSX.Element> => {
	const { query } = await searchParams;
	return <div>Search for {query}</div>;
};

export default SearchPage;
