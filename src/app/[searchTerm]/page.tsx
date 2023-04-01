import getWikiResults from '@/lib/getWikiResult';
import { Item } from './Items';
// import Item from './components/Item';

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm.replaceAll('%20', ' ');

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`,
    };
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  };
}

const SearchResults = async ({ params: { searchTerm } }: Props) => {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;

  const results: Result[] | undefined = data?.query?.pages;
  const displayTerm = searchTerm.replaceAll('%20', ' ');
  return (
    <>
      <h1 className="my-8 text-center text-3xl">
        Search results for {displayTerm}
      </h1>
      <div className="bg-slate-500 mx-auto max-w-lg py-1 min-h-screen mt-4 rounded-xl">
        {results ? (
          Object.values(results).map((result) => {
            return <Item key={result.pageid} result={result} />;
          })
        ) : (
          <h2 className="p-2 text-xl">{`${displayTerm} Not Found`}</h2>
        )}
      </div>
    </>
  );
};

export default SearchResults;
