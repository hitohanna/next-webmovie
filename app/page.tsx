// "use client";
import MovieItems from "@/components/MovieItems";
import { getMoviesLists } from "@/utils";

export type movieType = {
  poster_path: string;
};

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams["page"] ?? "1";

  console.log(page);

  const getMovies = async (hal: number) => {
    const movieLists = await getMoviesLists(hal).then((res) => {
      return res.results as movieType[];
    });

    return movieLists;
  };

  const movieLists = await getMovies(Number(page));

  return (
    <main className="mx-auto max-w-7xl">
      <div className="flex flex-col items-center w-full mt-8">
        <MovieItems movies={...movieLists} />
      </div>
    </main>
  );
}
