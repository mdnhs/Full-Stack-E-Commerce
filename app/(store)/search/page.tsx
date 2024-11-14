interface SearchPageProps {
	searchParams: {
		query: string;
	};
}

const SearchPage = async ({ searchParams }): Promise<JSX.Element> => {
	const { query } = await searchParams;
	return <div>Search for {query}</div>;
};

export default SearchPage;
