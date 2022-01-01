import { match } from "react-router-dom";
import { IMatchMovie, IMovie } from "./moviedata.interface";

export interface IMovieModalProps {
  MovieModalMatch: match<IMatchMovie> | null;
  OnClickModalOverlay: () => void;
  clickedMovieInfo: "" | undefined | IMovie;
}
