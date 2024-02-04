import axios from "axios";
import "./SingleMoviePage.css";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import SingleMovieTitle from "../../components/singleMovieComponents/SingleMovieTitle";
import RatingCircle from "../../components/movieCard/RatingCircle";
import TagLine from "../../components/singleMovieComponents/TagLine";
import SingleMovieOverView from "../../components/singleMovieComponents/SingleMovieOverView";
import BookMarkLikeSave from "../../components/singleMovieComponents/BookMarkLikeSave";
import CompanyComponent from "../../components/singleMovieComponents/CompanyComponent";
import ProductionCountrys from "../../components/singleMovieComponents/ProductionCountrys";
import loadingImagePattern from "../../assets/images/glyphicons-picture.webp";
import ScrollToTop from "../../components/ScrollToTop";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import ErrorScreen from "../../components/ErrorScreen";

const apiKey = import.meta.env.VITE_API_KEY2;
export default function SingleMoviePage() {
  const { id } = useParams();

  const { isLoading, data, error } = useQuery(
    ["single-movie", id],
    () => {
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
    {
      cacheTime: 1000, // Set cacheTime to 1 second (1000 milliseconds)
    }
  );

  if (error) {
    console.log(error);
  }
  const roundedRating = Math.round(data?.data.vote_average * 10);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        error ? <ErrorScreen errorName={error} /> :
        <>
          <ScrollToTop />
          <div className="SingleMoviePage">
            <div
              className="SingleMoviePage_backdrop"
              style={{
                backgroundImage: `url(${
                  isLoading ? (
                    <></>
                  ) : (
                    `http://www.themoviedb.org/t/p/w1920_and_h800_bestv2${data?.data.backdrop_path}`
                  )
                })`,
              }}
            >
              <div className="SingleMoviePage_backdrop_overlay" />

              <div className="backdrop_inner">
                <div className="backdrop_inner_poster_container">
                  {isLoading ? (
                    <img
                      loading="eager"
                      src={loadingImagePattern}
                      className="single_poster"
                      alt="single_poster"
                      style={isLoading ? { objectFit: "contain" } : {}}
                    />
                  ) : (
                    <img
                      src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data?.data.poster_path}`}
                      className="single_poster"
                      alt="single_poster"
                    />
                  )}
                </div>

                <div className="backdrop_inner_right_side">
                  {!isLoading && (
                    <SingleMovieTitle
                      title={data?.data.title}
                      date={data?.data.release_date}
                      genre={data?.data.genres}
                      country={data?.data.production_countries}
                      runtime={data?.data.runtime}
                    />
                  )}

                  <div className="single_movie_page_rating_container">
                    {!isLoading && (
                      <>
                        <RatingCircle
                          width={68}
                          height={68}
                          CircleHeight={64}
                          CircleWidth={64}
                          rating={roundedRating}
                        />

                        <BookMarkLikeSave />
                      </>
                    )}
                  </div>

                  {!isLoading && <TagLine tagline={data?.data.tagline} />}

                  {!isLoading && (
                    <SingleMovieOverView overview={data?.data.overview} />
                  )}
                </div>
              </div>
            </div>
            {!isLoading && (
              <>
                <CompanyComponent
                  companyList={data?.data.production_companies}
                />
                <ProductionCountrys
                  countryList={data?.data.production_countries}
                />
              </>
            )}
          </div>
        </>
      )}

     
    </>
  );
}
