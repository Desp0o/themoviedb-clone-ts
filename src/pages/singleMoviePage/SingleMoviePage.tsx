import axios from "axios";
import "./SingleMoviePage.css";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import SingleMovieTitle from "../../components/singleMovieComponents/SingleMovieTitle";
import LoadingComponent from "../../components/loadingComponent/LoadingComponent";
import RatingCircle from "../../components/movieCard/RatingCircle";
import TagLine from "../../components/singleMovieComponents/TagLine";
import SingleMovieOverView from "../../components/singleMovieComponents/SingleMovieOverView";
import BookMarkLikeSave from "../../components/singleMovieComponents/BookMarkLikeSave";
import CompanyComponent from "../../components/singleMovieComponents/CompanyComponent";
import ProductionCountrys from "../../components/singleMovieComponents/ProductionCountrys";

const apiKey = import.meta.env.VITE_API_KEY2;
export default function SingleMoviePage() {
  const { id } = useParams();
  

  const { isLoading, data } = useQuery("single-movie", () => {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          accept: "application/json",
        },
      }
    );
  },
  
);

  const roundedRating = Math.round(data?.data.vote_average * 10);

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div className="SingleMoviePage">
          <div
            className="SingleMoviePage_backdrop"
            style={{
              backgroundImage: `url(${`http://www.themoviedb.org/t/p/w1920_and_h800_bestv2${data?.data.backdrop_path}`})`,
            }}
          >
            <div className="SingleMoviePage_backdrop_overlay" />

            <div className="backdrop_inner">

              <div className="backdrop_inner_poster_container">
                <img
                  src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data?.data.poster_path}`}
                  className="single_poster"
                  alt="single_poster"
                  style={{backgroundImage : `${ProductionCountrys}`}}
                />
              </div>
              

              <div className="backdrop_inner_right_side">
                <SingleMovieTitle
                  title={data?.data.title}
                  date={data?.data.release_date}
                  genre={data?.data.genres}
                  country={data?.data.production_countries}
                  runtime={data?.data.runtime}
                />

                <div className="single_movie_page_rating_container">
                  <RatingCircle
                    width={68}
                    height={68}
                    CircleHeight={64}
                    CircleWidth={64}
                    rating={roundedRating}
                  />

                  <BookMarkLikeSave />
                </div>

                <TagLine tagline={data?.data.tagline} />

                <SingleMovieOverView overview={data?.data.overview} />
              </div>
            </div>
          </div>
          <CompanyComponent companyList={data?.data.production_companies} />
          <ProductionCountrys countryList={data?.data.production_countries} />
        </div>
      )}
    </>
  );
}
