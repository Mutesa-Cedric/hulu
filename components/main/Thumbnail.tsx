import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";

interface ThumbnailProps {
  result: any;
}
const Thumbnail=forwardRef(({ result }: ThumbnailProps,ref)=> {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image layout="responsive" src={`${BASE_URL}${result.backdrop_path || result.poster_path}` ||
        `${BASE_URL}${result.poster_path}`}
        height={1080} width={1920} />
      <div className="p-2">
        <p className="truncate">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out  group-hover:font-bold">{result.title || result.original_name}</h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">{result.media_type && `${result.media_type} .`}{" "}
          {result.release_date || result.first_air_date} . {" "}
        </p>
        <ThumbUpIcon className="h-5 mx-2" />{result.vote_count}
      </div>
    </div>
  )
})

export default Thumbnail