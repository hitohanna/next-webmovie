"use client";
import Image from "next/image";
import React from "react";
import { movieType } from "@/app/page";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const MovieItems = ({ movies }: { movies: movieType[] }) => {
  const router = useRouter();

  const page = useSearchParams().get("page") ?? "1";

  const nextMov = () => {
    router.push(`/?page=${Number(page) + 1}`);
  };
  const prevtMov = () => {
    router.push(`/?page=${Number(page) - 1}`);
  };

  return (
    <div className="max-w-7x">
      <div className="flex w-full justify-between px-8">
        <button
          onClick={prevtMov}
          disabled={Number(page) < 1}
          className="rounded-full bg-text text-background font-extrabold text-2xl p-4"
        >{`<`}</button>
        <button
          onClick={nextMov}
          className="rounded-full bg-text text-background font-extrabold text-2xl p-4"
        >{`>`}</button>
      </div>
      <div className="grid grid-cols-5 gap-8 mx-auto px-8">
        {movies.map((movie, i) => (
          <Image
            key={i}
            className="object-scale-down rounded-md"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="movie"
            width={168}
            height={253}
            quality={50}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default MovieItems;
