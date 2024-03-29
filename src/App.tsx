import { HashRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Home from "./pages/Home";
import Navbar from "./components/navbar/navbar";
import SingleMoviePage from "./pages/singleMoviePage/SingleMoviePage";
import Footer from "./components/footer/Footer";
import PopularMovies from "./pages/PopularMovies";
import SingleTvPage from "./pages/SingleTvPage";
import Search from "./pages/Search";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/singleMoviePage/:id" element={<SingleMoviePage />} />
          <Route path="/pages/SingleTvPage/:id" element={<SingleTvPage />} />
          <Route path="/pages/PopularMovies/" element={<PopularMovies />} />
          <Route path="/pages/Search/:name" element={<Search />} />
        </Routes>
        <Footer />
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
