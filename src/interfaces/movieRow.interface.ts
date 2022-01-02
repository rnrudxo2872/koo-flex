import { match } from "react-router-dom";
import { IMatchMovie, INowPlaying } from "./moviedata.interface";

export interface IMovieRowProps {
  pageOffset: number;
  data: INowPlaying | undefined;
  OnClickMovieBox: (movieId: string) => void;
  MovieModalMatch: match<IMatchMovie> | null;
}
